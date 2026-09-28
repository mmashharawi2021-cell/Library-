const CACHE="library-engine-3-v14";
const CORE=[
  "./",
  "./index.html",
  "./styles/base.css",
  "./styles/components.css",
  "./styles/engine-core.css",
  "./styles/ux.css","./styles/theme-damage.css",
  "./sources.js",
  "./validator.js",
  "./core/runtime-performance.js","./core/state.js",
  "./core/search.js",
  "./core/lazy-assets.js",
  "./ui/library.js",
  "./ui/cards.js",
  "./ui/preview.js",
  "./ui/actions.js",
  "./ui/editor.js",
  "./app.js",
  "./engine3.js",
  "./catalog/categories.js",
  "./catalog/manifest-index.js",
  "./catalog/registry.js",
  "./catalog/bootstrap.js",
  "./catalog/import-pipeline.js",
  "./catalog/packs/core.js",
  "./manifest.webmanifest"
];
self.addEventListener("install",event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)).then(()=>self.skipWaiting()));
});
self.addEventListener("activate",event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener("fetch",event=>{
  const req=event.request;if(req.method!=="GET")return;
  const url=new URL(req.url);if(url.origin!==location.origin)return;
  if(url.pathname.includes("/catalog/packs/")){
    event.respondWith(caches.open(CACHE).then(async cache=>{
      const cached=await cache.match(req);
      const network=fetch(req).then(res=>{if(res.ok)cache.put(req,res.clone());return res}).catch(()=>cached);
      return cached||network;
    }));
    return;
  }
  event.respondWith(caches.match(req).then(cached=>cached||fetch(req).then(res=>{
    if(res.ok)caches.open(CACHE).then(cache=>cache.put(req,res.clone()));
    return res;
  })));
});