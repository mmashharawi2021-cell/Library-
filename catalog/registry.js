(function(){
  const manifest={
    core:{id:"core",label:"Core",file:"catalog/packs/core.js",global:"LibraryPackCore",style:null},
    jitter:{id:"jitter",label:"Jitter",file:"catalog/packs/jitter.js",global:"LibraryPackJitter",style:"styles/jitter.css"},
    foundations:{id:"foundations",label:"Foundations",file:"catalog/packs/foundations.js",global:"LibraryPackFoundations",style:"styles/dev.css"},
    motion:{id:"motion",label:"Motion",file:"catalog/packs/motion.js",global:"LibraryPackMotion",style:"styles/dev.css"},
    origin:{id:"origin",label:"Origin",file:"catalog/packs/origin.js",global:"LibraryPackOrigin",style:"styles/dev.css"}
  };
  const index=[...(globalThis.LibrarySearchIndex||globalThis.LibraryManifestIndex||[])];
  const indexById=new Map(index.map(x=>[x.id,x]));
  let metadataReady=Array.isArray(globalThis.LibrarySearchIndex)&&globalThis.LibrarySearchIndex.length>0;
  let metadataLoading=null;
  const loadedItems=[];
  const byId=new Map();
  const loadedPacks=new Set();
  const loading=new Map();
  const runtimePacks=new Map();

  function registerItems(items,packId){
    for(const item of items||[]){
      if(byId.has(item.id))continue;
      item.__pack=packId;
      byId.set(item.id,item);
      loadedItems.push(item);
    }
  }
  function registerExisting(packId){
    const meta=manifest[packId],items=meta?globalThis[meta.global]:null;
    if(!Array.isArray(items))return false;
    registerItems(items,packId);
    loadedPacks.add(packId);
    return true;
  }
  function injectScript(src){
    return new Promise((resolve,reject)=>{
      const existing=document.querySelector('script[data-library-pack="'+src+'"]');
      if(existing){existing.addEventListener('load',resolve,{once:true});existing.addEventListener('error',reject,{once:true});return}
      const script=document.createElement("script");
      script.src=src;script.async=true;script.dataset.libraryPack=src;
      script.onload=resolve;script.onerror=()=>reject(new Error("Failed to load "+src));
      document.head.appendChild(script);
    });
  }
  const styleLoading=new Map();
  function ensureStyle(href){
    if(!href)return Promise.resolve();
    if(styleLoading.has(href))return styleLoading.get(href);
    const existing=document.querySelector('link[data-library-style="'+href+'"]');
    if(existing){const p=Promise.resolve(existing);styleLoading.set(href,p);return p}
    const task=new Promise((resolve,reject)=>{
      const link=document.createElement("link");link.rel="stylesheet";link.href=href;link.dataset.libraryStyle=href;
      link.onload=()=>resolve(link);link.onerror=()=>{styleLoading.delete(href);reject(new Error("Failed to load "+href))};
      document.head.appendChild(link);
    });
    styleLoading.set(href,task);return task;
  }
  function injectMetadataScript(){
    return new Promise((resolve,reject)=>{
      if(globalThis.LibrarySearchIndex?.length){resolve();return}
      const existing=document.querySelector('script[data-library-metadata]');
      if(existing){existing.addEventListener('load',resolve,{once:true});existing.addEventListener('error',reject,{once:true});return}
      const script=document.createElement("script");
      script.src="catalog/search-index.js";script.async=true;script.dataset.libraryMetadata="1";
      script.onload=resolve;script.onerror=()=>reject(new Error("Failed to load catalog metadata"));
      document.head.appendChild(script);
    });
  }
  function hydrateMetadata(full){
    if(!Array.isArray(full)||!full.length)return index;
    const runtime=index.filter(x=>!manifest[x.pack]);
    index.splice(0,index.length,...full);
    for(const meta of runtime)if(!index.some(x=>x.id===meta.id))index.push(meta);
    indexById.clear();for(const meta of index)indexById.set(meta.id,meta);
    metadataReady=true;
    dispatchEvent(new CustomEvent("library:metadata-loaded",{detail:{count:index.length}}));
    return index;
  }
  function ensureMetadata(){
    if(metadataReady)return Promise.resolve(index);
    if(metadataLoading)return metadataLoading;
    metadataLoading=injectMetadataScript()
      .then(()=>hydrateMetadata(globalThis.LibrarySearchIndex||[]))
      .finally(()=>{metadataLoading=null});
    return metadataLoading;
  }
  async function loadPack(packId){
    if(packId==="all"){await Promise.all(Object.keys(manifest).map(loadPack));return loadedItems}
    if(runtimePacks.has(packId))return runtimePacks.get(packId);
    if(loadedPacks.has(packId))return loadedItems.filter(x=>packOf(x)===packId);
    if(registerExisting(packId)){await ensureStyle(meta?.style);return loadedItems.filter(x=>packOf(x)===packId);}
    if(loading.has(packId))return loading.get(packId);
    const meta=manifest[packId];if(!meta)throw new Error("Unknown pack: "+packId);
    const task=Promise.all([injectScript(meta.file),ensureStyle(meta.style)]).then(()=>{
      if(!registerExisting(packId))throw new Error("Pack loaded without payload: "+packId);
      loading.delete(packId);
      dispatchEvent(new CustomEvent("library:pack-loaded",{detail:{packId,count:count(packId)}}));
      return loadedItems.filter(x=>packOf(x)===packId);
    }).catch(err=>{loading.delete(packId);throw err});
    loading.set(packId,task);return task;
  }
  async function ensureComponent(id){
    if(byId.has(id))return byId.get(id);
    const meta=indexById.get(id);if(!meta)return null;
    await loadPack(meta.pack);return byId.get(id)||null;
  }
  function packOf(itemOrId){
    const id=typeof itemOrId==="string"?itemOrId:itemOrId?.id;
    if(!id)return"core";
    if(byId.get(id)?.__pack)return byId.get(id).__pack;
    return indexById.get(id)?.pack||"core";
  }
  function count(packId){
    if(packId==="all")return index.length;
    return index.filter(x=>x.pack===packId).length;
  }
  function metaFor(id){return indexById.get(id)||null}
  function searchMeta(){return index}
  function unloadedPacks(){return Object.keys(manifest).filter(x=>!loadedPacks.has(x))}
  function registerRuntime(items,packId="local"){
    const clean=Array.isArray(items)?items:[];
    runtimePacks.set(packId,clean);loadedPacks.add(packId);registerItems(clean,packId);
    clean.forEach(item=>{
      if(indexById.has(item.id))return;
      const meta={id:item.id,name:item.name,category:item.category,style:item.style,tags:item.tags||[],complexity:item.complexity||"basic",description:item.description||"",technology:item.technology||"HTML + CSS",dependency:item.dependency||"None",sourceReference:item.sourceReference||"import-local",motionMode:item.motionMode||"Interaction",type:item.type||"component",addedAt:item.addedAt||new Date().toISOString().slice(0,10),pack:packId};
      index.push(meta);indexById.set(meta.id,meta);
    });
    dispatchEvent(new CustomEvent("library:pack-loaded",{detail:{packId,count:clean.length,runtime:true}}));
    return clean;
  }
  function stats(){
    return {total:index.length,loaded:loadedItems.length,categories:(globalThis.LibraryCategories||[]).length,packs:Object.fromEntries([...Object.keys(manifest),...runtimePacks.keys()].map(id=>[id,{count:count(id)||runtimePacks.get(id)?.length||0,loaded:loadedPacks.has(id)}]))};
  }

  registerExisting("core");
  globalThis.LibraryRegistry={
    version:"3.0.0",manifest,index,loadedItems,all:loadedItems,byId,loadedPacks,
    loadPack,ensureComponent,find:id=>byId.get(id)||null,metaFor,packOf,count,
    itemsInPack:id=>id==="all"?loadedItems:loadedItems.filter(x=>packOf(x)===id),
    searchMeta,unloadedPacks,registerRuntime,stats,ensureMetadata,isMetadataReady:()=>metadataReady
  };
})();