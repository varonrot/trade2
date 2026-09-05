const courses=[
{title:'המדריך למשקיע המתחיל – חלק 1',link:'https://trade2.co.il/courses/',category:'השקעות',level:'מתחילים',duration:'4 שעות',image:'https://trade2.co.il/wp-content/uploads/2018/11/image_box_1-1.png'},
{title:'מסחר על פי ניתוח טכני',link:'https://trade2.co.il/courses/',category:'ניתוח טכני',level:'ביניים',duration:'קורס מלא',image:'https://trade2.co.il/wp-content/uploads/2018/11/1181834_8257_2-1.jpg'},
{title:'אסטרטגיה 1: מסחר במומנטום למסחר יומי',link:'https://trade2.co.il/courses/',category:'מסחר יומי',level:'ביניים',duration:'מסלול מעשי',image:'https://trade2.co.il/wp-content/uploads/2018/11/1325264_6025_3-1.jpg'},
{title:'קורס מסחר באופציות – רמה 1',link:'https://trade2.co.il/courses/option1/',category:'אופציות',level:'מתחילים',duration:'5 שעות',image:'https://trade2.co.il/wp-content/uploads/2024/11/87-3-1-1024x696.png'},
{title:'קורס חוזים עתידיים – יסודות המסחר',link:'https://trade2.co.il/courses/',category:'חוזים עתידיים',level:'ביניים',duration:'קורס מקצועי',image:'https://trade2.co.il/wp-content/uploads/2018/11/438522_500f_6-1.jpg'},
{title:'ניתוח דוחות כספיים – יסודות הקריאה הנכונה',link:'https://trade2.co.il/courses/',category:'דוחות כספיים',level:'מתחילים',duration:'4 שעות',image:'https://trade2.co.il/wp-content/uploads/2018/11/image_box_2-1.png'}
];
const grid=document.getElementById('courseGrid');
if(grid)grid.innerHTML=courses.map(c=>`<a class="course-card" href="${c.link}" target="_blank" rel="noopener"><div class="course-img" style="background-image:url('${c.image}')"></div><div class="course-body"><span class="tag">${c.category} • ${c.level}</span><h3>${c.title}</h3><div class="course-meta"><span>${c.duration}</span><span>למידה אונליין</span></div></div></a>`).join('');

const sharedMediaStyle=document.createElement('style');
sharedMediaStyle.textContent=`
/* Shared Options America media, mirrored for Hebrew RTL composition */
.hero:before{
  background-image:url('https://raw.githubusercontent.com/varonrot/options-america/main/assets/images/hero/options-trading-hero.webp')!important;
  background-size:cover!important;
  background-position:center!important;
  background-repeat:no-repeat!important;
  transform:scaleX(-1);
  transform-origin:center;
  z-index:0;
}
.hero:after{
  content:"";
  position:absolute;
  inset:0;
  z-index:0;
  pointer-events:none;
  background:linear-gradient(270deg,#061426 0%,rgba(6,20,38,.98) 27%,rgba(6,20,38,.80) 49%,rgba(6,20,38,.28) 73%,rgba(6,20,38,.10) 100%);
}
.hero-grid{position:relative;z-index:1!important;}

.feature-card{background-image:none!important;position:relative;isolation:isolate;}
.feature-card:after{
  content:"";
  position:absolute;
  inset:0;
  z-index:-2;
  background-size:cover;
  background-position:center;
  background-repeat:no-repeat;
  transform:scaleX(-1);
  transform-origin:center;
}
.dark-blue:after{
  background-image:url('https://raw.githubusercontent.com/varonrot/options-america/main/assets/images/features/options-greeks-bg.webp');
}
.dark-cyan:after{
  background-image:url('https://raw.githubusercontent.com/varonrot/options-america/main/assets/images/features/options-futures-bg.webp');
}
.dark-blue:before{
  z-index:-1!important;
  background:linear-gradient(270deg,rgba(5,20,43,.98) 0%,rgba(5,20,43,.90) 45%,rgba(5,20,43,.36) 76%,rgba(5,20,43,.08) 100%)!important;
}
.dark-cyan:before{
  z-index:-1!important;
  background:linear-gradient(270deg,rgba(3,43,64,.98) 0%,rgba(3,43,64,.90) 45%,rgba(3,43,64,.36) 76%,rgba(3,43,64,.08) 100%)!important;
}
`;
document.head.appendChild(sharedMediaStyle);
