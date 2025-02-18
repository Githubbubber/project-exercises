import _ from "lodash";
import "./content/assets/css/style.css";

import getHeading from "./sections/Heading";
import getFooter from "./sections/Footer";

// Note: bodySection will be swapped out with page contents when navigated to.
// This will prevent content bodySection may still have from being loaded
function component() {
    const contentsDivEl = document.createElement('div');
    const bodySection = document.createElement("section");

    const heading = getHeading();
    const footer = getFooter();

    bodySection.setAttribute("id", "bodyContents");

    contentsDivEl.appendChild(heading);
    contentsDivEl.appendChild(bodySection);
    contentsDivEl.appendChild(footer);

    return contentsDivEl;
}

document.body.appendChild(component());
