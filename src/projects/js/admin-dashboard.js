"use strict";

let allCards = document.getElementById("cards");
let catFactsURL = "https://catfact.ninja/facts?limit=6";
let catFacts;

fetch(catFactsURL)
.then(response => response.json())
.then(data => {
    catFacts = data.data;
    
    for (let x = 0; x <= 5; x++) {
        let card = document.createElement("div");
        let cardStrong = document.createElement("strong");
        let cardP = document.createElement("p");
        let cardIcon1 = document.createElement("i");
        let cardIcon2 = document.createElement("i");
        let cardIcon3 = document.createElement("i");

        cardStrong.textContent = `Cat fact #${x + 1}`;
        cardP.textContent = catFacts[x].fact;
        cardIcon1.setAttribute("class", "fa fa-battery-empty");
        cardIcon2.setAttribute("class", "fa fa-battery-half");
        cardIcon3.setAttribute("class", "fa fa-battery-full");

        card.appendChild(cardStrong);
        card.appendChild(cardP);
        card.appendChild(cardIcon1);
        card.appendChild(cardIcon2);
        card.appendChild(cardIcon3);

        allCards.appendChild(card);
    }
})
.catch(err => console.log(err));