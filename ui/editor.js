/* Detail drawer, playground controls and editor UI. */
const defaults={color:'#ffffff',bg:'#11131a',radius:12,padding:14,font:14,shadow:16,glow:0,scale:103,speed:30};
function baseControls(s){return {...defaults,...(s?.playground||{})}}

function controlSelector(s){let id='#ui-'+s.id.toLowerCase();if(s.category==='buttons')return id;if(s.category==='inputs')return id+' input,'+id+' textarea,'+id+' select';return id}
function previewTargets(s){if(!s)return[];let root=el.preview.firstElementChild;if(!root)return[];if(s.category==='buttons')return[root];if(s.category==='inputs')return[...root.querySelectorAll('input,textarea,select')].length?[...root.querySelectorAll('input,textarea,select')]:[root];return[root]}

const typeConfig={
 buttons:[['border','Border',0,4,0,'px'],['letter','Letter spacing',0,4,0,'px']],
 cards:[['width','Card width',180,320,220,'px'],['media','Media height',40,150,74,'px']],
 inputs:[['width','Field width',180,340,240,'px'],['border','Border',0,4,1,'px']],
 nav:[['width','Nav width',220,420,300,'px'],['gap','Gap',0,24,5,'px']],
 modals:[['width','Popup width',200,420,260,'px'],['blur','Backdrop blur',0,24,0,'px']],
 menus:[['width','Menu width',140,300,170,'px'],['row','Row padding',4,18,8,'px']],
 loaders:[['size','Loader size',20,80,39,'px'],['thickness','Stroke',2,10,4,'px']],
 tabs:[['gap','Gap',0,18,4,'px'],['item','Item padding',4,18,8,'px']],
 hover:[['width','Preview width',120,320,210,'px'],['border','Border',0,4,1,'px']],
 motion:[['size','Element size',40,120,72,'px'],['border','Border',0,4,0,'px']],
 sections:[['width','Section width',220,360,300,'px'],['gap','Gap',0,28,12,'px']],
 effects:[['width','Effect width',120,320,230,'px'],['intensity','Intensity',20,100,62,'%']],
 data:[['width','Data width',180,360,260,'px'],['gap','Gap',2,24,8,'px']],
 icons:[['size','Icon size',36,120,70,'px'],['stroke','Stroke',1,8,4,'px']],
 media:[['width','Media width',160,360,250,'px'],['height','Media height',90,260,140,'px']]
};
function baseExtras(s){return Object.fromEntries((typeConfig[s?.category]||[]).map(([k,,,d])=>[k,d]))}
function renderTypeControls(s){let cfg=typeConfig[s.category]||[];el.typeControls.innerHTML=cfg.length?'<div class="type-title"><b>خصائص '+(categories.find(c=>c.id===s.category)?.ar||'العنصر')+'</b><span>تختلف حسب النوع</span></div>'+cfg.map(([k,label,min,max,,unit])=>`<label>${label} <span id="extra-${k}-value">${state.extras[k]}${unit}</span><input data-extra="${k}" data-unit="${unit}" type="range" min="${min}" max="${max}" value="${state.extras[k]}"></label>`).join(''):''}
function extraCssRules(s){let e=state.extras||{},id='#ui-'+s.id.toLowerCase(),rules=[];if(s.category==='buttons'){rules.push(`${id}{border-width:${e.border||0}px;letter-spacing:${e.letter||0}px}`)}else if(s.category==='cards'){rules.push(`${id}{width:${e.width||220}px}`,`${id} .thumb,${id} .product-art{height:${e.media||74}px}`)}else if(s.category==='inputs'){rules.push(`${id}{width:${e.width||240}px}`,`${controlSelector(s)}{border-width:${e.border||1}px}`)}else if(s.category==='nav'){rules.push(`${id}{width:${e.width||300}px;gap:${e.gap||5}px}`)}else if(s.category==='modals'){rules.push(`${id}{width:${e.width||260}px;backdrop-filter:blur(${e.blur||0}px)}`)}else if(s.category==='menus'){rules.push(`${id}{width:${e.width||170}px}`,`${id}>div{padding:${e.row||8}px}`)}else if(s.category==='loaders'){rules.push(`${id}{width:${e.size||39}px;height:${e.size||39}px;border-width:${e.thickness||4}px}`)}else if(s.category==='tabs'){rules.push(`${id}{gap:${e.gap||4}px}`,`${id}>*{padding:${e.item||8}px}`)}else if(s.category==='hover'){rules.push(`${id}{width:${e.width||210}px;border-width:${e.border||1}px}`)}else if(s.category==='motion'){rules.push(`${id}{width:${e.size||72}px;height:${e.size||72}px;border-width:${e.border||0}px}`)}else if(s.category==='sections'){rules.push(`${id}{width:${e.width||300}px;gap:${e.gap||12}px}`)}else if(s.category==='effects'){rules.push(`${id}{width:${e.width||230}px;--fx-intensity:${e.intensity||62}%}`)}else if(s.category==='data'){rules.push(`${id}{width:${e.width||260}px;gap:${e.gap||8}px}`)}else if(s.category==='icons'){rules.push(`${id}{width:${e.size||70}px;height:${e.size||70}px;stroke-width:${e.stroke||4}}`)}else if(s.category==='media'){rules.push(`${id}{width:${e.width||250}px;min-height:${e.height||140}px}`)}return rules.join('\n')}
function applyTypeExtras(s){let root=el.preview.firstElementChild,e=state.extras||{};if(!root)return;if(s.category==='buttons'){root.style.borderWidth=(e.border||0)+'px';root.style.letterSpacing=(e.letter||0)+'px'}else if(s.category==='cards'){root.style.width=(e.width||220)+'px';root.querySelectorAll('.thumb,.product-art').forEach(n=>n.style.height=(e.media||74)+'px')}else if(s.category==='inputs'){root.style.width=(e.width||240)+'px';previewTargets(s).forEach(n=>n.style.borderWidth=(e.border||1)+'px')}else if(s.category==='nav'){root.style.width=(e.width||300)+'px';root.style.gap=(e.gap||5)+'px'}else if(s.category==='modals'){root.style.width=(e.width||260)+'px';root.style.backdropFilter='blur('+(e.blur||0)+'px)'}else if(s.category==='menus'){root.style.width=(e.width||170)+'px';root.querySelectorAll(':scope>div').forEach(n=>n.style.padding=(e.row||8)+'px')}else if(s.category==='loaders'){root.style.width=(e.size||39)+'px';root.style.height=(e.size||39)+'px';root.style.borderWidth=(e.thickness||4)+'px'}else if(s.category==='tabs'){root.style.gap=(e.gap||4)+'px';[...root.children].forEach(n=>n.style.padding=(e.item||8)+'px')}else if(s.category==='hover'){root.style.width=(e.width||210)+'px';root.style.borderWidth=(e.border||1)+'px'}else if(s.category==='motion'){root.style.width=(e.size||72)+'px';root.style.height=(e.size||72)+'px';root.style.borderWidth=(e.border||0)+'px'}else if(s.category==='sections'){root.style.width=(e.width||300)+'px';root.style.gap=(e.gap||12)+'px'}else if(s.category==='effects'){root.style.width=(e.width||230)+'px';root.style.setProperty('--fx-intensity',(e.intensity||62)+'%')}else if(s.category==='data'){root.style.width=(e.width||260)+'px';root.style.gap=(e.gap||8)+'px'}else if(s.category==='icons'){root.style.width=(e.size||70)+'px';root.style.height=(e.size||70)+'px';root.style.strokeWidth=e.stroke||4}else if(s.category==='media'){root.style.width=(e.width||250)+'px';root.style.minHeight=(e.height||140)+'px'}}

