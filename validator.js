(function(){
  const normalize=v=>String(v||"").toLowerCase()
    .replace(/[أإآ]/g,"ا").replace(/ة/g,"ه")
    .replace(/[^a-z0-9\u0600-\u06ff]+/gi," ").trim();

  const setOf=v=>new Set((Array.isArray(v)?v:[v]).flatMap(x=>normalize(x).split(/\s+/)).filter(Boolean));
  const jaccard=(a,b)=>{
    const A=setOf(a),B=setOf(b);
    if(!A.size&&!B.size)return 1;
    let hit=0;A.forEach(x=>{if(B.has(x))hit++});
    return hit/(A.size+B.size-hit||1);
  };
  const codeShape=s=>normalize(s?.code?.html||"")
    .replace(/\b[0-9]+\b/g,"#")
    .replace(/#[0-9a-f]{3,8}/gi,"#color")
    .replace(/\s+/g," ");

  function similarity(a,b){
    let score=0;
    if(a.id===b.id)return 1;
    if(a.category===b.category)score+=.15;
    if(normalize(a.name)===normalize(b.name))score+=.55;
    else score+=jaccard(a.name,b.name)*.25;
    score+=jaccard(a.tags,b.tags)*.25;
    if(a.type&&a.type===b.type)score+=.1;
    if(codeShape(a)===codeShape(b))score+=.35;
    return Math.min(1,score);
  }

  function findDuplicates(list,threshold=.82){
    const results=[];
    for(let i=0;i<list.length;i++){
      for(let j=i+1;j<list.length;j++){
        const value=similarity(list[i],list[j]);
        if(value>=threshold)results.push({a:list[i].id,b:list[j].id,score:Number(value.toFixed(3))});
      }
    }
    return results.sort((x,y)=>y.score-x.score);
  }

  function isDuplicate(candidate,list,threshold=.82){
    return list.map(item=>({item,score:similarity(candidate,item)}))
      .filter(x=>x.score>=threshold)
      .sort((a,b)=>b.score-a.score);
  }

  window.LibraryValidator={normalize,jaccard,similarity,findDuplicates,isDuplicate};
})();