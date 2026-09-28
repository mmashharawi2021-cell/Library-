(function(){
  const PROP_VERSION="visual-v1";
  const fingerprintsByCategory=new Map();
  const hiddenIds=new Set();
  const duplicateOf=new Map();
  const reports=[];

  const round=(n,step=4)=>Math.round((Number(n)||0)/step)*step;
  const clamp=(n,a,b)=>Math.max(a,Math.min(b,n));

  function rgba(value){
    const m=String(value||"").match(/rgba?\(([^)]+)\)/i);
    if(!m)return null;
    const p=m[1].split(",").map(Number);
    return {r:p[0]||0,g:p[1]||0,b:p[2]||0,a:p.length>3?p[3]:1};
  }
  function colorBucket(value){
    const c=rgba(value);if(!c||c.a<.04)return"transparent";
    const max=Math.max(c.r,c.g,c.b),min=Math.min(c.r,c.g,c.b),sat=max-min;
    const lum=.2126*c.r+.7152*c.g+.0722*c.b;
    const tone=lum<55?"dark":lum>215?"light":lum<135?"mid-dark":"mid-light";
    const chroma=sat<18?"neutral":sat<70?"muted":"color";
    return tone+"-"+chroma+"-a"+round(c.a*10,2);
  }
  function imageBucket(v){
    v=String(v||"").toLowerCase();
    if(!v||v==="none")return"none";
    if(v.includes("conic-gradient"))return"conic";
    if(v.includes("radial-gradient"))return"radial";
    if(v.includes("linear-gradient"))return"linear";
    if(v.includes("url("))return"image";
    return"other";
  }
  function shadowBucket(v){
    v=String(v||"").toLowerCase();
    if(!v||v==="none")return"none";
    return (v.includes("inset")?"inset-":"")+"shadow-"+Math.min(3,(v.match(/rgba?\(/g)||[]).length||1);
  }
  function transformBucket(v){
    v=String(v||"").trim();
    if(!v||v==="none")return"none";
    const nums=(v.match(/-?\d*\.?\d+/g)||[]).map(Number).map(n=>Math.round(n*10)/10);
    return v.split("(")[0]+":"+nums.slice(0,6).join(",");
  }
  function filterBucket(v){
    v=String(v||"").toLowerCase();
    if(!v||v==="none")return"none";
    return ["blur","brightness","contrast","drop-shadow","grayscale","hue-rotate","saturate"].filter(k=>v.includes(k)).join("+")||"filter";
  }
  function cssPx(v,step=4){return round(parseFloat(v)||0,step)}
  function normalizeText(root){
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
    const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
    for(const n of nodes){
      const t=n.nodeValue||"",s=t.trim();
      if(!s)continue;
      if(/[A-Za-z\u0600-\u06ff]/.test(s)&&s.length>2)n.nodeValue=t.replace(s,"Aa");
    }
    root.querySelectorAll("input,textarea").forEach(el=>{if(el.value)el.value="Aa";if(el.placeholder)el.placeholder="Aa"});
    root.querySelectorAll("img").forEach(el=>{el.removeAttribute("src");el.setAttribute("alt","")});
  }
  function addStyleTokens(tokens,el,cs,i,rootRect){
    const r=el.getBoundingClientRect();
    const rx=round(r.left-rootRect.left),ry=round(r.top-rootRect.top),rw=round(r.width),rh=round(r.height);
    tokens.add(i+":tag:"+el.tagName.toLowerCase());
    tokens.add(i+":rect:"+rx+","+ry+","+rw+","+rh);
    tokens.add(i+":children:"+el.children.length);

    if(cs.display!=="block"&&cs.display!=="inline")tokens.add(i+":display:"+cs.display);
    if(cs.display.includes("flex")){
      tokens.add(i+":flex:"+cs.flexDirection+","+cs.justifyContent+","+cs.alignItems);
      tokens.add(i+":gap:"+cssPx(cs.gap,2));
    }
    if(cs.display.includes("grid")){
      tokens.add(i+":grid:"+String(cs.gridTemplateColumns).split(" ").length+"x"+String(cs.gridTemplateRows).split(" ").length);
      tokens.add(i+":gap:"+cssPx(cs.gap,2));
    }
    const bg=colorBucket(cs.backgroundColor);if(bg!=="transparent")tokens.add(i+":bg:"+bg);
    const img=imageBucket(cs.backgroundImage);if(img!=="none")tokens.add(i+":bgimg:"+img);
    const bw=Math.max(cssPx(cs.borderTopWidth,1),cssPx(cs.borderRightWidth,1),cssPx(cs.borderBottomWidth,1),cssPx(cs.borderLeftWidth,1));
    if(bw>0)tokens.add(i+":border:"+bw+":"+cs.borderTopStyle+":"+colorBucket(cs.borderTopColor));
    const rad=Math.max(cssPx(cs.borderTopLeftRadius,2),cssPx(cs.borderTopRightRadius,2),cssPx(cs.borderBottomRightRadius,2),cssPx(cs.borderBottomLeftRadius,2));
    if(rad>0)tokens.add(i+":radius:"+rad);
    const sh=shadowBucket(cs.boxShadow);if(sh!=="none")tokens.add(i+":shadow:"+sh);
    if(cs.opacity!=="1")tokens.add(i+":opacity:"+round(parseFloat(cs.opacity)*10,2));
    const tr=transformBucket(cs.transform);if(tr!=="none")tokens.add(i+":transform:"+tr);
    const fil=filterBucket(cs.filter);if(fil!=="none")tokens.add(i+":filter:"+fil);
    const bfil=filterBucket(cs.backdropFilter||cs.webkitBackdropFilter);if(bfil!=="none")tokens.add(i+":backdrop:"+bfil);
    if(cs.overflow!=="visible")tokens.add(i+":overflow:"+cs.overflow);
    if(el.childNodes.length===1&&el.firstChild?.nodeType===3){
      tokens.add(i+":font:"+cssPx(cs.fontSize,2)+":"+cs.fontWeight+":"+colorBucket(cs.color)+":"+cs.textAlign);
    }
    if(cs.animationName&&cs.animationName!=="none"){
      tokens.add(i+":anim:yes");
      tokens.add(i+":animdur:"+Math.round((parseFloat(cs.animationDuration)||0)*10)/10);
      tokens.add(i+":animtiming:"+cs.animationTimingFunction);
    }
  }
  function pseudoTokens(tokens,el,i,pseudo){
    const cs=getComputedStyle(el,pseudo);
    if(!cs||cs.content==="none"||cs.display==="none")return;
    tokens.add(i+":"+pseudo+":present");
    const bg=colorBucket(cs.backgroundColor);if(bg!=="transparent")tokens.add(i+":"+pseudo+":bg:"+bg);
    const img=imageBucket(cs.backgroundImage);if(img!=="none")tokens.add(i+":"+pseudo+":img:"+img);
    const tr=transformBucket(cs.transform);if(tr!=="none")tokens.add(i+":"+pseudo+":transform:"+tr);
    const rad=Math.max(cssPx(cs.borderTopLeftRadius,2),cssPx(cs.borderTopRightRadius,2));if(rad)tokens.add(i+":"+pseudo+":radius:"+rad);
  }
  function ensureLab(){
    let lab=document.getElementById("visualDedupeLab");
    if(lab)return lab;
    lab=document.createElement("div");
    lab.id="visualDedupeLab";
    lab.setAttribute("aria-hidden","true");
    lab.style.cssText="position:fixed;left:-10000px;top:0;width:360px;height:240px;overflow:hidden;opacity:0;pointer-events:none;z-index:-9999;contain:layout style paint;";
    const style=document.createElement("style");
    style.textContent="#visualDedupeLab *,#visualDedupeLab *::before,#visualDedupeLab *::after{animation-play-state:paused!important;transition:none!important;caret-color:transparent!important}";
    document.head.appendChild(style);
    document.body.appendChild(lab);
    return lab;
  }
  function fingerprint(item){
    if(!item?.code?.html||typeof document==="undefined")return null;
    const lab=ensureLab();
    const card=document.createElement("article");
    card.className="component-card live-loop preview-idle";
    card.dataset.liveCategory=item.category||"";
    card.style.cssText="width:340px;height:220px;margin:0;transform:none!important;box-shadow:none!important";
    const preview=document.createElement("div");preview.className="component-preview";
    preview.style.cssText="width:340px;height:220px;min-height:220px";
    const stage=document.createElement("div");stage.className="component-preview-stage";stage.innerHTML=item.code.html;
    preview.appendChild(stage);card.appendChild(preview);lab.appendChild(card);
    normalizeText(stage);

    const tokens=new Set(["v:"+PROP_VERSION,"category:"+String(item.category||"")]);
    const rootRect=stage.getBoundingClientRect();
    const nodes=[stage,...stage.querySelectorAll("*")].slice(0,28);
    nodes.forEach((el,i)=>{
      const cs=getComputedStyle(el);
      addStyleTokens(tokens,el,cs,i,rootRect);
      pseudoTokens(tokens,el,i,"::before");
      pseudoTokens(tokens,el,i,"::after");
    });
    tokens.add("nodes:"+Math.min(28,nodes.length));
    tokens.add("motion:"+String(item.motionMode||"").toLowerCase());
    tokens.add("type:"+String(item.type||"").toLowerCase());
    card.remove();
    return tokens;
  }
  function jaccard(a,b){
    if(!a||!b)return 0;
    let hit=0;for(const x of a)if(b.has(x))hit++;
    const den=a.size+b.size-hit;return den?hit/den:0;
  }
  function thresholdFor(item){
    const n=(item?.code?.html?.match(/</g)||[]).length;
    if(n<=2)return .965;
    if(n<=5)return .95;
    return .935;
  }
  function findDuplicate(item,packId){
    const fp=fingerprint(item);if(!fp)return null;
    const list=fingerprintsByCategory.get(item.category)||[];
    let best=null,bestScore=0;
    for(const entry of list){
      const score=jaccard(fp,entry.fp);
      if(score>bestScore){bestScore=score;best=entry}
    }
    const threshold=thresholdFor(item);
    return best&&bestScore>=threshold?{keepId:best.id,score:bestScore,fingerprint:fp,pack:best.pack}:null;
  }
  function accept(item,packId){
    if(!item?.id)return{keep:false,reason:"invalid"};
    const fp=fingerprint(item);
    if(!fp)return{keep:true};
    const list=fingerprintsByCategory.get(item.category)||[];
    let best=null,bestScore=0;
    for(const entry of list){
      const score=jaccard(fp,entry.fp);
      if(score>bestScore){bestScore=score;best=entry}
    }
    const threshold=thresholdFor(item);
    if(best&&bestScore>=threshold){
      hiddenIds.add(item.id);duplicateOf.set(item.id,best.id);
      reports.push({id:item.id,duplicateOf:best.id,score:+bestScore.toFixed(3),category:item.category,pack:packId});
      return{keep:false,duplicateOf:best.id,score:bestScore};
    }
    list.push({id:item.id,pack:packId,fp});fingerprintsByCategory.set(item.category,list);
    return{keep:true};
  }
  function isHidden(id){return hiddenIds.has(typeof id==="string"?id:id?.id)}
  function report(){return{removed:hiddenIds.size,hiddenIds:[...hiddenIds],duplicates:[...reports]}}
  function reset(){
    fingerprintsByCategory.clear();hiddenIds.clear();duplicateOf.clear();reports.splice(0,reports.length);
    document.getElementById("visualDedupeLab")?.remove();
  }

  globalThis.LibraryVisualDedupe={version:PROP_VERSION,accept,findDuplicate,isHidden,hiddenIds,duplicateOf,report,reset,fingerprint,jaccard};
})();