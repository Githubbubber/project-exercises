import _ from "lodash";
import "./css/general-styles.css";

function component() {
    const element = document.createElement("div");

    element.innerHTML = "Thanks for visiting!";

    return element;
}

document.body.appendChild(component());
