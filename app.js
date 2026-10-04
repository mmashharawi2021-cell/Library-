(()=>{
'use strict';
const D=window.UI_AR_DATA;
const app=document.querySelector('#app');
if(!D||!app){return;}

const BASE='/Library-/';
const RELEASE='V41'; document.documentElement.dataset.release=RELEASE;
const DEMO_CONTRACTS=Object.freeze({"data-table":"click","bottom-navigation":"click","timeline":"static","presence-indicator":"static","message-bubble":"static","steps":"click","avatar-group":"hover","multi-select":"form","scrollspy":"scroll","alert-callout-banner":"static","sign-in-form":"form","pagination":"click","date-picker":"click","parallax-scrolling":"scroll","carousel":"click","site-header-nav":"click","card":"click","resize-handle":"drag","hamburger-menu":"click","bento-grid":"static","masonry":"static","easing":"static","spring-animation":"click","text-scramble":"auto","lightbox":"click","marquee":"hover","form-field":"form","truncation":"static","drag-drop":"drag","divider-separator-rule":"static","progress-indicators":"click","toast":"click","modal-drawer-sheet":"static","popover-dropdown-tooltip":"mixed","scrim":"click","skeleton-spinner":"click","combobox":"form","command-palette":"form","accordion":"click","tabs":"click","badge-chip-pill-tag":"click","breadcrumbs":"click","sticky-fixed":"scroll","focus-ring-web":"form","empty-state":"click","hover-card":"hover","switch-checkbox-radio":"form","toggle-group":"click","three-dots":"click","insertion-caret":"pointer","pointer":"hover","alert-macos":"click","slider-macos":"drag","color-well":"click","mac-window":"click","split-view":"drag","scroll-view":"scroll","search-field-macos":"form","save-panel":"form","token-field":"form","combo-button":"click","level-indicator":"click","column-view":"click","outline-view":"click","menu-bar":"click","context-menu":"context","disclosure-triangle":"click","dock-badge":"click","focus-ring-macos":"form","inspector":"form","panel":"drag","popover-macos":"click","popup-pulldown-combobox":"form","segmented-control":"click","sheet-macos":"click","sidebar-macos":"click","stepper-macos":"click","toolbar-macos":"click","traffic-lights":"click","vibrancy":"static","menu-bar-extra":"click"});

const initialQuery=(()=>{try{return new URLSearchParams(location.search).get('q')||''}catch{return''}})();
const state={q:initialQuery,cat:'all',sort:'newest'};
const norm=s=>(s||'').toLowerCase().normalize('NFD')
  .replace(/[\u064B-\u065F\u0670]/g,'')
  .replace(/[أإآ]/g,'ا').replace(/ى/g,'ي').replace(/ة/g,'ه')
  .replace(/[^\p{L}\p{N}]+/gu,' ').trim();
const esc=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));
const bySlug=slug=>D.entries.find(e=>e.slug===slug);

// Editorial fixes found during the parity audit.
const patches={
  'bottom-navigation':{code:'UITabBar / TabView / NavigationBar',aliases:['تبويبات سفلية','Bottom Tabs','Bottom Navigation','Tab Bar','شريط تبويب سفلي']},
  'panel':{aliases:['نافذة أدوات','لوحة مساعدة','Utility Window','HUD','Floating Panel']},
  'three-dots':{aliases:['قائمة المزيد','Overflow Menu','Meatballs Menu','Kebab Menu','Command Ellipsis','More Actions']},
  'alert-callout-banner':{aliases:['تنبيه داخلي','Inline Alert','Callout','Banner','شريط إشعار داخل الصفحة']},
  'popover-dropdown-tooltip':{aliases:['Popover','Dropdown Menu','Tooltip','تلميح','قائمة إجراءات','نافذة مرتبطة بعنصر']},
  'scrim':{aliases:['Backdrop','Overlay','طبقة خلفية','طبقة تعتيم','الخلفية الداكنة خلف النافذة']},
  'truncation':{aliases:['Ellipsis','Line Clamp','ثلاث نقاط','اقتطاع','النص المقطوع']},
  'presence-indicator':{aliases:['Online Dot','Presence Dot','Status Dot','نقطة متصل','نقطة الحالة']}
};
for(const [slug,p] of Object.entries(patches)){
  const e=bySlug(slug); if(e) Object.assign(e,p);
}
const inspector=D.translations.find(x=>x.thing==='الفاحص');
if(inspector) inspector.appkit='NSSplitViewItem.Behavior.inspector / NSInspectorBar / NSPanel';

function setMeta(title,desc,urlPath='',indexable=true){
  document.title=title;
  const absolute=`https://mmashharawi2021-cell.github.io${BASE}${urlPath}`;
  const set=(sel,attr,val)=>{let el=document.querySelector(sel);if(!el){el=document.createElement('meta');if(sel.includes('property='))el.setAttribute('property',sel.match(/"([^"]+)"/)?.[1]||'');else el.setAttribute('name',sel.match(/"([^"]+)"/)?.[1]||'');document.head.appendChild(el)}el.setAttribute(attr,val)};
  let md=document.querySelector('meta[name="description"]');if(!md){md=document.createElement('meta');md.name='description';document.head.appendChild(md)}md.content=desc;
  set('meta[name="robots"]','content',indexable?'index,follow,max-image-preview:large':'noindex,follow');
  set('meta[property="og:title"]','content',title);
  set('meta[property="og:description"]','content',desc);
  set('meta[property="og:url"]','content',absolute);
  set('meta[name="twitter:card"]','content','summary');
  set('meta[name="twitter:title"]','content',title);
  set('meta[name="twitter:description"]','content',desc);
  let canonical=document.querySelector('link[rel="canonical"]');
  if(!canonical){canonical=document.createElement('link');canonical.rel='canonical';document.head.appendChild(canonical)}
  canonical.href=absolute;
}

const nav=(active='elements')=>`<div class="sponsor-strip"><div class="shell sponsor-inner"><span>الراعي</span><a href="https://namethatui.com/sponsorship" target="_blank" rel="noopener">اسمك هنا · $500/شهر</a></div></div>
<header class="sitehead"><div class="shell headrow">
<a class="brand" href="${BASE}"><strong>ui بالعربي</strong></a>
<nav class="navlinks" aria-label="التنقل الرئيسي"><a class="${active==='elements'?'active':''}" href="${BASE}">العناصر</a><a class="${active==='styles'?'active':''}" href="${BASE}styles/">الأنماط</a></nav>
</div></header>`;
const footer=()=>`<footer class="footer"><div class="shell footgrid">
<div class="footer-brandblock"><a class="footbrand" href="${BASE}">ui بالعربي</a><p>القاموس البصري لعناصر واجهة المستخدم</p></div>
<div class="footer-shipping"><small>مصطلحات جديدة تُضاف باستمرار</small><a class="rss-button" href="${BASE}feed.xml">تابع عبر RSS</a><nav class="footlinks"><a href="${BASE}vs/">العناصر المتشابهة</a><a href="${BASE}methodology/">المنهجية</a><a href="https://namethatui.com/sponsorship" target="_blank" rel="noopener">الرعاية</a></nav></div>
<div class="footer-search"><b>بحث</b><label><input id="footerSearch" inputmode="search" autocomplete="off" placeholder="صف عنصر الواجهة الذي تفكر فيه"></label></div>
</div></footer><div id="glossary" class="glossary" role="status"></div>`;

