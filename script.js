(function(){
var root=document.documentElement,els=document.querySelectorAll('[data-ar]'),
T={en:document.title,ar:'مدرسة ستيم دمياط | العلوم والتكنولوجيا والهندسة والرياضيات في مصر'},
D={en:document.getElementById('desc').content,ar:'مدرسة ستيم دمياط في مصر: مدرسة للطلاب الموهوبين تركز على العلوم والتكنولوجيا والهندسة والرياضيات من خلال المشروعات والمعامل والبحث.'};
els.forEach(function(e){e.setAttribute('data-en',e.innerHTML)});
function save(k,v){try{localStorage.setItem(k,v)}catch(e){}}
function load(k){try{return localStorage.getItem(k)}catch(e){return null}}
function setLang(l){
root.lang=l;root.dir=l==='ar'?'rtl':'ltr';
els.forEach(function(e){e.innerHTML=e.getAttribute(l==='ar'?'data-ar':'data-en')});
document.title=T[l];document.getElementById('desc').content=D[l];
document.getElementById('langTxt').textContent=l==='ar'?'EN':'عربي';
document.getElementById('langBtn').setAttribute('aria-label',l==='ar'?'Switch to English':'التبديل إلى العربية');
save('lang',l);
}
function setTheme(t){
root.setAttribute('data-theme',t);
document.getElementById('themeIco').textContent=t==='dark'?'☀️':'🌙';
document.getElementById('themeBtn').setAttribute('aria-label',t==='dark'?'Light mode':'Dark mode');
save('theme',t);
}
document.getElementById('langBtn').onclick=function(){setLang(root.lang==='ar'?'en':'ar')};
document.getElementById('themeBtn').onclick=function(){setTheme(root.getAttribute('data-theme')==='dark'?'light':'dark')};
var sl=load('lang'),st=load('theme');
setTheme(st||(window.matchMedia&&matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'));
setLang(sl==='ar'?'ar':'en');
})();