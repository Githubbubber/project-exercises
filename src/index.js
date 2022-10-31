import _ from "lodash";

import getHeading from "./sections/Heading";
import { getTheWhyHeader, getTheWhySection } from "./sections/Why";
import { getTheWhatHeader, getTheWhatSection } from "./sections/What";
import getFooter from "./sections/Footer";
import "./general-styles.css";

function component() {
    const contentsDivEl = document.getElementById('contents');

    const heading = getHeading();
    const theWhyHeader = getTheWhyHeader();
    const theWhySection = getTheWhySection();
    const theWhatHeader = getTheWhatHeader();
    const theWhatSection = getTheWhatSection();
    const footer = getFooter();

    contentsDivEl.appendChild(heading);
    contentsDivEl.appendChild(theWhyHeader);
    contentsDivEl.appendChild(theWhySection);
    contentsDivEl.appendChild(theWhatHeader);
    contentsDivEl.appendChild(theWhatSection);
    contentsDivEl.appendChild(footer);

    return contentsDivEl;
}

document.body.appendChild(component());