function bindChrome(){
 const go=q=>{
   state.q=(q||'').trim();
   const target=BASE+(state.q?'?q='+encodeURIComponent(state.q):'');
   if(location.pathname!==BASE||location.hash){location.href=target;return}
   const hero=document.querySelector('#search');
   if(hero){hero.value=state.q;hero.dispatchEvent(new Event('input',{bubbles:true}));hero.focus()}
 };
 const fs=document.querySelector('#footerSearch');
 if(fs)fs.onkeydown=e=>{if(e.key==='Enter')go(fs.value)};
 document.onkeydown=e=>{
   if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){
     e.preventDefault();
     document.querySelector('#search')?.focus();
   }
 };
}
function demo(e,large=false){
  const s=e.slug;
  const cls=`ui-demo ${large?'large':''} demo-${s}`;
  const wrap=x=>{const contract=DEMO_CONTRACTS[s]||'static';const tab=contract==='static'||contract==='auto'?'':' tabindex="0"';return `<div class="${cls}" data-demo-slug="${esc(s)}" data-demo-contract="${contract}"${tab} role="group" aria-label="معاينة لـ ${esc(e.ar)}">${x}</div>`};
  switch(s){
    case 'data-table': return wrap(`<div class="nt-table" dir="ltr"><div class="nt-table-head"><span>Customer</span><span>Status</span><span>Amount</span></div><div><span>Northwind</span><em>Paid</em><b>$4,280</b></div><div><span>Acme Co</span><em class="late">Overdue</em><b>$2,940</b></div><div><span>Globex</span><em class="pending">Pending</em><b>$1,860</b></div><div><span>Initech</span><em>Paid</em><b>$1,215</b></div><div><span>Umbrella</span><em>Paid</em><b>$640</b></div></div>`);
    case 'bottom-navigation': return wrap(`<div class="nt-phone" dir="ltr"><div class="nt-phone-glow"></div><div class="nt-tabs"><span class="on">⌂<small>Home</small></span><span>⌕<small>Search</small></span><span class="inbox">▣<i>3</i><small>Inbox</small></span><span>○<small>Profile</small></span></div><div class="nt-homebar"></div></div>`);
    case 'timeline': return wrap(`<div class="nt-timeline" dir="ltr"><div><time>09:12</time><i></i><p><b>Order placed</b><small>3 items</small></p></div><div><time>09:13</time><i></i><p><b>Payment confirmed</b><small>Visa ending 4242</small></p></div><div><time>14:40</time><i></i><p><b>Shipped</b><small>Left the warehouse</small></p></div><div><time>Today</time><i></i><p><b>Out for delivery</b><small>Arriving by 6 pm</small></p></div></div>`);
    case 'presence-indicator': return wrap(`<div class="nt-presence" dir="ltr"><span class="nt-avatar">AR<i></i></span><div><b>Ava Reyes</b><small>Online</small></div></div>`);
    case 'message-bubble': return wrap(`<div class="nt-chat" dir="ltr"><p class="incoming">Are we still on for 3?</p><p class="outgoing">Yes! Booking the room now</p><small>2:41 PM · Delivered</small><span class="typing">•••</span></div>`);
    case 'steps': return wrap(`<div class="nt-steps" dir="ltr"><span class="done">✓<small>Cart</small></span><i></i><span class="done">✓<small>Shipping</small></span><i></i><span class="active">3<small>Payment</small></span><i></i><span>4<small>Review</small></span></div>`);
    case 'avatar-group': return wrap(`<div class="nt-avatars" dir="ltr"><span class="a1">AR</span><span class="a2">JT</span><span class="a3">MK</span><span class="a4">DK</span><span class="more">+4</span></div>`);
    case 'multi-select': return wrap(`<div class="nt-multiselect" dir="ltr"><div class="nt-selecttop"><b>2 selected</b><span>⌄</span></div><label><i class="check">✓</i> Design</label><label><i class="check">✓</i> Research</label><label><i></i> Ops</label><label><i></i> Sales</label></div>`);
    case 'scrollspy': return wrap(`<div class="docs"><aside><b>في هذه الصفحة</b><button type="button" class="on" data-section="0">نظرة عامة</button><button type="button" data-section="1">الإعداد</button><button type="button" data-section="2">الأمثلة</button></aside><div class="doclines" tabindex="0"><section><strong>نظرة عامة</strong><i></i><i></i><i></i></section><section><strong>الإعداد</strong><i></i><i></i><i></i></section><section><strong>الأمثلة</strong><i></i><i></i><i></i></section></div></div>`);
    case 'alert-callout-banner': return wrap(`<div class="notice-stack"><div class="banner">تنبيه عام يمتد بعرض الصفحة</div><div class="callout-demo"><b>ملاحظة</b><span>معلومة مهمة داخل السياق.</span></div><div class="inline-alert">⚠ بطاقتك ستنتهي خلال 3 أيام.</div></div>`);
    case 'sign-in-form': return wrap(`<div class="signin"><b>تسجيل الدخول</b><button>G&nbsp; متابعة باستخدام Google</button><div class="or"><i></i><span>أو</span><i></i></div><label>البريد<input value="user@example.com"></label><label>كلمة المرور<input type="password" value="password"></label><button class="primary">دخول</button></div>`);
    case 'pagination': return wrap(`<div class="pagination"><button>‹</button><button class="on">1</button><button>2</button><button>3</button><span>…</span><button>8</button><button>›</button></div>`);
    case 'date-picker': return wrap(`<div class="calendar"><div class="range">5 يوليو – 16 يوليو 2026</div><b>يوليو 2026</b><div class="week"><span>س</span><span>ح</span><span>ن</span><span>ث</span><span>ر</span><span>خ</span><span>ج</span>${Array.from({length:21},(_,i)=>`<i class="${i>4&&i<16?'sel':''}">${i+1}</i>`).join('')}</div></div>`);
    case 'parallax-scrolling': return wrap(`<div class="parallax-ref" tabindex="0" aria-label="اسحب عموديًا لتجربة Parallax"><div class="parallax-layer back">Field notes</div><div class="parallax-layer mid">Trail map</div><div class="parallax-layer front">Packing list</div><span class="parallax-axis">scroll / swipe ↓</span></div>`);
    case 'carousel': return wrap(`<div class="carousel-ref" dir="ltr"><button>‹</button><div class="carousel-strip"><article class="on"><b>Dunes</b><small>1 / 3</small></article><article><b>Reef</b><small>2 / 3</small></article><article><b>Meadow</b><small>3 / 3</small></article></div><button>›</button><div class="carousel-dots"><i class="on"></i><i></i><i></i></div></div>`);
    case 'site-header-nav': return wrap(`<div class="site-ref" dir="ltr"><header><b>Field Notes</b><nav><span>Home</span><span>Docs</span><span>Pricing</span></nav><button>Sign in</button></header><div class="site-ref-body"><span>Header</span><i></i><span>Navigation bar</span></div></div>`);
    case 'card': return wrap(`<article class="visual-card"><div class="media">صورة</div><small>دراسة حالة</small><b>إعادة تصميم الدفع</b><p>ملخص قصير يشرح المحتوى.</p><footer><span class="story-link">اقرأ القصة</span><button type="button">مشاركة</button></footer></article>`);
    case 'resize-handle': return wrap(`<div class="resize-ref"><label for="feedback-box-${large?'detail':'card'}">Feedback</label><textarea id="feedback-box-${large?'detail':'card'}" class="resize-box" aria-label="Feedback">The export button is hard to find…</textarea><button type="button">Send</button></div>`);
    case 'hamburger-menu': return wrap(`<div class="drawer-demo"><button class="hamb">☰</button><aside><b>Field Notes</b><span>تصفح</span><span>الرئيسية</span><span>المقالات</span><span>الأرشيف</span></aside><div class="shade"></div></div>`);
    case 'bento-grid': return wrap(`<div class="bento"><div class="wide"><small>الإيراد</small><b>$48.2k</b></div><div><small>المستخدمون</small><b>2.4k</b></div><div><small>النمو</small><b>↑ 12%</b></div><div class="tall"><small>اليوم</small><b>+9</b><span>تسجيلات جديدة</span></div></div>`);
    case 'masonry': return wrap(`<div class="masonry"><i style="height:54px">1</i><i style="height:92px">2</i><i style="height:70px">3</i><i style="height:44px">4</i><i style="height:82px">5</i><i style="height:58px">6</i></div>`);
    case 'easing': return wrap(`<div class="curve"><svg viewBox="0 0 200 100"><path d="M10 90 C40 90, 55 10, 190 10"/><circle cx="10" cy="90" r="5"/><circle cx="190" cy="10" r="5"/></svg><div><span>بطيء</span><span>سريع</span></div></div>`);
    case 'spring-animation': return wrap(`<div class="spring"><div class="springline"></div><div class="ball">●</div><span>يتجاوز الهدف ثم يستقر</span></div>`);
    case 'text-scramble': return wrap(`<div class="scramble"><span>NAME</span><b>T#AT U!</b><small>الحروف العشوائية تستقر إلى النص</small></div>`);
    case 'lightbox': return wrap(`<div class="lightbox"><div class="thumb">صور الرحلة</div><div class="scrim-demo"></div><div class="photo"><button>×</button><b>الكثبان</b><span>صورة مكبّرة</span></div></div>`);
    case 'marquee': return wrap(`<div class="marquee"><div>▲ Vertex　● Orbit　■ Quadra　✦ Nova　◆ Prism　▲ Vertex　● Orbit</div></div>`);
    case 'form-field': return wrap(`<div class="field-demo"><label>البريد الإلكتروني <b>*</b><input placeholder="name@example.com"></label><small>سنستخدمه لتسجيل الدخول فقط.</small><label class="error">الاسم<input value=""><em>هذا الحقل مطلوب</em></label></div>`);
    case 'truncation': return wrap(`<div class="truncate"><code>text-overflow: ellipsis</code><p class="one">تمت إعادة جدولة اجتماع المراجعة الفصلية إلى مساء الجمعة</p><code>line-clamp: 2</code><p class="two">يتضمن هذا التحديث تحسينات على المزامنة وإصلاحات لمشكلات العمل دون اتصال وإضافة اختصارات لوحة المفاتيح.</p></div>`);
    case 'drag-drop': return wrap(`<div class="kanban"><div data-dropzone><b>للعمل</b><span draggable="true" data-drag-card tabindex="0" aria-grabbed="false">☷ كتابة المقدمة</span><span draggable="true" data-drag-card tabindex="0" aria-grabbed="false">☷ إرسال المسودة</span></div><div data-dropzone><b>قيد المراجعة</b><span class="ghost" draggable="true" data-drag-card tabindex="0" aria-grabbed="false">☷ إصلاح الرأس</span><i>أسقط هنا</i></div></div>`);
    case 'divider-separator-rule': return wrap(`<div class="rules"><span>مقطع محتوى</span><hr><span>مقطع جديد</span><div class="menurow">قص <i></i> نسخ <i></i> لصق</div><div class="decorative"></div></div>`);
    case 'progress-indicators': return wrap(`<div class="progresses"><button type="button" class="progress-trigger">متابعة المهمة</button><div><i class="spinner"></i><small>انتظار</small></div><div><i class="ring"><b>65%</b></i><small>حلقة تقدم</small></div><div><progress value="65" max="100"></progress><small>شريط تقدم</small></div></div>`);
    case 'toast': return wrap(`<div class="workspace"><span>مساحة العمل</span><button type="button" class="toast-trigger">حفظ التغييرات</button><div class="toast-demo" role="status" aria-live="polite">✓ تم حفظ التغييرات</div></div>`);
    case 'modal-drawer-sheet': return wrap(`<div class="triple"><div><b>Modal</b><span class="modal-mini">حذف الملف؟<small>إلغاء　حذف</small></span></div><div><b>Drawer</b><span class="drawer-mini">تعديل التفاصيل</span></div><div><b>Sheet</b><span class="sheet-mini">مشاركة مع…</span></div></div>`);
    case 'popover-dropdown-tooltip': return wrap(`<div class="overlay-kinds"><button>الفلاتر</button><div class="popover-demo">Popover<br><label>☑ نشط فقط</label></div><button>الإجراءات⌄</button><div class="dropdown-demo">إعادة تسمية<br>حذف</div><button class="info" aria-expanded="false">i<span>آخر تحديث اليوم</span></button></div>`);
    case 'scrim': return wrap(`<div class="scrim-scene"><div class="pagegrid"><i></i><i></i><i></i><i></i></div><button type="button" class="scrim-open">فتح النافذة</button><div class="scrim-demo" aria-hidden="true"></div><div class="modal-surface" role="dialog" aria-modal="true"><b>سطح Modal</b><p>الطبقة الشفافة خلف هذه البطاقة هي Scrim.</p><button type="button" class="scrim-close">إغلاق</button></div></div>`);
    case 'skeleton-spinner': return wrap(`<div class="loading-pair"><button type="button" class="loading-trigger">إعادة التحميل</button><div><b>Skeleton</b><span class="skeleton a"></span><span class="skeleton"></span><span class="skeleton short"></span></div><div><b>Spinner</b><i class="spinner big"></i></div><div class="loaded-content" aria-live="polite">تم تحميل المحتوى</div></div>`);
    case 'combobox': return wrap(`<div class="combo"><label>الفاكهة المفضلة<input value="تف"></label><div class="suggest"><b>تفاح</b><span>تفاح أخضر</span><span>تفاح أحمر</span></div></div>`);
    case 'command-palette': return wrap(`<div class="cmd"><div class="cmdsearch"><kbd>⌘ K</kbd> ابحث عن أمر…</div><div><span>إنشاء مشروع جديد <kbd>⌘ N</kbd></span><span>دعوة زميل <kbd>⌘ I</kbd></span><span>فتح الإعدادات <kbd>⌘ ,</kbd></span></div></div>`);
    case 'accordion': return wrap(`<div class="accordion"><details open><summary>ما هو المكوّن؟</summary><p>جزء قابل لإعادة الاستخدام.</p></details><details><summary>ما هو Design Token؟</summary></details><details><summary>لماذا نسمّي الأنماط؟</summary></details></div>`);
    case 'tabs': return wrap(`<div class="tabs-demo"><div role="tablist"><button class="on">نظرة عامة</button><button>التحليلات</button></div><section><b>النشاط الأسبوعي</b><strong>1,248</strong><small>+12% عن الأسبوع الماضي</small></section></div>`);
    case 'badge-chip-pill-tag': return wrap(`<div class="label-types"><span class="badge-demo">7</span><button class="chip-demo">تصميم ×</button><span class="pill-demo">نشط</span><span class="tag-demo">Web</span><small>شارة　شريحة　كبسولة　وسم</small></div>`);
    case 'breadcrumbs': return wrap(`<nav class="crumb-demo" aria-label="breadcrumb"><span>الرئيسية</span><i>›</i><span>المكونات</span><i>›</i><b>الأزرار</b></nav>`);
    case 'sticky-fixed': return wrap(`<div class="scroll-box"><span class="sticky-demo">position: sticky</span><div class="longtext"></div><span class="fixed-demo">fixed</span></div>`);
    case 'focus-ring-web': return wrap(`<div class="focusset"><button>رجوع</button><button class="focused">متابعة</button><button>حفظ</button><code>:focus-visible</code></div>`);
    case 'empty-state': return wrap(`<div class="empty"><div class="emptyicon">□</div><b>لا توجد مشاريع بعد</b><p>أنشئ مشروعك الأول للبدء.</p><button>مشروع جديد</button></div>`);
    case 'hover-card': return wrap(`<div class="hovercard"><button type="button" class="hover-trigger" aria-describedby="hover-profile-${large?'detail':'card'}" aria-expanded="false">@jane</button><div id="hover-profile-${large?'detail':'card'}" class="profile" role="tooltip"><span>J</span><b>Jane Appleseed</b><small>@jane</small><p>مهندسة نظم تصميم.</p><em>Toronto · 2.4k</em></div></div>`);
    case 'switch-checkbox-radio': return wrap(`<div class="choice-types"><label><i class="switch on"></i> Switch</label><label><input type="checkbox" checked> Checkbox</label><label><input type="radio" checked> Radio</label></div>`);
    case 'toggle-group': return wrap(`<div class="toggle-group"><button>يسار</button><button class="on">وسط</button><button>يمين</button></div>`);
    case 'three-dots': return wrap(`<div class="overflow-demo"><div><button>•••</button><small>Meatballs</small><menu><span>إعادة تسمية</span><span>تكرار</span><span>حذف</span></menu></div><div><button>⋮</button><small>Kebab</small></div><div><button>☰</button><small>Hamburger</small></div><div><button>…</button><small>Ellipsis</small></div></div>`);

    case 'insertion-caret': return wrap(`<div class="mac-text">Name that U<span class="caret"></span>I</div>`);
    case 'pointer': return wrap(`<div class="cursors"><span class="arrow">↖</span><span class="ibeam">I</span><span class="cross">＋</span><span class="hand">☝</span><small>Arrow · I-beam · Crosshair · Pointing hand</small></div>`);
    case 'alert-macos': return wrap(`<div class="mac-alert"><div class="appicon">!</div><section><b>إفراغ سلة المهملات؟</b><p>لا يمكن التراجع عن هذا الإجراء.</p><div><button>إلغاء</button><button class="primary">إفراغ</button></div></section></div>`);
    case 'slider-macos': return wrap(`<div class="mac-control"><b>الصوت <output>62%</output></b><input class="slider-native" type="range" min="0" max="100" value="62" aria-label="الصوت"></div>`);
    case 'color-well': return wrap(`<div class="mac-control"><b>التعبئة</b><button class="colorwell"><i></i> إظهار الألوان…</button></div>`);
    case 'mac-window': return wrap(`<div class="mac-window"><div class="titlebar"><span class="traffic"><i></i><i></i><i></i></span><b>الملاحظات</b></div><div class="mac-content"><aside>قائمة جانبية</aside><main>محتوى النافذة</main></div></div>`);
    case 'split-view': return wrap(`<div class="mac-window"><div class="titlebar"><span class="traffic"><i></i><i></i><i></i></span><b>البريد</b></div><div class="split"><aside>الوارد<br>المرسل<br>المسودات</aside><i class="splitter" role="separator" tabindex="0" aria-orientation="vertical"></i><main>رسالة محددة</main></div></div>`);
    case 'scroll-view': return wrap(`<div class="scrollview"><div class="scroll-content" tabindex="0">Journal<br>${'سطر من المحتوى<br>'.repeat(12)}</div><span class="scroller"><i></i></span></div>`);
    case 'search-field-macos': return wrap(`<div class="mac-search"><span>⌕</span><input placeholder="بحث…"><button>×</button><div class="recent"><b>عمليات بحث حديثة</b><span>invoices 2026</span><span>receipts</span><span>tax</span></div></div>`);
    case 'save-panel': return wrap(`<div class="savepanel"><b>حفظ باسم:</b><input value="تقرير.pages"><label>المكان: <button>📁 Documents⌄</button></label><div class="files"><span>📁 Desktop</span><span>📁 Documents</span><span>📁 Downloads</span></div><footer><button>إلغاء</button><button class="primary">حفظ</button></footer></div>`);
    case 'token-field': return wrap(`<div class="tokenfield"><label>الوسوم:</label><span>Design ×</span><span>Q3 ×</span><input value="Rep"></div>`);
    case 'combo-button': return wrap(`<div class="combo-button"><button>حفظ</button><button>⌄</button><menu><span>حفظ باسم…</span><span>حفظ الكل</span><span>تصدير…</span></menu></div>`);
    case 'level-indicator': return wrap(`<div class="levels"><label>التقييم <span class="stars">★★★★☆</span></label><label>السعة <span class="capacity"><i style="width:72%"></i></span></label><label>الصلة <span class="dotslevel">●●●○○</span></label></div>`);
    case 'column-view': return wrap(`<div class="columns"><div><button type="button">📁 Projects</button><button type="button">📁 Archive</button><button type="button">📁 NameThat</button></div><div><button type="button">📁 content</button><button type="button">📁 research</button><button type="button">📁 assets</button></div><div><button type="button">📄 index</button><button type="button">📄 styles</button><button type="button">📄 data</button></div></div>`);
    case 'outline-view': return wrap(`<div class="outline"><span>▾ Library</span><span class="in1">▾ 📁 Projects</span><span class="in2">▾ 📁 NameThat</span><span class="in3">📄 content</span><span class="in3">📄 FeelBench</span></div>`);
    case 'menu-bar': return wrap(`<div class="menubar"><b>Finder</b><span>ملف</span><span>تحرير</span><span>عرض</span><span>نافذة</span><span>مساعدة</span><i></i><small>9:41</small><div class="macmenu"><span>فتح… <kbd>⌘O</kbd></span><span>الإعدادات… <kbd>⌘,</kbd></span><hr><span>إنهاء <kbd>⌘Q</kbd></span></div></div>`);
    case 'context-menu': return wrap(`<div class="fileitem" tabindex="0" aria-haspopup="menu" aria-expanded="false">📁 Projects<div class="context" role="menu"><span role="menuitem">فتح <kbd>⌘O</kbd></span><span role="menuitem">إعادة تسمية…</span><span role="menuitem">تكرار ›</span><hr><span role="menuitem">نقل إلى سلة المهملات</span></div></div>`);
    case 'disclosure-triangle': return wrap(`<div class="finder-list"><span>▾ 📁 Documents</span><span class="indent">📄 Q3 Report.pages</span><span class="indent">📄 Notes.md</span><span>▸ 📁 Downloads</span></div>`);
    case 'dock-badge': return wrap(`<div class="dock"><div class="dockicon">UI<span>3</span></div><div class="dockicon muted">N</div><div class="dockicon muted">S</div></div>`);
    case 'focus-ring-macos': return wrap(`<div class="mac-focus"><input placeholder="بحث"><button class="macfocused">حفظ</button><small>حلقة التركيز تتبع لون Accent في النظام</small></div>`);
    case 'inspector': return wrap(`<div class="inspector-scene"><main><b>Slides</b><div class="canvas"></div></main><aside><b>Style</b><label>Fill <input type="color" value="#6699cc"></label><label>Border <input value="1 px"></label><label>Shadow <input type="checkbox" checked></label></aside></div>`);
    case 'panel': return wrap(`<div class="panel-scene"><div class="docwin">المحرر</div><div class="floating-panel"><div class="titlebar"><span class="traffic"><i></i><i></i><i></i></span><b>الألوان</b></div><div class="colorgrid">${'<i></i>'.repeat(16)}</div></div></div>`);
    case 'popover-macos': return wrap(`<div class="mac-popover"><button>Now Playing</button><div class="bubble"><i></i><b>🎵 Night Drive</b><span>2:41 / 4:30</span><button>إيقاف مؤقت</button></div></div>`);
    case 'popup-pulldown-combobox': return wrap(`<div class="mac-pickers"><label>الحجم <button>Medium　⌄</button><small>Pop-up</small></label><label>إضافة <button>ملف جديد…　⌄</button><small>Pull-down</small></label><label>الخط <input value="Avenir"><span>⌄</span><small>Combo Box</small></label></div>`);
    case 'segmented-control': return wrap(`<div class="segmented"><button>يوم</button><button class="on">أسبوع</button><button>شهر</button><button>سنة</button></div>`);
    case 'sheet-macos': return wrap(`<div class="mac-window sheet-scene"><div class="titlebar"><span class="traffic"><i></i><i></i><i></i></span><b>Documents</b></div><div class="attached-sheet"><b>حذف “Q3 Report”؟</b><p>سيتم حظر هذه النافذة فقط.</p><footer><button>إلغاء</button><button>حذف</button></footer></div></div>`);
    case 'sidebar-macos': return wrap(`<div class="source-list"><aside><b>المفضلة</b><span class="on">◷ Recents</span><span>▣ Desktop</span><span>▤ Documents</span><span>↓ Downloads</span></aside><main>المحتوى</main></div>`);
    case 'stepper-macos': return wrap(`<div class="stepper"><label>النسخ: <input value="2"><span><button>⌃</button><button>⌄</button></span></label></div>`);
    case 'toolbar-macos': return wrap(`<div class="mac-window"><div class="unified"><span class="traffic"><i></i><i></i><i></i></span><b>Notes</b><nav><button>＋</button><button>↗</button><button>⌕</button></nav></div><div class="mac-content">محتوى المستند</div></div>`);
    case 'traffic-lights': return wrap(`<div class="traffic-large"><i></i><i></i><i></i><span>إغلاق　تصغير　تكبير/ملء الشاشة</span></div>`);
    case 'vibrancy': return wrap(`<div class="wallpaper"><div class="vibrant"><b>Vibrancy مفعّل</b><p>الخلفية تتسرب عبر المادة الضبابية بتكيف مع اللون.</p></div></div>`);
    case 'menu-bar-extra': return wrap(`<div class="menubar"><b>Finder</b><i></i><span>◉</span><span>⌁</span><span>☁</span><small>9:41</small><div class="statusmenu"><b>NameThat</b><span>فتح التطبيق</span><span>التحقق من التحديثات…</span><span>الإعدادات…</span><hr><span>إنهاء</span></div></div>`);
    default: return wrap(`<div class="fallback-demo"><b>${esc(e.ar)}</b><span>${esc(e.en)}</span><code>${esc(e.code)}</code></div>`);
  }
}

