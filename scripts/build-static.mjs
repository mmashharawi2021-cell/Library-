import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
const BASE = 'https://mmashharawi2021-cell.github.io/Library-/';

fs.rmSync(dist, {recursive:true, force:true});
fs.mkdirSync(dist, {recursive:true});

const copyFiles = ['index.html','404.html','styles.css','app.js','data.js','feed.xml','manifest.webmanifest','icon.svg','robots.txt'];
for (const file of copyFiles) fs.copyFileSync(path.join(root,file), path.join(dist,file));

const raw = fs.readFileSync(path.join(root,'data.js'),'utf8')
  .replace(/^window\.UI_AR_DATA\s*=\s*/,'')
  .replace(/;\s*$/,'');
const data = JSON.parse(raw);
const shell = fs.readFileSync(path.join(root,'index.html'),'utf8');

const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
const attr = esc;

function pageHtml({title, description, canonical}) {
  let h = shell;
  h = h.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`);
  h = h.replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${attr(description)}">`);
  h = h.replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${attr(title)}">`);
  h = h.replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${attr(description)}">`);
  h = h.replace(/<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="${attr(canonical)}">`);
  h = h.replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${attr(canonical)}">`);
  return h;
}

function writeRoute(route, opts) {
  const dir = path.join(dist, route);
  fs.mkdirSync(dir, {recursive:true});
  fs.writeFileSync(path.join(dir,'index.html'), pageHtml(opts));
}

const urls = [{loc:BASE, priority:'1.0'}];
for (const e of data.entries) {
  const route = `element/${e.slug}`;
  const canonical = `${BASE}${route}/`;
  writeRoute(route, {title:`${e.ar} — ${e.en}`, description:e.description, canonical});
  urls.push({loc:canonical, priority:'0.9'});
}

writeRoute('styles', {title:'أنماط الواجهات — UI بالعربي', description:'أطلس عربي للأنماط البصرية في واجهات المستخدم مع الإشارات الفارقة لكل أسلوب.', canonical:`${BASE}styles/`});
urls.push({loc:`${BASE}styles/`,priority:'0.9'});
for (const s of data.styles) {
  const route = `styles/${s.slug}`;
  const canonical = `${BASE}${route}/`;
  writeRoute(route, {title:`${s.ar} — ${s.en}`, description:s.desc, canonical});
  urls.push({loc:canonical, priority:'0.8'});
}

const staticRoutes = [
  ['compare','العناصر التي يكثر الخلط بينها — UI بالعربي','مقارنات عملية بين عناصر واجهة متشابهة بصريًا لكنها مختلفة في الوظيفة والسلوك.'],
  ['translate','جدول الترجمة — AppKit وSwiftUI','جدول عربي يربط العنصر المرئي باسمه في AppKit وSwiftUI.'],
  ['methodology','المنهجية — UI بالعربي','كيف نتحقق من أسماء عناصر الواجهة ومصطلحاتها عبر المنصة والدلالة البرمجية والإتاحة.'],
  ['appkit-vs-swiftui','AppKit أم SwiftUI؟','دليل يوضح متى تستخدم اسم AppKit أو SwiftUI للعنصر نفسه في macOS.'],
  ['swift-vs-electron','Swift أم Electron؟','دليل يوضح الفرق في مفردات الواجهة بين تطبيق Mac أصلي وتطبيق Electron.']
];
for (const [route,title,description] of staticRoutes) {
  const canonical=`${BASE}${route}/`;
  writeRoute(route,{title,description,canonical});
  urls.push({loc:canonical,priority:'0.7'});
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(u=>`  <url><loc>${u.loc}</loc><changefreq>weekly</changefreq><priority>${u.priority}</priority></url>`).join('\n')}\n</urlset>\n`;
fs.writeFileSync(path.join(dist,'sitemap.xml'), xml);

const report = {
  entries:data.entries.length,
  web:data.entries.filter(e=>e.category==='web').length,
  macos:data.entries.filter(e=>e.category==='macos').length,
  styles:data.styles.length,
  comparisons:data.comparisons.length,
  translations:data.translations.length,
  urls:urls.length
};
fs.writeFileSync(path.join(dist,'build-report.json'), JSON.stringify(report,null,2));
console.log(JSON.stringify(report));
