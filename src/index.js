import _ from "lodash";
import "./content/assets/style.css";

import getHeading from "./sections/Heading";
import { getTheWhyHeader, getTheWhySection } from "./sections/Why";
import { getTheWhatHeader, getTheWhatSection } from "./sections/What";
import getBodyContents from "./sections/BodyContents";
import getFooter from "./sections/Footer";

function component() {
    const contentsDivEl = document.createElement('div');

    const heading = getHeading();
    const theWhyHeader = getTheWhyHeader();
    const theWhySection = getTheWhySection();
    const theWhatHeader = getTheWhatHeader();
    const theWhatSection = getTheWhatSection();
    const bodyContents = getBodyContents();
    const footer = getFooter();

    contentsDivEl.appendChild(heading);
    contentsDivEl.appendChild(theWhyHeader);
    contentsDivEl.appendChild(theWhySection);
    contentsDivEl.appendChild(theWhatHeader);
    contentsDivEl.appendChild(theWhatSection);
    contentsDivEl.appendChild(bodyContents);
    contentsDivEl.appendChild(footer);

    return contentsDivEl;
}

document.body.appendChild(component());
