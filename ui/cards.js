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

function gridBatchSize(){
  const width=window.innerWidth||1200,mem=Number(navigator.deviceMemory||8);
  if(width<=600)return 12;
  if(width<=960)return mem<=4?12:18;
  if(mem<=4)return 18;
  if(width<=1400)return 24;
  return 30;
}
function autoGridLimit(){return window.innerWidth<=600?36:60}
let gridBatch=gridBatchSize();
let gridLimit=gridBatch;
let gridCurrentList=[];
let gridSentinelObserver=null;
function resetGridWindow(){gridBatch=gridBatchSize();gridLimit=gridBatch}
function gridTotal(list){return state.mode==='library'&&state.pack==='all'?catalogMeta().filter(metaAvailable).length:list.length}
function gridSentinelHtml(shown,total,hasMore,hasUnloaded){return shown<total&&hasMore||hasUnloaded?`<button id="gridSentinel" class="grid-sentinel" type="button"><b>${shown}</b><span>من ${total}</span><small>${hasMore?'تحميل المزيد':'تحميل Pack التالي'}</small></button>`:''}
function finishGridRender(start,count,mode='full'){
  if(el.renderCount)el.renderCount.textContent=`${count} / ${gridTotal(gridCurrentList)}`;
  bindInteractivePreviews(el.grid);bindCardPreviewInteractions(el.grid);observeGridSentinel();
  const done=()=>globalThis.LibraryPerformance?.recordRender?.('grid',performance.now()-start,count,{mode,batch:gridBatch});
  requestAnimationFrame(done);
}
function appendGridBatch(){
  const startTime=performance.now(),start=el.grid.querySelectorAll('.component-card').length;
  const end=Math.min(gridCurrentList.length,start+gridBatch);
  if(end<=start)return false;
  $('#gridSentinel')?.remove();
  const html=gridCurrentList.slice(start,end).map(s=>state.mode==='trash'?trashCard(s):card(s)).join('');
  el.grid.insertAdjacentHTML('beforeend',html);
  gridLimit=end;
  const hasUnloaded=state.mode==='library'&&state.pack==='all'&&(globalThis.LibraryRegistry?.unloadedPacks?.().length||0)>0;
  el.grid.insertAdjacentHTML('beforeend',gridSentinelHtml(end,gridTotal(gridCurrentList),end<gridCurrentList.length,hasUnloaded));
  finishGridRender(startTime,end,'append');
  return true;
}
function observeGridSentinel(){
  gridSentinelObserver?.disconnect?.();
  const sentinel=$('#gridSentinel');if(!sentinel)return;
  let loading=false;
  const load=async()=>{
    if(loading)return;loading=true;
    try{
      if(gridLimit<gridCurrentList.length){appendGridBatch();return}
      if(state.mode==='library'&&state.pack==='all'){
        const next=globalThis.LibraryRegistry?.unloadedPacks?.()[0];
        if(next){
          await globalThis.LibraryRegistry.loadPack(next);
          gridLimit=Math.min(gridLimit+gridBatch,Math.max(gridBatch,visible().length));
          renderNav();renderOverview();renderFilters();renderGrid(visible());header();
        }
      }
    }finally{loading=false}
  };
  sentinel.addEventListener('click',load,{once:true});
  if(!('IntersectionObserver' in window)||gridLimit>=autoGridLimit())return;
  gridSentinelObserver=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){gridSentinelObserver?.disconnect();load()}},{rootMargin:window.innerWidth<=600?'180px 0px':'260px 0px',threshold:.01});
  gridSentinelObserver.observe(sentinel);
}

function renderGrid(list=visible()){
  const start=performance.now();
  gridCurrentList=list;el.empty.hidden=!!list.length;
  const shown=list.slice(0,gridLimit),hasUnloaded=state.mode==='library'&&state.pack==='all'&&(globalThis.LibraryRegistry?.unloadedPacks?.().length||0)>0,total=gridTotal(list);
  el.grid.innerHTML=shown.map(s=>state.mode==='trash'?trashCard(s):card(s)).join('')+gridSentinelHtml(shown.length,total,shown.length<list.length,hasUnloaded);
  finishGridRender(start,shown.length,'full');
}
