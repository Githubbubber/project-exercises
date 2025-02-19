import { getTheWhyHeader, getTheWhySection } from "./Why";
import { getTheWhatHeader, getTheWhatSection } from "./What";

const bodyContentsToReplace = document.querySelector("#bodyContents");
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

if (bodyContentsToReplace) {
    bodyContentsToReplace.replaceWith(aboutSection);
}

document.body.appendChild(aboutSection);