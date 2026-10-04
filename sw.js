// V37 legacy-service-worker self-destruct
self.addEventListener('install',event=>{
  self.skipWaiting();
});
self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    try{
      await self.registration.unregister();
      const windows=await self.clients.matchAll({type:'window',includeUncontrolled:true});
      for(const client of windows){
        try{
          const u=new URL(client.url);
          if(u.pathname.startsWith('/Library-/')){
            u.searchParams.set('v','37');
            u.searchParams.set('swreset','1');
            client.navigate(u.href);
          }
        }catch{}
      }
    }catch{}
  })());
});
