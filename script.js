// consolidated script
document.addEventListener('DOMContentLoaded',function(){
  var g=document.querySelector('.projects-grid');
  if(g) g.innerHTML = '<article class="project"><h3>coming soon</h3><p>placeholder</p></article>';
  var f=document.getElementById('contactForm');
  if(f) f.addEventListener('submit',function(e){e.preventDefault();alert('Feature coming soon!');});
  if(window.location.hash){var t=document.querySelector(window.location.hash); if(t) setTimeout(function(){ t.setAttribute('tabindex','-1'); t.focus(); },120);}
});
document.querySelectorAll('a[href^="#"]').forEach(function(a){a.addEventListener('click',function(e){var href=this.getAttribute('href'); if(href && href.length>1){var t=document.querySelector(href); if(t){e.preventDefault(); t.scrollIntoView({behavior:'smooth'});}}});});
window.appAnalytics={clicks:0,trackClick:function(){this.clicks++;console.log('clicks',this.clicks);}};
document.addEventListener('click',function(){window.appAnalytics.trackClick()});
console.log("prototype-portfolio: iteration 12 - style: tweak accent polish");