const entryPath=e=>`${e.category}/${e.slug}/`;
const entryHref=e=>`${BASE}${entryPath(e)}`;
function card(e){return `<article class="entry-card" data-slug="${esc(e.slug)}"><div class="entry-preview">${demo(e)}</div><div class="entry-body"><div class="entry-head"><h3><a class="entry-link" href="${entryHref(e)}">${esc(e.ar)} <span dir="ltr">(${esc(e.en)})</span>${e.new?'<em>NEW</em>':''}</a></h3><small>${e.category==='web'?'WEB':'MACOS'}</small></div><code class="entry-code">${esc(e.code)}</code><p>${esc(e.description)}</p></div></article>`}
function searchMatches(e,q){if(!q)return true;const hay=norm([e.ar,e.en,e.code,e.description,...(e.aliases||[])].join(' '));return norm(q).split(' ').filter(Boolean).every(x=>hay.includes(x))}
function bindGlossary(){
  const box=document.querySelector('#glossary');if(!box)return;
  document.ondblclick=ev=>{
    if(ev.target.closest('input,textarea,select,button'))return;
    const w=(getSelection()?.toString()||'').trim();
    if(!w)return;
    const key=Object.keys(D.glossary||{}).find(k=>norm(k)===norm(w));
    const def=key?D.glossary[key]:null;
    box.innerHTML=def?`<b>${esc(key)}</b><p>${esc(def)}</p><a href="#/glossary">افتح قاموس المصطلحات ←</a>`:`<b>${esc(w)}</b><p>لا يوجد تعريف سريع محفوظ لهذا المصطلح بعد.</p><a href="#/glossary">ابحث في قاموس المصطلحات ←</a>`;
    box.style.display='block';
    const maxLeft=Math.max(10,innerWidth-Math.min(330,innerWidth-20)-10);
    box.style.left=Math.max(10,Math.min(maxLeft,ev.clientX))+'px';
    box.style.top=Math.max(70,Math.min(innerHeight-150,ev.clientY+14))+'px';
    clearTimeout(window.__gto);window.__gto=setTimeout(()=>box.style.display='none',4800);
  };
}
function bindCopy(){document.querySelectorAll('[data-copy]').forEach(b=>b.onclick=async()=>{const t=decodeURIComponent(b.dataset.copy);try{await navigator.clipboard.writeText(t);b.textContent='تم النسخ';setTimeout(()=>b.textContent='نسخ',1200)}catch{}})}
function bindDetailActions(e){
 const save=document.querySelector('[data-detail-save]');
 const share=document.querySelector('[data-detail-share]');
 const copy=document.querySelector('[data-detail-copy]');
 const readSaved=()=>{try{return JSON.parse(localStorage.getItem('saved-ui-ar')||'[]')}catch{return[]}};
 const writeSaved=ids=>{try{localStorage.setItem('saved-ui-ar',JSON.stringify(ids))}catch{}};
 const syncSave=()=>{
   if(!save)return;
   const on=readSaved().includes(e.slug);
   save.classList.toggle('is-saved',on);
   save.textContent=on?'★ محفوظ':'☆ حفظ';
   save.setAttribute('aria-pressed',on?'true':'false');
 };
 if(save){
   syncSave();
   save.onclick=()=>{
     const ids=readSaved();
     const next=ids.includes(e.slug)?ids.filter(x=>x!==e.slug):[...ids,e.slug];
     writeSaved(next);syncSave();
   };
 }
 const copyUrl=async(btn,label='تم النسخ')=>{
   try{
     await navigator.clipboard.writeText(location.href);
     const old=btn.textContent;btn.textContent=label;setTimeout(()=>btn.textContent=old,1200);
   }catch{}
 };
 if(copy)copy.onclick=()=>copyUrl(copy,'تم نسخ الرابط');
 if(share)share.onclick=async()=>{
   if(navigator.share){
     try{await navigator.share({title:`${e.ar} — ${e.en}`,text:e.description,url:location.href});return}catch{}
   }
   copyUrl(share,'تم نسخ الرابط');
 };
}
function bindDemos(root=document){
 if(!root)return;
 const demos=[...root.querySelectorAll('.ui-demo')];
 const record=(demo,action)=>{if(!demo||!action)return;demo.dataset.interactionCount=String(Number(demo.dataset.interactionCount||0)+1);demo.dataset.demoState=action};
 const choose=(box,selector,target)=>{[...box.querySelectorAll(selector)].forEach(x=>x.classList.toggle('v37-selected',x===target))};
 const setCarousel=(box,next)=>{const slides=[...box.querySelectorAll('.carousel-strip article')],dots=[...box.querySelectorAll('.carousel-dots i')];if(!slides.length)return;let index=(next+slides.length)%slides.length;box.dataset.index=String(index);slides.forEach((x,i)=>x.classList.toggle('on',i===index));dots.forEach((x,i)=>x.classList.toggle('on',i===index));box.style.setProperty('--slide-index',index)};
 const scrambleNow=el=>{if(!el)return;const final='THAT UI',chars='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#?!*';let frame=0;clearInterval(el.__timer);el.__timer=setInterval(()=>{const reveal=Math.floor(frame/2);el.textContent=[...final].map((ch,i)=>ch===' '?' ':i<reveal?ch:chars[Math.floor(Math.random()*chars.length)]).join('');frame++;if(reveal>=final.length){clearInterval(el.__timer);el.textContent=final}},45)};
 demos.forEach(d=>{if(!d.dataset.semanticBound){d.dataset.semanticBound='1';d.dataset.interactionCount='0';d.dataset.demoState='idle'}});

 if(!root.__semanticBound){
  root.__semanticBound=true;

  root.addEventListener('click',ev=>{
   if(!ev.target.closest('.demo-context-menu .fileitem'))closeContextMenus?.();
   root.querySelectorAll('.demo-hover-card .hovercard.v41-touch-open').forEach(box=>{if(!box.contains(ev.target)){box.classList.remove('v41-touch-open');box.querySelector('.hover-trigger')?.setAttribute('aria-expanded','false')}});

   const demo=ev.target.closest('.ui-demo');if(!demo||!root.contains(demo))return;
   const s=demo.dataset.demoSlug||'',t=ev.target;let action='';
   switch(s){
    case 'data-table':{const head=t.closest('.nt-table-head span'),row=t.closest('.nt-table>div:not(.nt-table-head)');if(head){const table=head.closest('.nt-table'),rows=[...table.children].slice(1),dir=table.dataset.sortDir==='asc'?'desc':'asc',col=[...head.parentElement.children].indexOf(head);table.dataset.sortDir=dir;rows.sort((x,y)=>{const A=x.children[col]?.textContent.replace(/[$,]/g,'').trim()||'',B=y.children[col]?.textContent.replace(/[$,]/g,'').trim()||'',an=Number(A),bn=Number(B),v=Number.isNaN(an)||Number.isNaN(bn)?A.localeCompare(B):an-bn;return dir==='asc'?v:-v}).forEach(x=>table.appendChild(x));[...head.parentElement.children].forEach(x=>x.classList.toggle('v37-sorted',x===head));action='sort'}else if(row){row.classList.toggle('v37-selected');action='select-row'}break}
    case 'bottom-navigation':{const item=t.closest('.nt-tabs>*');if(item){item.parentElement.querySelectorAll(':scope>*').forEach(x=>x.classList.remove('on'));item.classList.add('on');action='navigate'}break}
    case 'steps':{const step=t.closest('.nt-steps>span');if(step){const all=[...step.parentElement.querySelectorAll(':scope>span')],i=all.indexOf(step);all.forEach((x,n)=>{x.classList.toggle('done',n<i);x.classList.toggle('active',n===i)});action='step'}break}
    case 'multi-select':{const label=t.closest('.nt-multiselect label');if(label){label.classList.toggle('checked');const i=label.querySelector('i');if(i){i.classList.toggle('check');i.textContent=label.classList.contains('checked')?'✓':''}const box=label.closest('.nt-multiselect'),n=box.querySelectorAll('label.checked').length,b=box.querySelector('.nt-selecttop b');if(b)b.textContent=n+' selected';action='multi-select'}break}
    case 'scrollspy':{const btn=t.closest('.docs aside button');if(btn){const sc=demo.querySelector('.doclines'),i=Number(btn.dataset.section||0),sections=[...(sc?.querySelectorAll('section')||[])];if(sc&&sections.length){const max=Math.max(0,sc.scrollHeight-sc.clientHeight),top=sections.length>1?max*(i/(sections.length-1)):0;sc.scrollTo({top,behavior:'smooth'})}action='scrollspy-nav'}break}
    case 'sign-in-form':{const btn=t.closest('.signin button');if(btn){const form=btn.closest('.signin');if(btn.classList.contains('primary')){const inputs=form.querySelectorAll('input');btn.disabled=true;btn.textContent='جارٍ الدخول…';setTimeout(()=>{btn.disabled=false;btn.textContent=(inputs[0]?.value&&inputs[1]?.value)?'تم الدخول ✓':'أكمل الحقول';form.classList.toggle('v37-success',!!(inputs[0]?.value&&inputs[1]?.value))},350);action='submit'}else{btn.textContent='تم الاتصال ✓';action='oauth'}}break}
    case 'pagination':{const btn=t.closest('.pagination button');if(btn){const box=btn.closest('.pagination'),buttons=[...box.querySelectorAll('button')],pages=buttons.slice(1,-1);let i=Math.max(0,pages.findIndex(x=>x.classList.contains('on')));if(btn===buttons[0])i=Math.max(0,i-1);else if(btn===buttons.at(-1))i=Math.min(pages.length-1,i+1);else i=pages.indexOf(btn);pages.forEach((x,n)=>x.classList.toggle('on',n===i));action='paginate'}break}
    case 'date-picker':{const day=t.closest('.calendar .week i');if(day){day.classList.toggle('sel');action='pick-date'}break}
    case 'carousel':{const box=demo.querySelector('.carousel-ref'),buttons=[...box.querySelectorAll(':scope>button')],dots=[...box.querySelectorAll('.carousel-dots i')],btn=t.closest('.carousel-ref > button'),dot=t.closest('.carousel-dots i');let i=Number(box.dataset.index||0);if(btn)i+=btn===buttons[0]?-1:1;else if(dot)i=dots.indexOf(dot);else{break}setCarousel(box,i);action='carousel';break}
    case 'site-header-nav':{const nav=t.closest('.site-ref nav span'),btn=t.closest('.site-ref header button');if(nav){choose(nav.parentElement,'span',nav);action='site-nav'}else if(btn){btn.classList.toggle('v37-selected');btn.textContent=btn.classList.contains('v37-selected')?'Signed in':'Sign in';action='site-signin'}break}
    case 'card':{const btn=t.closest('.visual-card button'),link=t.closest('.story-link');if(btn){btn.textContent=btn.textContent.includes('✓')?'مشاركة':'تمت المشاركة ✓';action='share'}else if(link){link.classList.toggle('v37-selected');action='open-story'}break}
    case 'resize-handle':{if(t.closest('.resize-ref>button')){t.textContent='Sent ✓';action='send'}break}
    case 'hamburger-menu':{const x=t.closest('.hamb,.drawer-demo .shade');if(x){demo.querySelector('.drawer-demo')?.classList.toggle('open');action='drawer'}break}
    case 'spring-animation':{if(t.closest('.ball')){const box=demo.querySelector('.spring');box?.classList.remove('v37-replay');void box?.offsetWidth;box?.classList.add('v37-replay');action='spring-replay'}break}
    case 'lightbox':{const thumb=t.closest('.thumb'),close=t.closest('.photo button,.lightbox>.scrim-demo'),box=demo.querySelector('.lightbox');if(thumb){box?.classList.add('v39-open');action='lightbox-open'}else if(close){box?.classList.remove('v39-open');action='lightbox-close'}break}
    case 'hover-card':{const trigger=t.closest('.hover-trigger');if(trigger){const box=trigger.closest('.hovercard'),open=!box.classList.contains('v41-touch-open');box.classList.toggle('v41-touch-open',open);trigger.setAttribute('aria-expanded',open?'true':'false');action=open?'hover-touch-open':'hover-touch-close'}break}
    case 'avatar-group':{const avatar=t.closest('.nt-avatars>span');if(avatar){choose(avatar.parentElement,':scope>span',avatar);avatar.classList.add('v41-avatar-active');action='avatar-touch'}break}
    case 'marquee':{const m=t.closest('.marquee');if(m){m.classList.toggle('v41-paused');action=m.classList.contains('v41-paused')?'marquee-pause':'marquee-resume'}break}
    case 'pointer':{const cursor=t.closest('.cursors>span:not(small)');if(cursor){choose(cursor.parentElement,':scope>span:not(small)',cursor);cursor.classList.add('v41-selected');action='pointer-touch'}break}
    case 'form-field':{const input=t.closest('.field-demo input');if(input){input.focus();action='field-focus'}break}
    case 'progress-indicators':{const btn=t.closest('.progress-trigger');if(btn){const box=demo.querySelector('.progresses'),p=box.querySelector('progress'),ring=box.querySelector('.ring b');let v=Number(p?.value||0)+15;if(v>100)v=20;if(p)p.value=v;if(ring)ring.textContent=v+'%';action='progress'}break}
    case 'toast':{const btn=t.closest('.toast-trigger');if(btn){const box=demo.querySelector('.workspace');box.classList.add('v39-show-toast');clearTimeout(box.__toastTimer);box.__toastTimer=setTimeout(()=>box.classList.remove('v39-show-toast'),1600);action='toast'}break}
    case 'popover-dropdown-tooltip':{const box=demo.querySelector('.overlay-kinds'),info=t.closest('.overlay-kinds>.info'),btn=t.closest('.overlay-kinds>button:not(.info)');if(info){const open=box.dataset.open!=='tooltip';if(open)box.dataset.open='tooltip';else box.removeAttribute('data-open');info.setAttribute('aria-expanded',open?'true':'false');action=open?'tooltip-touch-open':'tooltip-touch-close'}else if(btn){const buttons=[...box.querySelectorAll(':scope>button:not(.info)')],i=buttons.indexOf(btn);box.dataset.open=i===0?'popover':'dropdown';action=box.dataset.open}else if(!t.closest('.popover-demo,.dropdown-demo')){box.removeAttribute('data-open');action='overlay-close'}break}
    case 'scrim':{const scene=demo.querySelector('.scrim-scene');if(t.closest('.scrim-open')){scene.classList.add('v39-open');action='scrim-open'}else if(t.closest('.scrim-close,.scrim-demo')){scene.classList.remove('v39-open');action='scrim-close'}break}
    case 'skeleton-spinner':{const btn=t.closest('.loading-trigger');if(btn){const box=demo.querySelector('.loading-pair');box.classList.remove('v39-loaded');btn.disabled=true;btn.textContent='جارٍ التحميل…';setTimeout(()=>{box.classList.add('v39-loaded');btn.disabled=false;btn.textContent='إعادة التحميل'},650);action='loading'}break}
    case 'combobox':{const option=t.closest('.suggest>*'),input=demo.querySelector('.combo input');if(option&&input){input.value=option.textContent.trim();demo.querySelector('.combo')?.classList.add('v37-picked');action='combobox-pick'}else if(input){input.focus();demo.querySelector('.combo')?.classList.toggle('v37-open');action='combobox-open'}break}
    case 'command-palette':{const cmd=t.closest('.cmd>div:last-child>span');if(cmd){choose(cmd.parentElement,'span',cmd);action='command'}break}
    case 'accordion':{const summary=t.closest('.accordion summary');if(summary){ev.preventDefault();summary.parentElement.open=!summary.parentElement.open;action='accordion'}break}
    case 'tabs':{const btn=t.closest('.tabs-demo button');if(btn){const box=btn.closest('.tabs-demo');box.querySelectorAll('button').forEach(x=>x.classList.remove('on'));btn.classList.add('on');const active=btn.textContent.trim()==='التحليلات';box.querySelector('section b').textContent=active?'مؤشرات التحليلات':'النشاط الأسبوعي';box.querySelector('section strong').textContent=active?'86%':'1,248';action='tab'}break}
    case 'badge-chip-pill-tag':{const chip=t.closest('.chip-demo'),badge=t.closest('.badge-demo');if(chip){chip.classList.toggle('v37-muted');action='chip'}else if(badge){badge.textContent=String((Number(badge.textContent)||0)+1);action='badge'}break}
    case 'breadcrumbs':{const x=t.closest('.crumb-demo span,.crumb-demo b');if(x){choose(x.parentElement,'span,b',x);action='breadcrumb'}break}
    case 'focus-ring-web':{const btn=t.closest('.focusset button');if(btn){btn.focus();action='focus-ring'}break}
    case 'empty-state':{const btn=t.closest('.empty button');if(btn){const box=btn.closest('.empty');box.classList.toggle('v37-created');box.querySelector('b').textContent=box.classList.contains('v37-created')?'تم إنشاء مشروع':'لا توجد مشاريع بعد';btn.textContent=box.classList.contains('v37-created')?'تراجع':'مشروع جديد';action='empty-state'}break}
    case 'switch-checkbox-radio':{const sw=t.closest('.switch');if(sw){sw.classList.toggle('on');action='switch'}break}
    case 'toggle-group':{const btn=t.closest('.toggle-group button');if(btn){btn.parentElement.querySelectorAll('button').forEach(x=>x.classList.remove('on'));btn.classList.add('on');action='toggle'}break}
    case 'three-dots':{const btn=t.closest('.overflow-demo button');if(btn){const slot=btn.parentElement,was=slot.classList.contains('v37-menuopen');btn.closest('.overflow-demo').querySelectorAll(':scope>div').forEach(x=>x.classList.remove('v37-menuopen'));slot.classList.toggle('v37-menuopen',!was);action='overflow-menu'}break}
    case 'alert-macos':{const btn=t.closest('.mac-alert button');if(btn){const box=btn.closest('.mac-alert');box.dataset.choice=btn.classList.contains('primary')?'confirm':'cancel';box.classList.add('v37-resolved');action='alert-choice'}break}
    case 'color-well':{const b=t.closest('.colorwell');if(b){const colors=['#ff5f57','#6699cc','#5ccf7a','#f2c94c','#b76cff'];let i=(Number(b.dataset.color||0)+1)%colors.length;b.dataset.color=String(i);b.querySelector('i').style.background=colors[i];action='color'}break}
    case 'mac-window':{const dot=t.closest('.traffic i');if(dot){const win=dot.closest('.mac-window'),i=[...dot.parentElement.children].indexOf(dot);win.classList.remove('v37-closed','v37-minimized','v37-zoomed');win.classList.add(i===0?'v37-closed':i===1?'v37-minimized':'v37-zoomed');action='window-control'}break}
    case 'search-field-macos':{const input=demo.querySelector('.mac-search input'),clear=t.closest('.mac-search button'),recent=t.closest('.recent span');if(clear&&input){input.value='';input.focus();action='clear-search'}else if(recent&&input){input.value=recent.textContent.trim();action='recent-search'}break}
    case 'save-panel':{const file=t.closest('.files span'),btn=t.closest('.savepanel footer button'),place=t.closest('.savepanel label button');if(file){choose(file.parentElement,'span',file);action='folder'}else if(place){place.classList.toggle('v37-selected');action='location'}else if(btn){const box=btn.closest('.savepanel');box.dataset.result=btn.classList.contains('primary')?'saved':'cancelled';btn.textContent=btn.classList.contains('primary')?'تم الحفظ ✓':'تم الإلغاء';action='save-panel'}break}
    case 'token-field':{const tok=t.closest('.tokenfield>span');if(tok){tok.remove();action='token-remove'}else demo.querySelector('.tokenfield input')?.focus();break}
    case 'combo-button':{const box=demo.querySelector('.combo-button'),btn=t.closest('.combo-button button'),item=t.closest('.combo-button menu span');if(item){box.querySelector('button').textContent=item.textContent.replace('…','');box.classList.remove('v37-open');action='combo-action'}else if(btn){if(btn===box.querySelectorAll('button')[1])box.classList.toggle('v37-open');else btn.textContent=btn.textContent.includes('✓')?'حفظ':'تم الحفظ ✓';action='combo-button'}break}
    case 'level-indicator':{const stars=t.closest('.stars'),cap=t.closest('.capacity'),dots=t.closest('.dotslevel');if(stars){stars.textContent=stars.textContent==='★★★★★'?'★★★☆☆':'★★★★★';action='rating'}else if(cap){const i=cap.querySelector('i');i.style.width=i.style.width==='90%'?'42%':'90%';action='capacity'}else if(dots){dots.textContent=dots.textContent==='●●●●●'?'●●○○○':'●●●●●';action='level'}break}
    case 'column-view':{const btn=t.closest('.columns button');if(btn){const col=btn.parentElement,box=btn.closest('.columns'),cols=[...box.children],i=cols.indexOf(col);col.querySelectorAll('button').forEach(x=>x.classList.toggle('on',x===btn));box.dataset.column=String(Math.min(i+1,2));action='column-select'}break}
    case 'outline-view':{const row=t.closest('.outline span');if(row){row.classList.toggle('v37-selected');if(row.textContent.includes('▾'))row.textContent=row.textContent.replace('▾','▸');else if(row.textContent.includes('▸'))row.textContent=row.textContent.replace('▸','▾');action='outline'}break}
    case 'menu-bar':{const box=demo.querySelector('.menubar'),item=t.closest('.menubar>span');if(item){box.classList.toggle('v37-open');choose(box,':scope>span',item);action='menu-bar'}break}
    case 'disclosure-triangle':{const row=t.closest('.finder-list>span:not(.indent)');if(row){const open=row.textContent.includes('▾');row.textContent=row.textContent.replace(open?'▾':'▸',open?'▸':'▾');demo.querySelector('.finder-list')?.classList.toggle('v37-collapsed',open);action='disclosure'}break}
    case 'dock-badge':{const icon=t.closest('.dockicon');if(icon){choose(icon.parentElement,'.dockicon',icon);action='dock'}break}
    case 'focus-ring-macos':{const btn=t.closest('.mac-focus button');if(btn){btn.focus();action='mac-focus'}break}
    case 'popover-macos':{if(t.closest('.mac-popover > button,.mac-popover .bubble button')){demo.querySelector('.mac-popover')?.classList.toggle('v37-open');action='popover'}break}
    case 'popup-pulldown-combobox':{const x=t.closest('.mac-pickers label');if(x){choose(x.parentElement,'label',x);x.classList.toggle('v37-open');action='picker'}break}
    case 'segmented-control':{const btn=t.closest('.segmented button');if(btn){btn.parentElement.querySelectorAll('button').forEach(x=>x.classList.remove('on'));btn.classList.add('on');action='segment'}break}
    case 'sheet-macos':{const btn=t.closest('.attached-sheet button');if(btn){btn.closest('.attached-sheet').classList.add('v37-resolved');action='sheet'}break}
    case 'sidebar-macos':{const row=t.closest('.source-list aside span');if(row){row.parentElement.querySelectorAll('span').forEach(x=>x.classList.remove('on'));row.classList.add('on');const main=row.closest('.source-list').querySelector('main');if(main)main.textContent=row.textContent.trim();action='sidebar'}break}
    case 'stepper-macos':{const btn=t.closest('.stepper button'),input=demo.querySelector('.stepper input');if(btn&&input){let n=Number(input.value)||0;n+=btn===btn.parentElement.querySelector('button')?1:-1;input.value=String(Math.max(0,n));action='stepper'}break}
    case 'toolbar-macos':{const btn=t.closest('.unified nav button');if(btn){choose(btn.parentElement,'button',btn);action='toolbar'}break}
    case 'traffic-lights':{const dot=t.closest('.traffic-large i');if(dot){const box=dot.closest('.traffic-large'),i=[...dot.parentElement.children].indexOf(dot);box.dataset.windowAction=['close','minimize','zoom'][i]||'zoom';action='traffic-light'}break}
    case 'menu-bar-extra':{const box=demo.querySelector('.menubar'),item=t.closest('.menubar>span');if(item){box.classList.toggle('v37-status-open');choose(box,':scope>span',item);action='menu-bar-extra'}break}
   }
   if(action)record(demo,action);
  },true);

  const closeContextMenus=()=>root.querySelectorAll('.demo-context-menu .fileitem').forEach(item=>{item.classList.remove('v39-open','v41-touch-open');item.setAttribute('aria-expanded','false')});
  root.addEventListener('contextmenu',ev=>{const demo=ev.target.closest('.demo-context-menu');if(!demo||!root.contains(demo))return;ev.preventDefault();closeContextMenus();const item=demo.querySelector('.fileitem');item?.classList.add('v39-open');item?.setAttribute('aria-expanded','true');record(demo,'context-open')},true);
  let longPress=null;
  const cancelLongPress=()=>{if(longPress?.timer)clearTimeout(longPress.timer);longPress=null};
  root.addEventListener('pointerdown',ev=>{if(ev.pointerType!=='touch')return;const item=ev.target.closest?.('.demo-context-menu .fileitem');if(!item)return;cancelLongPress();const demo=item.closest('.ui-demo'),sx=ev.clientX,sy=ev.clientY,pid=ev.pointerId;longPress={pid,sx,sy,timer:setTimeout(()=>{closeContextMenus();item.classList.add('v39-open','v41-touch-open');item.setAttribute('aria-expanded','true');record(demo,'context-longpress');longPress=null},520)}},true);
  root.addEventListener('pointermove',ev=>{if(longPress&&ev.pointerId===longPress.pid&&Math.hypot(ev.clientX-longPress.sx,ev.clientY-longPress.sy)>10)cancelLongPress()},true);
  root.addEventListener('pointerup',ev=>{if(longPress&&ev.pointerId===longPress.pid)cancelLongPress()},true);
  root.addEventListener('pointercancel',cancelLongPress,true);

  root.addEventListener('pointerenter',ev=>{
   const hover=ev.target.closest?.('.demo-hover-card .hover-trigger');if(hover){hover.closest('.hovercard')?.classList.add('v39-open');record(hover.closest('.ui-demo'),'hover-open')}
   const marquee=ev.target.closest?.('.demo-marquee .marquee');if(marquee)marquee.classList.add('v39-paused');
   const info=ev.target.closest?.('.demo-popover-dropdown-tooltip .info');if(info)info.closest('.overlay-kinds').dataset.open='tooltip';
   const cursor=ev.target.closest?.('.demo-pointer .cursors>span');if(cursor)cursor.parentElement.querySelectorAll(':scope>span').forEach(x=>x.classList.toggle('cursor-live',x===cursor));
  },true);
  root.addEventListener('pointerleave',ev=>{
   const hover=ev.target.closest?.('.demo-hover-card .hovercard');if(hover)hover.classList.remove('v39-open');
   const marquee=ev.target.closest?.('.demo-marquee .marquee');if(marquee)marquee.classList.remove('v39-paused');
   const info=ev.target.closest?.('.demo-popover-dropdown-tooltip .info');if(info)info.closest('.overlay-kinds').removeAttribute('data-open');
  },true);
  root.addEventListener('focusin',ev=>{const h=ev.target.closest?.('.demo-hover-card .hover-trigger');if(h)h.closest('.hovercard')?.classList.add('v39-open')},true);
  root.addEventListener('focusout',ev=>{const h=ev.target.closest?.('.demo-hover-card .hover-trigger');if(h)setTimeout(()=>h.closest('.hovercard')?.classList.remove('v39-open'),0)},true);

  root.addEventListener('scroll',ev=>{
   const sc=ev.target;
   if(sc.matches?.('.demo-scrollspy .doclines')){const demo=sc.closest('.ui-demo'),sections=[...sc.querySelectorAll('section')],buttons=[...demo.querySelectorAll('.docs aside button')],max=Math.max(1,sc.scrollHeight-sc.clientHeight),ratio=Math.max(0,Math.min(1,sc.scrollTop/max)),idx=Math.min(sections.length-1,Math.round(ratio*Math.max(0,sections.length-1)));buttons.forEach((b,i)=>b.classList.toggle('on',i===idx));record(demo,'scrollspy-scroll')}
   if(sc.matches?.('.demo-scroll-view .scroll-content')){const demo=sc.closest('.ui-demo'),thumb=demo.querySelector('.scroller i'),max=Math.max(1,sc.scrollHeight-sc.clientHeight),pct=sc.scrollTop/max;if(thumb)thumb.style.transform='translateY('+Math.round(pct*30)+'px)';record(demo,'scroll-view')}
  },true);

  root.addEventListener('wheel',ev=>{const par=ev.target.closest?.('.demo-parallax-scrolling .parallax-ref');if(par){ev.preventDefault();const v=Math.max(-35,Math.min(35,Number(par.dataset.offset||0)+Math.sign(ev.deltaY)*5));par.dataset.offset=String(v);par.style.setProperty('--parallax',v);record(par.closest('.ui-demo'),'parallax-scroll')}},{capture:true,passive:false});
  let touchParallax=null;
  root.addEventListener('pointerdown',ev=>{if(ev.pointerType!=='touch')return;const par=ev.target.closest?.('.demo-parallax-scrolling .parallax-ref');if(!par)return;touchParallax={pid:ev.pointerId,par,demo:par.closest('.ui-demo'),startY:ev.clientY,start:Number(par.dataset.offset||0)};par.setPointerCapture?.(ev.pointerId)},true);
  root.addEventListener('pointermove',ev=>{if(!touchParallax||ev.pointerId!==touchParallax.pid)return;ev.preventDefault();const delta=(touchParallax.startY-ev.clientY)*.34,v=Math.max(-35,Math.min(35,touchParallax.start+delta));touchParallax.par.dataset.offset=String(v);touchParallax.par.style.setProperty('--parallax',v)},{capture:true,passive:false});
  const finishParallax=ev=>{if(touchParallax&&(!ev||ev.pointerId===touchParallax.pid)){record(touchParallax.demo,'parallax-swipe');touchParallax=null}};
  root.addEventListener('pointerup',finishParallax,true);root.addEventListener('pointercancel',finishParallax,true);

  let drag=null;
  root.addEventListener('pointerdown',ev=>{
   const splitter=ev.target.closest?.('.demo-split-view .splitter'),title=ev.target.closest?.('.demo-panel .floating-panel .titlebar'),caret=ev.target.closest?.('.demo-insertion-caret .mac-text');
   if(splitter){ev.preventDefault();const split=splitter.closest('.split'),r=split.getBoundingClientRect();drag={type:'split',demo:splitter.closest('.ui-demo'),box:split,left:r.left,width:r.width};splitter.setPointerCapture?.(ev.pointerId)}
   else if(title){ev.preventDefault();const panel=title.closest('.floating-panel');drag={type:'panel',demo:title.closest('.ui-demo'),box:panel,startX:ev.clientX,startY:ev.clientY,x:Number(panel.dataset.x||0),y:Number(panel.dataset.y||0)};title.setPointerCapture?.(ev.pointerId)}
   else if(caret){const r=caret.getBoundingClientRect(),x=Math.max(0,Math.min(r.width,ev.clientX-r.left)),c=caret.querySelector('.caret');if(c){c.style.left=x+'px';c.style.right='auto'}record(caret.closest('.ui-demo'),'caret-place')}
  },true);
  root.addEventListener('pointermove',ev=>{if(!drag)return;if(drag.type==='split'){const pct=Math.max(22,Math.min(70,(ev.clientX-drag.left)/drag.width*100)),aside=drag.box.querySelector('aside'),main=drag.box.querySelector('main');aside.style.width=pct+'%';main.style.width=(100-pct)+'%'}else if(drag.type==='panel'){const x=drag.x+ev.clientX-drag.startX,y=drag.y+ev.clientY-drag.startY;drag.box.dataset.x=String(x);drag.box.dataset.y=String(y);drag.box.style.transform='translate('+x+'px,'+y+'px)'}},true);
  const finishDrag=()=>{if(drag){record(drag.demo,drag.type+'-drag');drag=null}};
  root.addEventListener('pointerup',finishDrag,true);root.addEventListener('pointercancel',finishDrag,true);

  root.addEventListener('dragstart',ev=>{const card=ev.target.closest?.('.demo-drag-drop [draggable="true"]');if(card){card.classList.add('v39-dragging');ev.dataTransfer?.setData('text/plain',card.textContent);window.__demoDragCard=card}},true);
  root.addEventListener('dragover',ev=>{const zone=ev.target.closest?.('.demo-drag-drop [data-dropzone]');if(zone){ev.preventDefault();zone.classList.add('v39-dragover')}},true);
  root.addEventListener('dragleave',ev=>{ev.target.closest?.('[data-dropzone]')?.classList.remove('v39-dragover')},true);
  root.addEventListener('drop',ev=>{const zone=ev.target.closest?.('.demo-drag-drop [data-dropzone]'),card=window.__demoDragCard;if(zone&&card){ev.preventDefault();zone.appendChild(card);zone.classList.remove('v39-dragover');card.classList.remove('v39-dragging');record(zone.closest('.ui-demo'),'drop');window.__demoDragCard=null}},true);
  root.addEventListener('dragend',()=>{window.__demoDragCard?.classList.remove('v39-dragging');window.__demoDragCard=null},true);

  let touchCard=null;
  const clearTouchZones=()=>root.querySelectorAll('.demo-drag-drop [data-dropzone]').forEach(z=>z.classList.remove('v41-touch-over'));
  const finishTouchCard=(commit=true)=>{
    if(!touchCard)return;
    const {card,demo,zone}=touchCard;
    card.classList.remove('v41-touch-dragging');
    card.style.removeProperty('--touch-dx');card.style.removeProperty('--touch-dy');
    card.setAttribute('aria-grabbed','false');
    clearTouchZones();
    if(commit&&zone&&!zone.contains(card)){zone.appendChild(card);record(demo,'touch-drop')}
    touchCard=null;
  };
  root.addEventListener('pointerdown',ev=>{if(ev.pointerType!=='touch')return;const card=ev.target.closest?.('.demo-drag-drop [data-drag-card]');if(!card)return;ev.preventDefault();const demo=card.closest('.ui-demo'),r=card.getBoundingClientRect();touchCard={pid:ev.pointerId,card,demo,startX:ev.clientX,startY:ev.clientY,originX:r.left,originY:r.top,zone:card.closest('[data-dropzone]')};card.classList.add('v41-touch-dragging');card.setAttribute('aria-grabbed','true');card.setPointerCapture?.(ev.pointerId)}, {capture:true,passive:false});
  root.addEventListener('pointermove',ev=>{if(!touchCard||ev.pointerId!==touchCard.pid)return;ev.preventDefault();const dx=ev.clientX-touchCard.startX,dy=ev.clientY-touchCard.startY;touchCard.card.style.setProperty('--touch-dx',dx+'px');touchCard.card.style.setProperty('--touch-dy',dy+'px');clearTouchZones();const zone=document.elementsFromPoint(ev.clientX,ev.clientY).find(x=>x.matches?.('.demo-drag-drop [data-dropzone]'));if(zone){zone.classList.add('v41-touch-over');touchCard.zone=zone}}, {capture:true,passive:false});
  root.addEventListener('pointerup',ev=>{if(touchCard&&ev.pointerId===touchCard.pid)finishTouchCard(true)},true);
  root.addEventListener('pointercancel',ev=>{if(touchCard&&ev.pointerId===touchCard.pid)finishTouchCard(false)},true);

  root.addEventListener('input',ev=>{const range=ev.target.closest?.('.demo-slider-macos .slider-native');if(range){const demo=range.closest('.ui-demo'),out=range.closest('.mac-control')?.querySelector('output');if(out)out.textContent=range.value+'%';record(demo,'slider-change');return}const demo=ev.target.closest?.('.demo-inspector');if(!demo)return;const canvas=demo.querySelector('.canvas');if(ev.target.type==='color')canvas.style.background=ev.target.value;else if(ev.target.type==='checkbox')canvas.style.boxShadow=ev.target.checked?'0 8px 18px rgba(0,0,0,.22)':'none';else canvas.style.borderWidth=Math.max(0,parseFloat(ev.target.value)||0)+'px';record(demo,'inspector-change')},true);

  let touchSlider=null;
  const updateTouchSlider=(range,clientX)=>{
    const r=range.getBoundingClientRect(),min=Number(range.min||0),max=Number(range.max||100),step=Number(range.step||1)||1;
    let ratio=Math.max(0,Math.min(1,(clientX-r.left)/Math.max(1,r.width)));
    if(getComputedStyle(range).direction==='rtl')ratio=1-ratio;
    const raw=min+ratio*(max-min),value=Math.max(min,Math.min(max,Math.round(raw/step)*step));
    if(Number(range.value)!==value){range.value=String(value);range.dispatchEvent(new Event('input',{bubbles:true}))}
  };
  root.addEventListener('pointerdown',ev=>{if(ev.pointerType!=='touch')return;const range=ev.target.closest?.('.demo-slider-macos .slider-native');if(!range)return;ev.preventDefault();touchSlider={pid:ev.pointerId,range,demo:range.closest('.ui-demo')};range.setPointerCapture?.(ev.pointerId);updateTouchSlider(range,ev.clientX)}, {capture:true,passive:false});
  root.addEventListener('pointermove',ev=>{if(!touchSlider||ev.pointerId!==touchSlider.pid)return;ev.preventDefault();updateTouchSlider(touchSlider.range,ev.clientX)}, {capture:true,passive:false});
  const finishTouchSlider=ev=>{if(touchSlider&&(!ev||ev.pointerId===touchSlider.pid)){record(touchSlider.demo,'slider-touch-drag');touchSlider=null}};
  root.addEventListener('pointerup',finishTouchSlider,true);root.addEventListener('pointercancel',finishTouchSlider,true);

  root.addEventListener('keydown',ev=>{if(ev.key==='Escape'){root.querySelectorAll('.v39-open').forEach(x=>x.classList.remove('v39-open'));root.querySelectorAll('.overlay-kinds[data-open]').forEach(x=>x.removeAttribute('data-open'))}},true);
 }

 if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
 demos.forEach(demo=>{const slug=demo.dataset.demoSlug;if(demo.dataset.autoBound)return;demo.dataset.autoBound='1';if(slug==='text-scramble'){const el=demo.querySelector('.scramble b');if(el)setInterval(()=>scrambleNow(el),3600)}if(slug==='carousel'){const box=demo.querySelector('.carousel-ref');if(box)setInterval(()=>setCarousel(box,Number(box.dataset.index||0)+1),4200)}});
}

