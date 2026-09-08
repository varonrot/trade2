document.addEventListener('DOMContentLoaded',()=>{
  const sidebar=document.querySelector('.sidebar');
  if(!sidebar)return;

  const button=document.createElement('button');
  button.className='mobile-hamburger';
  button.type='button';
  button.setAttribute('aria-label','פתיחת תפריט');
  button.setAttribute('aria-expanded','false');
  button.innerHTML='<span></span><span></span><span></span>';
  document.body.appendChild(button);

  const close=()=>{
    document.body.classList.remove('mobile-menu-open');
    button.setAttribute('aria-expanded','false');
    button.setAttribute('aria-label','פתיחת תפריט');
  };

  const toggle=()=>{
    const open=document.body.classList.toggle('mobile-menu-open');
    button.setAttribute('aria-expanded',String(open));
    button.setAttribute('aria-label',open?'סגירת תפריט':'פתיחת תפריט');
  };

  button.addEventListener('click',e=>{e.stopPropagation();toggle()});

  document.addEventListener('click',e=>{
    if(window.innerWidth<=680&&document.body.classList.contains('mobile-menu-open')&&!sidebar.contains(e.target)&&!button.contains(e.target))close();
  });

  document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
  sidebar.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{if(window.innerWidth<=680)close()}));
  window.addEventListener('resize',()=>{if(window.innerWidth>680)close()});
});