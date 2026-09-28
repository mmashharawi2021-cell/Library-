(function(){
  "use strict";
  const registry=globalThis.LibraryRegistry;
  if(!registry)return;

  const E={worker:null,workerQuery:"",pendingRoute:null,audit:null};
  const qs=s=>document.querySelector(s);
  const qsa=s=>[...document.querySelectorAll(s)];
  const esc=s=>String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));
  const sourceMap=Object.fromEntries((globalThis.librarySources||[]).map(x=>[x.id,x]));

  function ensureEngineUI(){
    const top=qs(".topbar");
    if(top&&!qs("#engineActions")){
      const actions=document.createElement("div");
      actions.id="engineActions";actions.className="engine-actions";
      actions.innerHTML='<button id="commandBtn" class="ghost engine-btn" title="Command Palette">⌘K</button><button id="packManagerBtn" class="ghost engine-btn" title="Source Packs">▦ Packs</button><button id="perfBtn" class="ghost engine-btn" title="Performance">◴</button>';
      top.appendChild(actions);
    }
    if(!qs("#engineLayer")){
      const layer=document.createElement("div");
      layer.id="engineLayer";
      layer.innerHTML=`
        <div id="commandPalette" class="engine-modal command-palette-v3" hidden>
          <div class="engine-dialog">
            <header><b>Command Palette</b><button data-engine-close="commandPalette">×</button></header>
            <label class="engine-search">⌕ <input id="commandInput" placeholder="ابحث عن Component أو اكتب أمرًا..."><kbd>ESC</kbd></label>
            <div id="commandResults" class="command-results"></div>
          </div>
        </div>
        <div id="packManager" class="engine-modal" hidden>
          <div class="engine-dialog engine-wide">
            <header><div><small>LIBRARY ENGINE 3.0</small><b>Source Pack Manager</b></div><button data-engine-close="packManager">×</button></header>
            <div id="packStats" class="engine-kpis"></div>
            <div id="packRows" class="pack-rows"></div>
            <footer class="engine-footer">
              <button id="loadAllPacks" class="copy">تحميل جميع الـPacks</button>
              <button id="exportBackup" class="ghost">Export Backup</button>
              <button id="importBackupBtn" class="ghost">Import Backup</button>
              <button id="importPackBtn" class="ghost">Import Component Pack</button>
              <input id="importBackupFile" type="file" accept="application/json" hidden>
              <input id="importPackFile" type="file" accept="application/json" hidden>
            </footer>
          </div>
        </div>
        <div id="perfPanel" class="engine-modal" hidden>
          <div class="engine-dialog engine-wide">
            <header><div><small>RUNTIME</small><b>Performance Dashboard</b></div><button data-engine-close="perfPanel">×</button></header>
            <div id="perfContent"></div>
          </div>
        </div>`;
      document.body.appendChild(layer);
    }
    ensureDrawerExtensions();
  }

  function ensureDrawerExtensions(){
    const body=qs(".drawer-body");if(!body)return;
    if(!qs("#engineVariants")){
      const variants=document.createElement("section");
      variants.id="engineVariants";variants.className="panel engine-variants";
      variants.innerHTML='<div class="panelbar"><b>Variants</b><small>Preview only</small></div><div class="variant-buttons"><button data-variant="default" class="active">Default</button><button data-variant="dark">Dark</button><button data-variant="glass">Glass</button><button data-variant="compact">Compact</button><button data-variant="outline">Outline</button></div>';
      const preview=body.querySelector(".preview-panel");preview?.after(variants);
    }
    if(!qs("#relatedComponents")){
      const related=document.createElement("section");
      related.id="relatedComponents";related.className="panel related-panel";
      related.innerHTML='<div class="panelbar"><b>Related Components</b><small id="relatedPack"></small></div><div id="relatedGrid" class="related-grid"></div>';
      body.appendChild(related);
    }
  }

  function openModal(id){
    qsa(".engine-modal").forEach(x=>x.hidden=true);
    const el=qs("#"+id);if(!el)return;el.hidden=false;document.body.classList.add("engine-modal-open");
    if(id==="packManager")renderPackManager();
    if(id==="perfPanel")renderPerformance();
    if(id==="commandPalette"){renderCommands("");setTimeout(()=>qs("#commandInput")?.focus(),30)}
  }
  function closeModal(id){const el=qs("#"+id);if(el)el.hidden=true;document.body.classList.remove("engine-modal-open")}

  function packLabel(id){return ({core:"Core",jitter:"Jitter",foundations:"Foundations",motion:"Motion",origin:"Origin",local:"Local Import"})[id]||id}
  function renderPackManager(){
    const stats=registry.stats(),loaded=registry.loadedPacks;
    const total=stats.total,loadedCount=stats.loaded;
    qs("#packStats").innerHTML=`<div><b>${total}</b><span>Catalog</span></div><div><b>${loadedCount}</b><span>Loaded</span></div><div><b>${registry.unloadedPacks().length}</b><span>Lazy Packs</span></div><div><b>${categories.length}</b><span>Categories</span></div>`;
    const ids=Object.keys(registry.manifest);
    qs("#packRows").innerHTML=ids.map(id=>{
      const meta=registry.manifest[id],isLoaded=loaded.has(id),count=registry.count(id);
      return `<article class="pack-row" data-pack-row="${id}"><div><b>${packLabel(id)}</b><small>${count} components · ${meta.file}</small></div><span class="pack-state ${isLoaded?'loaded':''}">${isLoaded?'Loaded':'Lazy'}</span><button data-load-pack="${id}" ${isLoaded?'disabled':''}>${isLoaded?'جاهز':'تحميل'}</button></article>`;
    }).join("");
  }

  async function loadPack(id){
    const btn=qs('[data-load-pack="'+id+'"]');if(btn){btn.disabled=true;btn.textContent="..."}
    try{await registry.loadPack(id);if(typeof renderAll==="function")renderAll();renderPackManager();return true}
    catch(err){console.error(err);if(typeof toast==="function")toast("تعذر تحميل "+packLabel(id));return false}
  }

  function downloadJSON(filename,data){
    const blob=new Blob([JSON.stringify(data,null,2)],{type:"application/json"});
    const url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download=filename;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),500);
  }
  function exportBackup(){
    const keys=["lib-favs","lib-recent","lib-cols","lib-usage","lib-trash","lib-purged","lib-local-pack"];
    const values={};keys.forEach(k=>values[k]=localStorage.getItem(k));
    downloadJSON("library-backup-"+new Date().toISOString().slice(0,10)+".json",{engine:"3.0.0",createdAt:new Date().toISOString(),values});
  }
  async function readJSONFile(file){return JSON.parse(await file.text())}
  async function importBackup(file){
    const data=await readJSONFile(file);if(!data?.values)throw new Error("Invalid backup");
    Object.entries(data.values).forEach(([k,v])=>{if(v==null)localStorage.removeItem(k);else localStorage.setItem(k,v)});
    location.reload();
  }
  async function importComponentPack(file){
    const payload=await readJSONFile(file),packId="local-"+Date.now().toString(36);
    const result=globalThis.LibraryImportPipeline?.importItems(payload,packId);
    if(!result)throw new Error("Import pipeline unavailable");
    if(result.accepted.length){
      const saved=JSON.parse(localStorage.getItem("lib-local-pack")||"[]");
      localStorage.setItem("lib-local-pack",JSON.stringify([...saved,...result.accepted]));
      if(typeof renderAll==="function")renderAll();
    }
    if(typeof toast==="function")toast(`Imported ${result.accepted.length} · Rejected ${result.rejected.length}`);
    renderPackManager();
  }
  function restoreLocalPack(){
    try{
      const items=JSON.parse(localStorage.getItem("lib-local-pack")||"[]");
      if(Array.isArray(items)&&items.length)registry.registerRuntime(items,"local");
    }catch(e){console.warn("Local pack restore failed",e)}
  }

  function commandItems(q){
    const nq=String(q||"").toLowerCase().trim();
    const commands=[
      {id:"cmd:packs",name:"فتح Source Pack Manager",hint:"packs",run:()=>openModal("packManager")},
      {id:"cmd:perf",name:"فتح Performance Dashboard",hint:"performance",run:()=>openModal("perfPanel")},
      {id:"cmd:export",name:"Export Backup",hint:"backup",run:exportBackup},
      {id:"cmd:random",name:"عنصر عشوائي",hint:"random",run:()=>qs("#randomBtn")?.click()}
    ];
    const matches=registry.index.filter(x=>!nq||[x.id,x.name,x.category,x.sourceReference,x.pack,(x.tags||[]).join(" ")].join(" ").toLowerCase().includes(nq)).slice(0,22);
    return {commands:commands.filter(x=>!nq||(x.name+" "+x.hint).toLowerCase().includes(nq)),matches};
  }
  function renderCommands(q){
    const box=qs("#commandResults");if(!box)return;
    const {commands,matches}=commandItems(q);
    box.innerHTML=commands.map(x=>`<button data-command="${x.id}"><span>${esc(x.name)}</span><small>${esc(x.hint)}</small></button>`).join("")+
      matches.map(x=>`<button data-component-id="${esc(x.id)}"><span>${esc(x.name)}</span><small>${esc(packLabel(x.pack))} · ${esc(x.id)}</small></button>`).join("");
    box._commands=commands;
  }

  function relatedMeta(item){
    const tags=new Set((item.tags||[]).map(x=>String(x).toLowerCase()));
    return registry.index.filter(x=>x.id!==item.id).map(x=>{
      let score=0;if(x.category===item.category)score+=5;if(x.sourceReference===item.sourceReference)score+=3;if(x.pack===packOf(item))score+=1;
      for(const t of x.tags||[])if(tags.has(String(t).toLowerCase()))score+=1;
      return {x,score};
    }).filter(o=>o.score>2).sort((a,b)=>b.score-a.score).slice(0,6).map(o=>o.x);
  }
  function renderRelated(item){
    const grid=qs("#relatedGrid");if(!grid)return;
    qs("#relatedPack").textContent=packLabel(packOf(item));
    grid.innerHTML=relatedMeta(item).map(x=>`<button data-related-id="${esc(x.id)}"><b>${esc(x.name)}</b><span>${esc(x.category)} · ${esc(x.id)}</span></button>`).join("");
  }

  function applyVariant(name){
    if(!el?.preview)return;
    el.preview.classList.remove("engine-v-dark","engine-v-glass","engine-v-compact","engine-v-outline");
    if(name!=="default")el.preview.classList.add("engine-v-"+name);
    qsa("#engineVariants [data-variant]").forEach(b=>b.classList.toggle("active",b.dataset.variant===name));
  }

  const baseOpenDrawer=openDrawer;
  openDrawer=function(s,opts={}){
    if(!s)return;
    document.body.classList.remove("component-route");el?.drawer?.classList.remove("route-page");
    baseOpenDrawer(s);
    applyVariant("default");
    const src=sourceMap[s.sourceReference],pack=packOf(s);
    if(el?.metaDetails){
      el.metaDetails.insertAdjacentHTML("beforeend",`<span><b>Pack</b>${esc(packLabel(pack))}</span><span><b>Engine</b>3.0</span>${src?.license?`<span><b>License</b>${esc(src.license)}</span>`:''}`);
    }
    renderRelated(s);
    if(opts.route!==false){
      const next="#/component/"+encodeURIComponent(s.id);
      if(location.hash!==next)history.pushState({component:s.id},"",next);
    }
  };
  const baseCloseDrawer=closeDrawer;
  closeDrawer=function(){
    baseCloseDrawer();
    document.body.classList.remove("component-route");el?.drawer?.classList.remove("route-page");
    if(location.hash.startsWith("#/component/"))history.pushState({},"",location.pathname+location.search);
  };

  async function openComponentById(id,route=true){
    const item=await registry.ensureComponent(id);
    if(!item){if(typeof toast==="function")toast("العنصر غير موجود");return}
    if(typeof renderAll==="function")renderAll();
    openDrawer(item,{route});
  }
  async function routeFromHash(){
    const m=location.hash.match(/^#\/component\/(.+)$/);if(!m)return;
    await openComponentById(decodeURIComponent(m[1]),false);
    document.body.classList.add("component-route");el?.drawer?.classList.add("route-page");
  }

  function startWorker(){
    if(!("Worker" in window))return;
    try{
      E.worker=new Worker("catalog/search-worker.js");
      E.worker.onmessage=async e=>{
        const data=e.data||{};if(data.type!=="results"||data.q!==E.workerQuery)return;
        const results=data.results||[];
        const box=el?.suggestions;
        if(box&&E.workerQuery){
          box.innerHTML=results.slice(0,7).map(r=>{
            const m=registry.metaFor(r.id);return `<button data-engine-suggest="${esc(r.id)}"><span>${esc(m?.name||r.id)}</span><small>${esc(packLabel(r.pack))} · ${esc(r.id)}</small></button>`;
          }).join("");
          box.hidden=!results.length;
        }
        const firstUnloaded=results.find(r=>!registry.loadedPacks.has(r.pack));
        if(firstUnloaded&&E.workerQuery.length>=2){
          await registry.loadPack(firstUnloaded.pack);
          if(state.q===E.workerQuery){resetGridWindow();renderNav();renderOverview();renderFilters();renderGrid();header()}
        }
      };
    }catch(err){console.warn("Search worker unavailable",err)}
  }
  let searchTimer=0;
  function workerSearch(){
    if(!E.worker)return;
    clearTimeout(searchTimer);
    searchTimer=setTimeout(()=>{
      E.workerQuery=el.search.value.trim();
      if(!E.workerQuery)return;
      E.worker.postMessage({type:"search",q:E.workerQuery,limit:80,filters:{pack:state.pack,category:state.cat}});
    },90);
  }

  async function loadCatalogAudit(){
    if(E.audit)return E.audit;
    E.audit=fetch("catalog-audit.json",{cache:"no-store"}).then(r=>r.ok?r.json():null).catch(()=>null);
    return E.audit;
  }

  async function renderPerformance(){
    const stats=registry.stats();
    const resources=performance.getEntriesByType?.("resource")||[];
    const transferred=resources.reduce((n,r)=>n+(r.transferSize||0),0);
    const active=qsa(".live-loop:not(.preview-paused)").length;
    const cards=qsa(".component-card").length;
    const mem=performance.memory?Math.round(performance.memory.usedJSHeapSize/1048576)+" MB":"غير متاح";
    const content=qs("#perfContent");if(!content)return;
    content.innerHTML=`
      <div class="engine-kpis perf-kpis">
        <div><b>${stats.total}</b><span>Catalog</span></div>
        <div><b>${stats.loaded}</b><span>Loaded Data</span></div>
        <div><b>${cards}</b><span>DOM Cards</span></div>
        <div><b>${active}</b><span>Active Loops</span></div>
      </div>
      <div class="perf-table">
        <p><b>Transferred:</b> ${(transferred/1024).toFixed(1)} KB</p>
        <p><b>JS Heap:</b> ${mem}</p>
        <p><b>Lazy packs remaining:</b> ${registry.unloadedPacks().length}</p>
        <p><b>Worker:</b> ${E.worker?'Active':'Fallback'}</p>
        <p><b>Service Worker:</b> ${navigator.serviceWorker?.controller?'Controlling':'Ready on next load / unavailable'}</p>
      </div>
      <div id="qualityAudit" class="perf-table"><p><b>Catalog audit:</b> Loading...</p></div>`;
    const audit=await loadCatalogAudit();
    const box=qs("#qualityAudit"),q=audit?.quality_audit;
    if(box&&q){
      box.innerHTML=`
        <p><b>Live HTML previews:</b> ${q.live_html_previews} / ${audit.total_components}</p>
        <p><b>Exact unique HTML:</b> ${q.exact_unique_html}</p>
        <p><b>Normalized structural signatures:</b> ${q.normalized_structural_signatures}</p>
        <p><b>DEV-derived variants:</b> ${q.dev_variants} · ${q.dev_structural_signatures} structures</p>
        <p><b>Jitter quality:</b> ${q.jitter_generated_variants} upgraded · ${q.jitter_semantic_template_types||0} semantic types · ${q.jitter_dom_structures||q.jitter_base_signatures||0} DOM structures · ${q.jitter_layout_variants||1} layout variants</p>
        <p><b>Name collisions:</b> ${q.name_collisions}</p>
        <p><b>Portable code:</b> generated at runtime for HTML / CSS / JS / React / Tailwind</p>`;
    }else if(box){
      box.innerHTML='<p><b>Catalog audit:</b> unavailable</p>';
    }
  }


  async function ensureIdsLoaded(ids){
    const packs=[...new Set((ids||[]).map(id=>registry.metaFor(id)?.pack).filter(Boolean))];
    for(const p of packs)if(!registry.loadedPacks.has(p))await registry.loadPack(p);
  }
  async function openGlobalRandom(){
    const pool=registry.index.filter(x=>!state.trash.has(x.id)&&!state.purged.has(x.id));
    if(!pool.length)return;
    const meta=pool[Math.floor(Math.random()*pool.length)];
    await openComponentById(meta.id);
  }

  function bind(){
    qs("#packFilter")?.addEventListener("change",async e=>{
      const id=e.target.value||"all";
      e.stopImmediatePropagation();
      state.mode="library";state.pack=id;resetGridWindow();
      if(id!=="all"&&!registry.loadedPacks.has(id))await registry.loadPack(id);
      renderNav();renderOverview();renderFilters();renderGrid();header();syncPackFilter();
    },true);
    qs("#commandBtn")?.addEventListener("click",()=>openModal("commandPalette"));
    qs("#randomBtn")?.addEventListener("click",async e=>{e.preventDefault();e.stopImmediatePropagation();await openGlobalRandom()},{capture:true});
    qs("#packManagerBtn")?.addEventListener("click",()=>openModal("packManager"));
    qs("#perfBtn")?.addEventListener("click",()=>openModal("perfPanel"));

    document.addEventListener("click",async e=>{
      const view=e.target.closest("[data-view]");if(!view)return;
      const type=view.dataset.view;if(!["favorites","recent","trash"].includes(type))return;
      e.preventDefault();e.stopImmediatePropagation();
      const ids=type==="favorites"?[...state.favorites]:type==="recent"?state.recent:[...state.trash];
      await ensureIdsLoaded(ids);showView(type);
    },true);
    document.addEventListener("click",async e=>{
      const close=e.target.closest("[data-engine-close]");if(close){closeModal(close.dataset.engineClose);return}
      if(e.target.classList.contains("engine-modal")){closeModal(e.target.id);return}
      const load=e.target.closest("[data-load-pack]");if(load){await loadPack(load.dataset.loadPack);return}
      const related=e.target.closest("[data-related-id]");if(related){await openComponentById(related.dataset.relatedId);return}
      const suggest=e.target.closest("[data-engine-suggest]");if(suggest){e.preventDefault();e.stopPropagation();el.suggestions.hidden=true;await openComponentById(suggest.dataset.engineSuggest);return}
      const variant=e.target.closest("[data-variant]");if(variant){applyVariant(variant.dataset.variant);return}
      const comp=e.target.closest("[data-component-id]");if(comp){closeModal("commandPalette");await openComponentById(comp.dataset.componentId);return}
      const cmd=e.target.closest("[data-command]");if(cmd){const list=qs("#commandResults")?._commands||[];list.find(x=>x.id===cmd.dataset.command)?.run();closeModal("commandPalette")}
    },true);
    qs("#commandInput")?.addEventListener("input",e=>renderCommands(e.target.value));
    el.search?.addEventListener("input",workerSearch);
    el.suggestions?.addEventListener("click",e=>{if(e.target.closest("[data-engine-suggest]"))e.stopImmediatePropagation()},true);
    qs("#loadAllPacks")?.addEventListener("click",async()=>{for(const id of Object.keys(registry.manifest))await loadPack(id);renderPackManager()});
    qs("#exportBackup")?.addEventListener("click",exportBackup);
    qs("#importBackupBtn")?.addEventListener("click",()=>qs("#importBackupFile")?.click());
    qs("#importPackBtn")?.addEventListener("click",()=>qs("#importPackFile")?.click());
    qs("#importBackupFile")?.addEventListener("change",async e=>{if(e.target.files[0])try{await importBackup(e.target.files[0])}catch(err){alert("Backup غير صالح")}});
    qs("#importPackFile")?.addEventListener("change",async e=>{if(e.target.files[0])try{await importComponentPack(e.target.files[0])}catch(err){console.error(err);alert("Component Pack غير صالح")}});
    document.addEventListener("keydown",e=>{
      if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"){e.preventDefault();openModal("commandPalette")}
      if(e.key==="Escape"){qsa(".engine-modal").forEach(m=>{if(!m.hidden)closeModal(m.id)})}
    });
    window.addEventListener("popstate",routeFromHash);
    window.addEventListener("hashchange",routeFromHash);
    window.addEventListener("library:pack-loaded",()=>{syncPackFilter();renderNav();header()});
  }

  function registerPWA(){
    if("serviceWorker" in navigator&&location.protocol!=="file:")navigator.serviceWorker.register("./sw.js").catch(err=>console.warn("SW",err));
  }

  restoreLocalPack();
  ensureEngineUI();
  bind();
  startWorker();
  registerPWA();
  syncPackFilter();
  routeFromHash();
  globalThis.LibraryEngine3={openComponentById,openModal,loadPack,exportBackup,renderPerformance,applyVariant};
})();