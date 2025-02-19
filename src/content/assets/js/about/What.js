import { allFCCProjects, allTOPProjects } from "../etc/constants";

const getTheWhatHeader = () => {
    const h2WhatEl = document.createElement('h2');
    h2WhatEl.textContent = "The what...";

    return h2WhatEl;
};

const getTheWhatSection = () => {
    let firstItem = 0, secondItem = 0;

    const theWhatSectionEl = document.createElement('section');
    const fccPEl = document.createElement('p');
    const fccTextNode = "You can find my revisiting the various FCC projects with the following pages:";
    const fccULEl = document.createElement('ul');

    do {
        const fccLi = document.createElement('li');
        const fccText = document.createTextNode(" | ");
        const fccA = document.createElement('a');
        fccA.setAttribute('href', allFCCProjects[firstItem][0]);
        fccA.textContent = allFCCProjects[firstItem][1];

        fccLi.appendChild(fccA);
        fccLi.appendChild(fccText);

        fccULEl.appendChild(fccLi);

        firstItem++;
    } while (firstItem < allFCCProjects.length);

    const lastFCCLi = document.createElement('li');
    lastFCCLi.innerHTML = "<a href='admin-dashboard2.html'>Admin Dashboard</a> and <a href='admin-dashboard.html'>the first attempt</a>";

    fccULEl.appendChild(lastFCCLi);

    const topPEl = document.createElement('p');
    const topTextNode = "You can find my work for projects from The Odin Project here:";
    const topULEl = document.createElement('ul');

    do {
        const topLi = document.createElement('li');
        const topText = document.createTextNode(" | ");
        const topA = document.createElement('a');
        topA.setAttribute('href', allTOPProjects[secondItem][0]);
        topA.textContent = allTOPProjects[secondItem][1];

        topLi.appendChild(topA);
        topLi.appendChild(topText);

        topULEl.appendChild(topLi);

        secondItem++;
    } while (secondItem < allTOPProjects.length);

    const lasttopLi = document.createElement('li');
    lasttopLi.innerHTML = "<a href='restaurant.html'>A Restaurant Page</a>";

    topULEl.appendChild(lasttopLi);

    fccPEl.appendChild(document.createTextNode(fccTextNode));
    fccPEl.appendChild(fccULEl);

    topPEl.appendChild(document.createTextNode(topTextNode));
    topPEl.appendChild(topULEl);

    theWhatSectionEl.appendChild(fccPEl);
    theWhatSectionEl.appendChild(topPEl);

    return theWhatSectionEl;
};

export {
    getTheWhatHeader,
    getTheWhatSection
};
