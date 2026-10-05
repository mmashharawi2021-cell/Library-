import fs from 'node:fs';import path from 'node:path';
const root=process.cwd(),dist=path.join(root,'dist'),BASE='https://mmashharawi2021-cell.github.io/Library-/',RELEASE='V45',RELEASE_DATE='2026-10-05';
fs.rmSync(dist,{recursive:true,force:true});fs.mkdirSync(dist,{recursive:true});
for(const f of ['index.html','404.html','styles.css','app.js','data.js','feed.xml','manifest.webmanifest','icon.svg','robots.txt','sw.js','service-worker.js','serviceWorker.js'])fs.copyFileSync(path.join(root,f),path.join(dist,f));
const raw=fs.readFileSync('data.js','utf8').replace(/^window\.UI_AR_DATA\s*=\s*/,'').replace(/;\s*$/,'');const d=JSON.parse(raw);const shell=fs.readFileSync('index.html','utf8');
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
const json=s=>JSON.stringify(s).replace(/</g,'\\u003c');
const compareRouteSlugs={'dropdown-select-combobox':'dropdown-vs-select-vs-combobox','tabs-vs-segmented':'tabs-vs-segmented-control','context-vs-dropdown':'context-menu-vs-dropdown','masonry-vs-bento':'masonry-vs-bento-grid','sheet-vs-alert-mac':'sheet-vs-alert','empty-vs-skeleton':'empty-state-vs-skeleton'};
const compareSlug=c=>compareRouteSlugs[c.slug]||c.slug;
function page(route,title,desc,indexable=true){
  const dir=path.join(dist,route);fs.mkdirSync(dir,{recursive:true});
  const url=BASE+route.replace(/\/+$/,'')+'/';
  const ld={"@context":"https://schema.org","@type":"WebPage",name:title,description:desc,url,inLanguage:"ar",isPartOf:{"@type":"WebSite",name:"UI بالعربي",url:BASE}};
  let h=shell
    .replace(/<title>[\s\S]*?<\/title>/,`<title>${esc(title)}</title>`)
    .replace(/<meta name="description" content="[^"]*">/,`<meta name="description" content="${esc(desc)}">`)
    .replace(/<meta name="robots" content="[^"]*">/,`<meta name="robots" content="${indexable?'index,follow,max-image-preview:large':'noindex,follow'}">`)
    .replace(/<link rel="canonical" href="[^"]*">/,`<link rel="canonical" href="${url}">`)
    .replace(/<link rel="alternate" hreflang="ar" href="[^"]*">/,`<link rel="alternate" hreflang="ar" href="${url}">`)
    .replace(/<meta property="og:title" content="[^"]*">/,`<meta property="og:title" content="${esc(title)}">`)
    .replace(/<meta property="og:description" content="[^"]*">/,`<meta property="og:description" content="${esc(desc)}">`)
    .replace(/<meta property="og:url" content="[^"]*">/,`<meta property="og:url" content="${url}">`)
    .replace(/<meta name="twitter:title" content="[^"]*">/,`<meta name="twitter:title" content="${esc(title)}">`)
    .replace(/<meta name="twitter:description" content="[^"]*">/,`<meta name="twitter:description" content="${esc(desc)}">`)
    .replace(/<script id="page-jsonld" type="application\/ld\+json">[\s\S]*?<\/script>/,`<script id="page-jsonld" type="application/ld+json">${json(ld)}</script>`);
  fs.writeFileSync(path.join(dir,'index.html'),h)
}
function redirect(route,target){
  const dir=path.join(dist,route);fs.mkdirSync(dir,{recursive:true});const safe=esc(target);
  const h='<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><meta name="robots" content="noindex,follow"><meta http-equiv="refresh" content="0; url='+safe+'"><link rel="canonical" href="'+safe+'"><title>تم نقل الصفحة — UI بالعربي</title></head><body><p>تم نقل الصفحة. <a href="'+safe+'">انتقل إلى المسار الجديد</a>.</p><script>location.replace('+JSON.stringify(target)+')</script></body></html>';
  fs.writeFileSync(path.join(dir,'index.html'),h)
}
for(const e of d.entries){page(e.category+'/'+e.slug,e.ar+' — '+e.en,e.description);redirect('element/'+e.slug,BASE+e.category+'/'+e.slug+'/')}
page('web','عناصر Web — UI بالعربي','عناصر واجهة الويب في القاموس البصري العربي.');
page('macos','عناصر macOS — UI بالعربي','عناصر واجهة macOS في القاموس البصري العربي.');
page('styles','ما اسم هذا الأسلوب؟ — UI بالعربي','أطلس الأنماط البصرية في واجهات المستخدم.');
for(const s of d.styles)page('styles/'+s.slug,s.ar+' — '+s.en,s.desc);
page('vs','العناصر التي يكثر الخلط بينها — UI بالعربي','شيئان يبدوان متشابهين، لكن بينهما فرق حاسم.');
redirect('compare',BASE+'vs/');
for(const c of d.comparisons){const slug=compareSlug(c);page('vs/'+slug,c.title+' — UI بالعربي',c.answer);if(slug!==c.slug)redirect('vs/'+c.slug,BASE+'vs/'+slug+'/')}
page('translate','جدول الترجمة — UI بالعربي','الاسم المرئي مقابل AppKit وSwiftUI.');
page('methodology','المنهجية — UI بالعربي','كيف نتحقق من أسماء عناصر واجهة المستخدم.');
redirect('guides',BASE);
page('appkit-vs-swiftui','AppKit أم SwiftUI؟','دليل اختيار المصطلح الصحيح لمشروعات macOS.');
page('swift-vs-electron','Swift أم Electron؟','دليل اختيار عالم المصطلحات المناسب.');
page('glossary','قاموس المصطلحات — UI بالعربي','تعريفات عربية سريعة للمفاهيم التقنية المتكررة في تصميم وبرمجة واجهات المستخدم.',false);
page('saved','المحفوظات — UI بالعربي','العناصر المحفوظة محليًا.',false);
page('submit','اقترح عنصرًا — UI بالعربي','اقترح عنصر واجهة جديدًا للقاموس عبر نموذج منظم.',false);
const urls=[BASE,BASE+'web/',BASE+'macos/',...d.entries.map(e=>BASE+e.category+'/'+e.slug+'/'),BASE+'styles/',...d.styles.map(s=>BASE+'styles/'+s.slug+'/'),BASE+'vs/',...d.comparisons.map(c=>BASE+'vs/'+compareSlug(c)+'/'),BASE+'translate/',BASE+'methodology/',BASE+'appkit-vs-swiftui/',BASE+'swift-vs-electron/'];
const sitemap='<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+urls.map(u=>'  <url><loc>'+u+'</loc><lastmod>'+RELEASE_DATE+'</lastmod></url>').join('\n')+'\n</urlset>';
fs.writeFileSync(path.join(dist,'sitemap.xml'),sitemap);
console.log(JSON.stringify({release:RELEASE,entries:d.entries.length,styles:d.styles.length,comparisons:d.comparisons.length,translations:d.translations.length,urls:urls.length,lastmod:RELEASE_DATE}));
