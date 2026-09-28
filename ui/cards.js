/* Component cards, virtual grid and lazy grid window. */
function card(s){let level={basic:'سهل',intermediate:'متوسط',advanced:'متقدم'}[s.complexity]||s.complexity;return `<article class="component-card live-loop preview-idle" data-live-category="${s.category}" data-id="${s.id}">
  <div class="component-preview" data-preview-trigger="1" role="button" tabindex="0" aria-label="تشغيل معاينة ${s.name}">
    <div class="component-preview-stage">${s.code.html}</div>
    <div class="preview-gesture"><span>▶</span><b>Hover / Press</b><small>لتشغيل التأثير</small></div>
  </div>
  <div class="component-info">
    <div class="component-title"><div><strong>${s.name}</strong><small>${categories.find(c=>c.id===s.category)?.ar||s.category}</small></div><span>${s.id}</span></div>
    <div class="component-meta"><span class="complexity-badge ${s.complexity}">${level}</span><span class="pack-badge pack-${packOf(s)}">${packOf(s)}</span><span>${use(s)}× استخدام</span></div>
    <div class="mini-tags">${s.tags.slice(0,3).map(t=>`<span>${t}</span>`).join('')}</div>
    <div class="tools card-actions">
      <button class="icon-action" data-act="fav" title="المفضلة" aria-label="المفضلة">${state.favorites.has(s.id)?'♥':'♡'}</button>
      <button class="details-action" data-act="details">تفاصيل وتعديل</button>
      <button class="quick" data-act="copy">نسخ</button>
      <button class="delete-tool icon-action" data-act="delete" title="نقل إلى السلة" aria-label="حذف">⌫</button>
    </div>
  </div>
</article>`}
function trashCard(s){return `<article class="component-card trashed-card" data-id="${s.id}" data-trashed="1"><div class="component-preview">${s.code.html}</div><div class="component-info"><div class="component-title"><strong>${s.name}</strong><span>${s.id}</span></div><div class="mini-tags">${s.tags.slice(0,4).map(t=>`<span>${t}</span>`).join('')}</div><div class="tools trash-tools"><button class="restore-tool" data-act="restore">↶ استعادة</button><button class="permanent-tool" data-act="purge">حذف نهائي</button></div></div></article>`}

const GRID_BATCH=48;
let gridLimit=GRID_BATCH;
let gridCurrentList=[];
let gridSentinelObserver=null;
function resetGridWindow(){gridLimit=GRID_BATCH}
function observeGridSentinel(){
  gridSentinelObserver?.disconnect?.();
  const sentinel=$('#gridSentinel');
  if(!sentinel)return;
  const load=async()=>{
    if(gridLimit<gridCurrentList.length){gridLimit=Math.min(gridCurrentList.length,gridLimit+GRID_BATCH);renderGrid(gridCurrentList);return}
    if(state.mode==='library'&&state.pack==='all'){
      const next=globalThis.LibraryRegistry?.unloadedPacks?.()[0];
      if(next){await globalThis.LibraryRegistry.loadPack(next);gridLimit+=GRID_BATCH;renderNav();renderOverview();renderFilters();renderGrid(visible());header();}
    }
  };
  sentinel.addEventListener('click',load,{once:true});
  if(!('IntersectionObserver' in window))return;
  gridSentinelObserver=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting))load()},{rootMargin:'450px 0px',threshold:.01});
  gridSentinelObserver.observe(sentinel);
}

function renderGrid(list=visible()){gridCurrentList=list;el.empty.hidden=!!list.length;const shown=list.slice(0,gridLimit),hasUnloaded=state.mode==='library'&&state.pack==='all'&&(globalThis.LibraryRegistry?.unloadedPacks?.().length||0)>0,total=state.mode==='library'&&state.pack==='all'?catalogMeta().filter(metaAvailable).length:list.length;el.grid.innerHTML=shown.map(s=>state.mode==='trash'?trashCard(s):card(s)).join('')+((shown.length<list.length||hasUnloaded)?`<button id="gridSentinel" class="grid-sentinel" type="button"><b>${shown.length}</b><span>من ${total}</span><small>${shown.length<list.length?'تحميل المزيد':'تحميل Pack التالي'}</small></button>`:'');if(el.renderCount)el.renderCount.textContent=`${shown.length} / ${total}`;bindInteractivePreviews(el.grid);bindCardPreviewInteractions(el.grid);observeGridSentinel()}
