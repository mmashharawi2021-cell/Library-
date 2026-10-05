// V43 compatibility endpoint: remove any legacy service-worker registration.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    try{
      await self.registration.unregister();
      const clients=await self.clients.matchAll({type:'window',includeUncontrolled:true});
      for(const client of clients){try{client.postMessage({type:'UI_AR_SW_REMOVED',release:'V43'})}catch{}}
    }catch{}
  })());
});
