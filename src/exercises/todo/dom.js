// UI/DOM Logic (dom.js) updates what the user sees on the screen

const getTodo = () => {
    const contentsDivEl = document.getElementById("contents");

    contentsDivEl.childNodes.forEach((child) => {
        child.remove();
    });

    contentsDivEl.appendChild(displayTodoInput());
    contentsDivEl.appendChild(displayTodoList());
};

export default getTodo;