function setDetailTab(name='preview'){
  const allowed=['preview','edit','code','info'];if(!allowed.includes(name))name='preview';
  $('#drawerSectionTabs')?.querySelectorAll('[data-detail-tab]').forEach(b=>b.classList.toggle('active',b.dataset.detailTab===name));
  el.drawer.dataset.detailTab=name;
  el.drawer.querySelectorAll('[data-detail-section]').forEach(section=>section.hidden=section.dataset.detailSection!==name);
  el.drawer.querySelectorAll('#engineVariants').forEach(section=>section.hidden=name!=='edit');
  el.drawer.querySelectorAll('#relatedComponents').forEach(section=>section.hidden=name!=='info');
}
function openDrawer(s,opts={}){state.active=s;state.tab='HTML';state.previewState='default';state.controls=baseControls(s);state.extras=baseExtras(s);$('#drawerTitle').textContent=s.name;$('#drawerId').textContent=s.id+' · '+({basic:'سهل',intermediate:'متوسط',advanced:'متقدم'}[s.complexity]||s.complexity);el.tags.innerHTML=s.tags.map(t=>`<span>${t}</span>`).join('');let src=sourceById[s.sourceReference];el.metaDetails.innerHTML=`<span><b>تقنية</b>${s.technology}</span><span><b>Dependency</b>${s.dependency}</span><span><b>Motion</b>${s.motionMode}</span><span><b>Type</b>${s.type}</span><span><b>Added</b>${s.addedAt}</span>${src?`<a href="${src.url}" target="_blank" rel="noopener"><b>المصدر</b>${src.name}</a>`:`<span><b>المصدر</b>${s.sourceReference}</span>`}`;el.fav.textContent=state.favorites.has(s.id)?'♥':'♡';el.preview.innerHTML=s.code.html;el.preview.className='drawer-preview live-loop preview-idle';el.preview.dataset.liveCategory=s.category;updateControls();renderTypeControls(s);renderTabs();applyControls();setPreviewState('default');el.drawer.classList.add('open');el.drawer.setAttribute('aria-hidden','false');el.backdrop.hidden=false;setDetailTab(opts.detailTab||'preview');recent(s.id)}

