const getTheWhyHeader = () => {
    const h2WhyEl = document.createElement('h2');
    h2WhyEl.textContent = "The why...";

    return h2WhyEl;
};

const getTheWhySection = () => {
    const theWhySectionEl = document.createElement('section');

    const firstPEl = document.createElement('p');
    firstPEl.innerHTML = `I've been on <a href="https://www.freecodecamp.org/">freeCodeCamp</a> for years and finally completed the <a href="https://freecodecamp.org/certification/fcc7e900e6b-eb32-46b8-b03d-da1cdab905c1/responsive-web-design">Legacy Responsive Web Design</a> and the Responsive Web Design</a> certification.`;
    const secondPEl = document.createElement('p');
    secondPEl.innerHTML = 'I love completing things and want to complete FCC, <a href="https://www.theodinproject.com/">The Odin Project</a>, and <a href="https://www.khanacademy.org/math">Khan Academy\'s math modules</a> in my free time.';
    const thirdPEl = document.createElement('p');
    thirdPEl.textContent = "It's a LOT. I know.";

    theWhySectionEl.appendChild(firstPEl);
    theWhySectionEl.appendChild(secondPEl);
    theWhySectionEl.appendChild(thirdPEl);

    return theWhySectionEl;
};

export {
    getTheWhyHeader,
    getTheWhySection
};
