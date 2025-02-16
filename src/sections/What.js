import { firstWhatNames } from "../content/assets/constants";

const getTheWhatHeader = () => {
    const h2WhatEl = document.createElement('h2');
    h2WhatEl.textContent = "The what...";

    return h2WhatEl;
};

const getTheWhatSection = () => {
    const pageDirectory = "./content/pages/";
    let firstItem = 0, secondItem = 0;

    const theWhatSectionEl = document.createElement('section');
    const firstWhatPEl = document.createElement('p');
    const firstWhatTextNode = "You can find my revisiting the various FCC projects with the following pages:";
    const firstWhatULEl = document.createElement('ul');

    const firstWhatNamesLen = firstWhatNames.length;

    do {
        const firstWhatLi = document.createElement('li');
        const firstWhatText = document.createTextNode(" | ");
        const firstWhatA = document.createElement('a');
        firstWhatA.setAttribute('href', firstWhatNames[firstItem][0]);
        firstWhatA.textContent = firstWhatNames[firstItem][1];

        firstWhatLi.appendChild(firstWhatA);
        firstWhatLi.appendChild(firstWhatText);

        firstWhatULEl.appendChild(firstWhatLi);

        firstItem++;
    } while (firstItem < firstWhatNamesLen);

    const lastFirstWhatLi = document.createElement('li');
    lastFirstWhatLi.innerHTML = "<a href='./pages/admin-dashboard2.html'>Admin Dashboard</a> and <a href='./pages/admin-dashboard.html'>the first attempt</a>";

    firstWhatULEl.appendChild(lastFirstWhatLi);

    const secondWhatNames = [
        ["example.html", "Generic Example Page"],
        ["calculator.html", "Calculator"],
        ["tictactoe.html", "Tic Tac Toe"],
        ["todo.html", "A Todo List"],
    ];

    const secondWhatNamesLen = secondWhatNames.length;

    const secondWhatPEl = document.createElement('p');
    const secondWhatTextNode = "You can find my work for projects from The Odin Project here:";
    const secondWhatULEl = document.createElement('ul');

    do {
        const secondWhatLi = document.createElement('li');
        const secondWhatText = document.createTextNode(" | ");
        const secondWhatA = document.createElement('a');
        secondWhatA.setAttribute('href', secondWhatNames[secondItem][0]);
        secondWhatA.textContent = secondWhatNames[secondItem][1];

        secondWhatLi.appendChild(secondWhatA);
        secondWhatLi.appendChild(secondWhatText);

        secondWhatULEl.appendChild(secondWhatLi);

        secondItem++;
    } while (secondItem < secondWhatNamesLen);

    const lastSecondWhatLi = document.createElement('li');
    lastSecondWhatLi.innerHTML = "<a href='./pages/restaurant.html'>A Restaurant Page</a>";

    secondWhatULEl.appendChild(lastSecondWhatLi);

    firstWhatPEl.appendChild(document.createTextNode(firstWhatTextNode));
    firstWhatPEl.appendChild(firstWhatULEl);

    secondWhatPEl.appendChild(document.createTextNode(secondWhatTextNode));
    secondWhatPEl.appendChild(secondWhatULEl);

    theWhatSectionEl.appendChild(firstWhatPEl);
    theWhatSectionEl.appendChild(secondWhatPEl);

    return theWhatSectionEl;
};

export {
    getTheWhatHeader,
    getTheWhatSection
};