let drawerPreviewTimer=null;
function setDrawerPreviewActive(on,autoStop=0){
  clearTimeout(drawerPreviewTimer);el.preview.classList.toggle('preview-active',!!on);el.preview.classList.toggle('preview-idle',!on);
  if(on){bindInteractivePreviews(el.preview);void el.preview.offsetWidth;runLivePreviewTick(el.preview);if(autoStop)drawerPreviewTimer=setTimeout(()=>setDrawerPreviewActive(false),autoStop)}
  syncInteractionPreviewTimer();
}
function replayActivePreview(){
  if(!state.active)return;
  el.preview.innerHTML=state.active.code.html;
  el.preview.dataset.liveCategory=state.active.category;
  applyControls();setPreviewState('default');bindInteractivePreviews(el.preview);setDrawerPreviewActive(true,2200);
  toast('تم تشغيل المعاينة');
}

function closeDrawer(){clearTimeout(drawerPreviewTimer);setDrawerPreviewActive(false);el.drawer.classList.remove('open','full');el.drawer.setAttribute('aria-hidden','true');el.backdrop.hidden=true}
function setPreviewState(name){
  state.previewState=name;
  $$('#previewStates [data-state]').forEach(b=>b.classList.toggle('active',b.dataset.state===name));
  el.preview.classList.remove('preview-state-hover','preview-state-active','preview-state-disabled');
  if(name!=='default')el.preview.classList.add('preview-state-'+name);
}
function renderTabs(){let variants=['HTML','CSS','JS','React','Tailwind'];el.tabs.innerHTML=variants.map(t=>`<button data-tab="${t}" class="${state.tab===t?'active':''}">${t}</button>`).join('');el.code.textContent=typeof code==='function'?code(state.tab):'سيتم تحميل مولّد الكود عند فتح تبويب الكود أو النسخ.';if(el.copyVariant)el.copyVariant.value=state.tab;$('#copyCode').textContent='نسخ '+state.tab}
function applyControls(){let targets=previewTargets(state.active),c=state.controls;if(!targets.length||!c)return;targets.forEach(t=>{t.style.color=c.color;t.style.backgroundColor=c.bg;t.style.borderRadius=c.radius+'px';t.style.padding=`${Math.round(c.padding*.65)}px ${c.padding}px`;t.style.fontSize=c.font+'px';t.style.boxShadow=`0 ${Math.round(c.shadow/2)}px ${c.shadow}px rgba(20,25,40,.18)`;t.style.transition=`transform ${c.speed/100}s ease, box-shadow ${c.speed/100}s ease`;t.onmouseenter=()=>{t.style.transform=`scale(${c.scale/100})`;t.style.boxShadow=`0 0 ${c.glow}px ${c.bg}88,0 ${Math.round(c.shadow/2)}px ${c.shadow}px rgba(20,25,40,.18)`};t.onmouseleave=()=>{t.style.transform='scale(1)';t.style.boxShadow=`0 ${Math.round(c.shadow/2)}px ${c.shadow}px rgba(20,25,40,.18)`}});applyTypeExtras(state.active);if(typeof code==='function')el.code.textContent=code(state.tab)}
function updateControls(){let m={cColor:'color',cBg:'bg',cRadius:'radius',cPadding:'padding',cFont:'font',cShadow:'shadow',cGlow:'glow',cScale:'scale',cSpeed:'speed'};Object.entries(m).forEach(([id,k])=>$('#'+id).value=state.controls[k]);$('#vRadius').textContent=state.controls.radius+'px';$('#vPadding').textContent=state.controls.padding+'px';$('#vFont').textContent=state.controls.font+'px';$('#vShadow').textContent=state.controls.shadow;$('#vGlow').textContent=state.controls.glow;$('#vScale').textContent=(state.controls.scale/100).toFixed(2)+'×';$('#vSpeed').textContent=(state.controls.speed/100).toFixed(2)+'s'}
async function copyText(t,msg='تم نسخ الكود'){try{await navigator.clipboard.writeText(t)}catch{let a=document.createElement('textarea');a.value=t;document.body.appendChild(a);a.select();document.execCommand('copy');a.remove()}toast(msg)}
async function quick(s){state.active=s;state.controls=baseControls(s);state.extras=baseExtras(s);await ensureCodeExport();copyText(code('HTML'));mark(s.id)}
