// Shared layout and behaviour for every page.
(function(){
var S=SITE,B=document.body,page=B.getAttribute("data-page")||"home";
function ic(n){return '<svg class="i"><use href="#'+n+'"/></svg>'}
function wa(t){return "https://wa.me/"+S.whatsapp+"?text="+encodeURIComponent(t||"Hello")}
var pages=[["home","index.html","Home","i-home"],["products","products.html","Products","i-bag"],["about","about.html","About","i-info"],["faq","faq.html","FAQ","i-q"],["contact","contact.html","Contact","i-phone"]];
var links=pages.map(function(p){return '<a class="lk'+(p[0]===page?" on":"")+'" href="'+p[1]+'">'+ic(p[3])+p[2]+'</a>'}).join("");
var items=S.ticker.map(function(t){return '<span>'+ic("i-leaf")+" "+t+'</span>'}).join("");
document.getElementById("layout-top").innerHTML=ICONS+
'<div class="ticker"><div class="track" id="track">'+items+'</div></div>'+
'<header class="bar"><a class="brand" href="index.html"><img src="images/logo.webp" alt="logo"><span><b>'+S.short+'</b><small>'+S.sub+'</small></span></a><div class="acts"><button class="rb" id="theme" aria-label="Dark mode">'+ic("i-moon")+'</button><button class="rb" id="menu" aria-label="Menu" aria-expanded="false">'+ic("i-menu")+'</button></div></header>'+
'<div class="scrim" id="scrim"></div>'+
'<nav class="drop" id="nav"><div class="dh"><img src="images/logo.webp" alt=""><span><b>'+S.name+'</b><small>'+S.tagline+'</small></span><button class="xb" aria-label="Close">'+ic("i-x")+'</button></div>'+links+'<a class="btn g" style="justify-content:center;margin:8px 0 0;display:flex" href="'+wa("Hello")+'" target="_blank" rel="noopener">'+ic("i-wa")+'Order on WhatsApp</a></nav>';
var soc=[["Instagram",S.social.instagram],["Facebook",S.social.facebook],["TikTok",S.social.tiktok]].filter(function(s){return s[1]}).map(function(s){return '<a href="'+s[1]+'" target="_blank" rel="noopener">'+s[0]+'</a>'}).join("");
document.getElementById("layout-bottom").innerHTML='<footer class="foot"><div class="social"><a href="'+wa("Hello")+'" target="_blank" rel="noopener">WhatsApp</a>'+soc+'</div>\u00a9 '+S.name+'. '+S.note+'</footer><a class="wa" href="'+wa("Hello")+'" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">'+ic("i-wa")+'</a>';
document.querySelectorAll("[data-site]").forEach(function(e){e.textContent=S[e.getAttribute("data-site")]});
document.querySelectorAll("[data-opt]").forEach(function(e){if(!S[e.getAttribute("data-opt")])e.hidden=true});
document.querySelectorAll("[data-wa]").forEach(function(e){e.href=wa(e.getAttribute("data-wa"))});
document.querySelectorAll("[data-tel]").forEach(function(e){e.href="tel:+"+S.whatsapp});

// skeleton loading
var SK='<div id="skel"><div class="sk" style="height:200px;border-radius:0;margin:0"></div><div class="pad"><div class="sk" style="height:28px;width:70%;margin:0 auto 14px"></div><div class="sk" style="height:14px;width:40%;margin:0 auto 18px"></div><div class="sk" style="height:12px"></div><div class="sk" style="height:12px;width:90%"></div><div class="sk" style="height:12px;width:75%"></div><div class="sk" style="height:46px;margin-top:26px"></div><div class="sk" style="height:46px"></div></div></div>';
document.querySelector("main").insertAdjacentHTML("afterbegin",SK);
setTimeout(function(){B.classList.remove("loading")},900);

// products
function pill(p){return '<a class="pill" href="'+wa("Hello, I want to order "+p.name)+'" target="_blank" rel="noopener">'+ic("i-wa")+'Order</a>'}
function info(p){return '<span class="tx"><b>'+p.name+'</b><small>'+p.note+'</small></span>'}
var rh=document.getElementById("rowsHome");
if(rh)rh.innerHTML=PRODUCTS.slice(0,4).map(function(p){return '<div class="row"><span class="ic">'+ic("i-leaf")+'</span>'+info(p)+pill(p)+'</div>'}).join("");
var lf=document.getElementById("listFull");
if(lf){lf.innerHTML=PRODUCTS.map(function(p){return '<div class="pf"><div class="fly'+(p.photo?" pk":"")+'"><img loading="lazy" decoding="async" src="images/products/'+p.img+'" alt="'+p.name+' flyer"></div><div class="row">'+info(p)+pill(p)+'</div></div>'}).join("");
document.getElementById("count").textContent=PRODUCTS.length+" products. Tap a flyer to enlarge it."}

// menu, theme
var nv=document.getElementById("nav"),sc=document.getElementById("scrim"),mb=document.getElementById("menu");
function setMenu(o){nv.classList.toggle("open",o);sc.classList.toggle("open",o);mb.setAttribute("aria-expanded",o)}
mb.onclick=function(){setMenu(!nv.classList.contains("open"))};sc.onclick=function(){setMenu(false)};
nv.addEventListener("click",function(e){if(e.target.closest(".xb"))setMenu(false)});
document.getElementById("theme").onclick=function(){var r=document.documentElement,d=r.dataset.theme||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");r.dataset.theme=(d==="dark")?"light":"dark"};

// moving banner
var tk=document.getElementById("track"),g1=tk.innerHTML,grp=g1;tk.innerHTML=grp;
while(tk.offsetWidth<window.innerWidth&&grp.length<20000){grp+=g1;tk.innerHTML=grp}
tk.innerHTML=grp+grp;

// tap a flyer to enlarge
var lb=document.createElement("div");lb.className="lb";lb.innerHTML='<img alt="">';document.body.appendChild(lb);
document.querySelectorAll(".fly img").forEach(function(im){im.addEventListener("click",function(){lb.firstChild.src=im.src;lb.classList.add("open")})});
lb.addEventListener("click",function(){lb.classList.remove("open")});
// fade-in on scroll
if("IntersectionObserver" in window&&!matchMedia("(prefers-reduced-motion: reduce)").matches){
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll(".pf,.band,.why>div,.sh,#rowsHome .row,details,.ct,.pad>h2").forEach(function(el){el.classList.add("reveal");io.observe(el)});
}
})();
