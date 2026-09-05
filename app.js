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
