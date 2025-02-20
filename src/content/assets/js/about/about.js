import { getTheWhyHeader, getTheWhySection } from "./Why";
import { getTheWhatHeader, getTheWhatSection } from "./What";

const bodyContents = document.querySelector("#bodyContents");
const aboutSection = document.createElement("section");

const theWhyHeader = getTheWhyHeader();
const theWhySection = getTheWhySection();
const theWhatHeader = getTheWhatHeader();
const theWhatSection = getTheWhatSection();

aboutSection.setAttribute("id", "aboutSection");
aboutSection.appendChild(theWhyHeader);
aboutSection.appendChild(theWhySection);
aboutSection.appendChild(theWhatHeader);
aboutSection.appendChild(theWhatSection);

if (bodyContents) {
    while (bodyContents.firstChild) {
        bodyContents.removeChild(bodyContents.firstChild);
    }

    bodyContents.appendChild(aboutSection);
} else document.body.appendChild(aboutSection);