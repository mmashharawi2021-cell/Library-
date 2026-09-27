(function(){
  const packs=[
    {id:"core",label:"Core",file:"catalog/packs/core.js",items:window.LibraryPackCore||[]},
    {id:"jitter",label:"Jitter",file:"catalog/packs/jitter.js",items:window.LibraryPackJitter||[]},
    {id:"foundations",label:"Foundations",file:"catalog/packs/foundations.js",items:window.LibraryPackFoundations||[]},
    {id:"motion",label:"Motion",file:"catalog/packs/motion.js",items:window.LibraryPackMotion||[]},
    {id:"origin",label:"Origin",file:"catalog/packs/origin.js",items:window.LibraryPackOrigin||[]}
  ];
  const all=packs.flatMap(p=>p.items);
  const byId=new Map(all.map(item=>[item.id,item]));
  const packById=new Map();
  packs.forEach(pack=>pack.items.forEach(item=>packById.set(item.id,pack.id)));

  window.LibraryRegistry={
    version:"2.0.0",
    packs:packs.map(({items,...meta})=>({...meta,count:items.length})),
    all,
    byId,
    find(id){return byId.get(id)||null},
    packOf(itemOrId){const id=typeof itemOrId==="string"?itemOrId:itemOrId?.id;return packById.get(id)||"core"},
    itemsInPack(id){return id==="all"?all:(packs.find(p=>p.id===id)?.items||[])},
    stats(){
      return {
        total:all.length,
        categories:(window.LibraryCategories||[]).length,
        packs:Object.fromEntries(packs.map(p=>[p.id,p.items.length]))
      };
    }
  };
})();