(function(){
var input=document.getElementById("search"),box=document.getElementById("sugg"),list=document.getElementById("listFull"),count=document.getElementById("count");
if(!input||!box||!list)return;
var css=".sbar{position:relative;margin:0 0 14px}"+
".sbar svg{position:absolute;left:16px;top:50%;transform:translateY(-50%);width:18px;height:18px;color:var(--green,#1a8f4c);pointer-events:none}"+
".sbar input{width:100%;box-sizing:border-box;padding:13px 18px 13px 46px;border:2px solid #cfe6d6;border-radius:999px;font:inherit;font-size:15px;background:var(--surface,#fff);color:inherit;outline:none}"+
".sbar input:focus{border-color:var(--green,#1a8f4c)}"+
".sugg{position:absolute;left:0;right:0;top:100%;margin-top:6px;background:var(--surface,#fff);border-radius:16px;box-shadow:0 10px 30px rgba(0,0,0,.15);overflow:hidden;z-index:50;display:none}"+
".sugg.open{display:block}"+
".sugg button{display:block;width:100%;text-align:left;padding:12px 18px;border:0;border-bottom:1px solid #eef5ef;background:none;font:inherit;font-size:14px;color:var(--green,#1a8f4c);cursor:pointer}"+
".sugg button:last-child{border-bottom:0}"+
".sugg button:hover,.sugg button:focus{background:var(--tint2,#fff1e6);color:var(--orange,#e8601c);outline:none}"+
".sugg .none{padding:12px 18px;font-size:14px;color:#6b7b70}";
var st=document.createElement("style");st.textContent=css;document.head.appendChild(st);

var base=count?count.textContent:"";
var items=[].slice.call(list.querySelectorAll(".pf")).map(function(c){return {el:c,name:c.querySelector(".tx b").textContent}});
function norm(s){return s.toLowerCase().replace(/[^a-z0-9]/g,"")}
function matches(q){var n=norm(q);return items.filter(function(it){return !n||norm(it.name).indexOf(n)>-1})}
function show(q){
  var n=norm(q),m=matches(q);
  items.forEach(function(it){it.el.style.display=(!n||norm(it.name).indexOf(n)>-1)?"":"none"});
  if(count)count.textContent=n?m.length+" of "+items.length+" products":base;
}
function suggest(q){
  box.innerHTML="";
  if(!q.trim()){box.classList.remove("open");return}
  var m=matches(q).slice(0,6);
  if(!m.length){var d=document.createElement("div");d.className="none";d.textContent="No product found";box.appendChild(d)}
  m.forEach(function(it){
    var b=document.createElement("button");b.type="button";b.textContent=it.name;
    b.onclick=function(){input.value=it.name;show(it.name);box.classList.remove("open")};
    box.appendChild(b);
  });
  box.classList.add("open");
}
input.addEventListener("input",function(){show(input.value);suggest(input.value)});
input.addEventListener("focus",function(){suggest(input.value)});
input.addEventListener("keydown",function(e){if(e.key==="Escape")box.classList.remove("open")});
document.addEventListener("click",function(e){if(!e.target.closest(".sbar"))box.classList.remove("open")});
})();