function bindHeroMotion(){
 const input=document.querySelector('#search');if(!input||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
 const prompts=['صف العنصر الذي تفكر فيه…','الخلفية الداكنة خلف نافذة منبثقة…','النقطة التي تسحبها لتغيير الصوت…','النص الذي ينتهي بثلاث نقاط…','الشريط الذي يبقى ظاهرًا عند التمرير…'];
 let i=0;
 const tick=()=>{if(document.activeElement!==input&&!input.value){input.classList.add('placeholder-swap');setTimeout(()=>{input.placeholder=prompts[i=(i+1)%prompts.length];input.classList.remove('placeholder-swap')},180)}};
 setInterval(tick,3400);
}
function home(platformOverride){
 if(platformOverride==='web'||platformOverride==='macos')state.cat=platformOverride;
 if(platformOverride==='all')state.cat='all';
 const platformPath=platformOverride==='web'||platformOverride==='macos'?platformOverride+'/':'';
 setMeta('ما اسم عنصر الواجهة هذا؟ — UI بالعربي','القاموس البصري العربي لعناصر واجهة المستخدم. صف العنصر بطريقتك للوصول إلى اسمه الحقيقي ورمز التنفيذ.',platformPath);
 const fresh=['data-table','bottom-navigation','timeline'].map(bySlug).filter(Boolean);
 const newest=['data-table','bottom-navigation','timeline','presence-indicator','message-bubble'];
 const rank=new Map(newest.map((s,i)=>[s,i]));
 const examples=[
   'الخلفية الشاحبة خلف أيقونة في شريط القوائم',
   'الطبقة الداكنة الشفافة خلف نافذة منبثقة',
   'النص الرمادي داخل الحقل الذي يختفي عند الكتابة',
   'النقطة التي تسحبها لتغيير مستوى الصوت',
   'النص يُقطع بثلاث نقاط'
 ];
 app.innerHTML=nav('elements')+`<main id="main"><section class="hero shell">
 <div class="newweek"><b>جديد هذا الأسبوع</b><div>${fresh.map(e=>`<a href="${entryHref(e)}">${esc(e.ar)} <span dir="ltr">(${esc(e.en)})</span></a>`).join('')}</div></div>
 <h1>ما اسم عنصر الواجهة هذا<span class="qmark">؟</span></h1>
 <p class="hero-copy">القاموس البصري لعناصر UI. صف الشيء بكلماتك العادية؛ تحصل على الاسم الحقيقي، رمز الـAPI، وPrompt جاهز لوكيل البرمجة.</p>
 <div class="search-examples" aria-label="أمثلة لوصف العناصر">${examples.map(x=>`<span>“${esc(x)}”</span>`).join('')}</div>
 <label class="hero-search"><input id="search" autocomplete="off" inputmode="search" aria-label="صف عنصر الواجهة" placeholder="صف عنصر الواجهة الذي تفكر فيه" value="${esc(state.q)}"></label>
 <div id="searchEmpty" class="search-empty" hidden><b>لا شيء يطابق هذا الوصف</b><p>جرّب وصف شكله أو مكانه — مثل «النقاط أسفل عرض الشرائح» أو «الشريط الذي يبقى ظاهرًا أثناء التمرير».</p></div>
 <div class="hero-help"><span>لا تعرف اسم المظهر أيضًا؟ <a href="${BASE}styles/">جرّب Name That Vibe</a></span><span>اضغط مرتين على أي كلمة لعرض تعريف عربي سريع.</span></div>
 </section>
 <section class="catalog shell"><div class="catalog-toolbar"><div class="filter-tabs"><button class="${state.cat==='all'?'active':''}" data-cat="all">الكل <span>${D.entries.length}</span></button><button class="${state.cat==='macos'?'active':''}" data-cat="macos">macOS <span>${D.entries.filter(x=>x.category==='macos').length}</span></button><button class="${state.cat==='web'?'active':''}" data-cat="web">Web <span>${D.entries.filter(x=>x.category==='web').length}</span></button></div><div class="sort-tabs"><button class="${state.sort==='newest'?'active':''}" data-sort="newest">الأحدث</button><button class="${state.sort==='popular'?'active':''}" data-sort="popular">الأكثر شيوعًا</button></div></div><div id="cards" class="entries-grid"></div></section>
 <section class="guides shell"><div class="sectionlabel">الأدلة — القرارات التي تسبق الأسماء</div><div class="guidecards"><a href="${BASE}appkit-vs-swiftui/"><b>AppKit أم SwiftUI؟</b><span>العنصر نفسه في Mac قد يملك اسمين حقيقيين — أيهما تستخدم في الـPrompt؟</span></a><a href="${BASE}swift-vs-electron/"><b>Swift أم Electron؟</b><span>تطبيق أصلي أم واجهة ويب داخل غلاف — القرار الأول الذي يحدد المفردات.</span></a><a href="${BASE}translate/"><b>جدول الترجمة</b><span>60+ عنصرًا: الاسم البسيط ← AppKit ← SwiftUI، مع بحث مباشر.</span></a></div></section></main>`+footer();

 const render=()=>{
   let list=D.entries.filter(e=>(state.cat==='all'||e.category===state.cat)&&searchMatches(e,state.q));
   list=[...list].sort((a,b)=>{if(state.sort==='popular')return b.popularity-a.popularity;const ar=rank.has(a.slug)?rank.get(a.slug):999,br=rank.has(b.slug)?rank.get(b.slug):999;return ar!==br?ar-br:Number(b.new)-Number(a.new)||D.entries.indexOf(a)-D.entries.indexOf(b)});
   const cards=document.querySelector('#cards');cards.innerHTML=list.map(card).join('');
   const empty=document.querySelector('#searchEmpty');if(empty)empty.hidden=!state.q||!!list.length;
   bindDemos(cards);
 };
 render();
 const search=document.querySelector('#search');
 search.addEventListener('input',e=>{state.q=e.target.value;render()});
 document.querySelectorAll('[data-cat]').forEach(b=>b.onclick=()=>{state.cat=b.dataset.cat;home()});
 document.querySelectorAll('[data-sort]').forEach(b=>b.onclick=()=>{state.sort=b.dataset.sort;home()});
 bindChrome();bindGlossary();bindHeroMotion();
}
function detail(slug){
 const e=bySlug(slug);
 if(!e)return notFound();
 setMeta(`${e.ar} — ${e.en}`,e.description,entryPath(e));
 const rel=(e.related||[]).map(bySlug).filter(Boolean);
 const aliases=(e.aliases||[]).slice(0,8);
 const called=e.calledPhrases||aliases||[e.en];
 const codeRows=e.inCode||[];
 app.innerHTML=nav('elements')+`
 <main id="main" class="shell detail-shell">
   <article class="detail">
     <div class="detail-topbar">
       <nav class="crumbs" aria-label="مسار الصفحة"><a href="${BASE}">الفهرس</a><span>/</span><a href="${BASE}${e.category}/">${e.category==='web'?'Web':'macOS'}</a></nav>
       <div class="detail-actions" aria-label="إجراءات الصفحة"><button type="button" data-detail-save aria-pressed="false">☆ حفظ</button><button type="button" data-detail-share>مشاركة</button><button type="button" data-detail-copy>نسخ الصفحة</button></div>
     </div>

     <section class="detail-visual" aria-label="المعاينة"><div class="specimen">${demo(e,true)}</div><p class="specimen-caption">${esc(e.caption||e.description)}</p></section>

     <header class="detail-heading">
       <h1>${esc(e.ar)}</h1><div class="detail-en" dir="ltr">${esc(e.en)}</div><div class="detail-symbols" dir="ltr">/ <code>${esc(e.code)}</code> /</div>
       ${aliases.length?`<p class="aka"><b>يُسمى أيضًا</b> ${aliases.map(esc).join('، ')}</p>`:''}
       <p class="lead">${esc(e.description)}</p>
     </header>

     <section class="section called-section"><h2>إذا كنت تسميه…</h2><div class="called">${called.map(x=>`<span>“${esc(x)}”</span>`).join('')}</div><p class="answerline">…فالمصطلح الأدق هو <b>${esc(e.ar)}</b> <span dir="ltr">(${esc(e.en)})</span>.</p></section>

     <section class="section anatomy-section"><h2>التشريح — اسم كل جزء</h2><div class="anatomy">${(e.anatomy||[]).map((p,i)=>`<div class="part"><i>${i+1}</i><div><b>${esc(p.name)}</b><code dir="ltr">${esc(p.symbol||e.code)}</code><p>${esc(p.desc)}</p></div></div>`).join('')}</div></section>

     <section class="section prompt-section"><h2>Prompt — جاهز لوكيل البرمجة</h2><div class="prompt prompt-agent"><button class="copybtn" type="button" data-copy="${encodeURIComponent(e.prompt)}">نسخ</button><p>${esc(e.prompt)}</p></div></section>

     <section class="section prompt-section"><h2>Debug Prompt — عندما لا يعمل كما ينبغي</h2><p class="debug-symptom"><b>العَرَض:</b> ${esc(e.debugSymptom||'العنصر ظاهر لكن سلوكه لا يطابق المتوقع.')}</p><div class="prompt prompt-debug"><button class="copybtn" type="button" data-copy="${encodeURIComponent(e.debug)}">نسخ</button><p>${esc(e.debug)}</p></div></section>

     <section class="section code-section"><h2>في الكود</h2><div class="tablewrap"><table class="code-table"><tbody>${codeRows.map(r=>`<tr><td>${esc(r.stack)}</td><td><code dir="ltr">${esc(r.symbol)}</code></td><td>${esc(r.note)}</td></tr>`).join('')}</tbody></table></div></section>

     <section class="section related-section"><h2>راجع أيضًا</h2><div class="related">${rel.map(r=>`<a href="${entryHref(r)}"><b>${esc(r.ar)}</b><span>${esc(r.en)}</span><small>${r.category==='web'?'Web':'macOS'}</small></a>`).join('')}</div></section>
   </article>
 </main>`+footer();
 bindCopy();bindDetailActions(e);bindChrome();bindGlossary();bindDemos(document.querySelector('.specimen'));
}

function styleSpecimen(s,large=false){
 const L=large?' large':'';
 switch(s.slug){
  case 'skeuomorphism': return `<div class="style-visual style-skeuomorphism${L}"><div class="sk-book"><div class="sk-tabs"><span>اليوم</span><span>الأرشيف</span></div><b>ملاحظات الرحلة</b><i></i><i></i><i></i><small>12 أكتوبر</small></div></div>`;
  case 'neumorphism': return `<div class="style-visual style-neumorphism${L}"><div class="neo-player"><span class="neo-label">Night Drive</span><b>lo-fi</b><div class="neo-track"><i></i></div><div class="neo-controls"><span>‹</span><span class="pressed">Ⅱ</span><span>›</span></div></div></div>`;
  case 'glassmorphism': return `<div class="style-visual style-glassmorphism${L}"><div class="glass-orb g1"></div><div class="glass-orb g2"></div><div class="glass-panel"><small>الطقس</small><b>24°</b><span>سماء صافية</span><div><i>الاثنين 24°</i><i>الثلاثاء 22°</i><i>الأربعاء 20°</i></div></div></div>`;
  case 'liquid-glass': return `<div class="style-visual style-liquid-glass${L}"><div class="lg-wall"></div><div class="lg-bar"><span>⌂<small>الرئيسية</small></span><span>⌕<small>بحث</small></span><span class="on">●<small>تشغيل</small></span><span>◎<small>حسابي</small></span></div><div class="lg-pill">وضع التركيز</div></div>`;
  case 'web-brutalism': return `<div class="style-visual style-web-brutalism${L}"><div class="wb-page"><b>صفحة مروان الشخصية</b><span>آخر تحديث: الثلاثاء</span><hr><u>مقالات</u> · <u>الأرشيف</u> · <u>سجل الزوار</u><table><tbody><tr><td>notes.txt</td><td>2 KB</td></tr><tr><td>photos.zip</td><td>14 MB</td></tr></tbody></table><input value="إرسال"></div></div>`;
  case 'neobrutalism': return `<div class="style-visual style-neobrutalism${L}"><div class="nb-card"><span>نسخة 2.0</span><b>SHIP<br>LOUD.</b><p>كتلة واحدة. حافتان. بلا تمويه.</p><i>جرّبها →</i></div></div>`;
  case 'y2k': return `<div class="style-visual style-y2k${L}"><div class="y2k-player"><div class="chrome-title">NEODRIVE</div><div class="y2k-screen"><span>01 · CYBER SUNSET</span><b>3:47</b></div><div class="y2k-controls"><i>◀</i><i>●</i><i>▶</i></div></div></div>`;
  case 'frutiger-aero': return `<div class="style-visual style-frutiger-aero${L}"><div class="fa-sky"><span class="fa-cloud c1"></span><span class="fa-cloud c2"></span></div><div class="fa-grass"></div><div class="fa-bubble"><small>صباح الخير</small><b>23°C</b><span>هواء نقي اليوم</span></div></div>`;
  case 'flat-design': return `<div class="style-visual style-flat-design${L}"><div class="flat-shell"><div class="flat-top"><b>لوحة اليوم</b><span>4 مهام</span></div><div class="flat-tiles"><i class="blue">✉</i><i class="yellow">★</i><i class="green">✓</i><i class="red">♥</i></div><div class="flat-line"></div></div></div>`;
  case 'minimalism': return `<div class="style-visual style-minimalism${L}"><div class="min-page"><small>ATELIER 01</small><b>أقل،<br>لكن أدق.</b><p>قطعة واحدة مصممة لتدوم.</p><span>استكشف المجموعة</span></div></div>`;
  case 'claymorphism': return `<div class="style-visual style-claymorphism${L}"><div class="clay-card"><span class="clay-fire">✦</span><small>سلسلة الصباح</small><b>12 يومًا</b><div class="clay-action">تم اليوم ✓</div><i>+2</i></div></div>`;
  case 'vernacular-web': return `<div class="style-visual style-vernacular-web${L}"><div class="vw-page"><div>✦ ☆ ✦</div><b>مرحبًا بصفحتي!</b><marquee>UNDER CONSTRUCTION</marquee><p>هذه الصفحة عن الصور والخرائط والموسيقى.</p><u>وقّع سجل الزوار</u><small>الزائر رقم 001337</small></div></div>`;
  case 'aqua': return `<div class="style-visual style-aqua${L}"><div class="aqua-window"><div class="aqua-title"><i></i><i></i><i></i><b>حفظ باسم</b></div><label>الاسم <span>تصميم-aqua.psd</span></label><label>المكان <span>Documents</span></label><div class="aqua-actions"><em>إلغاء</em><strong>حفظ</strong></div></div></div>`;
  case 'windows-aero': return `<div class="style-visual style-windows-aero${L}"><div class="aero-window"><div class="aero-title"><span>نسخ الملفات</span><i>×</i></div><div class="aero-body"><b>جارٍ نسخ 3 عناصر…</b><div class="aero-progress"><i></i></div><small>42% مكتمل · 12 MB/s</small><em>إلغاء</em></div></div></div>`;
  default:return `<div class="style-visual generic-style${L}"><b>${esc(s.ar)}</b></div>`;
 }
}

function styles(){
 setMeta('ما اسم هذا الأسلوب؟ — UI بالعربي','أطلس بصري عربي للأنماط التصميمية مع الإشارات التي تميز كل أسلوب.','styles/');
 const examples=[
  {label:'أزرار ناعمة خارجة من الخلفية',slug:'neumorphism'},
  {label:'بطاقات زجاجية فوق خلفية ملونة',slug:'glassmorphism'},
  {label:'ألوان فاقعة وحدود سوداء وظلال حادة',slug:'neobrutalism'},
  {label:'لمعان كروم وفقاعات أوائل الألفية',slug:'y2k'},
  {label:'أزرار زجاجية تبدو كقطرات ماء',slug:'liquid-glass'}
 ];
 app.innerHTML=nav('styles')+`<main id="main">
   <section class="styles-hero shell">
     <div class="styles-kicker">سمِّ هذا المظهر</div>
     <h1>ما اسم هذا الأسلوب؟</h1>
     <p>أطلس بصري للأنماط. تعرّف على الاسم المتداول للمظهر، الإشارات التي تصنع هويته، وما الذي يفرقه عن أقرب أسلوب مشابه.</p>
     <div class="styles-describe">صفه بطريقتك…</div>
     <div class="styles-examples">${examples.map(x=>`<button type="button" data-style-example="${esc(x.label)}" data-style-slug="${x.slug}">“${esc(x.label)}”</button>`).join('')}</div>
     <label class="styles-searchbox">
       <span>⌕</span>
       <input id="stylesearch" autocomplete="off" placeholder="مثال: زجاج ضبابي فوق خلفية ملونة…">
       <kbd>⌘K</kbd>
     </label>
   </section>
   <section class="styles-catalog shell">
     <div id="stylegrid" class="atlas-grid"></div>
     <div id="styleempty" class="style-empty" hidden>لم نجد أسلوبًا يطابق هذا الوصف. جرّب وصف المادة أو اللون أو الظلال.</div>
     <div class="atlasnote">
       <h2>أطلس مضبوط، وليس قائمة عشوائية</h2>
       <p>لا توجد قائمة نهائية وصادقة لكل أنماط التصميم. نضيف النمط عندما يملك اسمًا قابلًا للتوثيق، وإشارات بصرية يمكن الدفاع عنها، ومعاينة يمكن التعرف عليها فورًا.</p>
       <p class="atlas-research">قيد البحث: Swiss Style، Bauhaus، Art Deco، Art Nouveau، Memphis، Vaporwave، Internet Ugly.</p>
       <a href="${BASE}">تبحث عن عنصر تحكم، لا عن مظهر؟ تصفّح عناصر UI ←</a>
     </div>
   </section>
 </main>`+footer();

 const input=document.querySelector('#stylesearch');
 let forced='';
 const draw=()=>{
   const q=norm(input.value);
   const list=forced
     ?D.styles.filter(s=>s.slug===forced)
     :D.styles.filter(s=>!q||norm([s.ar,s.en,s.status,s.desc,...(s.aliases||[]),...(s.called||[]),...(s.signals||[])].join(' ')).includes(q));
   const grid=document.querySelector('#stylegrid');
   grid.innerHTML=list.map(s=>`<a class="atlas-card" href="${BASE}styles/${s.slug}/">
     <div class="atlas-preview">${styleSpecimen(s)}</div>
     <div class="atlas-copy">
       <div class="atlas-status">${esc(s.status)}</div>
       <h3>${esc(s.ar)}</h3>
       <div class="atlas-en" dir="ltr">${esc(s.en)}</div>
       <p>${esc(s.desc)}</p>
       <div class="atlas-signals">${s.signals.slice(0,3).map(x=>`<span>${esc(x)}</span>`).join('')}</div>
     </div>
   </a>`).join('');
   document.querySelector('#styleempty').hidden=list.length!==0;
 };
 draw();
 input.oninput=()=>{forced='';draw()};
 document.querySelectorAll('[data-style-example]').forEach(b=>b.onclick=()=>{
   forced=b.dataset.styleSlug;
   input.value=b.dataset.styleExample;
   draw();
   input.focus();
 });
 document.addEventListener('keydown',e=>{
   if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){
     e.preventDefault();input.focus();
   }
 },{once:true});
 bindChrome();bindGlossary();
}

