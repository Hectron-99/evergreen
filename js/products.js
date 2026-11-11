(function(){
var list=document.getElementById("listFull");
if(!list)return;

// Set to false to hide every "Good for" line (for example until NAFDAC approves the claims)
var SHOW_USE=true;

// Same indication for ST1, ST2, ST3 and both Eva Flusher products
var FLUSH="An ancient herbal remedy for blood related diseases such as: *Sexual Diseases *Bacterial Infections *Fungal Infections *Venereal Infections *Indigestion. Such as Staphylococcus aureus, Syphilis, E. coli, Candidiasis, Gonorrhea, Urinary Tract Infection, Mouth Odor, PID & Constant Fever Etc.";
var WARN="Do not exceed the prescribed dosage. Keep medicine out of reach of children.";

// ALL PRODUCTS LIVE HERE.
var PRODUCTS=[
  {name:"FA Herbal Powder", note:"General body wellness and cleansing", img:"fa-herbal-powder.webp", w:900, h:363, u:"General body wellness and cleansing"},
  {name:"Eva Flusher Capsule", note:"Gentle herbal capsule for natural cleansing.", img:"eva-flusher-capsule.webp", w:220, h:335, photo:true, u:FLUSH},
  {name:"GB Liquid", note:"Herbal liquid", img:"gb-liquid.webp", w:900, h:363, u:"All blood related diseases"},
  {name:"GB Powder", note:"Herbal powder", img:"gb-powder.webp", w:900, h:363, u:"All blood related diseases", d:"One teaspoon with warm water, morning and night before food every day"},
  {name:"One Time Herbal Powder", note:"Herbal powder", img:"one-time-herbal-powder.webp", w:900, h:364, u:"Stomach noise, waist pain, back pain, menstrual pain, indigestion, chronic pile, weak erection", d:"One teaspoon at night, 3 times a week, with warm water before food"},
  {name:"Eva Fit Liquid", note:"Herbal liquid", img:"eva-fit-liquid.webp", w:900, h:363, p:"₦2000", u:"Obesity or big tummy", d:"Quarter glass cup in the morning and night after food every day"},
  {name:"Eva Fit Capsules", note:"Herbal capsules", img:"eva-fit-capsules.webp", w:428, h:174, p:"₦7000", u:"Obesity or big tummy", d:"2 capsules at night with warm water after food every day"},
  {name:"Eva Cool Capsules", note:"Herbal capsules", img:"eva-cool-capsules.webp", w:900, h:363, p:"₦5000", u:"High blood pressure (hypertension)", d:"4 capsules with warm water after food, morning and night"},
  {name:"Eva Cool Liquid", note:"Herbal liquid", img:"eva-cool-liquid.webp", w:429, h:175, p:"₦2000", u:"High blood pressure (hypertension)", d:"Quarter glass cup in the morning and night after food every day"},
  {name:"Eva Booster Powder", note:"Herbal powder", img:"eva-booster-powder.webp", w:857, h:347, p:"₦5000", u:"Low sperm count and sexual weakness", d:"One teaspoon with warm water and milk, morning and night before food every day"},
  {name:"Eva Care Powder", note:"Herbal powder", img:"eva-care-powder.webp", w:857, h:347, p:"₦7000", u:"Fibroid and infertility in women", d:"One teaspoon after food at night with lime water or gin. Start 3 days to your monthly period and during your period, but stop immediately after your period"},
  {name:"Eva Dabeth Capsules", note:"Herbal capsules", img:"eva-dabeth-capsules.webp", w:857, h:348, p:"₦7000", u:"Diabetes", d:"4 capsules morning and night after food every day"},
  {name:"Malaty Herbal Powder", note:"Herbal powder", img:"malaty-herbal-powder.webp", w:657, h:267, p:"₦4000", u:"Malaria, typhoid fever and general body pain", d:"One teaspoon with warm water, tea or pap, morning and night after food every day"},
  {name:"Bonax Herbal Powder", note:"Herbal powder", img:"bonax-herbal-powder.webp", w:657, h:265, p:"₦4000", u:"Rheumatism, arthritis, back and leg pain, general body pain, joint pain", d:"One teaspoon with warm water, tea or pap, twice daily"},
  {name:"D2 Herbal Powder", note:"Herbal powder", img:"d2-herbal-powder.webp", w:900, h:364, u:"Frequent urination", d:"One teaspoon with warm water, tea or pap, twice daily"},
  {name:"TP Herbal Powder", note:"Herbal powder", img:"tp-herbal-powder.webp", w:856, h:348, u:"Typhoid fever", d:"One teaspoon with warm water, tea or pap, twice daily"},
  {name:"Joker Herbal Remedy", note:"Herbal remedy", img:"joker-herbal-remedy.webp", w:900, h:366, p:"₦4000", u:"Worms of any kind (hook worms, eye worms, chest worms)", d:"One teaspoon with 7up or pap, tea or warm water after food at night, for adults and children every day"},
  {name:"OP Herbal Powder", note:"Herbal powder", img:"op-herbal-powder.webp", w:900, h:364, p:"₦4000", u:"Stomach noise, waist pain, back pain, menstrual pain, indigestion, weak erection", d:"One teaspoon at night, 3 times a week, with warm water before food"},
  {name:"Washing & Settings Herbal Powder", note:"Herbal powder", img:"washing-settings-herbal-powder.webp", w:655, h:267, p:"₦4000", u:"Bacteria diseases or S.T.I", d:"One teaspoon at night with warm water before food every day"},
  {name:"Power Liquids", note:"Herbal liquid", img:"power-liquids.webp", w:428, h:172, p:"₦2000", u:"Management to improve men's sexual performance"},
  {name:"ST1 Capsules", note:"Herbal capsules", img:"st1-capsules.webp", w:900, h:363, p:"₦8000", u:FLUSH, d:"4 capsules with warm water after food, morning and night every day"},
  {name:"ST2 Capsules", note:"Herbal capsules", img:"st2-capsules.webp", w:900, h:363, p:"₦7000", u:FLUSH, d:"4 capsules with warm water after food, morning and night every day"},
  {name:"ST3 Capsules", note:"Herbal capsules", img:"st3-capsules.webp", w:900, h:363, p:"₦6000", u:FLUSH, d:"4 capsules with warm water after food, morning and night every day"},
  {name:"Eva Vision Powder", note:"Herbal powder", img:"eva-vision-powder.webp", w:900, h:363, p:"₦4000", u:"All eye related diseases", d:"One spoon with warm water after food, morning and night every day"},
  {name:"S1 Cough Syrup", note:"Herbal syrup", img:"s1-cough-syrup.webp", w:900, h:363, p:"₦2000"},
  {name:"AS1 Herbal Liquid", note:"Herbal liquid", img:"as1-herbal-liquid.webp", w:900, h:363, p:"₦2000", u:"Any kind of cough related issues", d:"Quarter of a glass cup morning and night every day before food"},
  {name:"C2 Herbal Powder", note:"Herbal powder", img:"c2-herbal-powder.webp", w:900, h:363, p:"₦4000", u:"Builds up the immune system and helps control blood pressure", d:"One teaspoon morning and night every day"},
  {name:"Hermo-P Liquid", note:"Herbal liquid", img:"hermo-p-liquid.webp", w:900, h:363, p:"₦2000", u:"Pile, hemorrhoid, waist pain, back pain, stomach noise, stomach trouble, menstrual pain", d:"Quarter of a glass cup morning and night every day before food"},
  {name:"Hermo-P Capsules", note:"Herbal capsules", img:"hermo-p-capsules.webp", w:900, h:363, p:"₦7000", u:"Pile, hemorrhoid, waist pain, back pain, stomach noise, stomach trouble, menstrual pain", d:"3 or 4 capsules in the morning and night after food every day"},
  {name:"OG Herbal Powder", note:"Herbal powder", img:"og-herbal-powder.webp", w:900, h:363, p:"₦4000", u:"Ulcer treatment", d:"One teaspoon morning and night every day with warm water"},
  {name:"Eva Flusher Liquid", note:"Herbal liquid", img:"eva-flusher-liquid.webp", w:900, h:363, p:"₦3000", u:FLUSH, d:"Two tablespoons before or after food in the morning every day"}
];

var css=".det{display:block;width:100%;margin:8px 0 0;padding:10px 14px;border:0;border-radius:12px;background:var(--tint,#e8f5ec);color:var(--green,#1a8f4c);font:inherit;font-size:13px;font-weight:700;cursor:pointer}"+
".more{margin:8px 0 0;padding:12px 14px;border-radius:12px;background:var(--tint2,#fff1e6);font-size:13px;line-height:1.5}"+
".more[hidden]{display:none}"+
".more div{margin:0 0 8px}"+
".more div:last-child{margin:0}"+
".more b{display:block;font-size:11px;letter-spacing:.04em;text-transform:uppercase;color:var(--orange,#e8601c)}";
var st=document.createElement("style");st.textContent=css;document.head.appendChild(st);

function line(t,v){return "<div><b>"+t+"</b>"+v+"</div>"}

// Map product info by name for quick lookup during DOM iteration
var INFO={};
PRODUCTS.forEach(function(item){ INFO[item.name]=item; });

[].forEach.call(list.querySelectorAll(".pf"),function(card){
  var nameElement=card.querySelector(".tx b");
  if(!nameElement)return;
  var name=nameElement.textContent,d=INFO[name]||{},h="";
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
