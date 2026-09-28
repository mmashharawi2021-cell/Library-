/* Core state, storage and catalog helpers. */
const storedFavs=JSON.parse(localStorage.getItem('lib-favs')||'[]');
const storedUsage=JSON.parse(localStorage.getItem('lib-usage')||'{}');
const storedTrash=JSON.parse(localStorage.getItem('lib-trash')||'[]');
const storedPurged=JSON.parse(localStorage.getItem('lib-purged')||'[]');
const state={cat:'all',filter:'All',pack:'all',q:'',active:null,tab:'HTML',mode:'library',previewState:'default',favorites:new Set([...samples.filter(s=>s.favorite).map(s=>s.id),...storedFavs]),recent:JSON.parse(localStorage.getItem('lib-recent')||'[]'),collections:JSON.parse(localStorage.getItem('lib-cols')||'{}'),trash:new Set(storedTrash),purged:new Set(storedPurged),usage:{...Object.fromEntries(samples.map(s=>[s.id,Number(s.usage||0)])),...storedUsage},controls:null,extras:{}};
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const el={nav:$('#categoryNav'),catGrid:$('#categoryGrid'),grid:$('#componentGrid'),filters:$('#filters'),title:$('#activeTitle'),eyebrow:$('#activeEyebrow'),search:$('#searchInput'),suggestions:$('#suggestions'),empty:$('#empty'),drawer:$('#drawer'),backdrop:$('#backdrop'),preview:$('#drawerPreview'),tags:$('#drawerTags'),metaDetails:$('#drawerMetaDetails'),fav:$('#drawerFav'),tabs:$('#codeTabs'),code:$('#codeOutput'),toast:$('#toast'),typeControls:$('#typeControls'),trashDock:$('#trashDock'),copyVariant:$('#copyVariant'),packFilter:$('#packFilter'),renderCount:$('#renderCount')};
const sourceById=Object.fromEntries((window.librarySources||[]).map(s=>[s.id,s]));
const duplicateReport=window.LibraryValidator?.findDuplicates(samples)||[];
const synonyms={'زر':'button','ازرار':'button','أزرار':'button','button':'button','buttons':'button','بطاقة':'card','بطاقات':'card','كرت':'card','card':'card','cards':'card','حقل':'input','ادخال':'input','إدخال':'input','input':'input','نموذج':'form','نماذج':'form','form':'form','قائمة':'menu','قوائم':'menu','menu':'menu','dropdown':'menu','تنقل':'nav','هيدر':'nav','navbar':'nav','navigation':'nav','nav':'nav','تحميل':'loader','loader':'loader','تقدم':'progress','progress':'progress','نافذة':'modal','منبثقة':'modal','modal':'modal','تبويب':'tabs','tabs':'tabs','اكورديون':'accordion','أكورديون':'accordion','accordion':'accordion','حركة':'animated','متحرك':'animated','متحركة':'animated','animation':'animated','animated':'animated','انيميشن':'animated','هوفر':'hover','hover':'hover','مرور':'hover','المؤشر':'hover','أسود':'dark','اسود':'dark','داكن':'dark','dark':'dark','أزرق':'blue','ازرق':'blue','blue':'blue','زجاجي':'glass','زجاج':'glass','شفاف':'glass','glass':'glass','blur':'glass','نيون':'neon','neon':'neon','توهج':'glow','متوهج':'glow','glow':'glow','بسيط':'minimal','نظيف':'minimal','minimal':'minimal','لوحة':'dashboard','لوحه':'dashboard','داشبورد':'dashboard','dashboard':'dashboard','kpi':'dashboard','متدرج':'gradient','gradient':'gradient','بحث':'search','search':'search','موبايل':'mobile','هاتف':'mobile','mobile':'mobile','سهل':'basic','basic':'basic','متوسط':'intermediate','intermediate':'intermediate','متقدم':'advanced','advanced':'advanced','بوب':'popup','بوباب':'popup','بوب اب':'popup','popup':'popup','toast':'toast','توست':'toast','tooltip':'tooltip','تلميح':'tooltip','popover':'popover','اشعار':'notification','إشعار':'notification','notification':'notification','حذف':'delete','delete':'delete','سلة':'trash','مهملات':'trash','trash':'trash','استعاده':'restore','استعادة':'restore'};
function norm(t=''){return String(t).toLowerCase().replace(/[أإآ]/g,'ا').replace(/ة/g,'ه').replace(/[ًٌٍَُِّْـ]/g,'').replace(/[^\u0000-\u007F\u0600-\u06FF]+/g,' ').trim()}
function tokens(t){return norm(t).split(/\s+/).filter(Boolean).map(x=>synonyms[x]||x)}
function persist(){localStorage.setItem('lib-favs',JSON.stringify([...state.favorites]));localStorage.setItem('lib-recent',JSON.stringify(state.recent));localStorage.setItem('lib-cols',JSON.stringify(state.collections));localStorage.setItem('lib-usage',JSON.stringify(state.usage));localStorage.setItem('lib-trash',JSON.stringify([...state.trash]));localStorage.setItem('lib-purged',JSON.stringify([...state.purged]))}

function packOf(s){
  if(window.LibraryRegistry?.packOf)return window.LibraryRegistry.packOf(s);
  if(/jitter/i.test(s.sourceReference)||/^(JIT|J2|J3)-/.test(s.id))return'jitter';
  if(/^DEV-(DSY|PRL|FLW|NIN)-/.test(s.id))return'foundations';
  if(/^DEV-(ACT|RBT|ANM)-/.test(s.id))return'motion';
  if(/^DEV-ORG-/.test(s.id))return'origin';
  return'core';
}
function catalogMeta(){return globalThis.LibraryRegistry?.index||samples}
function metaAvailable(s){return !state.trash.has(s.id)&&!state.purged.has(s.id)}
function packCount(id){return catalogMeta().filter(s=>metaAvailable(s)&&(id==='all'||packOf(s)===id)).length}
function syncPackFilter(){
  if(!el.packFilter)return;
  const labels={all:'All Packs',core:'Core',jitter:'Jitter',foundations:'Foundations',motion:'Motion',origin:'Origin'};
  [...el.packFilter.options].forEach(o=>{o.textContent=`${labels[o.value]} · ${packCount(o.value)}`;});
  el.packFilter.value=state.pack;
}

function available(s){return !state.trash.has(s.id)&&!state.purged.has(s.id)}
function use(s){return Number(state.usage[s.id]||0)}
function catUse(id){return samples.filter(s=>s.category===id&&available(s)&&(state.pack==='all'||packOf(s)===state.pack)).reduce((a,s)=>a+use(s),0)}
