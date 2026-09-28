/* Collections, favorites/trash workflow and item actions. */
const collectionPresets={
  dashboard:{label:'Dashboard UI',test:s=>s.category==='cards'&&s.tags.some(t=>['dashboard','kpi','stats','chart','progress'].includes(norm(t)))||s.category==='nav'},
  forms:{label:'Forms',test:s=>s.category==='inputs'||s.tags.some(t=>['form','validation','select','search'].includes(norm(t)))},
  navigation:{label:'Navigation',test:s=>['nav','menus','tabs'].includes(s.category)},
  micro:{label:'Micro-interactions',test:s=>['hover','motion','loaders'].includes(s.category)||s.tags.some(t=>['animated','hover','motion'].includes(norm(t)))},
  popups:{label:'Popups',test:s=>s.category==='modals'||s.tags.some(t=>['popup','toast','tooltip','popover','notification'].includes(norm(t)))}
};
function presetItems(key){let p=collectionPresets[key];return p?samples.filter(s=>available(s)&&p.test(s)):[]}
function renderCollectionFilters(active='dashboard'){let built=Object.entries(collectionPresets).map(([k,p])=>`<button class="filter ${active===k?'active':''}" data-collection="${k}">${p.label}</button>`).join(''),custom=Object.keys(state.collections).map(n=>`<button class="filter ${active==='user:'+n?'active':''}" data-user-collection="${n}">▦ ${n}</button>`).join('');el.filters.innerHTML=built+(custom?'<span class="filter-sep"></span>'+custom:'')}
function showCollectionPreset(key){state.mode='collections';state.cat='all';state.pack='all';state.q='';state.filter='All';resetGridWindow();el.search.value='';renderNav();renderCollectionFilters(key);$$('[data-view]').forEach(b=>b.classList.toggle('active',b.dataset.view==='collections'));el.title.textContent=collectionPresets[key]?.label||'المجموعات';el.eyebrow.textContent='Collections';renderGrid(presetItems(key));header();$('#library').scrollIntoView({behavior:'smooth'})}
function showUserCollection(name){state.mode='collections';state.cat='all';state.pack='all';state.q='';state.filter='All';resetGridWindow();el.search.value='';renderNav();renderCollectionFilters('user:'+name);$$('[data-view]').forEach(b=>b.classList.toggle('active',b.dataset.view==='collections'));let list=(state.collections[name]||[]).map(id=>samples.find(s=>s.id===id)).filter(s=>s&&available(s));el.title.textContent=name;el.eyebrow.textContent='My Collection';renderGrid(list);header();$('#library').scrollIntoView({behavior:'smooth'})}
function animateToTrash(source,done){
  if(!source||!source.getBoundingClientRect||!el.trashDock){done();return}
  const from=source.getBoundingClientRect();
  el.trashDock.classList.add('show','receiving');
  el.trashDock.setAttribute('aria-hidden','false');
  const to=el.trashDock.getBoundingClientRect();
  const clone=source.cloneNode(true);
  clone.className='delete-fly';
  Object.assign(clone.style,{position:'fixed',zIndex:'200',pointerEvents:'none',margin:'0',left:from.left+'px',top:from.top+'px',width:from.width+'px',height:from.height+'px'});
  document.body.appendChild(clone);
  const dx=to.left+to.width/2-(from.left+from.width/2),dy=to.top+to.height/2-(from.top+from.height/2);
  requestAnimationFrame(()=>requestAnimationFrame(()=>{clone.style.transform=`translate(${dx}px,${dy}px) scale(.08) rotate(-12deg)`;clone.style.opacity='0';clone.style.filter='blur(2px)'}));
  setTimeout(()=>{clone.remove();el.trashDock.classList.remove('receiving');el.trashDock.classList.add('received');done();setTimeout(()=>{el.trashDock.classList.remove('show','received');el.trashDock.setAttribute('aria-hidden','true')},650)},720)
}

function showUndoDelete(s){
  clearTimeout(showUndoDelete.t);
  el.toast.innerHTML='<span>تم نقل العنصر إلى السلة</span><button type="button" id="undoDeleteNow">تراجع</button>';
  el.toast.classList.add('show','undo-toast');
  $('#undoDeleteNow')?.addEventListener('click',()=>{state.trash.delete(s.id);persist();state.mode='library';renderAll();el.toast.classList.remove('show','undo-toast');toast('تمت استعادة العنصر')},{once:true});
  showUndoDelete.t=setTimeout(()=>{el.toast.classList.remove('show','undo-toast');el.toast.textContent=''},5000);
}

function deleteItem(s,source){
  if(!s||state.trash.has(s.id)||state.purged.has(s.id))return;
  animateToTrash(source,()=>{state.trash.add(s.id);state.recent=state.recent.filter(id=>id!==s.id);persist();if(state.active?.id===s.id)closeDrawer();state.mode='library';renderAll();showUndoDelete(s)})
}
function restoreItem(s){if(!s)return;state.trash.delete(s.id);persist();showView('trash');toast('تمت استعادة العنصر')}
function purgeItem(s){if(!s||!confirm('حذف هذا العنصر نهائيًا من مكتبتك المحلية؟'))return;state.trash.delete(s.id);state.purged.add(s.id);state.favorites.delete(s.id);state.recent=state.recent.filter(id=>id!==s.id);persist();showView('trash');toast('تم الحذف نهائيًا')}
