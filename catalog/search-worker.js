importScripts("search-index.js");
const index=globalThis.LibrarySearchIndex||[];
const norm=v=>String(v||"").toLowerCase().normalize("NFKD")
  .replace(/[أإآ]/g,"ا").replace(/ة/g,"ه").replace(/[^a-z0-9\u0600-\u06ff]+/gi," ").trim();
const hay=r=>norm([r.id,r.name,r.category,r.style,(r.tags||[]).join(" "),r.description,r.technology,r.sourceReference,r.motionMode,r.type,r.pack].join(" "));
function score(r,tokens,q){
  const h=hay(r),name=norm(r.name),tags=norm((r.tags||[]).join(" "));let n=0,hits=0;
  for(const t of tokens){
    let hit=false;
    if(name.includes(t)){n+=9;hit=true}
    if(tags.includes(t)){n+=7;hit=true}
    if(norm(r.category).includes(t)){n+=5;hit=true}
    if(norm(r.sourceReference).includes(t)||norm(r.pack).includes(t)){n+=5;hit=true}
    if(h.includes(t)){n+=2;hit=true}
    if(hit)hits++;
  }
  if(tokens.length&&hits<Math.max(1,Math.ceil(tokens.length*.5)))return 0;
  if(q&&name.includes(q))n+=12;
  return n;
}
self.onmessage=e=>{
  const {type,q="",limit=160,filters={}}=e.data||{};
  if(type==="stats"){
    const packs={},categories={};for(const r of index){packs[r.pack]=(packs[r.pack]||0)+1;categories[r.category]=(categories[r.category]||0)+1}
    self.postMessage({type:"stats",total:index.length,packs,categories});return;
  }
  if(type!=="search")return;
  const nq=norm(q),tokens=nq.split(/\s+/).filter(Boolean);
  let list=index;
  if(filters.pack&&filters.pack!=="all")list=list.filter(r=>r.pack===filters.pack);
  if(filters.category&&filters.category!=="all")list=list.filter(r=>r.category===filters.category);
  if(filters.motionMode)list=list.filter(r=>r.motionMode===filters.motionMode);
  const results=list.map(r=>({id:r.id,pack:r.pack,name:r.name,category:r.category,score:tokens.length?score(r,tokens,nq):1}))
    .filter(x=>x.score>0).sort((a,b)=>b.score-a.score).slice(0,limit);
  self.postMessage({type:"results",q,results,total:results.length});
};