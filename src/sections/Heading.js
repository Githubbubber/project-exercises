import { firstWhatNames } from "../content/assets/js/etc/constants";

const getHeading = () => {
    const headingEl = document.createElement('heading');
    const h1El = document.createElement("h1");
    const navEl = document.createElement("nav");
    const ulEl = document.createElement("ul");

    h1El.textContent = "Here are the pages for my FCC and TOP work:";

    firstWhatNames.forEach(page => {
        const liEl = document.createElement("li");
        const aEl = document.createElement("a");

        aEl.setAttribute("href", page[0]);
        aEl.textContent = page[1];

        liEl.appendChild(aEl);

        ulEl.appendChild(liEl);
    });

    navEl.appendChild(ulEl)
    headingEl.appendChild(h1El);
    headingEl.appendChild(navEl);

    return headingEl;
};

export default getHeading;
