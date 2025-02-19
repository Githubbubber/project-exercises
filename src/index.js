import _ from "lodash";
import "./content/assets/css/style.css";
import getHeading from "./sections/Heading";
import getFooter from "./sections/Footer";

/** 
 * Note: bodySection will be swapped out with page contents when navigated to. 
 * This will prevent content bodySection may still have from being loaded
 */
const bodySection = document.createElement("section");

const heading = getHeading();
const footer = getFooter();

bodySection.setAttribute("id", "bodyContents");

document.body.appendChild(heading);
document.body.appendChild(bodySection);
document.body.appendChild(footer);
