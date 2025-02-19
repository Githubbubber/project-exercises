import { allFCCProjects, allTOPProjects } from "../content/assets/js/etc/constants";

const getHeading = () => {
    const homeIcon = document.createElement("img");
    const homeAEl = document.createElement("a");
    const aboutDivEl = document.createElement("div");
    const aboutAEl = document.createElement("a");
    const aboutACopy = "About this Site";
    const headingEl = document.createElement('heading');
    const h1El = document.createElement("h1");
    const navEl = document.createElement("nav");
    const ulEl = document.createElement("ul");

    homeIcon.setAttribute("src", "/"); // src/content/assets/icon.jpg
    homeIcon.setAttribute("alt", "Home page of app");
    homeAEl.setAttribute("href", "/");
    homeAEl.appendChild(homeIcon);

    aboutAEl.setAttribute("href", "about.html");
    aboutAEl.textContent = aboutACopy;
    aboutDivEl.appendChild(aboutAEl);

    h1El.textContent = "Here are the pages for my FCC and TOP work:";

    [...allFCCProjects, ...allTOPProjects].forEach(page => {
        const liEl = document.createElement("li");
        const aEl = document.createElement("a");

        aEl.setAttribute("href", page[0]);
        aEl.textContent = page[1];

        liEl.appendChild(aEl);

        ulEl.appendChild(liEl);
    });

    navEl.appendChild(ulEl)
    headingEl.appendChild(homeAEl);
    headingEl.appendChild(aboutDivEl);
    headingEl.appendChild(h1El);
    headingEl.appendChild(navEl);

    return headingEl;
};

export default getHeading;
