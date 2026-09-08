document.addEventListener('DOMContentLoaded',()=>{
  const side=document.querySelector('.sidebar');
  if(!side)return;
  side.innerHTML=`
    <div class="sidebar-brand">
      <div class="brand-copy"><h1>Trade2</h1><p></p></div>
      <div class="brand-mark" aria-hidden="true"><svg><use href="#i-cap"></use></svg></div>
    </div>
    <div class="sidebar-scroll">
      <div class="nav-group">
        <nav class="sidebar-nav">
          <a class="sidebar-link active" href="/"><span class="sidebar-label">דשבורד</span><span class="sidebar-icon">⌂</span></a>
          <a class="sidebar-link" href="/courses/"><span class="sidebar-label">הקורסים שלי</span><span class="sidebar-icon">▣</span></a>
          <a class="sidebar-link" href="/courses/"><span class="sidebar-label">המשך ללמוד</span><span class="sidebar-icon">▶</span></a>
          <a class="sidebar-link" href="/courses/"><span class="sidebar-label">כל הקורסים</span><span class="sidebar-icon">▤</span></a>
          <a class="sidebar-link" href="#"><span class="sidebar-label">מסלולי לימוד</span><span class="sidebar-icon">⌂</span></a>
        </nav>
      </div>
      <div class="nav-group">
        <nav class="sidebar-nav">
          <a class="sidebar-link" href="#"><span class="sidebar-label">אופציות</span><span class="sidebar-icon">↗</span></a>
          <a class="sidebar-link" href="#"><span class="sidebar-label">מסחר יומי</span><span class="sidebar-icon">▥</span></a>
          <a class="sidebar-link" href="#"><span class="sidebar-label">אלגו טריידינג</span><span class="sidebar-icon">⌘</span></a>
          <a class="sidebar-link" href="#"><span class="sidebar-label">חוזים עתידיים</span><span class="sidebar-icon">▧</span></a>
          <a class="sidebar-link" href="#"><span class="sidebar-label">השקעות</span><span class="sidebar-icon">●</span></a>
        </nav>
      </div>
      <div class="nav-group">
        <nav class="sidebar-nav">
          <a class="sidebar-link" href="#"><span class="sidebar-label">מועדפים</span><span class="sidebar-icon">♡</span></a>
          <a class="sidebar-link" href="#"><span class="sidebar-label">התקדמות שלי</span><span class="sidebar-icon">▥</span></a>
          <a class="sidebar-link" href="#"><span class="sidebar-label">הגדרות</span><span class="sidebar-icon">⚙</span></a>
        </nav>
      </div>
    </div>
    <div class="sidebar-promo">
      <div class="promo-icon"></div>
      <h3>Trade2 Pro</h3>
      <p>גישה לכל הקורסים והתוכן המתקדם</p>
    </div>
    <div class="trade2-version">v0.1.3</div>`;
});