"use strict";

let homeLink, homeHeader, homeNav;
let fccBody = document.getElementById("fcc-body");

homeLink = document.createElement("a");
homeNav = document.createElement("nav");
homeHeader = document.createElement("header");

if (window.location.href.indexOf("githubbubber") !== -1) {
    homeLink.setAttribute("href", "/freecodecamp-exercises");
} else {
    homeLink.setAttribute("href", "/");
}

homeLink.textContent = "Home";

homeNav.appendChild(homeLink);

homeHeader.appendChild(homeNav);

if (fccBody?.children[0]?.children[0]?.nodeName === "HEADER") {
    fccBody.children[0].children[0].prepend(homeLink)
} else fccBody.prepend(homeHeader);
