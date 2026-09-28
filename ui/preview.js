/* Interaction-driven previews and component micro-interactions. */
function resetCardPreview(card){
  if(!card||card.dataset.trashed)return;
  const s=samples.find(x=>x.id===card.dataset.id),stage=card.querySelector('.component-preview-stage');if(!s||!stage)return;
  stage.innerHTML=s.code.html;
}
function setCardPreviewActive(card,on,{reset=false}={}){
  if(!card||card.dataset.trashed)return;
  card.classList.toggle('preview-active',!!on);
  card.classList.toggle('preview-idle',!on);
  if(on){const stage=card.querySelector('.component-preview-stage');if(stage)bindInteractivePreviews(stage);void card.offsetWidth;runLivePreviewTick(card)}
  else if(reset)resetCardPreview(card);
  syncInteractionPreviewTimer();
}
function bindCardPreviewInteractions(scope=document){
  const root=scope?.id==='componentGrid'?scope:scope?.querySelector?.('#componentGrid');
  if(!root||root.dataset.previewDelegateBound)return;
  root.dataset.previewDelegateBound='1';
  const timers=new WeakMap();
  const stop=(card,delay=260)=>{
    clearTimeout(timers.get(card));
    timers.set(card,setTimeout(()=>setCardPreviewActive(card,false,{reset:true}),delay));
  };
  const fine=matchMedia('(hover:hover) and (pointer:fine)').matches;
  if(fine){
    root.addEventListener('mouseover',e=>{
      const card=e.target.closest('.component-card:not(.trashed-card)');if(!card||!root.contains(card)||card.contains(e.relatedTarget))return;
      clearTimeout(timers.get(card));setCardPreviewActive(card,true);
    });
    root.addEventListener('mouseout',e=>{
      const card=e.target.closest('.component-card:not(.trashed-card)');if(!card||!root.contains(card)||card.contains(e.relatedTarget))return;
      stop(card,260);
    });
  }else{
    root.addEventListener('pointerdown',e=>{
      const card=e.target.closest('.component-card:not(.trashed-card)');if(!card||e.target.closest('button,a,input,select,textarea'))return;
      clearTimeout(timers.get(card));setCardPreviewActive(card,true);
    });
    root.addEventListener('pointerup',e=>{
      const card=e.target.closest('.component-card:not(.trashed-card)');if(!card||e.target.closest('button,a,input,select,textarea'))return;
      stop(card,1500);
    });
    root.addEventListener('pointercancel',e=>{const card=e.target.closest('.component-card:not(.trashed-card)');if(card)stop(card,260)});
  }
  root.addEventListener('keydown',e=>{
    if(e.key!=='Enter'&&e.key!==' ')return;
    const trigger=e.target.closest('[data-preview-trigger]'),card=trigger?.closest('.component-card:not(.trashed-card)');if(!card)return;
    e.preventDefault();clearTimeout(timers.get(card));setCardPreviewActive(card,true);stop(card,1800);
  });
}


