const getHeading = () => {
    const h1El = document.createElement('h1');
    h1El.textContent = "Details on this page";

    return h1El;
};

module.exports = getHeading;
