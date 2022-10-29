// Header stuff
const headerEl = document.createElement("header");
const h1El = document.createElement("h1");
const imgEl = document.createElement("img");
const spanForH1 = document.createElement("span");
const pDescEl = document.createElement("p");

imgEl.setAttribute("src", "../img/icon.png");
imgEl.setAttribute("alt", "Icon");
spanForH1.textContent = "Restaurant";
pDescEl.textContent = "A lively, Barcelona-inspired tapas bar serving Spanish classics, seasonal specials, and curated cocktails in a vibrant and contemporary space.";

h1El.appendChild(imgEl);
h1El.appendChild(spanForH1);

headerEl.appendChild(h1El);
headerEl.appendChild(pDescEl);

// Main stuff
const mainEl = document.createElement("main");
const h2El = document.createElement("h2");
const navEl = document.createElement("nav");
const ulEl = document.createElement("ul");
const liAppsEl = document.createElement("li");
liAppsEl.textContent = "Appetizers";
const liEntreesEl = document.createElement("li");
liEntreesEl.textContent = "Entrees";
const liDessertsEl = document.createElement("li");
liDessertsEl.textContent = "Desserts";
// First tab
const pAppsEl = document.createElement("p");
pAppsEl.innerHTML = "Sticky Baked Chicken Wings<br />Crab Cakes with Horseradish Cream<br />Caramelized Onion Dip<br />Deviled Eggs With Country Ham<br />Hogs in a Blanket<br />Baked Buffalo Chicken Wings<br />Fried Pickles with Spicy Mayonnaise<br />Brioche Crab Melts.";
// Second tab
const pEntreesEl = document.createElement("p");
pEntreesEl.innerHTML = "Hot Dog from Nathan's Famous in Coney Island.<br />Bagel from Bagel Hole in Park Slope.<br />Porter House from Peter Luger Steak House in Williamsburg.<br />Fried Calamari at Randazzo's Clam Bar in Sheepshead Bay.<br />Italian Biscotti from Court Pastry in Carroll Gardens.";
// Third tab
const pDessertsEl = document.createElement("p");
pDessertsEl.innerHTML = "Chocolate Chip Cookies<br />Chocolate Brownies<br />Chocolate Cake<br />            Chocolate Mousse<br />Chocolate Ice Cream<br />            Chocolate Milkshake<br />Chocolate Fondue<br />Chocolate Truffles";

h2El.textContent = "Menu";

ulEl.appendChild(liAppsEl);
ulEl.appendChild(liEntreesEl);
ulEl.appendChild(liDessertsEl);
navEl.appendChild(ulEl);

mainEl.appendChild(h2El);
mainEl.appendChild(navEl);
mainEl.appendChild(pAppsEl);
mainEl.appendChild(pEntreesEl);
mainEl.appendChild(pDessertsEl);

// Footer stuff
const footerEl = document.createElement("footer");
const pFooterMsgEl = document.createElement("p");

pFooterMsgEl.innerHTML = "<strong><em>Thanks!</em></strong>";
footerEl.appendChild(pFooterMsgEl);

// For "index.js"
const pageBody = document.getElementById("content");
const firstHREl = document.createElement("hr");
const lastHREl = document.createElement("hr");

pageBody.appendChild(headerEl);
pageBody.appendChild(firstHREl);
pageBody.appendChild(mainEl);
pageBody.appendChild(lastHREl);
pageBody.appendChild(footerEl);