function bindInteractivePreviews(scope=document){
  scope.querySelectorAll?.('.cursor-halo').forEach(root=>{
    if(root.dataset.bound)return;root.dataset.bound='1';
    const halo=root.querySelector('span');if(!halo)return;
    root.addEventListener('pointermove',e=>{const r=root.getBoundingClientRect();halo.style.left=(e.clientX-r.left)+'px';halo.style.top=(e.clientY-r.top)+'px'});
    root.addEventListener('pointerleave',()=>{halo.style.left='50%';halo.style.top='50%'});
  });
  scope.querySelectorAll?.('.range-control').forEach(root=>{
    if(root.dataset.bound)return;root.dataset.bound='1';
    const input=root.querySelector('input'),value=root.querySelector('b');if(!input||!value)return;
    input.addEventListener('input',()=>value.textContent=input.value+'%');
  });
  scope.querySelectorAll?.('.dropzone').forEach(root=>{
    if(root.dataset.bound)return;root.dataset.bound='1';
    const input=root.querySelector('input[type="file"]'),title=root.querySelector('b');if(!input||!title)return;
    input.addEventListener('change',()=>{title.textContent=input.files?.[0]?.name||'اسحب الملف هنا'});
  });

  scope.querySelectorAll?.('.cursor-spotlight').forEach(root=>{
    if(root.dataset.bound)return;root.dataset.bound='1';const spot=root.querySelector('i');if(!spot)return;
    root.addEventListener('pointermove',e=>{const r=root.getBoundingClientRect();spot.style.left=(e.clientX-r.left)+'px';spot.style.top=(e.clientY-r.top)+'px'});
    root.addEventListener('pointerleave',()=>{spot.style.left='50%';spot.style.top='50%'});
  });
  scope.querySelectorAll?.('.number-stepper').forEach(root=>{
    if(root.dataset.bound)return;root.dataset.bound='1';const input=root.querySelector('input'),buttons=root.querySelectorAll('button');if(!input||buttons.length<2)return;
    buttons[0].addEventListener('click',e=>{e.stopPropagation();input.value=Math.max(0,(+input.value||0)-1)});
    buttons[1].addEventListener('click',e=>{e.stopPropagation();input.value=(+input.value||0)+1});
  });
  scope.querySelectorAll?.('.search-combobox').forEach(root=>{
    if(root.dataset.bound)return;root.dataset.bound='1';const input=root.querySelector('input'),items=[...root.querySelectorAll(':scope>div span')];if(!input)return;
    input.addEventListener('input',()=>items.forEach(x=>x.hidden=!x.textContent.toLowerCase().includes(input.value.toLowerCase())));
  });
  scope.querySelectorAll?.('.collapsible-panel').forEach(root=>{
    if(root.dataset.bound)return;root.dataset.bound='1';const btn=root.querySelector('button'),panel=root.querySelector(':scope>div');if(!btn||!panel)return;
    btn.addEventListener('click',e=>{e.stopPropagation();panel.hidden=!panel.hidden});
  });
  scope.querySelectorAll?.('.toggle-group').forEach(root=>{
    if(root.dataset.bound)return;root.dataset.bound='1';root.querySelectorAll('button').forEach(btn=>btn.addEventListener('click',e=>{e.stopPropagation();root.querySelectorAll('button').forEach(x=>x.classList.remove('active'));btn.classList.add('active')}));
  });
  scope.querySelectorAll?.('.before-after').forEach(root=>{
    if(root.dataset.bound)return;root.dataset.bound='1';const after=root.querySelector('.after'),line=root.querySelector('i');if(!after||!line)return;
    root.addEventListener('pointermove',e=>{const r=root.getBoundingClientRect();const p=Math.max(0,Math.min(100,(e.clientX-r.left)/r.width*100));after.style.clipPath='inset(0 '+(100-p)+'% 0 0)';line.style.right=(100-p)+'%'});
  });


  scope.querySelectorAll?.('.devpack.kind-tabs').forEach(root=>{
    if(root.dataset.bound)return;root.dataset.bound='1';
    root.querySelectorAll('button').forEach(btn=>btn.addEventListener('click',e=>{
      e.stopPropagation();
      root.querySelectorAll('button').forEach(x=>x.classList.remove('active'));
      btn.classList.add('active');
    }));
  });

  scope.querySelectorAll?.('.drag-stage').forEach(stage=>{
    if(stage.dataset.bound)return;stage.dataset.bound='1';
    const tile=stage.querySelector('.drag-tile'),drop=stage.querySelector('.drop-zone');if(!tile||!drop)return;
    let startX=0,startY=0,baseX=0,baseY=0,dragging=false;
    tile.addEventListener('pointerdown',e=>{dragging=true;startX=e.clientX;startY=e.clientY;tile.setPointerCapture?.(e.pointerId)});
    tile.addEventListener('pointermove',e=>{if(!dragging)return;const x=baseX+e.clientX-startX,y=baseY+e.clientY-startY;tile.style.transform=`translate(${x}px,${y}px)`;const a=tile.getBoundingClientRect(),b=drop.getBoundingClientRect();drop.classList.toggle('over',a.left<b.right&&a.right>b.left&&a.top<b.bottom&&a.bottom>b.top)});
    tile.addEventListener('pointerup',e=>{dragging=false;const a=tile.getBoundingClientRect(),b=drop.getBoundingClientRect(),hit=a.left<b.right&&a.right>b.left&&a.top<b.bottom&&a.bottom>b.top;if(hit){tile.style.opacity='.25';drop.textContent='DONE';drop.classList.add('over')}else{baseX=0;baseY=0;tile.style.transform='';drop.classList.remove('over')}tile.releasePointerCapture?.(e.pointerId)});
  });

  scope.querySelectorAll?.('.jq-toggle').forEach(root=>{
    if(root.dataset.jqBound)return;root.dataset.jqBound='1';
    root.addEventListener('click',e=>{e.stopPropagation();root.classList.toggle('is-on')});
  });
  scope.querySelectorAll?.('.jq-menu').forEach(root=>{
    if(root.dataset.jqBound)return;root.dataset.jqBound='1';
    root.querySelector('button')?.addEventListener('click',e=>{e.stopPropagation();root.classList.toggle('is-open')});
  });
  scope.querySelectorAll?.('.jq-progress').forEach(root=>{
    if(root.dataset.jqBound)return;root.dataset.jqBound='1';
    root.addEventListener('click',e=>{e.stopPropagation();root.classList.toggle('is-complete')});
  });
  scope.querySelectorAll?.('.jq-compare').forEach(root=>{
    if(root.dataset.jqBound)return;root.dataset.jqBound='1';
    root.addEventListener('pointermove',e=>{const r=root.getBoundingClientRect();const p=Math.max(10,Math.min(90,(e.clientX-r.left)/r.width*100));root.style.setProperty('--split',p+'%')});
    root.addEventListener('pointerleave',()=>root.style.setProperty('--split','52%'));
  });
  scope.querySelectorAll?.('.jq-notify').forEach(root=>{
    if(root.dataset.jqBound)return;root.dataset.jqBound='1';
    root.querySelectorAll(':scope>span').forEach(row=>row.addEventListener('click',e=>{e.stopPropagation();row.classList.toggle('dismissed');row.style.opacity=row.classList.contains('dismissed')?'.35':'1'}));
  });

  scope.querySelectorAll?.('.dq-accordion').forEach(root=>{
    if(root.dataset.dqBound)return;root.dataset.dqBound='1';
    root.querySelectorAll('.dq-acc-head').forEach(btn=>btn.addEventListener('click',e=>{
      e.stopPropagation();
      root.querySelectorAll('.dq-acc-head').forEach(x=>x.classList.remove('active'));
      btn.classList.add('active');
      const panel=root.querySelector('.dq-acc-panel');if(panel)panel.hidden=btn!==root.querySelector('.dq-acc-head');
    }));
  });
  scope.querySelectorAll?.('.dq-tablist,.dq-segmented').forEach(list=>{
    if(list.dataset.dqBound)return;list.dataset.dqBound='1';
    list.querySelectorAll('button').forEach(btn=>btn.addEventListener('click',e=>{
      e.stopPropagation();list.querySelectorAll('button').forEach(x=>x.classList.remove('active'));btn.classList.add('active');
      const panel=list.closest('.dq-tabbar')?.querySelector('.dq-tabpanel');if(panel)panel.textContent=btn.textContent+' panel';
    }));
  });
  scope.querySelectorAll?.('.dq-switch').forEach(btn=>{
    if(btn.dataset.dqBound)return;btn.dataset.dqBound='1';btn.addEventListener('click',e=>{e.stopPropagation();btn.classList.toggle('on')});
  });
  scope.querySelectorAll?.('.dq-dropdown').forEach(root=>{
    if(root.dataset.dqBound)return;root.dataset.dqBound='1';
    const trigger=root.querySelector('.dq-trigger'),options=root.querySelector('.dq-options');if(!trigger||!options)return;
    trigger.addEventListener('click',e=>{e.stopPropagation();options.hidden=!options.hidden});
    options.querySelectorAll('span').forEach(opt=>opt.addEventListener('click',e=>{e.stopPropagation();options.querySelectorAll('span').forEach(x=>x.classList.remove('active'));opt.classList.add('active');trigger.firstChild.textContent=opt.textContent;options.hidden=true}));
  });
  scope.querySelectorAll?.('.dq-password').forEach(root=>{
    if(root.dataset.dqBound)return;root.dataset.dqBound='1';const input=root.querySelector('input'),btn=root.querySelector('button');if(!input||!btn)return;
    btn.addEventListener('click',e=>{e.stopPropagation();input.type=input.type==='password'?'text':'password'});
  });
  scope.querySelectorAll?.('.dq-carousel').forEach(root=>{
    if(root.dataset.dqBound)return;root.dataset.dqBound='1';const slides=[...root.querySelectorAll('.dq-slides article')],buttons=[...root.querySelectorAll('footer button')];let i=Math.max(0,slides.findIndex(x=>x.classList.contains('active')));
    const paint=()=>slides.forEach((s,n)=>s.classList.toggle('active',n===i));
    buttons[0]?.addEventListener('click',e=>{e.stopPropagation();i=(i-1+slides.length)%slides.length;paint()});
    buttons[1]?.addEventListener('click',e=>{e.stopPropagation();i=(i+1)%slides.length;paint()});
  });
  scope.querySelectorAll?.('.dq-toast').forEach(root=>{
    if(root.dataset.dqBound)return;root.dataset.dqBound='1';root.querySelector('button')?.addEventListener('click',e=>{e.stopPropagation();root.style.opacity=root.style.opacity==='.25'?'1':'.25'});
  });
}


