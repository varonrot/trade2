const courses=[
  {title:'קורס מסחר באופציות: רמה 1',level:'מתחילים',desc:'היכרות עם אופציות CALL מנקודת מבט של הקונה.',url:'/courses/option1/',image:'https://trade2.co.il/wp-content/uploads/2024/10/49-1.png'},
  {title:'קורס מסחר באופציות: רמה 4',level:'מתחילים',desc:'אופציות PUT מנקודת מבט של המוכר.',url:'/courses/',image:'https://trade2.co.il/wp-content/uploads/2024/10/52-2.png'},
  {title:'קורס מסחר באופציות: רמה 5 – תטא',level:'ביניים',desc:'להבין את שחיקת הזמן והשפעתה על מחיר האופציה.',url:'/courses/',image:'https://trade2.co.il/wp-content/uploads/2024/10/51-2.png'},
  {title:'אסטרטגיית Iron Condor',level:'מתקדמים',desc:'אחת מאסטרטגיות האופציות הנייטרליות הפופולריות.',url:'/courses/',image:'https://trade2.co.il/wp-content/uploads/2024/10/42-1.png'},
  {title:'אסטרטגיית Calendar Spread',level:'ביניים',desc:'שימוש בהבדלי זמן ושחיקת אופציות לבניית פוזיציה.',url:'/courses/',image:'https://trade2.co.il/wp-content/uploads/2024/10/39-1.png'},
  {title:'השקעה בתעודות סל',level:'ביניים',desc:'לומדים כיצד לעבוד עם ETF כחלק מתיק השקעות.',url:'/courses/',image:'https://trade2.co.il/wp-content/uploads/2024/10/7-2.png'}
];
const grid=document.getElementById('courseGrid');
if(grid){grid.innerHTML=courses.map(c=>`<a class="course-card" href="${c.url}"><div class="course-art course-art-image"><img src="${c.image}" alt="${c.title}" loading="lazy"></div><div class="course-body"><span>קורס · ${c.level}</span><h3>${c.title}</h3><p>${c.desc}</p></div></a>`).join('')}