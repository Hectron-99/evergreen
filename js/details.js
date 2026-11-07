(function(){
var list=document.getElementById("listFull");
if(!list)return;

// Set to false to hide every "Good for" line (for example until NAFDAC approves the claims)
var SHOW_USE=true;

// p = price, u = good for, d = how to use. Leave out any line you don't know.
var INFO={
"GB Liquid":{u:"All blood related diseases"},
"GB Powder":{u:"All blood related diseases",d:"One teaspoon with warm water, morning and night before food every day"},
"One Time Herbal Powder":{u:"Stomach noise, waist pain, back pain, menstrual pain, indigestion, chronic pile, weak erection",d:"One teaspoon at night, 3 times a week, with warm water before food"},
"Eva Fit Capsules":{p:"₦7000",u:"Obesity or big tummy",d:"2 capsules at night with warm water after food every day"},
"Eva Cool Capsules":{p:"₦5000",u:"High blood pressure (hypertension)",d:"4 capsules with warm water after food, morning and night"},
"Eva Cool Liquid":{p:"₦2000",u:"High blood pressure (hypertension)",d:"Quarter glass cup in the morning and night after food every day"},
"Eva Booster Powder":{p:"₦5000",u:"Low sperm count and sexual weakness",d:"One teaspoon with warm water and milk, morning and night before food every day"},
"Eva Care Powder":{p:"₦7000",u:"Fibroid and infertility in women",d:"One teaspoon after food at night with lime water or gin. Start 3 days to your monthly period and during your period, but stop immediately after your period"},
"Eva Dabeth Capsules":{p:"₦7000",u:"Diabetes",d:"4 capsules morning and night after food every day"},
"Malaty Herbal Powder":{p:"₦4000",u:"Malaria, typhoid fever and general body pain",d:"One teaspoon with warm water, tea or pap, morning and night after food every day"},
"Bonax Herbal Powder":{p:"₦4000",u:"Rheumatism, arthritis, back and leg pain, general body pain, joint pain",d:"One teaspoon with warm water, tea or pap, twice daily"},
"D2 Herbal Powder":{u:"Frequent urination",d:"One teaspoon with warm water, tea or pap, twice daily"},
"TP Herbal Powder":{u:"Typhoid fever",d:"One teaspoon with warm water, tea or pap, twice daily"},
"Joker Herbal Remedy":{u:"Worms of any kind (hook worms, eye worms, chest worms)",d:"One teaspoon with 7up or pap, tea or warm water after food at night, for adults and children every day"},
"OP Herbal Powder":{u:"Stomach noise, waist pain, back pain, menstrual pain, indigestion, weak erection",d:"One teaspoon at night, 3 times a week, with warm water before food"},
"Washing & Settings Herbal Powder":{u:"Bacteria diseases or S.T.I",d:"One teaspoon at night with warm water before food every day"},
"ST1 Capsules":{p:"₦8000",u:"Special treatment",d:"4 capsules with warm water after food, morning and night every day"},
"ST2 Capsules":{p:"₦7000",u:"Special treatment",d:"4 capsules with warm water after food, morning and night every day"},
"ST3 Capsules":{p:"₦6000",u:"Special treatment",d:"4 capsules with warm water after food, morning and night every day"},
"Eva Vision Powder":{p:"₦4000",u:"All eye related diseases",d:"One spoon with warm water after food, morning and night every day"},
"S1 Cough Syrup":{p:"₦2000"},
"AS1 Herbal Liquid":{p:"₦2000",u:"Any kind of cough related issues",d:"Quarter of a glass cup morning and night every day before food"},
"C2 Herbal Powder":{p:"₦4000",u:"Builds up the immune system and helps control blood pressure",d:"One teaspoon morning and night every day"},
"Hermo-P Liquid":{p:"₦2000",u:"Pile, hemorrhoid, waist pain, back pain, stomach noise, stomach trouble, menstrual pain",d:"Quarter of a glass cup morning and night every day before food"},
"Hermo-P Capsules":{p:"₦7000",u:"Pile, hemorrhoid, waist pain, back pain, stomach noise, stomach trouble, menstrual pain",d:"3 or 4 capsules in the morning and night after food every day"},
"OG Herbal Powder":{p:"₦4000",u:"Ulcer treatment",d:"One teaspoon morning and night every day with warm water"},
"Eva Flusher Liquid":{p:"₦3000",d:"Two tablespoons before or after food in the morning every day"}
};
var WARN="Do not exceed the prescribed dosage. Keep medicine out of reach of children.";

var css=".det{display:block;width:100%;margin:8px 0 0;padding:10px 14px;border:0;border-radius:12px;background:var(--tint,#e8f5ec);color:var(--green,#1a8f4c);font:inherit;font-size:13px;font-weight:700;cursor:pointer}"+
".more{margin:8px 0 0;padding:12px 14px;border-radius:12px;background:var(--tint2,#fff1e6);font-size:13px;line-height:1.5}"+
".more[hidden]{display:none}"+
".more div{margin:0 0 8px}"+
".more div:last-child{margin:0}"+
".more b{display:block;font-size:11px;letter-spacing:.04em;text-transform:uppercase;color:var(--orange,#e8601c)}";
var st=document.createElement("style");st.textContent=css;document.head.appendChild(st);

function line(t,v){return "<div><b>"+t+"</b>"+v+"</div>"}

[].forEach.call(list.querySelectorAll(".pf"),function(card){
  var name=card.querySelector(".tx b").textContent,d=INFO[name]||{},h="";
  if(d.p)h+=line("Price",d.p);
  if(SHOW_USE&&d.u)h+=line("Good for",d.u);
  if(d.d)h+=line("How to use",d.d);
  if(!h)h+=line("More info","Message us on WhatsApp for the price and how to use it.");
  h+=line("Warning",WARN);
  var b=document.createElement("button");b.type="button";b.className="det";b.textContent="Price and how to use \u25BE";
  var p=document.createElement("div");p.className="more";p.hidden=true;p.innerHTML=h;
  b.onclick=function(){var open=p.hidden;p.hidden=!open;b.textContent=open?"Hide details \u25B4":"Price and how to use \u25BE"};
  card.appendChild(b);card.appendChild(p);
});
})();
