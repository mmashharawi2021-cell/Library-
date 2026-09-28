(function(){
"use strict";
const fonts=[
  {
    "id": "FONT-001",
    "name": "Cairo",
    "arabic": true,
    "group": "Arabic & Multilingual"
  },
  {
    "id": "FONT-002",
    "name": "Tajawal",
    "arabic": true,
    "group": "Arabic & Multilingual"
  },
  {
    "id": "FONT-003",
    "name": "Almarai",
    "arabic": true,
    "group": "Arabic & Multilingual"
  },
  {
    "id": "FONT-004",
    "name": "Changa",
    "arabic": true,
    "group": "Arabic & Multilingual"
  },
  {
    "id": "FONT-005",
    "name": "El Messiri",
    "arabic": true,
    "group": "Arabic & Multilingual"
  },
  {
    "id": "FONT-006",
    "name": "Harmattan",
    "arabic": true,
    "group": "Arabic & Multilingual"
  },
  {
    "id": "FONT-007",
    "name": "Reem Kufi",
    "arabic": true,
    "group": "Arabic & Multilingual"
  },
  {
    "id": "FONT-008",
    "name": "Reem Kufi Fun",
    "arabic": true,
    "group": "Arabic & Multilingual"
  },
  {
    "id": "FONT-009",
    "name": "Reem Kufi Ink",
    "arabic": true,
    "group": "Arabic & Multilingual"
  },
  {
    "id": "FONT-010",
    "name": "Readex Pro",
    "arabic": true,
    "group": "Arabic & Multilingual"
  },
  {
    "id": "FONT-011",
    "name": "IBM Plex Sans Arabic",
    "arabic": true,
    "group": "Arabic & Multilingual"
  },
  {
    "id": "FONT-012",
    "name": "Mada",
    "arabic": true,
    "group": "Arabic & Multilingual"
  },
  {
    "id": "FONT-013",
    "name": "Markazi Text",
    "arabic": true,
    "group": "Arabic & Multilingual"
  },
  {
    "id": "FONT-014",
    "name": "Lateef",
    "arabic": true,
    "group": "Arabic & Multilingual"
  },
  {
    "id": "FONT-015",
    "name": "Scheherazade New",
    "arabic": true,
    "group": "Arabic & Multilingual"
  },
  {
    "id": "FONT-016",
    "name": "Amiri",
    "arabic": true,
    "group": "Arabic & Multilingual"
  },
  {
    "id": "FONT-017",
    "name": "Amiri Quran",
    "arabic": true,
    "group": "Arabic & Multilingual"
  },
  {
    "id": "FONT-018",
    "name": "Aref Ruqaa",
    "arabic": true,
    "group": "Arabic & Multilingual"
  },
  {
    "id": "FONT-019",
    "name": "Aref Ruqaa Ink",
    "arabic": true,
    "group": "Arabic & Multilingual"
  },
  {
    "id": "FONT-020",
    "name": "Baloo Bhaijaan 2",
    "arabic": true,
    "group": "Arabic & Multilingual"
  },
  {
    "id": "FONT-021",
    "name": "Lalezar",
    "arabic": true,
    "group": "Arabic & Multilingual"
  },
  {
    "id": "FONT-022",
    "name": "Lemonada",
    "arabic": true,
    "group": "Arabic & Multilingual"
  },
  {
    "id": "FONT-023",
    "name": "Mirza",
    "arabic": true,
    "group": "Arabic & Multilingual"
  },
  {
    "id": "FONT-024",
    "name": "Rakkas",
    "arabic": true,
    "group": "Arabic & Multilingual"
  },
  {
    "id": "FONT-025",
    "name": "Katibeh",
    "arabic": true,
    "group": "Arabic & Multilingual"
  },
  {
    "id": "FONT-026",
    "name": "Jomhuria",
    "arabic": true,
    "group": "Arabic & Multilingual"
  },
  {
    "id": "FONT-027",
    "name": "Vibes",
    "arabic": true,
    "group": "Arabic & Multilingual"
  },
  {
    "id": "FONT-028",
    "name": "Marhey",
    "arabic": true,
    "group": "Arabic & Multilingual"
  },
  {
    "id": "FONT-029",
    "name": "Gulzar",
    "arabic": true,
    "group": "Arabic & Multilingual"
  },
  {
    "id": "FONT-030",
    "name": "Blaka",
    "arabic": true,
    "group": "Arabic & Multilingual"
  },
  {
    "id": "FONT-031",
    "name": "Blaka Hollow",
    "arabic": true,
    "group": "Arabic & Multilingual"
  },
  {
    "id": "FONT-032",
    "name": "Noto Kufi Arabic",
    "arabic": true,
    "group": "Arabic & Multilingual"
  },
  {
    "id": "FONT-033",
    "name": "Noto Naskh Arabic",
    "arabic": true,
    "group": "Arabic & Multilingual"
  },
  {
    "id": "FONT-034",
    "name": "Noto Sans Arabic",
    "arabic": true,
    "group": "Arabic & Multilingual"
  },
  {
    "id": "FONT-035",
    "name": "Noto Nastaliq Urdu",
    "arabic": true,
    "group": "Arabic & Multilingual"
  },
  {
    "id": "FONT-036",
    "name": "Alexandria",
    "arabic": true,
    "group": "Arabic & Multilingual"
  },
  {
    "id": "FONT-037",
    "name": "Kufam",
    "arabic": true,
    "group": "Arabic & Multilingual"
  },
  {
    "id": "FONT-038",
    "name": "Ruwudu",
    "arabic": true,
    "group": "Arabic & Multilingual"
  },
  {
    "id": "FONT-039",
    "name": "Roboto",
    "arabic": false,
    "group": "Popular Web"
  },
  {
    "id": "FONT-040",
    "name": "Open Sans",
    "arabic": false,
    "group": "Popular Web"
  },
  {
    "id": "FONT-041",
    "name": "Lato",
    "arabic": false,
    "group": "Popular Web"
  },
  {
    "id": "FONT-042",
    "name": "Montserrat",
    "arabic": false,
    "group": "Popular Web"
  },
  {
    "id": "FONT-043",
    "name": "Poppins",
    "arabic": false,
    "group": "Popular Web"
  },
  {
    "id": "FONT-044",
    "name": "Inter",
    "arabic": false,
    "group": "Popular Web"
  },
  {
    "id": "FONT-045",
    "name": "Oswald",
    "arabic": false,
    "group": "Popular Web"
  },
  {
    "id": "FONT-046",
    "name": "Raleway",
    "arabic": false,
    "group": "Popular Web"
  },
  {
    "id": "FONT-047",
    "name": "Nunito",
    "arabic": false,
    "group": "Popular Web"
  },
  {
    "id": "FONT-048",
    "name": "Merriweather",
    "arabic": false,
    "group": "Popular Web"
  },
  {
    "id": "FONT-049",
    "name": "Playfair Display",
    "arabic": false,
    "group": "Popular Web"
  },
  {
    "id": "FONT-050",
    "name": "Source Sans 3",
    "arabic": false,
    "group": "Popular Web"
  },
  {
    "id": "FONT-051",
    "name": "PT Sans",
    "arabic": false,
    "group": "Popular Web"
  },
  {
    "id": "FONT-052",
    "name": "Ubuntu",
    "arabic": false,
    "group": "Popular Web"
  },
  {
    "id": "FONT-053",
    "name": "Rubik",
    "arabic": false,
    "group": "Popular Web"
  },
  {
    "id": "FONT-054",
    "name": "Work Sans",
    "arabic": false,
    "group": "Popular Web"
  },
  {
    "id": "FONT-055",
    "name": "Fira Sans",
    "arabic": false,
    "group": "Popular Web"
  },
  {
    "id": "FONT-056",
    "name": "Quicksand",
    "arabic": false,
    "group": "Popular Web"
  },
  {
    "id": "FONT-057",
    "name": "Manrope",
    "arabic": false,
    "group": "Popular Web"
  },
  {
    "id": "FONT-058",
    "name": "DM Sans",
    "arabic": false,
    "group": "Popular Web"
  },
  {
    "id": "FONT-059",
    "name": "Plus Jakarta Sans",
    "arabic": false,
    "group": "Popular Web"
  },
  {
    "id": "FONT-060",
    "name": "Outfit",
    "arabic": false,
    "group": "Popular Web"
  },
  {
    "id": "FONT-061",
    "name": "Mulish",
    "arabic": false,
    "group": "Popular Web"
  },
  {
    "id": "FONT-062",
    "name": "Karla",
    "arabic": false,
    "group": "Popular Web"
  },
  {
    "id": "FONT-063",
    "name": "Cabin",
    "arabic": false,
    "group": "Popular Web"
  },
  {
    "id": "FONT-064",
    "name": "Barlow",
    "arabic": false,
    "group": "Popular Web"
  },
  {
    "id": "FONT-065",
    "name": "Barlow Condensed",
    "arabic": false,
    "group": "Popular Web"
  },
  {
    "id": "FONT-066",
    "name": "Josefin Sans",
    "arabic": false,
    "group": "Popular Web"
  },
  {
    "id": "FONT-067",
    "name": "Libre Franklin",
    "arabic": false,
    "group": "Popular Web"
  },
  {
    "id": "FONT-068",
    "name": "Archivo",
    "arabic": false,
    "group": "Popular Web"
  },
  {
    "id": "FONT-069",
    "name": "Archivo Narrow",
    "arabic": false,
    "group": "Popular Web"
  },
  {
    "id": "FONT-070",
    "name": "Noto Sans",
    "arabic": false,
    "group": "Popular Web"
  },
  {
    "id": "FONT-071",
    "name": "Noto Serif",
    "arabic": false,
    "group": "Popular Web"
  },
  {
    "id": "FONT-072",
    "name": "Source Serif 4",
    "arabic": false,
    "group": "Popular Web"
  },
  {
    "id": "FONT-073",
    "name": "Lora",
    "arabic": false,
    "group": "Popular Web"
  },
  {
    "id": "FONT-074",
    "name": "Crimson Pro",
    "arabic": false,
    "group": "Popular Web"
  },
  {
    "id": "FONT-075",
    "name": "Bitter",
    "arabic": false,
    "group": "Popular Web"
  },
  {
    "id": "FONT-076",
    "name": "Libre Baskerville",
    "arabic": false,
    "group": "Popular Web"
  },
  {
    "id": "FONT-077",
    "name": "EB Garamond",
    "arabic": false,
    "group": "Popular Web"
  },
  {
    "id": "FONT-078",
    "name": "Cormorant Garamond",
    "arabic": false,
    "group": "Popular Web"
  },
  {
    "id": "FONT-079",
    "name": "Spectral",
    "arabic": false,
    "group": "Popular Web"
  },
  {
    "id": "FONT-080",
    "name": "Roboto Slab",
    "arabic": false,
    "group": "Popular Web"
  },
  {
    "id": "FONT-081",
    "name": "Arvo",
    "arabic": false,
    "group": "Popular Web"
  },
  {
    "id": "FONT-082",
    "name": "Bree Serif",
    "arabic": false,
    "group": "Popular Web"
  },
  {
    "id": "FONT-083",
    "name": "Abril Fatface",
    "arabic": false,
    "group": "Popular Web"
  },
  {
    "id": "FONT-084",
    "name": "Anton",
    "arabic": false,
    "group": "Popular Web"
  },
  {
    "id": "FONT-085",
    "name": "Bebas Neue",
    "arabic": false,
    "group": "Popular Web"
  },
  {
    "id": "FONT-086",
    "name": "Fjalla One",
    "arabic": false,
    "group": "Popular Web"
  },
  {
    "id": "FONT-087",
    "name": "League Spartan",
    "arabic": false,
    "group": "Popular Web"
  },
  {
    "id": "FONT-088",
    "name": "Space Grotesk",
    "arabic": false,
    "group": "Popular Web"
  },
  {
    "id": "FONT-089",
    "name": "Sora",
    "arabic": false,
    "group": "Popular Web"
  },
  {
    "id": "FONT-090",
    "name": "Urbanist",
    "arabic": false,
    "group": "Popular Web"
  },
  {
    "id": "FONT-091",
    "name": "Lexend",
    "arabic": false,
    "group": "Popular Web"
  },
  {
    "id": "FONT-092",
    "name": "Public Sans",
    "arabic": false,
    "group": "Popular Web"
  },
  {
    "id": "FONT-093",
    "name": "Hind",
    "arabic": false,
    "group": "Popular Web"
  },
  {
    "id": "FONT-094",
    "name": "Mukta",
    "arabic": false,
    "group": "Popular Web"
  },
  {
    "id": "FONT-095",
    "name": "Inconsolata",
    "arabic": false,
    "group": "Popular Web"
  },
  {
    "id": "FONT-096",
    "name": "JetBrains Mono",
    "arabic": false,
    "group": "Popular Web"
  },
  {
    "id": "FONT-097",
    "name": "Fira Code",
    "arabic": false,
    "group": "Popular Web"
  },
  {
    "id": "FONT-098",
    "name": "Source Code Pro",
    "arabic": false,
    "group": "Popular Web"
  },
  {
    "id": "FONT-099",
    "name": "IBM Plex Mono",
    "arabic": false,
    "group": "Popular Web"
  },
  {
    "id": "FONT-100",
    "name": "Space Mono",
    "arabic": false,
    "group": "Popular Web"
  }
];
const AR_SAMPLE="صمّم واجهات عربية واضحة وجميلة";
const EN_SAMPLE="Build clear and beautiful interfaces";
const PAGE=24;
const loaded=new Set();
let filtered=fonts.slice(),limit=PAGE,active=false;

const esc=s=>String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));
const familyParam=name=>encodeURIComponent(name).replace(/%20/g,"+");
function familyStack(font){
  return font.arabic?`'${font.name}','Noto Sans Arabic',sans-serif`:`'${font.name}',Inter,'Noto Sans Arabic',sans-serif`;
}
function loadBatch(list){
  const names=[...new Set(list.map(x=>x.name).filter(x=>!loaded.has(x)))];
  if(!names.length)return;
  const href="https://fonts.googleapis.com/css2?"+names.map(n=>"family="+familyParam(n)).join("&")+"&display=swap";
  const link=document.createElement("link");link.rel="stylesheet";link.href=href;link.dataset.fontBatch=names.join("|");
  link.onload=()=>names.forEach(n=>loaded.add(n));
  link.onerror=()=>console.warn("Font batch failed",names);
  document.head.appendChild(link);
}
function ensureUI(){
  const sidebar=document.querySelector("#sidebar");
  if(sidebar&&!sidebar.querySelector("[data-fonts-view]")){
    const btn=document.createElement("button");
    btn.className="side-link fonts-link";btn.dataset.fontsView="1";
    btn.innerHTML='<span>Aa</span><b>الخطوط</b><em>100</em>';
    const foot=sidebar.querySelector(".side-foot");
    sidebar.insertBefore(btn,foot);
  }
  const main=document.querySelector("main");
  if(main&&!document.querySelector("#fontsSection")){
    const section=document.createElement("section");
    section.id="fontsSection";section.className="section fonts-library";section.hidden=true;
    section.innerHTML=`
      <div class="fonts-hero">
        <div>
          <span class="eyebrow">TYPOGRAPHY LIBRARY</span>
          <h2>أشهر 100 خط للويب</h2>
          <p>معاينة عربية وإنجليزية لكل خط، فلترة سريعة، ونسخ مباشر لـ CSS. الخطوط تُحمّل تدريجيًا للحفاظ على سرعة المكتبة.</p>
        </div>
        <div class="fonts-hero-actions"><button id="fontsBack" class="ghost" type="button">← العودة للمكتبة</button><span><b>100</b><small>Font families</small></span></div>
      </div>
      <div class="fonts-toolbar">
        <label class="font-search"><span>⌕</span><input id="fontSearch" placeholder="ابحث عن Cairo أو Inter..."></label>
        <select id="fontFilter" aria-label="فلترة الخطوط">
          <option value="all">كل الخطوط · 100</option>
          <option value="arabic">يدعم العربية</option>
          <option value="latin">خطوط عالمية / Latin</option>
        </select>
      </div>
      <div class="font-sample-editor">
        <label><small>مثال عربي</small><input id="fontArabicSample" dir="rtl" value="${AR_SAMPLE}"></label>
        <label><small>English sample</small><input id="fontEnglishSample" dir="ltr" value="${EN_SAMPLE}"></label>
      </div>
      <div class="fonts-summary"><span id="fontsResultCount">100 خط</span><small>Arabic preview uses an Arabic fallback when the selected family has no Arabic glyphs.</small></div>
      <div id="fontsGrid" class="fonts-grid"></div>
    `;
    main.appendChild(section);
  }
}
function card(font,index){
  const stack=familyStack(font),arabicText=esc(document.querySelector("#fontArabicSample")?.value||AR_SAMPLE),englishText=esc(document.querySelector("#fontEnglishSample")?.value||EN_SAMPLE);
  return `<article class="font-card" data-font-id="${font.id}">
    <header><span class="font-rank">${String(index+1).padStart(2,"0")}</span><div><b>${esc(font.name)}</b><small>${font.arabic?"Arabic + Latin":"Latin · Arabic fallback"}</small></div><span class="font-support ${font.arabic?"yes":"fallback"}">${font.arabic?"عربي":"Aa"}</span></header>
    <div class="font-preview" style="font-family:${stack}" data-font-family="${esc(font.name)}">
      <p class="font-preview-ar" dir="rtl">${arabicText}</p>
      <p class="font-preview-en" dir="ltr">${englishText}</p>
      <div class="font-scale"><span>Aa</span><span>Aa</span><span>Aa</span></div>
      <small class="font-live-name">${esc(font.name)}</small>
    </div>
    <footer><code>font-family: '${esc(font.name)}';</code><button data-copy-font="${esc(font.id)}" type="button">نسخ CSS</button></footer>
  </article>`;
}
function render(){
  const grid=document.querySelector("#fontsGrid");if(!grid)return;
  const shown=filtered.slice(0,limit);
  grid.innerHTML=shown.map((f,i)=>card(f,i)).join("")+(shown.length<filtered.length?`<button id="fontsMore" class="font-more" type="button"><b>${shown.length}</b><span>من ${filtered.length}</span><small>تحميل المزيد</small></button>`:"");
  document.querySelector("#fontsResultCount").textContent=`${filtered.length} خط`;
  loadBatch(shown.slice(Math.max(0,shown.length-PAGE)));
  document.querySelector("#fontsMore")?.addEventListener("click",()=>{limit=Math.min(filtered.length,limit+PAGE);render()},{once:true});
}
function applyFilter(){
  const q=(document.querySelector("#fontSearch")?.value||"").trim().toLowerCase();
  const mode=document.querySelector("#fontFilter")?.value||"all";
  filtered=fonts.filter(f=>(!q||f.name.toLowerCase().includes(q))&&(mode==="all"||mode==="arabic"&&f.arabic||mode==="latin"&&!f.arabic));
  limit=PAGE;render();
}
function show(){
  active=true;document.body.classList.add("fonts-view");
  ["#hero","#overview","#library"].forEach(s=>{const el=document.querySelector(s);if(el)el.hidden=true});
  const section=document.querySelector("#fontsSection");if(section)section.hidden=false;
  document.querySelectorAll(".side-link").forEach(x=>x.classList.toggle("active",x.hasAttribute("data-fonts-view")));
  document.querySelector("#sidebar")?.classList.remove("open");
  render();window.scrollTo({top:0,behavior:"smooth"});
}
function hide(scroll=true){
  if(!active)return;active=false;document.body.classList.remove("fonts-view");
  ["#hero","#overview","#library"].forEach(s=>{const el=document.querySelector(s);if(el)el.hidden=false});
  const section=document.querySelector("#fontsSection");if(section)section.hidden=true;
  document.querySelector("[data-fonts-view]")?.classList.remove("active");
  if(scroll)document.querySelector("#library")?.scrollIntoView({behavior:"smooth"});
}
function copyFont(id){
  const font=fonts.find(x=>x.id===id);if(!font)return;
  const css=`font-family: '${font.name}', ${font.arabic?"'Noto Sans Arabic', ":""}sans-serif;`;
  if(navigator.clipboard?.writeText)navigator.clipboard.writeText(css).catch(()=>{});
  else{const t=document.createElement("textarea");t.value=css;document.body.appendChild(t);t.select();document.execCommand("copy");t.remove()}
  if(typeof toast==="function")toast("تم نسخ CSS لخط "+font.name);
}
function bind(){
  document.querySelector("[data-fonts-view]")?.addEventListener("click",show);
  document.querySelector("#fontsBack")?.addEventListener("click",()=>hide(true));
  document.querySelector("#fontSearch")?.addEventListener("input",applyFilter);
  document.querySelector("#fontFilter")?.addEventListener("change",applyFilter);
  document.querySelector("#fontArabicSample")?.addEventListener("input",render);
  document.querySelector("#fontEnglishSample")?.addEventListener("input",render);
  document.querySelector("#fontsGrid")?.addEventListener("click",e=>{const b=e.target.closest("[data-copy-font]");if(b)copyFont(b.dataset.copyFont)});
  document.addEventListener("click",e=>{
    if(!active)return;
    if(e.target.closest("#categoryNav [data-cat], [data-view]:not([data-fonts-view]), #randomBtn"))hide(false);
  },true);
}
ensureUI();bind();
window.LibraryFonts={fonts,show,hide,render};
})();