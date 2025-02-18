import { getTheWhyHeader, getTheWhySection } from "./Why";
import { getTheWhatHeader, getTheWhatSection } from "./What";
import getBodyContents from "./BodyContents";

const bodyContentsToReplace = document.querySelector("#bodycontents");
const homepageSection = document.createElement("section");

homepageSection.setAttribute("id", "homepageContents");

const theWhyHeader = getTheWhyHeader();
const theWhySection = getTheWhySection();
const theWhatHeader = getTheWhatHeader();
const theWhatSection = getTheWhatSection();
const bodyContents = getBodyContents();

homepageSection.appendChild(theWhyHeader);
homepageSection.appendChild(theWhySection);
homepageSection.appendChild(theWhatHeader);
homepageSection.appendChild(theWhatSection);
homepageSection.appendChild(bodyContents);

if (bodyContentsToReplace) {
    bodyContentsToReplace.replaceWith(homepageSection);
}

document.body.appendChild(homepageSection);