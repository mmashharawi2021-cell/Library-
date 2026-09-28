(function(){
  const required=["id","name","category","tags","code"];
  const norm=v=>String(v||"").toLowerCase().replace(/[^a-z0-9\u0600-\u06ff]+/gi," ").trim();
  function validate(item){
    const errors=[];
    for(const k of required)if(item?.[k]==null)errors.push("missing:"+k);
    if(item?.tags&&!Array.isArray(item.tags))errors.push("tags:not-array");
    if(item?.code&&typeof item.code!=="object")errors.push("code:not-object");
    return {ok:!errors.length,errors};
  }
  function normalize(item,packId="local"){
    const now=new Date().toISOString().slice(0,10);
    return {
      ...item,
      id:String(item.id).trim(),
      name:String(item.name).trim(),
      category:item.category||"cards",
      style:item.style||"Content",
      tags:Array.isArray(item.tags)?item.tags:[],
      complexity:item.complexity||"basic",
      code:{html:item.code?.html||"",css:item.code?.css||"",js:item.code?.js||"",react:item.code?.react||"",tailwind:item.code?.tailwind||""},
      favorite:false,usage:0,
      description:item.description||"",
      playground:item.playground||{},
      technology:item.technology||"HTML + CSS",
      dependency:item.dependency||"None",
      sourceReference:item.sourceReference||"import-local",
      motionMode:item.motionMode||"Interaction",
      type:item.type||"component",
      addedAt:item.addedAt||now,
      __pack:packId
    };
  }
  function duplicateMeta(item){
    const visual=globalThis.LibraryVisualDedupe?.findDuplicate?.(item,item.__pack||"local");
    if(visual)return [{id:visual.keepId,score:visual.score,visual:true}];
    const idx=globalThis.LibraryRegistry?.searchMeta?.()||globalThis.LibraryRegistry?.index||[];
    const n=norm(item.name),tags=new Set((item.tags||[]).map(norm));
    return idx.map(r=>{
      let score=0;if(norm(r.name)===n)score+=.65;if(r.category===item.category)score+=.15;
      const rt=(r.tags||[]).map(norm),hit=rt.filter(t=>tags.has(t)).length,den=new Set([...rt,...tags]).size||1;score+=(hit/den)*.2;
      return {id:r.id,score};
    }).filter(x=>x.score>=.82).sort((a,b)=>b.score-a.score);
  }
  function prepare(payload,packId="local"){
    const arr=Array.isArray(payload)?payload:Array.isArray(payload?.items)?payload.items:[payload];
    const accepted=[],rejected=[];
    for(const raw of arr){
      const v=validate(raw);
      if(!v.ok){rejected.push({item:raw,errors:v.errors});continue}
      const item=normalize(raw,packId),dupes=duplicateMeta(item);
      if(dupes.length){rejected.push({item,errors:["duplicate:"+dupes[0].id]});continue}
      accepted.push(item);
    }
    return {accepted,rejected};
  }
  function importItems(payload,packId="local"){
    const result=prepare(payload,packId);
    if(result.accepted.length)globalThis.LibraryRegistry?.registerRuntime(result.accepted,packId);
    return result;
  }
  globalThis.LibraryImportPipeline={validate,normalize,duplicateMeta,prepare,importItems};
})();