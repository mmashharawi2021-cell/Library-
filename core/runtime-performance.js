/* Lightweight runtime performance instrumentation. Data stays in the browser. */
(function(){
  "use strict";
  const metrics={
    startedAt:performance.now(),
    vitals:{ttfb:null,fcp:null,lcp:null,cls:0,inp:null},
    navigation:{domContentLoaded:null,load:null},
    longTasks:{count:0,total:0,max:0},
    renders:[],
    interactions:new Map()
  };

  const round=n=>Number.isFinite(n)?Math.round(n*10)/10:null;
  const nav=performance.getEntriesByType?.("navigation")?.[0];
  if(nav){
    metrics.vitals.ttfb=round(nav.responseStart);
    metrics.navigation.domContentLoaded=round(nav.domContentLoadedEventEnd);
    metrics.navigation.load=round(nav.loadEventEnd);
  }

  function observe(type,handler,opts={buffered:true}){
    try{
      const po=new PerformanceObserver(list=>list.getEntries().forEach(handler));
      po.observe({type,...opts});return po;
    }catch{return null}
  }
  observe("paint",entry=>{if(entry.name==="first-contentful-paint")metrics.vitals.fcp=round(entry.startTime)});
  observe("largest-contentful-paint",entry=>{metrics.vitals.lcp=round(entry.startTime)});
  observe("layout-shift",entry=>{if(!entry.hadRecentInput)metrics.vitals.cls=round((metrics.vitals.cls||0)+entry.value)});
  observe("longtask",entry=>{
    metrics.longTasks.count++;metrics.longTasks.total=round(metrics.longTasks.total+entry.duration);metrics.longTasks.max=Math.max(metrics.longTasks.max,round(entry.duration)||0);
  });
  observe("event",entry=>{
    if(!entry.interactionId||!entry.duration)return;
    const prev=metrics.interactions.get(entry.interactionId)||0;
    if(entry.duration>prev)metrics.interactions.set(entry.interactionId,entry.duration);
    const values=[...metrics.interactions.values()].sort((a,b)=>b-a);
    const idx=Math.min(values.length-1,Math.floor(values.length/50));
    metrics.vitals.inp=round(values[idx]||0);
  },{buffered:true,durationThreshold:40});

  function recordRender(name,duration,count=0,extra={}){
    metrics.renders.push({name,duration:round(duration),count,at:round(performance.now()),...extra});
    if(metrics.renders.length>30)metrics.renders.splice(0,metrics.renders.length-30);
  }
  function snapshot(){
    const n=performance.getEntriesByType?.("navigation")?.[0];
    if(n){
      metrics.vitals.ttfb=round(n.responseStart);
      metrics.navigation.domContentLoaded=round(n.domContentLoadedEventEnd);
      metrics.navigation.load=round(n.loadEventEnd);
    }
    const lastRender=metrics.renders.at(-1)||null;
    return {
      vitals:{...metrics.vitals},
      navigation:{...metrics.navigation},
      longTasks:{...metrics.longTasks},
      lastRender,
      renders:metrics.renders.slice(),
      domNodes:document.getElementsByTagName("*").length,
      cards:document.querySelectorAll(".component-card").length,
      activePreviews:document.querySelectorAll(".component-card.preview-active,.drawer-preview.preview-active").length
    };
  }

  globalThis.LibraryPerformance={metrics,recordRender,snapshot};
})();