function styleDetail(slug){
 const s=D.styles.find(x=>x.slug===slug);
 if(!s)return notFound();
 setMeta(`${s.ar} — ${s.en}`,s.desc,`styles/${s.slug}/`);
 const confused=D.styles.find(x=>x.en===s.confused);
 const related=(s.relatedStyles||[]).map(sl=>D.styles.find(x=>x.slug===sl)).filter(Boolean).slice(0,5);
 const secondary=related.filter(x=>!confused||x.slug!==confused.slug).slice(0,2);

 app.innerHTML=nav('styles')+`<main id="main" class="shell style-detail-shell">
   <article class="style-detail">
     <nav class="style-crumbs"><a href="${BASE}styles/">الأنماط</a><span>/</span><span dir="ltr">${esc(s.en)}</span></nav>

     <section class="style-detail-visual">${styleSpecimen(s,true)}</section>

     <header class="style-detail-head">
       <h1>${esc(s.ar)}</h1>
       <div class="style-detail-en" dir="ltr">${esc(s.en)}</div>
       <span class="style-status-badge">${esc(s.status)}</span>
       <p class="style-origin-summary">${esc(s.origin)}</p>
       <p class="style-aliases"><b>يُسمى أيضًا</b> ${(s.aliases||[]).map(esc).join('، ')}</p>
       <p class="style-lead">${esc(s.desc)}</p>
       <p class="style-scope"><b>النطاق:</b> ${esc(s.scope)}</p>
     </header>

     <section class="style-section style-called"><h2>إذا كنت تسميه…</h2><div class="style-called-list">${(s.called||[]).map(x=>`<span>“${esc(x)}”</span>`).join('')}</div><p>…فأنت تقصد <b>${esc(s.ar)}</b> <span dir="ltr">(${esc(s.en)})</span>.</p></section>

     <section class="style-section"><h2>ما الذي يجعله هذا الأسلوب؟ — الإشارات المحدِّدة</h2><div class="style-signal-list">${(s.signalDetails||[]).map((x,i)=>`<div class="style-signal"><i>${i+1}</i><div><small>${esc(x.group)}</small><b>${esc(x.title)}</b><p>${esc(x.desc)}</p></div></div>`).join('')}</div></section>

     <section class="style-section"><h2>Style Brief — جاهز لوكيل البرمجة</h2><div class="style-brief prompt"><button class="copybtn" type="button" data-copy="${encodeURIComponent(s.brief)}">نسخ</button><p>${esc(s.brief)}</p></div></section>

     ${confused?`<section class="style-section">
       <h2>غالبًا يختلط مع <a href="${BASE}styles/${confused.slug}/">${esc(confused.ar)}</a></h2>
       <p class="style-section-intro">نفس الواجهة تقريبًا، لكن المادة والضوء والهندسة تكشف الأسلوب الحقيقي.</p>
       <div class="style-versus"><a class="style-vs-card" href="${BASE}styles/${s.slug}/"><div>${styleSpecimen(s)}</div><b>${esc(s.ar)}</b><span dir="ltr">${esc(s.en)}</span></a><a class="style-vs-card" href="${BASE}styles/${confused.slug}/"><div>${styleSpecimen(confused)}</div><b>${esc(confused.ar)}</b><span dir="ltr">${esc(confused.en)}</span></a></div>
       <div class="style-vs-copy"><p><b>${esc(s.ar)}:</b> ${esc(s.signals.slice(0,2).join('، '))}.</p><p><b>${esc(confused.ar)}:</b> ${esc(confused.signals.slice(0,2).join('، '))}.</p></div>
       ${secondary.length?`<div class="style-secondary-confusions">${secondary.map(x=>`<a href="${BASE}styles/${x.slug}/">مقارنة أيضًا مع ${esc(x.ar)} →</a>`).join('')}</div>`:''}
     </section>`:''}

     <section class="style-section"><h2>Full Style DNA</h2><div class="style-dna">${(s.dna||[]).map(x=>`<div class="dna-row"><span>${esc(x.axis)}</span><em>${esc(x.state)}</em><b>${esc(x.title)}</b><p>${esc(x.desc)}</p></div>`).join('')}</div></section>

     <section class="style-section"><h2>في الكود — نقاط بداية اختيارية</h2><p class="style-section-intro">الـBrief محايد للأطر؛ هذه مقابض عملية عندما تناسب التقنية المستخدمة.</p><div class="tablewrap"><table class="style-code-table"><tbody>${(s.codeRows||[]).map(r=>`<tr><td>${esc(r.stack)}</td><td><code dir="ltr">${esc(r.symbol)}</code></td><td>${esc(r.note)}</td></tr>`).join('')}</tbody></table></div></section>

     <section class="style-section"><h2>الإتاحة وسوء الاستخدام</h2><ul class="style-access">${(s.accessibility||[]).map(x=>`<li>${esc(x)}</li>`).join('')}</ul></section>

     <section class="style-section"><h2>الأصل والسياق</h2><p class="style-origin-long">${esc(s.origin)}</p><div class="style-source-links">${(s.sources||[]).map(([n,u])=>`<a href="${u}" target="_blank" rel="noopener">${esc(n)} ↗</a>`).join('')}</div></section>

     <section class="style-section"><h2>راجع أيضًا</h2><div class="style-related">${related.map(r=>`<a href="${BASE}styles/${r.slug}/"><div>${styleSpecimen(r)}</div><b>${esc(r.ar)}</b><span dir="ltr">${esc(r.en)}</span></a>`).join('')}</div></section>
   </article>
 </main>`+footer();
 bindCopy();bindChrome();bindGlossary();
}

