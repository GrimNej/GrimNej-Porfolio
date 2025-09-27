// v2 - init and placeholder + guard
document.addEventListener('DOMContentLoaded',function(){
  var g = document.querySelector('.projects-grid');
  if(g) g.innerHTML = '<article class="project"><h3>Static Landing</h3><p>minimal landing placeholder</p></article>';
  if(!g) console.log('no projects-grid found');
});
