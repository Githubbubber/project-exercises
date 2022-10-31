const getTheWhatHeader = () => {
    const h2WhatEl = document.createElement('h2');
    h2WhatEl.textContent = "The what...";

    return h2WhatEl;
};

const getTheWhatSection = () => {
    const theWhatSectionEl = document.createElement('section');
    const firstWhatPEl = document.createElement('p');
    const firstWhatTextNode = "You can find my revisiting the various FCC exercises with the following pages:";
    const firstWhatULEl = document.createElement('ul');
    firstWhatULEl.innerHTML = `<li><a href="./pages/cats.html">A Page Dedicated to Cats</a></li>
<li><a href="./pages/cats2.html">Another Page Dedicated to Cats</a></li>
<li><a href="./pages/coffee-shop.html">Camper Cafe</a></li>
<li><a href="./pages/markers.html">CSS Color Markers</a></li>
<li><a href="./pages/form.html">A pretty Html Form</a></li>
<li><a href="./pages/rothko.html">Rothko Painting Creation</a></li>
<li><a href="./pages/nutrition-label.html">US Nutrition Label</a></li>
<li><a href="./pages/accessible-quiz.html">Accessible Quiz</a></li>
<li><a href="./pages/balance-sheet.html">A Balance Sheet</a></li>
<li><a href="./pages/picasso.html">A Picasso-Inspired Painting</a></li>
<li><a href="./pages/piano.html">freeCodeCamp Piano</a></li>
<li><a href="./pages/city.html">City... Resize to see day to night</a></li>
<li><a href="./pages/magazine.html">Bored? Read a freeCodeCamp Magazine</a></li>
<li><a href="./pages/ferris-wheel.html">A Fun Ferris Wheel Animation</a></li>
<li><a href="./pages/penguin.html">Penguin Animation</a></li>
<li><a href="./pages/admin-dashboard2.html">Admin Dashboard</a> and <a href="./pages/admin-dashboard.html"></a>the first attempt</li>`;
    const secondWhatPEl = document.createElement('p');
    const secondWhatTextNode = "You can find my work for exercises from The Odin Project here:";
    const secondWhatULEl = document.createElement('ul');
    secondWhatULEl.innerHTML = `<li><a href="./pages/example.html">Generic Example Page</a> | </li>
    <li><a href="./pages/calculator.html">Calculator</a> | </li>
    <li><a href="./pages/tictactoe.html">Tic Tac Toe</a> | </li>
    <li><a href="./pages/restaurant.html">A Restaurant Page</a></li>`;

    firstWhatPEl.appendChild(document.createTextNode(firstWhatTextNode));
    firstWhatPEl.appendChild(firstWhatULEl);

    secondWhatPEl.appendChild(document.createTextNode(secondWhatTextNode));
    secondWhatPEl.appendChild(secondWhatULEl);

    theWhatSectionEl.appendChild(firstWhatPEl);
    theWhatSectionEl.appendChild(secondWhatPEl);

    return theWhatSectionEl;
};

module.exports = {
    getTheWhatHeader,
    getTheWhatSection
};