const comparisonEntries={
 "popover-vs-tooltip": [
  "popover-dropdown-tooltip",
  "hover-card"
 ],
 "modal-vs-popover": [
  "modal-drawer-sheet",
  "popover-dropdown-tooltip"
 ],
 "dropdown-select-combobox": [
  "popover-dropdown-tooltip",
  "combobox",
  "popup-pulldown-combobox"
 ],
 "tabs-vs-segmented": [
  "tabs",
  "toggle-group"
 ],
 "accordion-vs-tabs": [
  "accordion",
  "tabs"
 ],
 "toast-vs-alert": [
  "toast",
  "alert-macos"
 ],
 "tooltip-vs-hover-card": [
  "popover-dropdown-tooltip",
  "hover-card"
 ],
 "context-vs-dropdown": [
  "context-menu",
  "popover-dropdown-tooltip"
 ],
 "carousel-vs-marquee": [
  "carousel",
  "marquee"
 ],
 "lightbox-vs-modal": [
  "lightbox",
  "modal-drawer-sheet"
 ],
 "masonry-vs-bento": [
  "masonry",
  "bento-grid"
 ],
 "sidebar-vs-drawer": [
  "sidebar-macos",
  "modal-drawer-sheet"
 ],
 "hamburger-vs-kebab": [
  "hamburger-menu",
  "three-dots"
 ],
 "easing-vs-spring": [
  "easing",
  "spring-animation"
 ],
 "stepper-vs-slider": [
  "stepper-macos",
  "slider-macos"
 ],
 "sheet-vs-alert-mac": [
  "sheet-macos",
  "alert-macos"
 ],
 "empty-vs-skeleton": [
  "empty-state",
  "skeleton-spinner"
 ],
 "toolbar-vs-menu-bar": [
  "toolbar-macos",
  "menu-bar"
 ]
};
const comparisonRules={
 "popover-vs-tooltip": [
  "وجود أزرار أو حقول داخل الطبقة يرجّح Popover.",
  "Tooltip شرح قصير غير تفاعلي.",
  "Tooltip يرتبط عادةً بـ hover أو focus، بينما Popover قد يفتح بالنقر ويبقى حتى الإغلاق.",
  "إذا احتاج المستخدم لاتخاذ إجراء داخل الطبقة، لا تسمّها Tooltip."
 ],
 "modal-vs-popover": [
  "Modal يعزل بقية الواجهة.",
  "Popover محلي ومثبت بعنصر أو نقطة مرجعية.",
  "إذا تعذر متابعة العمل في بقية الصفحة فأنت أقرب إلى Modal."
 ],
 "dropdown-select-combobox": [
  "Dropdown للأوامر والإجراءات.",
  "Select يختار قيمة من قائمة ثابتة.",
  "Combobox يسمح بالكتابة أو البحث داخل الخيارات."
 ],
 "tabs-vs-segmented": [
  "Tabs تبدّل بين لوحات نظيرة.",
  "Segmented Control غالبًا يغيّر عرض المحتوى نفسه أو مرشحه.",
  "في الويب ترتبط Tabs عادةً بـ tablist semantics."
 ],
 "accordion-vs-tabs": [
  "Accordion عمودي ويمكن أن يكشف أكثر من قسم.",
  "Tabs تعرض لوحة مرتبطة بالتبويب النشط.",
  "Accordion أنسب عندما تريد إبقاء بنية الأقسام ظاهرة."
 ],
 "toast-vs-alert": [
  "Toast قصير وعابر ولا يوقف التدفق عادةً.",
  "Alert يبقى في السياق حتى يُفهم أو يعالج.",
  "لا تستخدم Toast لخطأ يحتاج قرارًا أو إصلاحًا طويلًا."
 ],
 "tooltip-vs-hover-card": [
  "Tooltip شرح قصير لعنصر موجود.",
  "Hover Card معاينة غنية لكيان أو رابط.",
  "كلما زاد المحتوى والحجم ابتعدت عن Tooltip."
 ],
 "context-vs-dropdown": [
  "Context Menu يظهر بسبب السياق غالبًا بنقرة ثانوية.",
  "Dropdown يخرج من trigger ظاهر ومحدد.",
  "التشابه بصري؛ الفارق في سبب الظهور والسياق."
 ],
 "carousel-vs-marquee": [
  "Carousel يتوقف على شرائح قابلة للتنقل.",
  "Marquee يتحرك تلقائيًا كتيار متكرر.",
  "وجود شريحة حالية وأسهم أو نقاط مؤشر قوي على Carousel."
 ],
 "lightbox-vs-modal": [
  "Lightbox متخصص في عرض الوسائط بحجم أكبر.",
  "Modal أوسع للمهام والنماذج والقرارات.",
  "Lightbox نوع متخصص من تجربة Modal."
 ],
 "masonry-vs-bento": [
  "Masonry يتعامل مع ارتفاعات غير متوقعة ولا يحافظ على صفوف أفقية.",
  "Bento شبكة مصممة عمدًا بمحاذاة مشتركة.",
  "المحتوى الديناميكي يميل إلى Masonry؛ التسويق واللوحات إلى Bento."
 ],
 "sidebar-vs-drawer": [
  "Sidebar جزء ثابت من التخطيط الواسع.",
  "Drawer طبقة مؤقتة تظهر عند الطلب.",
  "قد يتحول Sidebar إلى Drawer على الهاتف."
 ],
 "hamburger-vs-kebab": [
  "Hamburger غالبًا يفتح التنقل الرئيسي.",
  "Kebab/Three Dots يفتح إجراءات إضافية.",
  "ثلاثة خطوط = تنقل؛ ثلاث نقاط = مزيد من الإجراءات غالبًا."
 ],
 "easing-vs-spring": [
  "Easing يوزع السرعة داخل مدة زمنية معروفة.",
  "Spring يحاكي الصلابة والتخميد والسرعة.",
  "الارتداد وتجاوز الهدف مؤشر قوي على Spring."
 ],
 "stepper-vs-slider": [
  "Stepper يزيد أو ينقص بخطوات منفصلة ودقيقة.",
  "Slider يسمح بالسحب السريع عبر مدى كامل.",
  "القيمة الدقيقة الصغيرة → Stepper؛ التقريبية السريعة → Slider."
 ],
 "sheet-vs-alert-mac": [
  "Sheet مرتبطة بنافذة أو مستند محدد.",
  "Alert قرار أو تحذير أصغر وأكثر عمومية.",
  "إذا كانت المهمة تخص نافذة واحدة فكر في Sheet."
 ],
 "empty-vs-skeleton": [
  "Skeleton يعني أن المحتوى قادم.",
  "Empty State يعني أن لا محتوى موجود الآن.",
  "الحالة الفارغة تحتاج إرشادًا أو CTA؛ الهيكل التحميلي لا يحتاج ذلك."
 ],
 "toolbar-vs-menu-bar": [
  "Menu Bar أعلى الشاشة للتطبيق الحالي.",
  "Toolbar داخل نافذة ويجمع أدواتها.",
  "الموقع داخل النظام يحسم كثيرًا من الالتباس."
 ]
};
const comparisonRouteSlugs={
 "dropdown-select-combobox":"dropdown-vs-select-vs-combobox",
 "tabs-vs-segmented":"tabs-vs-segmented-control",
 "context-vs-dropdown":"context-menu-vs-dropdown",
 "masonry-vs-bento":"masonry-vs-bento-grid",
 "sheet-vs-alert-mac":"sheet-vs-alert",
 "empty-vs-skeleton":"empty-state-vs-skeleton"
};
const comparisonPath=c=>`vs/${comparisonRouteSlugs[c.slug]||c.slug}/`;
function comparisonByRouteSlug(slug){
  return D.comparisons.find(c=>c.slug===slug||(comparisonRouteSlugs[c.slug]||c.slug)===slug);
}
function comparisonItems(c){
  return (comparisonEntries[c.slug]||[]).map(bySlug).filter(Boolean);
}
function comparisonCard(e){
  return `<a class="vs-entry" href="${entryHref(e)}"><div class="vs-entry-preview">${demo(e)}</div><div class="vs-entry-copy"><b>${esc(e.ar)}</b><span dir="ltr">${esc(e.en)}</span><small>${e.category==='web'?'Web':'macOS'}</small></div></a>`;
}
function compare(){
  setMeta('العناصر التي يكثر الخلط بينها — UI بالعربي','شيئان يبدوان متشابهين، لكن بينهما فرق حاسم. اختر الزوج الذي يربكك وستجد الجواب مباشرة ثم العلامات التي يمكنك فحصها بصريًا.','vs/');
  app.innerHTML=nav('compare')+`<main id="main" class="shell compare-index"><header class="compare-index-head"><h1>العناصر التي يكثر الخلط بينها.</h1><p>شيئان يبدوان متشابهين، لكن بينهما فرق حاسم. اختر الزوج الذي يربكك؛ كل صفحة تعطيك الجواب مباشرة، ثم العلامات التي يمكنك فحصها في الواجهة أمامك.</p></header><section class="confused-list">${D.comparisons.map(c=>`<a class="confused-row" href="${BASE}${comparisonPath(c)}"><h2>${esc(c.title)}</h2><p>${esc(c.answer)}</p></a>`).join('')}</section></main>`+footer();
  bindChrome();bindGlossary();
}
function compareDetail(slug){
  const c=comparisonByRouteSlug(slug);
  if(!c)return notFound();
  const items=comparisonItems(c);
  const rules=comparisonRules[c.slug]||[c.answer];
  setMeta(`${c.title} — UI بالعربي`,c.answer,comparisonPath(c));
  app.innerHTML=nav('compare')+`<main id="main" class="shell vs-shell"><article class="vs-detail"><nav class="vs-crumbs"><a href="${BASE}">الفهرس</a><span>/</span><a href="${BASE}vs/">العناصر المتشابهة</a></nav><header class="vs-head"><h1>${esc(c.title)}</h1><p>${esc(c.answer)}</p></header><section class="vs-section vs-tells"><h2>كيف تفرّق بينها؟</h2><ul class="vs-rules">${rules.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></section><section class="vs-section vs-full-entries"><h2>الإدخالات الكاملة — الأسماء، التشريح وPrompts الجاهزة</h2><div class="vs-showcase">${items.map(comparisonCard).join('')}</div></section><p class="vs-back">هل تقصد زوجًا مختلفًا؟ <a href="${BASE}vs/">شاهد كل العناصر التي يكثر الخلط بينها</a></p></article></main>`+footer();
  bindDemos(document.querySelector('.vs-showcase'));bindChrome();bindGlossary();
}
const translationEntryMap={
  "تنبيه":"alert-macos",
  "خلفيات صفوف متناوبة":"data-table",
  "شريط قوائم التطبيق":"menu-bar",
  "مربع اختيار":"switch-checkbox-radio",
  "مربع لون / منتقي لون":"color-well",
  "مجموعة أوامر":"menu-bar",
  "حوار تأكيد":"alert-macos",
  "قائمة سياقية":"context-menu",
  "منتقي تاريخ":"date-picker",
  "أيقونة الحوار":"alert-macos",
  "أداة كشف":"disclosure-triangle",
  "عدم الإظهار مجددًا":"alert-macos",
  "مقياس / مؤشر مستوى":"level-indicator",
  "صف هرمي":"outline-view",
  "الفاحص":"inspector",
  "قائمة":"data-table",
  "قائمة أوامر":"menu-bar",
  "عنصر شريط القوائم":"menu-bar-extra",
  "سهم القائمة":"popup-pulldown-combobox",
  "اختصار عنصر قائمة":"menu-bar",
  "فاصل قائمة":"divider-separator-rule",
  "عنصر حالة بنمط قائمة":"menu-bar-extra",
  "مشهد متعدد النوافذ":"mac-window",
  "عرض تنقل مقسّم":"split-view",
  "عرض شجري / مصدر":"outline-view",
  "منتقي Palette":"segmented-control",
  "زر منبثق":"popup-pulldown-combobox",
  "Popover":"popover-macos",
  "شريط تقدم / Spinner":"progress-indicators",
  "زر Pull-down":"popup-pulldown-combobox",
  "مجموعة Radio":"switch-checkbox-radio",
  "Split View قابل للتغيير":"split-view",
  "لوحة حفظ/تصدير":"save-panel",
  "حقل بحث":"search-field-macos",
  "Segmented Control":"segmented-control",
  "نافذة الإعدادات":"mac-window",
  "Sheet":"sheet-macos",
  "زر إظهار الشريط الجانبي":"sidebar-macos",
  "نافذة مفردة":"mac-window",
  "Slider":"slider-macos",
  "Stepper":"stepper-macos",
  "Switch":"switch-checkbox-radio",
  "Tab View":"tabs",
  "Table":"data-table",
  "عمود جدول":"data-table",
  "رأس أعمدة الجدول":"data-table",
  "صف جدول":"data-table",
  "Toolbar":"toolbar-macos",
  "لوحة تخصيص Toolbar":"toolbar-macos",
  "عنصر Toolbar":"toolbar-macos",
  "مجموعة عناصر Toolbar":"toolbar-macos",
  "قائمة تجاوز Toolbar":"toolbar-macos",
  "قائمة أوامر عليا":"menu-bar",
  "نافذة أدوات":"panel",
  "عنصر حالة بنمط نافذة":"menu-bar-extra"
};
function translationEntry(r){
  const mapped=translationEntryMap[r.thing];
  if(mapped)return bySlug(mapped);
  const q=norm(r.thing);
  return D.entries.find(e=>{
    const hay=norm(`${e.ar} ${e.en} ${(e.aliases||[]).join(' ')}`);
    return hay.includes(q)||q.includes(norm(e.ar))||q.includes(norm(e.en));
  });
}
function translate(){
  setMeta('جدول الترجمة — UI بالعربي','الاسم المرئي نفسه في AppKit وSwiftUI، في جدول واحد قابل للبحث.','translate/');
  app.innerHTML=nav('')+`<main id="main" class="shell translate-page"><section class="translate-hero"><h1>جدول الترجمة</h1><div class="translate-kicker">/ الاسم البسيط · AppKit · SwiftUI /</div><p>العنصر نفسه على Mac قد يملك اسمين حقيقيين، واحدًا في كل إطار. ابحث عن الشيء ثم خذ العمود الذي يتحدث به مشروعك — <a href="${BASE}appkit-vs-swiftui/">غير متأكد؟ اقرأ هذا أولًا</a>.</p><label class="translate-search"><input id="tsearch" inputmode="search" autocomplete="off" placeholder="فلتر — جرّب segmented أو NSPopUpButton"><kbd>⌘K</kbd></label></section><section id="ttable"></section></main>`+footer();
  const input=document.querySelector('#tsearch');
  const draw=()=>{
    const q=norm(input.value);
    const rows=D.translations.filter(r=>!q||norm(Object.values(r).join(' ')).includes(q));
    document.querySelector('#ttable').innerHTML=`<div class="translation-wrap"><table class="translation-v2"><thead><tr><th>العنصر</th><th>AppKit</th><th>SwiftUI</th></tr></thead><tbody>${rows.map(r=>{const e=translationEntry(r);return `<tr><td>${e?`<a href="${entryHref(e)}">${esc(r.thing)}</a>`:esc(r.thing)}</td><td><code dir="ltr">${esc(r.appkit)}</code></td><td><code dir="ltr">${esc(r.swiftui)}</code></td></tr>`}).join('')}</tbody></table></div><p class="translation-count">${rows.length} من ${D.translations.length} ترجمة · العناصر المسطّرة مرتبطة بإدخالها البصري.</p>`;
  };
  draw();input.oninput=draw;
  addEventListener('keydown',e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();input.focus()}},{once:true});
  bindChrome();bindGlossary();
}
function methodology(){
  setMeta('المنهجية — UI بالعربي','كيف نرى العنصر، نتحقق من اسمه، ثم نثبته في القاموس.','methodology/');
  const sources=[
    {title:'منصات Apple',body:'مصطلحات المكونات وسلوك المنصة والتشريح والرموز الدقيقة في SwiftUI وAppKit وUIKit.',links:[['Human Interface Guidelines','https://developer.apple.com/design/human-interface-guidelines/'],['Developer Documentation','https://developer.apple.com/documentation/']]},
    {title:'أنماط الويب المتاحة',body:'أدوار ARIA والخصائص وأنماط الWidgets والتفاعل بلوحة المفاتيح ومتطلبات الإتاحة.',links:[['WAI-ARIA','https://www.w3.org/TR/wai-aria/'],['ARIA APG','https://www.w3.org/WAI/ARIA/apg/'],['WCAG','https://www.w3.org/WAI/standards-guidelines/wcag/']]},
    {title:'منصة الويب',body:'دلالات HTML الأصلية وسلوك المتصفح والواجهات البرمجية وسياق التنفيذ والتوافق.',links:[['WHATWG HTML','https://html.spec.whatwg.org/'],['MDN Web Docs','https://developer.mozilla.org/']]}
  ];
  app.innerHTML=nav('')+`<main id="main" class="shell methodology-page"><article class="methodology"><nav class="method-crumbs"><a href="${BASE}">الفهرس</a><span>/</span><span>المنهجية</span></nav><h1>المنهجية</h1><div class="method-kicker">/ شاهده · تحقّق منه · سمّه /</div><p class="method-lead">نبدأ بشيء يستطيع الشخص رؤيته لكنه لا يعرف اسمه. نحدد الشيء المرئي أولًا، ثم نتحقق من المصطلح في توثيق المنصة الأساسي، ومعايير الإتاحة، والـAPI المستخدم فعليًا قبل إضافته.</p><section class="method-section"><h2>كيف يدخل المصطلح؟</h2><div class="method-steps"><div><i>1</i><b>ابدأ بالبكسلات</b><p>لا يدخل اسم لمجرد أنه مفيد؛ يجب أن يشير إلى شيء مرئي فعلًا ويصعب وصفه من دون مفردات متخصصة.</p></div><div><i>2</i><b>تحقق من المنصة</b><p>نراجع الاسم الظاهر في إرشادات المنصة، والاسم البرمجي في التوثيق، والدور أو السلوك في المعيار المناسب.</p></div><div><i>3</i><b>اجعل الفرق مرئيًا</b><p>المعاينة والتشريح والوصف البسيط يجب أن تفصل العنصر عن أقرب البدائل من دون افتراض معرفة سابقة.</p></div></div></section><section class="method-section"><h2>المصادر التي نرجع إليها</h2><p class="method-intro">المصدر يتبع نوع الادعاء: دليل التصميم يسمي النمط، المواصفة تضبط دلالته، وتوثيق الإطار يعطي الرمز القابل للاستخدام.</p><div class="source-cards">${sources.map(s=>`<div class="source-card"><h3>${esc(s.title)}</h3><p>${esc(s.body)}</p><div>${s.links.map(([n,u])=>`<a href="${u}" target="_blank" rel="noopener">${esc(n)} ↗</a>`).join('')}</div></div>`).join('')}</div></section><section class="method-section"><h2>ماذا تعلمنا عمليات البحث الحقيقية؟</h2><p>التوثيق الرسمي يخبرنا بالاسم؛ عبارات البحث تخبرنا كيف يصف الناس الشيء قبل معرفة الاسم. نستخدم الوصف الشائع لتحسين الوصول والشرح، لكنه لا يلغي معيارًا ولا يختلق اسم مكوّن جديدًا.</p></section><section class="method-section"><h2>عندما تختلف الأسماء</h2><p>العنصر المتشابه قد يحمل أسماء مختلفة بين Web وmacOS، أو بين AppKit وSwiftUI. لذلك نبقي المنصة والإطار ملاصقين للمصطلح، ونظهر الأسماء البديلة المفيدة بدل افتراض وجود اسم عالمي واحد.</p></section><p class="method-independence">UI بالعربي مشروع مستقل مستند بصريًا ووظيفيًا إلى Name That UI، وليس تابعًا للجهات التي تشير إليها المصادر أعلاه.</p></article></main>`+footer();
  bindChrome();bindGlossary();
}
function guideHub(){
  location.replace(BASE);
}
function guide(kind){
  let title,subtitle,body,path;
  if(kind==='appkit-swiftui'){
    title='AppKit أم SwiftUI؟';subtitle='نفس البكسل على الشاشة، اسمان حقيقيان — الاسم الصحيح يتبع طبقة المشروع.';path='appkit-vs-swiftui/';
    body=`<div class="guide-equation"><div><code>MenuBarExtra</code><span>SwiftUI</span></div><b>=</b><div><code>NSStatusItem</code><span>AppKit</span></div><p>نفس الشيء المرئي، والاسم يتغير بحسب الـAPI الذي يبنيه.</p></div><section class="guide-prose"><p class="lead">AppKit هو صندوق أدوات macOS الأصلي؛ أسماؤه الدقيقة غالبًا تبدأ بـ <code>NS</code>. SwiftUI يصف الواجهة بطريقة تصريحية وبأسماء أبسط. التطبيق الواحد يستطيع مزج الاثنين، ولذلك تسمية الطبقة التي تريد تعديلها جزء من الطلب نفسه.</p><h2>أي اسم أستخدم؟ — ثلاث قواعد</h2><ol class="guide-rules"><li><b>طابق المشروع.</b><span>إذا كانت الملفات تعتمد SwiftUI فاستخدم أسماء SwiftUI؛ وإذا كان الكود من AppKit فاستخدم رموز NS الدقيقة.</span></li><li><b>في التطبيق المختلط، سمِّ الطبقة.</b><span>قل مثلًا: SwiftUI view داخل نافذة AppKit، بدل الإشارة إلى «نافذة الماك» فقط.</span></li><li><b>عند الشك، اذكر الاثنين.</b><span>اكتب الاسم المرئي ثم مقابله في SwiftUI وAppKit ودع الوكيل يفحص المشروع القائم.</span></li></ol><h2>Prompts مجرّبة — الصقها في وكيلك</h2><div class="worked-prompts"><div><small>مشروع SwiftUI</small><div class="prompt"><button class="copybtn" type="button" data-copy="${encodeURIComponent('في تطبيق macOS مبني بـ SwiftUI، عدّل MenuBarExtra الحالي ليعرض نافذة بأسلوب popover، وأبقِ عنصر شريط القوائم ظاهرًا عند إغلاق النافذة الرئيسية. لا تضف تنفيذًا ثانيًا.') }">نسخ</button><p>في تطبيق macOS مبني بـ SwiftUI، عدّل <code>MenuBarExtra</code> الحالي ليعرض نافذة بأسلوب popover، وأبقِ عنصر شريط القوائم ظاهرًا عند إغلاق النافذة الرئيسية.</p></div></div><div><small>مشروع AppKit</small><div class="prompt"><button class="copybtn" type="button" data-copy="${encodeURIComponent('في تطبيق AppKit على macOS، عدّل NSStatusItem الحالي في NSStatusBar.system؛ استخدم صورة template لزرّه وافتح NSMenu عند النقر.') }">نسخ</button><p>في تطبيق AppKit، عدّل <code>NSStatusItem</code> الحالي في <code>NSStatusBar.system</code> وافتح <code>NSMenu</code> عند النقر.</p></div></div><div><small>غير متأكد</small><div class="prompt"><button class="copybtn" type="button" data-copy="${encodeURIComponent('أصلح أيقونة التطبيق الصغيرة بجانب ساعة macOS: menu bar extra (SwiftUI: MenuBarExtra / AppKit: NSStatusItem). افحص المشروع وعدّل التنفيذ الحالي ولا تضف واحدًا جديدًا.') }">نسخ</button><p>أصلح أيقونة التطبيق بجانب ساعة macOS: <code>MenuBarExtra</code> في SwiftUI أو <code>NSStatusItem</code> في AppKit. افحص المشروع وعدّل التنفيذ الحالي.</p></div></div></div><h2>لا تخلطهما مع</h2><div class="guide-confusions"><div><b>UIKit</b><p>إطار iPhone وiPad؛ رموزه مثل UIButton وليست NSButton.</p></div><div><b>Mac Catalyst</b><p>تطبيق iPad يعمل على Mac ويظل في عالم UIKit.</p></div><div><b>Electron</b><p>واجهة Web داخل Chromium + Node؛ مفرداتها الأساسية من تبويب Web.</p></div></div><h2>الأسئلة التي تتكرر دائمًا</h2><div class="guide-faq"><details open><summary>هل SwiftUI تستبدل AppKit؟</summary><p>ليس بالكامل. SwiftUI مناسبة لكثير من الواجهات الجديدة، لكن AppKit ما تزال مطلوبة لسلوكيات Mac متخصصة.</p></details><details><summary>هل يمكن استخدام الاثنين معًا؟</summary><p>نعم؛ لهذا تحديد الطبقة مهم عند طلب تعديل محدد.</p></details><details><summary>هل كل SwiftUI control هو AppKit control في الداخل؟</summary><p>لا تفترض ذلك؛ عامل كل API كواجهة مستقلة حتى عندما يتشابه الشكل.</p></details><details><summary>هل AppKit وUIKit الشيء نفسه؟</summary><p>لا. AppKit لـmacOS وUIKit لـiPhone وiPad.</p></details></div><p><a class="guide-table-link" href="${BASE}translate/">افتح جدول الترجمة الكامل (${D.translations.length}) ←</a></p></section>`;
  }else{
    title='Swift أم Electron؟';subtitle='Native · web-in-a-shell — أول مفترق يحدد القاموس الذي يتحدث به المشروع.';path='swift-vs-electron/';
    body=`<section class="guide-prose"><p class="lead">هذا القرار يسبق تسمية المكونات. Swift يبني تطبيق Mac بمواد النظام وأطر Apple، بينما Electron يشحن واجهة Web داخل Chromium مع Node. لا أحدهما «صحيح» مطلقًا؛ الاختيار يحدد أي أسماء وAPIs لها معنى داخل المشروع.</p><h2>المقايضة</h2><div class="trade-wrap"><table class="guide-trade"><thead><tr><th></th><th>Swift — Native</th><th>Electron — Web shell</th></tr></thead><tbody><tr><td>ما هو؟</td><td>SwiftUI/AppKit فوق أطر macOS</td><td>Chromium + Node حول تطبيق Web</td></tr><tr><td>مظهر Mac الأصلي</td><td>يحصل على القوائم والـSheets والمواد الأصلية مباشرة</td><td>يحتاج إعادة بناء المظهر في CSS عند الرغبة</td></tr><tr><td>الاستخدام</td><td>تطبيقات Mac التي تريد سلوك المنصة الكامل</td><td>تطبيقات متعددة المنصات بقاعدة Web مشتركة</td></tr><tr><td>حجم التطبيق</td><td>أصغر عادةً لاعتماده على أطر النظام</td><td>أكبر عادةً لأنه يشحن محرك متصفح</td></tr><tr><td>المهارات</td><td>Swift وواجهات Apple</td><td>HTML/CSS/JS/React</td></tr><tr><td>أمثلة معروفة</td><td>تطبيقات Mac أصلية</td><td>VS Code وSlack وDiscord وFigma</td></tr></tbody></table></div><h2>قاعدة سريعة</h2><p>Mac فقط وتريد سلوك المنصة من اليوم الأول؟ اتجه إلى Swift. تريد مشاركة واجهة Web عبر أنظمة متعددة أو فريقك Web-first؟ Electron خيار مباشر، مع وجود بدائل أخف مثل Tauri.</p><h2>أول Prompt — اختر عالمك</h2><div class="worked-prompts two"><div><small>ابدأ تطبيق Swift</small><div class="prompt"><button class="copybtn" type="button" data-copy="${encodeURIComponent('أنشئ تطبيق macOS أصليًا جديدًا بـ SwiftUI على macOS 14+، بنافذة رئيسية وNavigationSplitView وشريط أدوات موحد، ودعم مظهر النظام. استخدم عناصر وأسماء Apple الأصلية وتجنب رسم chrome مخصص.') }">نسخ</button><p>أنشئ تطبيق macOS أصليًا جديدًا بـ <code>SwiftUI</code>، بنافذة رئيسية و<code>NavigationSplitView</code> وشريط أدوات موحد وعناصر النظام الأصلية.</p></div></div><div><small>ابدأ تطبيق Electron</small><div class="prompt"><button class="copybtn" type="button" data-copy="${encodeURIComponent('أنشئ تطبيق Electron جديدًا باستخدام Vite + React + TypeScript، مع BrowserWindow وإعدادات أمان contextIsolation=true وnodeIntegration=false وhot reload للتطوير. استخدم مفردات Web للمكونات وElectron APIs لسطح المكتب.') }">نسخ</button><p>أنشئ تطبيق <code>Electron</code> بـ Vite + React + TypeScript، مع <code>BrowserWindow</code> وإعدادات أمان سليمة وHot Reload.</p></div></div></div><h2>لا تخلطهما مع</h2><div class="guide-confusions"><div><b>Tauri</b><p>واجهة Web أيضًا لكن بحزمة أخف ومحرك النظام مع Rust خلفها.</p></div><div><b>Mac Catalyst</b><p>تطبيق iPad يعمل على Mac؛ ليس AppKit ولا Electron.</p></div><div><b>React Native</b><p>JavaScript يقود عناصر Native؛ قصته الأساسية على الهاتف وليست Electron.</p></div></div><p class="guide-next">اخترت Swift؟ <a href="${BASE}appkit-vs-swiftui/">اقرأ AppKit أم SwiftUI</a>. اخترت Electron؟ <a href="${BASE}web/">كل عناصر واجهتك تعيش في تبويب Web</a>.</p></section>`;
  }
  setMeta(title,subtitle,path);
  app.innerHTML=nav('')+`<main id="main" class="shell guide-v2"><nav class="guide-crumbs"><a href="${BASE}">الفهرس</a><span>/</span><span>دليل</span></nav><header><h1>${esc(title)}</h1><div class="guides-kicker">/ ${esc(subtitle)} /</div></header>${body}</main>`+footer();
  bindCopy();bindChrome();bindGlossary();
}
function glossaryPage(){
  setMeta('قاموس المصطلحات — UI بالعربي','تعريفات عربية سريعة للمفاهيم التقنية المتكررة في تصميم وبرمجة واجهات المستخدم.','glossary/',false);
  const all=Object.entries(D.glossary||{});
  app.innerHTML=nav('')+`<main id="main" class="shell glossary-page"><section class="glossary-hero"><div class="sectionlabel">GLOSSARY</div><h1>قاموس المصطلحات</h1><p>تعريفات قصيرة للمفاهيم التي تظهر عبر القاموس. العربية أولًا، والمصطلح الإنجليزي ملاصق عندما يمنع الغموض.</p><label class="glossary-search"><span>⌕</span><input id="gsearch" inputmode="search" autocomplete="off" placeholder="ابحث: ARIA أو AppKit أو RTL…"><kbd>⌘K</kbd></label></section><section id="glist" class="glossary-list"></section></main>`+footer();
  const input=document.querySelector('#gsearch');
  const draw=()=>{
    const q=norm(input.value);
    const rows=all.filter(([term,def])=>!q||norm(term+' '+def).includes(q));
    document.querySelector('#glist').innerHTML=rows.length?rows.map(([term,def])=>`<article class="glossary-row"><div><b>${esc(term)}</b></div><p>${esc(def)}</p></article>`).join(''):`<div class="glossary-empty">لا يوجد مصطلح مطابق. جرّب الاسم الإنجليزي أو وصفًا أقصر.</div>`;
  };
  draw();input.oninput=draw;
  addEventListener('keydown',e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();input.focus()}},{once:true});
  bindChrome();bindGlossary();
}
function readSavedIds(){try{const ids=JSON.parse(localStorage.getItem('saved-ui-ar')||'[]');return Array.isArray(ids)?ids:[]}catch{return[]}}
function writeSavedIds(ids){try{localStorage.setItem('saved-ui-ar',JSON.stringify([...new Set(ids)]))}catch{}}
function saved(){
  setMeta('المحفوظات — UI بالعربي','العناصر التي حفظتها محليًا في متصفحك للرجوع إليها لاحقًا.','saved/',false);
  const ids=readSavedIds();
  const list=ids.map(bySlug).filter(Boolean);
  app.innerHTML=nav('')+`<main id="main" class="shell saved-page"><section class="saved-hero"><div class="sectionlabel">SAVED</div><div class="saved-title-row"><div><h1>العناصر المحفوظة</h1><p>قائمتك الخاصة على هذا الجهاز. لا تُرفع هذه البيانات إلى خادم.</p></div><div class="saved-count"><b>${list.length}</b><span>عنصر محفوظ</span></div></div>${list.length?`<button class="saved-clear" id="clearSaved" type="button">مسح الكل</button>`:''}</section><section class="saved-grid">${list.length?list.map(e=>`<article class="saved-entry" data-saved-slug="${e.slug}">${card(e)}<button class="saved-remove" type="button" data-saved-remove="${e.slug}" aria-label="إزالة ${esc(e.ar)} من المحفوظات">× إزالة</button></article>`).join(''):`<div class="saved-empty"><b>لا توجد عناصر محفوظة بعد.</b><p>افتح أي عنصر واضغط «☆ حفظ» ليظهر هنا.</p><a href="#/">تصفح العناصر ←</a></div>`}</section></main>`+footer();
  const grid=document.querySelector('.saved-grid');bindDemos(grid);
  document.querySelectorAll('[data-saved-remove]').forEach(btn=>btn.onclick=()=>{writeSavedIds(readSavedIds().filter(x=>x!==btn.dataset.savedRemove));saved()});
  const clear=document.querySelector('#clearSaved');if(clear)clear.onclick=()=>{writeSavedIds([]);saved()};
  bindChrome();bindGlossary();
}
function submitTerm(){
  setMeta('اقترح عنصرًا — UI بالعربي','اقترح عنصر واجهة جديدًا للقاموس عبر نموذج منظم يجهز GitHub Issue للمراجعة.','submit/',false);
  app.innerHTML=nav('')+`<main id="main" class="shell submit-page"><article class="submit-shell"><header class="submit-hero"><div class="sectionlabel">SUBMIT</div><h1>ما العنصر الذي ينقص القاموس؟</h1><p>صف ما تراه حتى لو لم تعرف الاسم. سنحوّل الوصف إلى اقتراح منظم يمكنك نسخه أو فتحه مباشرةً كـ GitHub Issue للمراجعة.</p></header><form id="submitform" class="submitform"><div class="submit-field submit-wide"><label for="seen">صف العنصر <span>مطلوب</span></label><textarea id="seen" name="seen" required placeholder="مثال: زر صغير بثلاث نقاط يفتح إجراءات إضافية"></textarea><small>صف الشكل، مكانه، وماذا يحدث عند التفاعل معه.</small></div><div class="submit-field"><label for="where">أين يظهر؟ <span>مطلوب</span></label><select id="where" name="where" required><option value="">اختر المنصة</option><option>Web</option><option>macOS</option><option>iOS / iPadOS</option><option>Android</option><option>Desktop / Other</option></select></div><div class="submit-field"><label for="guess">الاسم الذي تتوقعه</label><input id="guess" name="guess" placeholder="اختياري — عربي أو إنجليزي"></div><div class="submit-field submit-wide"><label for="reference">رابط أو مرجع بصري</label><input id="reference" name="reference" inputmode="url" placeholder="https://…"></div><div class="submit-field submit-wide"><label for="notes">ملاحظات إضافية</label><textarea id="notes" name="notes" placeholder="ما الذي يجعله مختلفًا عن عنصر موجود؟"></textarea></div><div class="submit-actions"><button type="submit">جهّز الاقتراح</button><button type="reset" class="secondary">إعادة تعيين</button></div></form><section id="proposalBox" class="proposal-box" hidden><div class="proposal-head"><div><b>الاقتراح جاهز</b><span>راجعه قبل الإرسال.</span></div><div><button id="copyProposal" type="button">نسخ النص</button><a id="openIssue" target="_blank" rel="noopener">فتح GitHub Issue ↗</a></div></div><pre id="proposal"></pre></section></article></main>`+footer();
  const f=document.querySelector('#submitform');
  const proposal=document.querySelector('#proposal');
  const box=document.querySelector('#proposalBox');
  const issue=document.querySelector('#openIssue');
  const copy=document.querySelector('#copyProposal');
  f.onsubmit=e=>{
    e.preventDefault();
    const fd=new FormData(f);
    const seen=String(fd.get('seen')||'').trim(),where=String(fd.get('where')||'').trim(),guess=String(fd.get('guess')||'').trim(),reference=String(fd.get('reference')||'').trim(),notes=String(fd.get('notes')||'').trim();
    const text=`## اقتراح عنصر جديد\n\n**الوصف المرئي**\n${seen}\n\n**المنصة / المكان**\n${where}\n\n**الاسم المتوقع**\n${guess||'غير معروف'}\n\n**مرجع بصري**\n${reference||'غير مرفق'}\n\n**ملاحظات**\n${notes||'لا توجد'}\n\n---\nأُنشئ هذا الاقتراح من صفحة Submit في UI بالعربي.`;
    proposal.textContent=text;box.hidden=false;
    const title=guess?`اقتراح عنصر: ${guess}`:`اقتراح عنصر UI جديد — ${where}`;
    issue.href=`https://github.com/mmashharawi2021-cell/Library-/issues/new?title=${encodeURIComponent(title)}&body=${encodeURIComponent(text)}`;
    box.scrollIntoView({behavior:'smooth',block:'nearest'});
  };
  f.onreset=()=>{box.hidden=true;proposal.textContent='';issue.removeAttribute('href')};
  copy.onclick=async()=>{try{await navigator.clipboard.writeText(proposal.textContent);const old=copy.textContent;copy.textContent='تم النسخ';setTimeout(()=>copy.textContent=old,1200)}catch{}};
  bindChrome();bindGlossary();
}
function notFound(){setMeta('الصفحة غير موجودة — UI بالعربي','تعذر العثور على الصفحة المطلوبة.','404.html',false);app.innerHTML=nav('')+`<main id="main" class="shell"><section class="hero"><h1>الصفحة غير موجودة</h1><p><a class="chip active" href="#/">العودة إلى الفهرس</a></p></section></main>`+footer()}
function routeFromLocation(){
  if(location.hash.startsWith('#/')) return location.hash.slice(1);
  let p=location.pathname;
  if(p.startsWith(BASE)) p=p.slice(BASE.length);
  p=p.replace(/^\/+|\/+$/g,'');
  if(!p||p==='index.html'||p==='404.html') return '/';
  const seg=p.split('/').filter(Boolean);
  if(seg[0]==='element'&&seg[1]) return `/element/${seg[1]}`;
  if((seg[0]==='web'||seg[0]==='macos')&&seg[1]) return `/entry/${seg[0]}/${seg[1]}`;
  if((seg[0]==='web'||seg[0]==='macos')&&seg.length===1) return `/platform/${seg[0]}`;
  if(seg[0]==='styles'&&seg[1]) return `/style/${seg[1]}`;
  if(seg[0]==='styles') return '/styles';
  if(seg[0]==='vs'&&seg[1]) return `/vs/${seg[1]}`;if(seg[0]==='vs') return '/compare';if(['compare','translate','methodology','guides','glossary','saved','submit'].includes(seg[0])) return `/${seg[0]}`;
  if(seg[0]==='appkit-vs-swiftui') return '/guide/appkit-swiftui';
  if(seg[0]==='swift-vs-electron') return '/guide/swift-electron';
  return '/404';
}
function router(){scrollTo(0,0);const p=routeFromLocation();const seg=p.split('/').filter(Boolean);if(!seg.length)return home('all');if(seg[0]==='platform')return home(seg[1]);if(seg[0]==='entry'){const e=bySlug(seg[2]);if(!e||e.category!==seg[1])return notFound();return detail(seg[2])}if(seg[0]==='element')return detail(seg[1]);if(seg[0]==='styles'&&seg.length===1)return styles();if(seg[0]==='style')return styleDetail(seg[1]);if(seg[0]==='compare')return compare();if(seg[0]==='vs')return compareDetail(seg[1]);if(seg[0]==='translate')return translate();if(seg[0]==='methodology')return methodology();if(seg[0]==='guides')return guideHub();if(seg[0]==='glossary')return glossaryPage();if(seg[0]==='saved')return saved();if(seg[0]==='submit')return submitTerm();if(seg[0]==='guide')return guide(seg[1]);return notFound()}
addEventListener('hashchange',router);router();
})();