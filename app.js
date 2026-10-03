(()=>{
'use strict';
const D=window.UI_AR_DATA;
const app=document.querySelector('#app');
if(!D||!app){return;}

const BASE='/Library-/';
const state={q:'',cat:'all',sort:'newest'};
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

const nav=(active='elements')=>`<div class="sponsor-strip"><div class="shell sponsor-inner"><span>راعِ الموقع</span><a href="https://namethatui.com/sponsorship" target="_blank" rel="noopener">اسمك هنا · $500/شهر ↗</a></div></div>
<header class="sitehead"><div class="shell headrow">
<a class="brand" href="#/"><strong>ui بالعربي</strong><i class="brandbadge">21</i><small>قاموس الواجهة</small></a>
<nav class="navlinks" aria-label="التنقل الرئيسي"><a class="${active==='elements'?'active':''}" href="#/">العناصر</a><a class="${active==='styles'?'active':''}" href="#/styles">الأنماط</a></nav>
<div class="headtools"><button id="themeToggle" class="themebtn" type="button" aria-label="تبديل المظهر">◐</button></div>
</div></header>`;
const footer=()=>`<footer class="footer"><div class="shell footgrid"><div class="footer-brandblock"><a class="footbrand" href="#/">ui بالعربي</a><p>القاموس البصري لعناصر واجهة المستخدم</p><div class="footer-rss"><span>مصطلحات جديدة تُضاف باستمرار</span><a href="/Library-/feed.xml">تابع عبر RSS</a></div></div><nav class="footlinks"><a href="#/compare">العناصر المتشابهة</a><a href="#/methodology">المنهجية</a><a href="https://namethatui.com/sponsorship" target="_blank" rel="noopener">الرعاية ↗</a></nav><div class="footer-attribution">المصدر والمرجع البصري والوظيفي: <a href="https://namethatui.com/" target="_blank" rel="noopener">Name That UI ↗</a>. الكود والنصوص والمعاينات العربية أصلية لهذا المشروع.</div></div></footer><div id="glossary" class="glossary" role="status"></div>`;

function bindChrome(){
 const t=document.querySelector('#themeToggle');
 if(t)t.onclick=()=>{const next=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=next;try{localStorage.setItem('ui-theme',next)}catch{}};

}
function demo(e,large=false){
  const s=e.slug;
  const cls=`ui-demo ${large?'large':''} demo-${s}`;
  const wrap=x=>`<div class="${cls}" aria-label="معاينة توضيحية لـ ${esc(e.ar)}">${x}</div>`;
  switch(s){
    case 'data-table': return wrap(`<div class="nt-table" dir="ltr"><div class="nt-table-head"><span>Customer</span><span>Status</span><span>Amount</span></div><div><span>Northwind</span><em>Paid</em><b>$4,280</b></div><div><span>Acme Co</span><em class="late">Overdue</em><b>$2,940</b></div><div><span>Globex</span><em class="pending">Pending</em><b>$1,860</b></div><div><span>Initech</span><em>Paid</em><b>$1,215</b></div><div><span>Umbrella</span><em>Paid</em><b>$640</b></div></div>`);
    case 'bottom-navigation': return wrap(`<div class="nt-phone" dir="ltr"><div class="nt-phone-glow"></div><div class="nt-tabs"><span class="on">⌂<small>Home</small></span><span>⌕<small>Search</small></span><span class="inbox">▣<i>3</i><small>Inbox</small></span><span>○<small>Profile</small></span></div><div class="nt-homebar"></div></div>`);
    case 'timeline': return wrap(`<div class="nt-timeline" dir="ltr"><div><time>09:12</time><i></i><p><b>Order placed</b><small>3 items</small></p></div><div><time>09:13</time><i></i><p><b>Payment confirmed</b><small>Visa ending 4242</small></p></div><div><time>14:40</time><i></i><p><b>Shipped</b><small>Left the warehouse</small></p></div><div><time>Today</time><i></i><p><b>Out for delivery</b><small>Arriving by 6 pm</small></p></div></div>`);
    case 'presence-indicator': return wrap(`<div class="nt-presence" dir="ltr"><span class="nt-avatar">AR<i></i></span><div><b>Ava Reyes</b><small>Online</small></div></div>`);
    case 'message-bubble': return wrap(`<div class="nt-chat" dir="ltr"><p class="incoming">Are we still on for 3?</p><p class="outgoing">Yes! Booking the room now</p><small>2:41 PM · Delivered</small><span class="typing">•••</span></div>`);
    case 'steps': return wrap(`<div class="nt-steps" dir="ltr"><span class="done">✓<small>Cart</small></span><i></i><span class="done">✓<small>Shipping</small></span><i></i><span class="active">3<small>Payment</small></span><i></i><span>4<small>Review</small></span></div>`);
    case 'avatar-group': return wrap(`<div class="nt-avatars" dir="ltr"><span class="a1">AR</span><span class="a2">JT</span><span class="a3">MK</span><span class="a4">DK</span><span class="more">+4</span></div>`);
    case 'multi-select': return wrap(`<div class="nt-multiselect" dir="ltr"><div class="nt-selecttop"><b>2 selected</b><span>⌄</span></div><label><i class="check">✓</i> Design</label><label><i class="check">✓</i> Research</label><label><i></i> Ops</label><label><i></i> Sales</label></div>`);
    case 'scrollspy': return wrap(`<div class="docs"><aside><b>في هذه الصفحة</b><span class="on">نظرة عامة</span><span>الإعداد</span><span>الأمثلة</span></aside><div class="doclines"><strong>نظرة عامة</strong><i></i><i></i><i></i><strong>الإعداد</strong><i></i></div></div>`);
    case 'alert-callout-banner': return wrap(`<div class="notice-stack"><div class="banner">تنبيه عام يمتد بعرض الصفحة</div><div class="callout-demo"><b>ملاحظة</b><span>معلومة مهمة داخل السياق.</span></div><div class="inline-alert">⚠ بطاقتك ستنتهي خلال 3 أيام.</div></div>`);
    case 'sign-in-form': return wrap(`<div class="signin"><b>تسجيل الدخول</b><button>G&nbsp; متابعة باستخدام Google</button><div class="or"><i></i><span>أو</span><i></i></div><label>البريد<input value="user@example.com"></label><label>كلمة المرور<input type="password" value="password"></label><button class="primary">دخول</button></div>`);
    case 'pagination': return wrap(`<div class="pagination"><button>‹</button><button class="on">1</button><button>2</button><button>3</button><span>…</span><button>8</button><button>›</button></div>`);
    case 'date-picker': return wrap(`<div class="calendar"><div class="range">5 يوليو – 16 يوليو 2026</div><b>يوليو 2026</b><div class="week"><span>س</span><span>ح</span><span>ن</span><span>ث</span><span>ر</span><span>خ</span><span>ج</span>${Array.from({length:21},(_,i)=>`<i class="${i>4&&i<16?'sel':''}">${i+1}</i>`).join('')}</div></div>`);
    case 'parallax-scrolling': return wrap(`<div class="parallax-ref"><div class="parallax-layer back">Field notes</div><div class="parallax-layer mid">Trail map</div><div class="parallax-layer front">Packing list</div><span class="parallax-axis">scroll ↓</span></div>`);
    case 'carousel': return wrap(`<div class="carousel-ref" dir="ltr"><button>‹</button><div class="carousel-strip"><article class="on"><b>Dunes</b><small>1 / 3</small></article><article><b>Reef</b><small>2 / 3</small></article><article><b>Meadow</b><small>3 / 3</small></article></div><button>›</button><div class="carousel-dots"><i class="on"></i><i></i><i></i></div></div>`);
    case 'site-header-nav': return wrap(`<div class="site-ref" dir="ltr"><header><b>Field Notes</b><nav><span>Home</span><span>Docs</span><span>Pricing</span></nav><button>Sign in</button></header><div class="site-ref-body"><span>Header</span><i></i><span>Navigation bar</span></div></div>`);
    case 'card': return wrap(`<article class="visual-card"><div class="media">صورة</div><small>دراسة حالة</small><b>إعادة تصميم الدفع</b><p>ملخص قصير يشرح المحتوى.</p><footer><span class="story-link">اقرأ القصة</span><button type="button">مشاركة</button></footer></article>`);
    case 'resize-handle': return wrap(`<div class="resize-ref"><label>Feedback</label><div class="resize-box">The export button is hard to find…<span class="resize-grip">⌟</span></div><button>Send</button></div>`);
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
    case 'drag-drop': return wrap(`<div class="kanban"><div><b>للعمل</b><span draggable="true">☷ كتابة المقدمة</span><span>☷ إرسال المسودة</span></div><div><b>قيد المراجعة</b><span class="ghost">☷ إصلاح الرأس</span><i>أسقط هنا</i></div></div>`);
    case 'divider-separator-rule': return wrap(`<div class="rules"><span>مقطع محتوى</span><hr><span>مقطع جديد</span><div class="menurow">قص <i></i> نسخ <i></i> لصق</div><div class="decorative"></div></div>`);
    case 'progress-indicators': return wrap(`<div class="progresses"><div><i class="spinner"></i><small>انتظار</small></div><div><i class="ring"><b>65%</b></i><small>حلقة تقدم</small></div><div><progress value="65" max="100"></progress><small>شريط تقدم</small></div></div>`);
    case 'toast': return wrap(`<div class="workspace"><span>مساحة العمل</span><div class="toast-demo">✓ تم حفظ التغييرات</div></div>`);
    case 'modal-drawer-sheet': return wrap(`<div class="triple"><div><b>Modal</b><span class="modal-mini">حذف الملف؟<small>إلغاء　حذف</small></span></div><div><b>Drawer</b><span class="drawer-mini">تعديل التفاصيل</span></div><div><b>Sheet</b><span class="sheet-mini">مشاركة مع…</span></div></div>`);
    case 'popover-dropdown-tooltip': return wrap(`<div class="overlay-kinds"><button>الفلاتر</button><div class="popover-demo">Popover<br><label>☑ نشط فقط</label></div><button>الإجراءات⌄</button><div class="dropdown-demo">إعادة تسمية<br>حذف</div><button class="info">i<span>آخر تحديث اليوم</span></button></div>`);
    case 'scrim': return wrap(`<div class="scrim-scene"><div class="pagegrid"><i></i><i></i><i></i><i></i></div><div class="scrim-demo"></div><div class="modal-surface"><b>سطح Modal</b><p>الطبقة الشفافة خلف هذه البطاقة هي Scrim.</p></div></div>`);
    case 'skeleton-spinner': return wrap(`<div class="loading-pair"><div><b>Skeleton</b><span class="skeleton a"></span><span class="skeleton"></span><span class="skeleton short"></span></div><div><b>Spinner</b><i class="spinner big"></i></div></div>`);
    case 'combobox': return wrap(`<div class="combo"><label>الفاكهة المفضلة<input value="تف"></label><div class="suggest"><b>تفاح</b><span>تفاح أخضر</span><span>تفاح أحمر</span></div></div>`);
    case 'command-palette': return wrap(`<div class="cmd"><div class="cmdsearch"><kbd>⌘ K</kbd> ابحث عن أمر…</div><div><span>إنشاء مشروع جديد <kbd>⌘ N</kbd></span><span>دعوة زميل <kbd>⌘ I</kbd></span><span>فتح الإعدادات <kbd>⌘ ,</kbd></span></div></div>`);
    case 'accordion': return wrap(`<div class="accordion"><details open><summary>ما هو المكوّن؟</summary><p>جزء قابل لإعادة الاستخدام.</p></details><details><summary>ما هو Design Token؟</summary></details><details><summary>لماذا نسمّي الأنماط؟</summary></details></div>`);
    case 'tabs': return wrap(`<div class="tabs-demo"><div role="tablist"><button class="on">نظرة عامة</button><button>التحليلات</button></div><section><b>النشاط الأسبوعي</b><strong>1,248</strong><small>+12% عن الأسبوع الماضي</small></section></div>`);
    case 'badge-chip-pill-tag': return wrap(`<div class="label-types"><span class="badge-demo">7</span><button class="chip-demo">تصميم ×</button><span class="pill-demo">نشط</span><span class="tag-demo">Web</span><small>شارة　شريحة　كبسولة　وسم</small></div>`);
    case 'breadcrumbs': return wrap(`<nav class="crumb-demo" aria-label="breadcrumb"><span>الرئيسية</span><i>›</i><span>المكونات</span><i>›</i><b>الأزرار</b></nav>`);
    case 'sticky-fixed': return wrap(`<div class="scroll-box"><span class="sticky-demo">position: sticky</span><div class="longtext"></div><span class="fixed-demo">fixed</span></div>`);
    case 'focus-ring-web': return wrap(`<div class="focusset"><button>رجوع</button><button class="focused">متابعة</button><button>حفظ</button><code>:focus-visible</code></div>`);
    case 'empty-state': return wrap(`<div class="empty"><div class="emptyicon">□</div><b>لا توجد مشاريع بعد</b><p>أنشئ مشروعك الأول للبدء.</p><button>مشروع جديد</button></div>`);
    case 'hover-card': return wrap(`<div class="hovercard"><span class="hover-trigger">@jane</span><div class="profile"><span>J</span><b>Jane Appleseed</b><small>@jane</small><p>مهندسة نظم تصميم.</p><em>Toronto · 2.4k</em></div></div>`);
    case 'switch-checkbox-radio': return wrap(`<div class="choice-types"><label><i class="switch on"></i> Switch</label><label><input type="checkbox" checked> Checkbox</label><label><input type="radio" checked> Radio</label></div>`);
    case 'toggle-group': return wrap(`<div class="toggle-group"><button>يسار</button><button class="on">وسط</button><button>يمين</button></div>`);
    case 'three-dots': return wrap(`<div class="overflow-demo"><div><button>•••</button><small>Meatballs</small><menu><span>إعادة تسمية</span><span>تكرار</span><span>حذف</span></menu></div><div><button>⋮</button><small>Kebab</small></div><div><button>☰</button><small>Hamburger</small></div><div><button>…</button><small>Ellipsis</small></div></div>`);

    case 'insertion-caret': return wrap(`<div class="mac-text">Name that U<span class="caret"></span>I</div>`);
    case 'pointer': return wrap(`<div class="cursors"><span class="arrow">↖</span><span class="ibeam">I</span><span class="cross">＋</span><span class="hand">☝</span><small>Arrow · I-beam · Crosshair · Pointing hand</small></div>`);
    case 'alert-macos': return wrap(`<div class="mac-alert"><div class="appicon">!</div><section><b>إفراغ سلة المهملات؟</b><p>لا يمكن التراجع عن هذا الإجراء.</p><div><button>إلغاء</button><button class="primary">إفراغ</button></div></section></div>`);
    case 'slider-macos': return wrap(`<div class="mac-control"><b>الصوت</b><div class="slider"><span style="width:62%"></span><i style="left:62%"></i></div></div>`);
    case 'color-well': return wrap(`<div class="mac-control"><b>التعبئة</b><button class="colorwell"><i></i> إظهار الألوان…</button></div>`);
    case 'mac-window': return wrap(`<div class="mac-window"><div class="titlebar"><span class="traffic"><i></i><i></i><i></i></span><b>الملاحظات</b></div><div class="mac-content"><aside>قائمة جانبية</aside><main>محتوى النافذة</main></div></div>`);
    case 'split-view': return wrap(`<div class="mac-window"><div class="titlebar"><span class="traffic"><i></i><i></i><i></i></span><b>البريد</b></div><div class="split"><aside>الوارد<br>المرسل<br>المسودات</aside><i class="splitter"></i><main>رسالة محددة</main></div></div>`);
    case 'scroll-view': return wrap(`<div class="scrollview"><div>Journal<br>${'سطر من المحتوى<br>'.repeat(7)}</div><span class="scroller"><i></i></span></div>`);
    case 'search-field-macos': return wrap(`<div class="mac-search"><span>⌕</span><input placeholder="بحث…"><button>×</button><div class="recent"><b>عمليات بحث حديثة</b><span>invoices 2026</span><span>receipts</span><span>tax</span></div></div>`);
    case 'save-panel': return wrap(`<div class="savepanel"><b>حفظ باسم:</b><input value="تقرير.pages"><label>المكان: <button>📁 Documents⌄</button></label><div class="files"><span>📁 Desktop</span><span>📁 Documents</span><span>📁 Downloads</span></div><footer><button>إلغاء</button><button class="primary">حفظ</button></footer></div>`);
    case 'token-field': return wrap(`<div class="tokenfield"><label>الوسوم:</label><span>Design ×</span><span>Q3 ×</span><input value="Rep"></div>`);
    case 'combo-button': return wrap(`<div class="combo-button"><button>حفظ</button><button>⌄</button><menu><span>حفظ باسم…</span><span>حفظ الكل</span><span>تصدير…</span></menu></div>`);
    case 'level-indicator': return wrap(`<div class="levels"><label>التقييم <span class="stars">★★★★☆</span></label><label>السعة <span class="capacity"><i style="width:72%"></i></span></label><label>الصلة <span class="dotslevel">●●●○○</span></label></div>`);
    case 'column-view': return wrap(`<div class="columns"><div>📁 Projects<br>📁 Archive<br>📁 NameThat</div><div>📁 content<br>📁 research<br>📁 assets</div><div>📄 index<br>📄 styles<br>📄 data</div></div>`);
    case 'outline-view': return wrap(`<div class="outline"><span>▾ Library</span><span class="in1">▾ 📁 Projects</span><span class="in2">▾ 📁 NameThat</span><span class="in3">📄 content</span><span class="in3">📄 FeelBench</span></div>`);
    case 'menu-bar': return wrap(`<div class="menubar"><b>Finder</b><span>ملف</span><span>تحرير</span><span>عرض</span><span>نافذة</span><span>مساعدة</span><i></i><small>9:41</small><div class="macmenu"><span>فتح… <kbd>⌘O</kbd></span><span>الإعدادات… <kbd>⌘,</kbd></span><hr><span>إنهاء <kbd>⌘Q</kbd></span></div></div>`);
    case 'context-menu': return wrap(`<div class="fileitem">📁 Projects<div class="context"><span>فتح <kbd>⌘O</kbd></span><span>إعادة تسمية…</span><span>تكرار ›</span><hr><span>نقل إلى سلة المهملات</span></div></div>`);
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

function card(e){return `<a class="entry-card" href="#/element/${e.slug}"><div class="entry-preview">${demo(e)}</div><div class="entry-body"><div class="entry-head"><h3>${esc(e.ar)} <span dir="ltr">(${esc(e.en)})</span>${e.new?'<em>NEW</em>':''}</h3><small>${e.category==='web'?'WEB':'MACOS'}</small></div><code class="entry-code">${esc(e.code)}</code><p>${esc(e.description)}</p></div></a>`}
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
function bindDemos(root=document){if(!root||root.dataset?.demoBound)return;if(root.dataset)root.dataset.demoBound='1';root.addEventListener('click',ev=>{const t=ev.target;if(t.closest('.tabs-demo button')){const btn=t.closest('button'),box=btn.closest('.tabs-demo');box.querySelectorAll('button').forEach(x=>x.classList.remove('on'));btn.classList.add('on');box.querySelector('section b').textContent=btn.textContent.trim()==='التحليلات'?'مؤشرات التحليلات':'النشاط الأسبوعي'}const tg=t.closest('.toggle-group button');if(tg){tg.parentElement.querySelectorAll('button').forEach(x=>x.classList.remove('on'));tg.classList.add('on')}const bd=t.closest('.bottomtabs > *');if(bd){bd.parentElement.querySelectorAll(':scope > *').forEach(x=>x.classList.remove('active'));bd.classList.add('active')}const hm=t.closest('.hamb');if(hm)hm.closest('.drawer-demo').classList.toggle('open');const lb=t.closest('.lightbox .thumb,.lightbox .photo button');if(lb)lb.closest('.lightbox').classList.toggle('open');const day=t.closest('.calendar .week i');if(day)day.classList.toggle('sel');const ck=t.closest('.checklist label');if(ck)ck.classList.toggle('checked');const ov=t.closest('.overflow-demo button');if(ov)ov.closest('.overflow-demo').classList.toggle('menuopen');const sw=t.closest('.switch');if(sw)sw.classList.toggle('on')})}

function home(){
 setMeta('ما اسم عنصر الواجهة هذا؟ — UI بالعربي','قاموس بصري عربي لعناصر واجهة المستخدم. صف الشيء بطريقتك لتصل إلى اسمه الحقيقي ورمز التنفيذ.','');
 const fresh=['data-table','bottom-navigation','timeline'].map(bySlug).filter(Boolean);
 const newest=['data-table','bottom-navigation','timeline','presence-indicator','message-bubble'];
 const rank=new Map(newest.map((s,i)=>[s,i]));
 app.innerHTML=nav('elements')+`<main id="main"><section class="hero shell">
 <div class="newweek"><b>جديد هذا الأسبوع</b><div>${fresh.map(e=>`<a href="#/element/${e.slug}">${esc(e.ar)} <span>${esc(e.en)}</span></a>`).join('')}</div></div>
 <h1>ما اسم عنصر الواجهة هذا<span class="qmark">؟</span></h1>
 <p class="hero-copy">القاموس البصري لعناصر UI. صف الشيء بكلماتك العادية؛ تحصل على الاسم الحقيقي، رمز التنفيذ، وPrompt جاهز لوكيل البرمجة.</p>
 <div class="search-examples" aria-label="أمثلة بحث"><span>“الخلفية الشاحبة خلف أيقونة في شريط القوائم”</span><span>“الطبقة الداكنة الشفافة خلف نافذة منبثقة”</span><span>“النص الرمادي داخل الحقل الذي يختفي عند الكتابة”</span><span>“النقطة التي تسحبها لتغيير مستوى الصوت”</span><span>“النص ينقطع بثلاث نقاط”</span></div>
 <div class="hero-search"><input id="search" autocomplete="off" inputmode="search" aria-label="صف عنصر الواجهة" placeholder="صف عنصر الواجهة الذي تفكر فيه…" value="${esc(state.q)}"></div>
 <div id="searchEmpty" class="search-empty" hidden><b>لا شيء يطابق هذا الوصف</b><p>جرّب وصف شكله أو مكانه — مثل «النقاط أسفل عرض الشرائح» أو «الشريط الذي يبقى ظاهرًا أثناء التمرير».</p></div>
 <div class="hero-help"><a href="#/styles">لا تعرف اسم المظهر أيضًا؟ جرّب أطلس الأنماط</a><span>اضغط مرتين على أي كلمة في الموقع لعرض تعريف عربي سريع.</span></div>
 </section>
 <section class="catalog shell"><div class="catalog-toolbar"><div class="filter-tabs"><button class="${state.cat==='all'?'active':''}" data-cat="all">الكل <span>${D.entries.length}</span></button><button class="${state.cat==='macos'?'active':''}" data-cat="macos">macOS <span>${D.entries.filter(x=>x.category==='macos').length}</span></button><button class="${state.cat==='web'?'active':''}" data-cat="web">Web <span>${D.entries.filter(x=>x.category==='web').length}</span></button></div><div class="sort-tabs"><button class="${state.sort==='newest'?'active':''}" data-sort="newest">الأحدث</button><button class="${state.sort==='popular'?'active':''}" data-sort="popular">الأكثر شيوعًا</button></div></div><div id="cards" class="entries-grid"></div></section>
 <section class="guides shell"><div class="sectionlabel">الأدلة — القرارات التي تسبق الأسماء</div><div class="guidecards"><a href="#/guide/appkit-swiftui"><b>AppKit أم SwiftUI؟</b><span>العنصر نفسه في Mac قد يملك اسمين حقيقيين — أيهما تستخدم في الـPrompt؟</span></a><a href="#/guide/swift-electron"><b>Swift أم Electron؟</b><span>تطبيق أصلي أم واجهة ويب داخل غلاف — القرار الأول الذي يحدد المفردات.</span></a><a href="#/translate"><b>جدول الترجمة</b><span>60+ عنصرًا: الاسم البسيط ← AppKit ← SwiftUI، مع بحث مباشر.</span></a></div></section></main>`+footer();
 const render=()=>{let list=D.entries.filter(e=>(state.cat==='all'||e.category===state.cat)&&searchMatches(e,state.q));list=[...list].sort((a,b)=>{if(state.sort==='popular')return b.popularity-a.popularity;const ar=rank.has(a.slug)?rank.get(a.slug):999,br=rank.has(b.slug)?rank.get(b.slug):999;return ar!==br?ar-br:Number(b.new)-Number(a.new)||D.entries.indexOf(a)-D.entries.indexOf(b)});const cards=document.querySelector('#cards');cards.innerHTML=list.map(card).join('');const empty=document.querySelector('#searchEmpty');if(empty)empty.hidden=!state.q||!!list.length;bindDemos(cards)};
 render();
 const search=document.querySelector('#search');search.addEventListener('input',e=>{state.q=e.target.value;render()});
 document.querySelectorAll('[data-cat]').forEach(b=>b.onclick=()=>{state.cat=b.dataset.cat;home()});
 document.querySelectorAll('[data-sort]').forEach(b=>b.onclick=()=>{state.sort=b.dataset.sort;home()});

 document.addEventListener('keydown',e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();document.querySelector('#search')?.focus()}},{once:true});
 bindChrome();bindGlossary();
}
function detail(slug){
 const e=bySlug(slug);
 if(!e)return notFound();
 setMeta(`${e.ar} — ${e.en}`,e.description,`element/${e.slug}/`);
 const idx=D.entries.indexOf(e);
 const pool=D.entries.filter(x=>x!==e&&x.category===e.category);
 const start=pool.length?idx%pool.length:0;
 const rel=Array.from({length:Math.min(5,pool.length)},(_,i)=>pool[(start+i)%pool.length]);
 const aliases=(e.aliases||[]).slice(0,8);
 const codeRows=e.inCode||[];
 app.innerHTML=nav('elements')+`
 <main id="main" class="shell detail-shell">
   <article class="detail">
     <div class="detail-topbar">
       <nav class="crumbs" aria-label="مسار الصفحة">
         <a href="#/">الفهرس</a><span>/</span><span>${e.category==='web'?'Web':'macOS'}</span>
       </nav>
       <div class="detail-actions" aria-label="إجراءات الصفحة">
         <button type="button" data-detail-save aria-pressed="false">☆ حفظ</button>
         <button type="button" data-detail-share>مشاركة</button>
         <button type="button" data-detail-copy>نسخ الصفحة</button>
       </div>
     </div>

     <section class="detail-visual" aria-label="المعاينة">
       <div class="specimen">${demo(e,true)}</div>
       <p class="specimen-caption">معاينة تفاعلية توضّح الشكل والسلوك الأساسي لـ <b>${esc(e.ar)}</b>.</p>
     </section>

     <header class="detail-heading">
       <div class="detail-kicker">${e.category==='web'?'WEB':'macOS'}</div>
       <h1>${esc(e.ar)}</h1>
       <div class="detail-en" dir="ltr">${esc(e.en)}</div>
       <div class="detail-symbols" dir="ltr">/ <code>${esc(e.code)}</code> /</div>
       ${aliases.length?`<p class="aka"><b>يُسمى أيضًا</b> ${aliases.map(esc).join('، ')}</p>`:''}
       <p class="lead">${esc(e.description)}</p>
     </header>

     <section class="section called-section">
       <h2>إذا كنت تسميه…</h2>
       <div class="called">${(aliases.length?aliases:[e.en]).map(a=>`<span>“${esc(a)}”</span>`).join('')}</div>
       <p class="answerline">…فالمصطلح الأدق هو <b>${esc(e.ar)}</b> <span dir="ltr">(${esc(e.en)})</span>.</p>
     </section>

     <section class="section anatomy-section">
       <h2>التشريح — اسم كل جزء</h2>
       <div class="anatomy">
         ${(e.anatomy||[]).map((p,i)=>`
           <div class="part">
             <i>${i+1}</i>
             <div>
               <b>${esc(p.name)}</b>
               <p>${esc(p.desc)}</p>
             </div>
           </div>`).join('')}
       </div>
     </section>

     <section class="section prompt-section">
       <h2>Prompt — جاهز لوكيل البرمجة</h2>
       <p class="section-intro">انسخ النص كما هو، ثم أضف تفاصيل مشروعك أو إطار العمل الذي تستخدمه.</p>
       <div class="prompt prompt-agent">
         <button class="copybtn" type="button" data-copy="${encodeURIComponent(e.prompt)}">نسخ</button>
         <p>${esc(e.prompt)}</p>
       </div>
     </section>

     <section class="section prompt-section">
       <h2>Debug Prompt — عندما لا يعمل كما ينبغي</h2>
       <p class="section-intro">استخدمه كقائمة فحص سريعة للمشكلات الشائعة قبل تعديل المكوّن عشوائيًا.</p>
       <div class="prompt prompt-debug">
         <button class="copybtn" type="button" data-copy="${encodeURIComponent(e.debug)}">نسخ</button>
         <p>${esc(e.debug)}</p>
       </div>
     </section>

     <section class="section code-section">
       <h2>في الكود</h2>
       <p class="section-intro">الأسماء والرموز الأقرب لهذا العنصر في البيئات المختلفة.</p>
       <div class="tablewrap">
         <table class="code-table">
           <tbody>
             ${codeRows.map(r=>`<tr><td>${esc(r.stack)}</td><td><code dir="ltr">${esc(r.symbol)}</code></td><td>${esc(r.note)}</td></tr>`).join('')}
           </tbody>
         </table>
       </div>
     </section>

     <section class="section related-section">
       <h2>راجع أيضًا</h2>
       <div class="related">
         ${rel.map(r=>`<a href="#/element/${r.slug}"><b>${esc(r.ar)}</b><span>${esc(r.en)}</span><small>${r.category==='web'?'Web':'macOS'}</small></a>`).join('')}
       </div>
     </section>

     <p class="detail-source-note">المرجع الوظيفي والبصري: <a href="https://namethatui.com/" target="_blank" rel="noopener">Name That UI ↗</a>. النصوص العربية والمعاينات هنا مكتوبة ومبنية للمشروع العربي.</p>
   </article>
 </main>`+footer();
 bindCopy();
 bindDetailActions(e);
 bindChrome();
 bindGlossary();
 bindDemos(document.querySelector('.specimen'));
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
       <a href="#/">تبحث عن عنصر تحكم، لا عن مظهر؟ تصفّح عناصر UI ←</a>
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
   grid.innerHTML=list.map(s=>`<a class="atlas-card" href="#/style/${s.slug}">
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
 const idx=D.styles.indexOf(s);
 const related=[confused,...Array.from({length:5},(_,i)=>D.styles[(idx+i+1)%D.styles.length])]
   .filter((x,i,a)=>x&&x!==s&&a.indexOf(x)===i).slice(0,4);

 app.innerHTML=nav('styles')+`<main id="main" class="shell style-detail-shell">
   <article class="style-detail">
     <nav class="style-crumbs"><a href="#/styles">الأنماط</a><span>/</span><span dir="ltr">${esc(s.en)}</span></nav>

     <section class="style-detail-visual">
       ${styleSpecimen(s,true)}
     </section>

     <header class="style-detail-head">
       <h1>${esc(s.ar)}</h1>
       <div class="style-detail-en" dir="ltr">${esc(s.en)}</div>
       <span class="style-status-badge">${esc(s.status)}</span>
       <p class="style-origin-summary">${esc(s.origin)}</p>
       <p class="style-aliases"><b>يُسمى أيضًا</b> ${(s.aliases||[]).map(esc).join('، ')}</p>
       <p class="style-lead">${esc(s.desc)}</p>
       <p class="style-scope"><b>النطاق:</b> ${esc(s.scope)}</p>
     </header>

     <section class="style-section style-called">
       <h2>إذا كنت تسميه…</h2>
       <div class="style-called-list">${(s.called||[]).map(x=>`<span>“${esc(x)}”</span>`).join('')}</div>
       <p>…فأنت تقصد <b>${esc(s.ar)}</b> <span dir="ltr">(${esc(s.en)})</span>.</p>
     </section>

     <section class="style-section">
       <h2>ما الذي يجعله هذا الأسلوب؟ — الإشارات المحدِّدة</h2>
       <div class="style-signal-list">
         ${(s.signalDetails||[]).map((x,i)=>`<div class="style-signal">
           <i>${i+1}</i>
           <div><small>${esc(x.group)}</small><b>${esc(x.title)}</b><p>${esc(x.desc)}</p></div>
         </div>`).join('')}
       </div>
     </section>

     <section class="style-section">
       <h2>Style Brief — جاهز لوكيل البرمجة</h2>
       <div class="style-brief prompt">
         <button class="copybtn" type="button" data-copy="${encodeURIComponent(s.brief)}">نسخ</button>
         <p>${esc(s.brief)}</p>
       </div>
     </section>

     ${confused?`<section class="style-section">
       <h2>غالبًا يختلط مع <a href="#/style/${confused.slug}">${esc(confused.ar)}</a></h2>
       <p class="style-section-intro">نفس نوع الواجهة، لكن بأسلوبين مختلفين. الفرق في المادة والضوء والهندسة، لا في اللون وحده.</p>
       <div class="style-versus">
         <a class="style-vs-card" href="#/style/${s.slug}">
           <div>${styleSpecimen(s)}</div><b>${esc(s.ar)}</b><span dir="ltr">${esc(s.en)}</span>
         </a>
         <a class="style-vs-card" href="#/style/${confused.slug}">
           <div>${styleSpecimen(confused)}</div><b>${esc(confused.ar)}</b><span dir="ltr">${esc(confused.en)}</span>
         </a>
       </div>
       <div class="style-vs-copy">
         <p><b>${esc(s.ar)}:</b> ${esc(s.signals.slice(0,2).join('، '))}.</p>
         <p><b>${esc(confused.ar)}:</b> ${esc(confused.signals.slice(0,2).join('، '))}.</p>
       </div>
     </section>`:''}

     <section class="style-section">
       <h2>Full Style DNA</h2>
       <div class="style-dna">
         ${(s.signalDetails||[]).map(x=>`<div class="dna-row"><span>${esc(x.group)}</span><em>محدِّد</em><b>${esc(x.title)}</b><p>${esc(x.desc)}</p></div>`).join('')}
         <div class="dna-row"><span>إشارة داعمة</span><em>داعم</em><b>ما الذي يعزز الأسلوب؟</b><p>${esc(s.supporting)}</p></div>
         <div class="dna-row avoid"><span>تجنّب</span><em>تجنّب</em><b>ما الذي يخرجه من هويته؟</b><p>${esc(s.avoid)}</p></div>
       </div>
     </section>

     <section class="style-section">
       <h2>في الكود — نقاط بداية اختيارية</h2>
       <p class="style-section-intro">الـBrief أعلاه محايد للأطر؛ هذه مقابض عملية عندما تناسب التقنية المستخدمة.</p>
       <div class="tablewrap">
         <table class="style-code-table">
           <tbody>${(s.codeRows||[]).map(r=>`<tr><td>${esc(r.stack)}</td><td><code dir="ltr">${esc(r.symbol)}</code></td><td>${esc(r.note)}</td></tr>`).join('')}</tbody>
         </table>
       </div>
     </section>

     <section class="style-section">
       <h2>الإتاحة وسوء الاستخدام</h2>
       <ul class="style-access">${(s.accessibility||[]).map(x=>`<li>${esc(x)}</li>`).join('')}</ul>
     </section>

     <section class="style-section">
       <h2>الأصل والسياق</h2>
       <p class="style-origin-long">${esc(s.origin)}</p>
     </section>

     <section class="style-section">
       <h2>راجع أيضًا</h2>
       <div class="style-related">${related.map(r=>`<a href="#/style/${r.slug}">
         <div>${styleSpecimen(r)}</div><b>${esc(r.ar)}</b><span dir="ltr">${esc(r.en)}</span>
       </a>`).join('')}</div>
     </section>

     <p class="detail-source-note">المرجع البصري والوظيفي: <a href="https://namethatui.com/styles" target="_blank" rel="noopener">Name That UI — Styles ↗</a>. الشرح العربي والمعاينات في هذه المنصة مكتوبة ومبنية للمشروع العربي.</p>
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
  "multi-select",
  "combobox"
 ],
 "tabs-vs-segmented": [
  "tabs",
  "segmented-control"
 ],
 "accordion-vs-tabs": [
  "accordion",
  "tabs"
 ],
 "toast-vs-alert": [
  "toast",
  "alert-callout-banner"
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
  "hamburger-menu"
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
function comparisonItems(c){
  return (comparisonEntries[c.slug]||[]).map(bySlug).filter(Boolean);
}
function comparisonCard(e){
  return `<a class="vs-entry" href="#/element/${e.slug}"><div class="vs-entry-preview">${demo(e)}</div><div class="vs-entry-copy"><b>${esc(e.ar)}</b><span dir="ltr">${esc(e.en)}</span><small>${e.category==='web'?'Web':'macOS'}</small></div></a>`;
}
function compare(){
  setMeta('العناصر التي يكثر الخلط بينها — UI بالعربي','مقارنات عملية بين عناصر واجهة متشابهة بصريًا لكن مختلفة في الوظيفة والسلوك.','compare/');
  app.innerHTML=nav('compare')+`<main id="main"><section class="compare-hero shell"><div class="compare-kicker">Commonly Confused</div><h1>تبدو متشابهة.<br>لكن الفرق حاسم.</h1><p>مقارنات قصيرة تبدأ من الشيء الذي يمكنك ملاحظته مباشرة: المكان، السلوك، نطاق التأثير، والدلالة.</p></section><section class="shell confused-grid">${D.comparisons.map((c,i)=>{const items=comparisonItems(c).slice(0,2);return `<a class="confused-card" href="#/vs/${c.slug}"><div class="confused-number">${String(i+1).padStart(2,'0')}</div><h2>${esc(c.title)}</h2><p>${esc(c.answer)}</p><div class="confused-mini">${items.map(e=>`<div><span>${esc(e.ar)}</span><small dir="ltr">${esc(e.en)}</small></div>`).join('')}</div><span class="confused-open">افتح المقارنة ←</span></a>`}).join('')}</section></main>`+footer();
  bindChrome();bindGlossary();
}
function compareDetail(slug){
  const c=D.comparisons.find(x=>x.slug===slug);
  if(!c)return notFound();
  const items=comparisonItems(c);
  const rules=comparisonRules[c.slug]||[c.answer];
  setMeta(`${c.title} — UI بالعربي`,c.answer,`vs/${c.slug}/`);
  app.innerHTML=nav('compare')+`<main id="main" class="shell vs-shell"><article class="vs-detail"><nav class="vs-crumbs"><a href="#/compare">المتشابهات</a><span>/</span><span>${esc(c.title)}</span></nav><header class="vs-head"><div class="compare-kicker">COMMONLY CONFUSED</div><h1>${esc(c.title)}</h1><p>${esc(c.answer)}</p></header><section class="vs-showcase">${items.map(comparisonCard).join('')}</section><section class="vs-section"><h2>كيف تفرّق بينها؟</h2><ul class="vs-rules">${rules.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></section><section class="vs-section"><h2>القرار السريع</h2><div class="vs-decision">${items.map((e,i)=>`<div><b>${esc(e.ar)}</b><span dir="ltr">${esc(e.en)}</span><p>${esc(rules[Math.min(i,rules.length-1)]||c.answer)}</p><a href="#/element/${e.slug}">افتح الإدخال الكامل ←</a></div>`).join('')}</div></section><p class="detail-source-note">المرجع البنيوي للمقارنات: <a href="https://namethatui.com/vs" target="_blank" rel="noopener">Name That UI — Commonly Confused ↗</a>. الشرح العربي هنا مكتوب للمشروع العربي.</p></article></main>`+footer();
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
  setMeta('جدول الترجمة — AppKit وSwiftUI','جدول عربي قابل للبحث يربط الشيء المرئي باسمه في AppKit وSwiftUI.','translate/');
  app.innerHTML=nav('translate')+`<main id="main" class="shell translate-page"><section class="translate-hero"><div class="translate-kicker">الاسم البسيط · AppKit · SwiftUI</div><h1>جدول الترجمة</h1><p>العنصر نفسه على Mac قد يملك اسمين حقيقيين، واحدًا في AppKit وآخر في SwiftUI. ابدأ بما تراه ثم خذ العمود الذي يتحدث به مشروعك.</p><p class="translate-note">غير متأكد من الطبقة؟ <a href="#/guide/appkit-swiftui">اقرأ AppKit أم SwiftUI أولًا ←</a></p><label class="translate-search"><span>⌕</span><input id="tsearch" inputmode="search" autocomplete="off" placeholder="فلتر — جرّب segmented أو NSPopUpButton أو تنبيه"><kbd>⌘K</kbd></label></section><section id="ttable"></section></main>`+footer();
  const input=document.querySelector('#tsearch');
  const draw=()=>{
    const q=norm(input.value);
    const rows=D.translations.filter(r=>!q||norm(Object.values(r).join(' ')).includes(q));
    document.querySelector('#ttable').innerHTML=`<div class="translation-wrap"><table class="translation-v2"><thead><tr><th>العنصر</th><th>AppKit</th><th>SwiftUI</th></tr></thead><tbody>${rows.map(r=>{const e=translationEntry(r);return `<tr><td>${e?`<a href="#/element/${e.slug}">${esc(r.thing)}</a>`:esc(r.thing)}</td><td><code dir="ltr">${esc(r.appkit)}</code></td><td><code dir="ltr">${esc(r.swiftui)}</code></td></tr>`}).join('')}</tbody></table></div><p class="translation-count">${rows.length} من ${D.translations.length} ترجمة · العناصر المسطّرة مرتبطة بمدخل بصري عند توفر تطابق.</p>`;
  };
  draw();input.oninput=draw;
  addEventListener('keydown',e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();input.focus()}},{once:true});
  bindChrome();bindGlossary();
}
function methodology(){
  setMeta('المنهجية — UI بالعربي','كيف نتحقق من أسماء عناصر الواجهة ومصطلحاتها ومقابلاتها العربية.','methodology/');
  const sources=[
    {title:'Apple platforms',body:'أسماء المكونات وسلوك المنصة والرموز الدقيقة في AppKit وSwiftUI وUIKit.',links:[['Human Interface Guidelines','https://developer.apple.com/design/human-interface-guidelines/'],['Developer Documentation','https://developer.apple.com/documentation/']]},
    {title:'Accessible web patterns',body:'الأدوار والخصائص والتفاعل بلوحة المفاتيح ومتطلبات الإتاحة.',links:[['WAI-ARIA','https://www.w3.org/TR/wai-aria/'],['ARIA APG','https://www.w3.org/WAI/ARIA/apg/'],['WCAG','https://www.w3.org/WAI/standards-guidelines/wcag/']]},
    {title:'The web platform',body:'الدلالات الأصلية وسلوك HTML وواجهات المتصفح وسياق التنفيذ.',links:[['WHATWG HTML','https://html.spec.whatwg.org/'],['MDN Web Docs','https://developer.mozilla.org/']]},
    {title:'التعريب والمصطلح العربي',body:'نوازن بين المصطلح التقني الشائع وإرشادات المنصات العربية، مع إبقاء الإنجليزية ملاصقة عندما تمنع الغموض.',links:[['Microsoft Style Guide','https://learn.microsoft.com/globalization/reference/microsoft-style-guides'],['Material Design','https://m3.material.io/']]}
  ];
  app.innerHTML=nav('methodology')+`<main id="main" class="shell methodology-page"><article class="methodology"><div class="method-kicker">شاهد · تحقق · سمِّ</div><h1>المنهجية</h1><p class="method-lead">نبدأ من شيء يراه المستخدم ولا يعرف كيف يسميه. نحدد البكسل أولًا، ثم نتحقق من المصطلح في توثيق المنصة، ومعايير الإتاحة، والـAPI الذي يشحن فعلًا قبل إدخاله إلى القاموس.</p><section class="method-section"><h2>كيف يدخل المصطلح؟</h2><div class="method-steps"><div><i>1</i><b>ابدأ بالبكسلات</b><p>يجب أن يشير المصطلح إلى شيء مرئي فعلًا ويصعب وصفه، لا إلى اسم يبدو مفيدًا فقط.</p></div><div><i>2</i><b>تحقق من المنصة</b><p>نقارن الاسم الظاهر في دليل التصميم، والاسم البرمجي في التوثيق، والدور الدلالي أو السلوك عند وجود معيار له.</p></div><div><i>3</i><b>اجعل الفرق مرئيًا</b><p>المعاينة والتشريح والوصف يجب أن تجعل العنصر مميزًا عن أقرب البدائل دون حاجة لمفردات مسبقة.</p></div></div></section><section class="method-section"><h2>المصادر التي نرجع إليها</h2><p class="method-intro">المصدر يتغير حسب نوع الادعاء: دليل التصميم يسمي النمط، المواصفة تحدد الدلالة، وتوثيق الإطار يعطينا الرمز الدقيق.</p><div class="source-cards">${sources.map(s=>`<div class="source-card"><h3>${esc(s.title)}</h3><p>${esc(s.body)}</p><div>${s.links.map(([n,u])=>`<a href="${u}" target="_blank" rel="noopener">${esc(n)} ↗</a>`).join('')}</div></div>`).join('')}</div></section><section class="method-section"><h2>ماذا تعلّمنا لغة البحث الحقيقية؟</h2><p>التوثيق الرسمي يخبرنا ما اسم الشيء. لكن عبارات المستخدمين تكشف كيف يصفونه قبل أن يعرفوا الاسم. نستخدم هذه اللغة لتحسين البحث والوصف البسيط، لكنها لا تتغلب على معيار أو اسم منصة موثّق.</p><div class="method-query-examples"><span>“الثلاث نقاط التي تفتح خيارات”</span><span>“الطبقة السوداء خلف النافذة”</span><span>“النص الرمادي الذي يختفي عند الكتابة”</span></div></section><section class="method-section"><h2>عندما تختلف الأسماء</h2><p>قد يبدو العنصر نفسه متشابهًا على الويب وmacOS أو يملك اسمين في AppKit وSwiftUI. لذلك نبقي المنصة والإطار ملاصقين للمصطلح، ونظهر الأسماء البديلة المفيدة بدل الادعاء بوجود اسم عالمي واحد.</p><a class="method-cta" href="#/translate">افتح جدول AppKit ↔ SwiftUI ←</a></section><section class="method-section"><h2>قواعد التعريب</h2><div class="method-principles"><div><b>العربي أولًا</b><p>العنوان العربي هو المدخل الأساسي، والإنجليزي يبقى ملاصقًا له عندما يكون أدق تقنيًا.</p></div><div><b>الشائع قبل الحرفي</b><p>لا نترجم كلمة بكلمة إذا كان المجتمع العربي يستخدم مصطلحًا تقنيًا معروفًا وأكثر وضوحًا.</p></div><div><b>لا نختلق اسمًا قياسيًا</b><p>عندما لا يوجد تعريب مستقر، نوضح الوصف ونُبقي المصطلح الإنجليزي بدل تقديم ترجمة مخترعة كمعيار.</p></div></div></section><p class="detail-source-note">الهيكل البحثي مستند إلى منهجية Name That UI الحالية، مع إضافة قواعد التعريب الخاصة بالمنصة العربية. <a href="https://namethatui.com/methodology" target="_blank" rel="noopener">المرجع ↗</a></p></article></main>`+footer();
  bindChrome();bindGlossary();
}
function guideHub(){
  setMeta('الأدلة — UI بالعربي','أدلة عملية لاختيار عالم المصطلحات الصحيح قبل تسمية العنصر.','guides/');
  const cards=[
    {href:'#/guide/appkit-swiftui',k:'macOS',title:'AppKit أم SwiftUI؟',desc:'العنصر نفسه قد يملك اسمين صحيحين. حدّد طبقة مشروعك أولًا.'},
    {href:'#/guide/swift-electron',k:'Architecture',title:'Swift أم Electron؟',desc:'تطبيق Mac أصلي أم واجهة ويب داخل Chromium؟ القرار يغيّر القاموس كله.'},
    {href:'#/translate',k:'Reference',title:'جدول الترجمة',desc:`${D.translations.length} عنصرًا: الاسم البسيط → AppKit → SwiftUI، مع بحث فوري.`}
  ];
  app.innerHTML=nav('guides')+`<main id="main" class="shell guides-page"><section class="guides-hero"><div class="guides-kicker">GUIDES</div><h1>القرارات التي تسبق الأسماء.</h1><p>قبل أن تختار المصطلح، حدّد العالم التقني الذي تنتمي إليه الواجهة. هذه الأدلة تمنع خلط AppKit وSwiftUI والويب في Prompt واحد.</p></section><section class="guide-hub-grid">${cards.map(c=>`<a href="${c.href}" class="guide-hub-card"><small>${esc(c.k)}</small><h2>${esc(c.title)}</h2><p>${esc(c.desc)}</p><span>افتح الدليل ←</span></a>`).join('')}</section><section class="guide-method-link"><b>كيف نقرر الاسم أصلًا؟</b><p>راجع قواعد المصادر، المنصات، الإتاحة، والتعريب.</p><a href="#/methodology">اقرأ المنهجية ←</a></section></main>`+footer();
  bindChrome();bindGlossary();
}
function guide(kind){
  let title,subtitle,body,path;
  if(kind==='appkit-swiftui'){
    title='AppKit أم SwiftUI؟';subtitle='نفس عنصر Mac، اسمان حقيقيان — أيهما تستخدم في الـPrompt؟';path='appkit-vs-swiftui/';
    body=`<section class="guide-prose"><p class="lead">AppKit وSwiftUI ليسا اسمين لنفس الـAPI. قد يعرضان عنصرًا متشابهًا، لكن لكل طبقة مفرداتها ورموزها.</p><h2>القاعدة العملية</h2><div class="guide-choices"><div><b>مشروع AppKit</b><p>إذا كان الكود مليئًا بـ <code>NSWindow</code> و<code>NSView</code> و<code>NSButton</code>، استخدم أسماء AppKit.</p></div><div><b>مشروع SwiftUI</b><p>إذا كانت الواجهة مبنية من <code>View</code> و<code>Button</code> وmodifiers، استخدم أسماء SwiftUI.</p></div></div><h2>المشاريع المختلطة</h2><p>سمِّ الطبقة التي تريد تعديلها. مثال: “SwiftUI view داخل NSWindow” أدق من قول “عدّل نافذة الماك” فقط.</p><h2>ليست كل تطبيقات Mac واحدة</h2><div class="guide-forks"><div><b>Mac Catalyst</b><p>تطبيق iPad يعمل على Mac ويستخدم UIKit، وليس AppKit.</p></div><div><b>Electron</b><p>واجهة ويب داخل Chromium + Node؛ مفرداتها الأساسية من عالم الويب.</p></div></div><h2>الأسئلة الشائعة</h2><div class="guide-faq"><details open><summary>هل SwiftUI استبدلت AppKit؟</summary><p>لا. SwiftUI مناسبة لكثير من الشاشات الجديدة، بينما AppKit ما زالت ضرورية لسلوكيات Mac متخصصة.</p></details><details><summary>هل يمكن استخدامهما معًا؟</summary><p>نعم. تطبيقات كثيرة تمزج بينهما، لذلك تحديد الطبقة في الطلب مهم.</p></details><details><summary>هل كل SwiftUI Control مجرد AppKit Control تحت الغطاء؟</summary><p>لا تعتمد على ذلك؛ عامل كل API كواجهة مستقلة حتى لو تشابه الشكل.</p></details></div><p><a class="guide-table-link" href="#/translate">افتح جدول الترجمة الكامل (${D.translations.length}) ←</a></p></section>`;
  }else{
    title='Swift أم Electron؟';subtitle='Native app أم web-in-a-shell — أول مفترق يحدد مفردات الواجهة.';path='swift-vs-electron/';
    body=`<section class="guide-prose"><p class="lead">القرار هنا ليس مجرد لغة برمجة؛ إنه يحدد مجموعة المكونات والـAPIs التي يجب أن تسميها في التصميم والـPrompt.</p><div class="arch-compare"><div><small>NATIVE MAC</small><h2>Swift / AppKit / SwiftUI</h2><p>نوافذ وقوائم وأشرطة أدوات وسلوك Mac الأصلي.</p><code>NSWindow · NSToolbar · MenuBarExtra</code></div><div><small>WEB IN A SHELL</small><h2>Electron</h2><p>HTML/CSS/JS داخل BrowserWindow مع APIs سطح مكتب حولها.</p><code>DOM · CSS · BrowserWindow · Tray</code></div></div><h2>كيف تعرف عالم المشروع؟</h2><ul><li>وجود <code>package.json</code> وElectron → استخدم مفردات الويب للمحتوى.</li><li>وجود Xcode وSwiftUI/AppKit → استخدم أسماء Apple الدقيقة.</li><li>لا تطلب <code>NSToolbar</code> داخل واجهة Electron إذا كنت تقصد شريط أدوات HTML.</li></ul><h2>قاعدة عملية</h2><p>اختر التقنية أولًا، ثم اكتب الـPrompt بمفرداتها الصحيحة. الاسم الدقيق يقلل محاولات التخمين من الوكيل البرمجي.</p></section>`;
  }
  setMeta(title,subtitle,path);
  app.innerHTML=nav('guides')+`<main id="main" class="shell guide-v2"><nav class="guide-crumbs"><a href="#/guides">الأدلة</a><span>/</span><span>${esc(title)}</span></nav><header><div class="guides-kicker">GUIDE</div><h1>${esc(title)}</h1><p>${esc(subtitle)}</p></header>${body}<p class="detail-source-note">بنية الدليل مستندة إلى قسم Guides في Name That UI، مع شرح عربي أصلي للمشروع.</p></main>`+footer();
  bindChrome();bindGlossary();
}
function glossaryPage(){
  setMeta('قاموس المصطلحات — UI بالعربي','تعريفات عربية سريعة للمفاهيم التقنية المتكررة في تصميم وبرمجة واجهات المستخدم.','glossary/');
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
  setMeta('اقترح عنصرًا — UI بالعربي','اقترح عنصر واجهة جديدًا للقاموس عبر نموذج منظم يجهز GitHub Issue للمراجعة.','submit/');
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
  if(seg[0]==='styles'&&seg[1]) return `/style/${seg[1]}`;
  if(seg[0]==='styles') return '/styles';
  if(seg[0]==='vs'&&seg[1]) return `/vs/${seg[1]}`;if(['compare','translate','methodology','guides','glossary','saved','submit'].includes(seg[0])) return `/${seg[0]}`;
  if(seg[0]==='appkit-vs-swiftui') return '/guide/appkit-swiftui';
  if(seg[0]==='swift-vs-electron') return '/guide/swift-electron';
  return '/404';
}
function router(){scrollTo(0,0);const p=routeFromLocation();const seg=p.split('/').filter(Boolean);if(!seg.length)return home();if(seg[0]==='element')return detail(seg[1]);if(seg[0]==='styles'&&seg.length===1)return styles();if(seg[0]==='style')return styleDetail(seg[1]);if(seg[0]==='compare')return compare();if(seg[0]==='vs')return compareDetail(seg[1]);if(seg[0]==='translate')return translate();if(seg[0]==='methodology')return methodology();if(seg[0]==='guides')return guideHub();if(seg[0]==='glossary')return glossaryPage();if(seg[0]==='saved')return saved();if(seg[0]==='submit')return submitTerm();if(seg[0]==='guide')return guide(seg[1]);return notFound()}
addEventListener('hashchange',router);router();
})();