let interactionPreviewTick=0;
let interactionPreviewTimer=null;
function syncInteractionPreviewTimer(){
  const hasActive=!!document.querySelector('.component-card.preview-active,.drawer-preview.preview-active');
  if(hasActive&&!interactionPreviewTimer)interactionPreviewTimer=setInterval(()=>runLivePreviewTick(),1200);
  else if(!hasActive&&interactionPreviewTimer){clearInterval(interactionPreviewTimer);interactionPreviewTimer=null}
}
function cycleClass(nodes,className,index){
  nodes.forEach(n=>n.classList.remove(className));
  if(nodes.length)nodes[index%nodes.length].classList.add(className);
}
function runLivePreviewTick(target=null){
  interactionPreviewTick++;
  const scopes=target?[target]:[...document.querySelectorAll('.component-card.preview-active,.drawer-preview.preview-active')];
  scopes.forEach(scope=>{
    const root=scope.classList.contains('drawer-preview')?scope:scope.querySelector('.component-preview');
    if(!root)return;

    const buttons=[...root.querySelectorAll('.demo-btn,.hover-slide,.hover-nudge,.hover-shine,.hover-flip,.btn-split button')];
    buttons.forEach((b,i)=>b.classList.toggle('auto-active',(interactionPreviewTick+i)%2===0));

    const fields=[...root.querySelectorAll('input:not([type="checkbox"]),textarea,select')];
    cycleClass(fields,'auto-focus',interactionPreviewTick);

    root.querySelectorAll('.toggle-control input[type="checkbox"]').forEach(cb=>{
      cb.checked=interactionPreviewTick%2===0;
    });
    root.querySelectorAll('.check-group input[type="checkbox"]').forEach((cb,i)=>{
      cb.checked=(interactionPreviewTick+i)%2===0;
    });

    const navItems=[...root.querySelectorAll('.demo-nav span,.mobile-bottom span,.seg-nav span,.mini-side span,.dock-nav span,.pagination-bar button,.mega-nav span,.step-nav span,.command-breadcrumb span,.breadcrumbs span')];
    cycleClass(navItems,'auto-active',interactionPreviewTick);

    const tabItems=[...root.querySelectorAll('.demo-tabs span,.underline-tabs span,.accordion-row>div')];
    cycleClass(tabItems,'auto-active',interactionPreviewTick);

    const menuItems=[...root.querySelectorAll('.demo-menu>div')];
    cycleClass(menuItems,'auto-active',interactionPreviewTick);

    root.querySelectorAll('.demo-modal').forEach(m=>m.classList.toggle('auto-pop',interactionPreviewTick%2===0));
    root.querySelectorAll('.hover-image,.hover-tilt,.hover-pop,.hover-gradient-border,.hover-spotlight,.hover-ring').forEach((n,i)=>{
      n.classList.toggle('auto-active',(interactionPreviewTick+i)%2===0);
    });
  });
}
