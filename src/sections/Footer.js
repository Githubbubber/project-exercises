const getFooter = () => {
    const footerEl = document.createElement('footer');
    const pEl = document.createElement('p');
    pEl.textContent = "Thanks for visiting!";

    footerEl.appendChild(pEl);

    return footerEl;
};

export default getFooter;
