/* Lazy asset loader for optional heavy features. */
(function(){
  "use strict";
  const scripts=new Map(),styles=new Map();

  function loadScript(src,key=src){
    if(scripts.has(key))return scripts.get(key);
    const task=new Promise((resolve,reject)=>{
      const existing=document.querySelector('script[data-lazy-key="'+key+'"]');
      if(existing){
        if(existing.dataset.loaded==="1"){resolve(existing);return}
        existing.addEventListener("load",()=>resolve(existing),{once:true});
        existing.addEventListener("error",reject,{once:true});
        return;
      }
      const script=document.createElement("script");
      script.src=src;script.async=true;script.dataset.lazyKey=key;
      script.onload=()=>{script.dataset.loaded="1";resolve(script)};
      script.onerror=()=>{scripts.delete(key);reject(new Error("Failed to load "+src))};
      document.head.appendChild(script);
    });
    scripts.set(key,task);return task;
  }

  function loadStyle(href,key=href){
    if(styles.has(key))return styles.get(key);
    const task=new Promise((resolve,reject)=>{
      const existing=document.querySelector('link[data-lazy-style="'+key+'"]');
      if(existing){
        if(existing.dataset.loaded==="1"){resolve(existing);return}
        existing.addEventListener("load",()=>resolve(existing),{once:true});
        existing.addEventListener("error",reject,{once:true});
        return;
      }
      const link=document.createElement("link");
      link.rel="stylesheet";link.href=href;link.dataset.lazyStyle=key;
      link.onload=()=>{link.dataset.loaded="1";resolve(link)};
      link.onerror=()=>{styles.delete(key);reject(new Error("Failed to load "+href))};
      document.head.appendChild(link);
    });
    styles.set(key,task);return task;
  }

  async function ensureCodeExport(){
    if(typeof globalThis.code==="function")return true;
    await loadScript("ui/code-export.js","code-export");
    return typeof globalThis.code==="function";
  }

  async function ensureFonts(){
    if(globalThis.LibraryFonts)return globalThis.LibraryFonts;
    await Promise.all([
      loadStyle("styles/fonts.css","fonts-style"),
      loadScript("fonts/fonts.js","fonts-library")
    ]);
    return globalThis.LibraryFonts||null;
  }

  globalThis.LibraryLazyAssets={loadScript,loadStyle,ensureCodeExport,ensureFonts};
  globalThis.ensureCodeExport=ensureCodeExport;
  globalThis.ensureFonts=ensureFonts;
})();