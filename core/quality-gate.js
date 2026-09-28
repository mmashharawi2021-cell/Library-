(function(){
  const VERSION="quality-v1";
  const hiddenIds=new Set();
  const reasons=new Map();
  const templateVariants=new Map();
  const recategorized=new Map();

  const validCategories=new Set([
    "buttons","hover","cards","inputs","nav","modals","menus","loaders",
    "tabs","motion","sections","effects","data","icons","media"
  ]);

  const strongCategoryRules=[
    ["inputs",/\b(textarea|text area|text input|fieldset|checkbox|radio|file upload|file input|datepicker|date picker|timepicker|time picker|color picker|number input|combobox|select|range slider|password input|otp input)\b/i],
    ["modals",/\b(modal|dialog|popover|tooltip|toast|drawer|bottom sheet|sheet dialog)\b/i],
    ["menus",/\b(dropdown|context menu|action menu|vertical menu|side rail menu)\b/i],
    ["tabs",/\b(accordion|collapse|tabs?)\b/i],
    ["loaders",/\b(loader|spinner|skeleton)\b/i],
    ["nav",/\b(navbar|breadcrumbs?|pagination|scrollspy|bottom navigation|bottom nav)\b/i],
    ["media",/\b(carousel|gallery|slideshow|phone mockup|browser mockup|device mockup|mobile screens?|web screens?|showreel)\b/i],
    ["data",/\b(data table|datatable|table|chart|kpi|statistics|calendar|activity feed|radar chart|donut chart)\b/i],
    ["icons",/\b(avatar group|avatar|badge|logo mark|rating)\b/i],
    ["sections",/\b(hero section|footer|layout splitter|container|divider|spacer|aspect ratio|columns)\b/i]
  ];

  function normalizeCategory(item){
    const name=String(item?.name||"");
    for(const [category,re] of strongCategoryRules){
      if(!re.test(name))continue;
      if(category!==item.category){
        recategorized.set(item.id,{from:item.category,to:category});
        item.category=category;
      }
      break;
    }

    // Source-pack patterns that were previously stored as buttons/icons although
    // their actual preview is a different UI family.
    const t=String(item?.qualityTemplate||"");
    if(t==="ui-menu"&&item.category!=="menus"){
      recategorized.set(item.id,{from:item.category,to:"menus"});
      item.category="menus";
    }
    if(t==="icon-typography"&&item.category!=="effects"){
      recategorized.set(item.id,{from:item.category,to:"effects"});
      item.category="effects";
    }
    return item;
  }

  function structuralTemplateKey(item){
    if(!item?.qualityTemplate||item.qualityVariant==null)return null;
    return [
      item.category||"",
      String(item.qualityTemplate),
      String(item.qualityVariant)
    ].join("|");
  }

  function reject(item,reason){
    hiddenIds.add(item.id);
    reasons.set(item.id,reason);
    return{keep:false,reason};
  }

  function prepare(item,packId="local"){
    if(!item||!String(item.id||"").trim())return{keep:false,reason:"invalid:id"};
    if(!String(item.name||"").trim())return reject(item,"invalid:name");
    if(!String(item.code?.html||"").trim())return reject(item,"invalid:preview");
    if(!validCategories.has(item.category))item.category="cards";

    normalizeCategory(item);

    const templateKey=structuralTemplateKey(item);
    if(templateKey){
      const keeper=templateVariants.get(templateKey);
      if(keeper)return reject(item,"template-duplicate:"+keeper);
      templateVariants.set(templateKey,item.id);
    }
    return{keep:true,item,packId};
  }

  function isHidden(id){return hiddenIds.has(typeof id==="string"?id:id?.id)}
  function reasonFor(id){return reasons.get(typeof id==="string"?id:id?.id)||null}
  function report(){
    const byReason={};
    for(const reason of reasons.values()){
      const key=String(reason).split(":").slice(0,1).join(":");
      byReason[key]=(byReason[key]||0)+1;
    }
    return{
      version:VERSION,
      removed:hiddenIds.size,
      recategorized:recategorized.size,
      hiddenIds:[...hiddenIds],
      byReason,
      recategorizedItems:[...recategorized.entries()].map(([id,v])=>({id,...v}))
    };
  }
  function reset(){
    hiddenIds.clear();reasons.clear();templateVariants.clear();recategorized.clear();
  }

  globalThis.LibraryQualityGate={
    version:VERSION,prepare,isHidden,reasonFor,report,reset,
    hiddenIds,reasons,templateVariants,recategorized
  };
})();