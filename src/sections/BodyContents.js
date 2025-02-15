import {
    htmlCopyulThirdEl,
    htmlCopyliFourthEl,
    htmlCopydivFifth1El,
    htmlCopydivFifth2El,
    htmlCopydivFifth5El,
    htmlCopydivFifth7El
} from "../content/assets/constants";

const getBodyContents = () => {
    const ulContainerEl = document.createElement('ul');
    const liFirstEl = document.createElement('li');
    const liSecEl = document.createElement('li');
    const ulThirdEl = document.createElement('ul');
    const liFourthEl = document.createElement('li');
    const liFifthEl = document.createElement('li');
    const h3Fifth1El = document.createElement('h3');
    const divFifth1El = document.createElement('div');
    const divFifth2El = document.createElement('div');
    const divFifth3El = document.createElement('div');
    const divFifth4El = document.createElement('div');
    const divFifth5El = document.createElement('div');
    const divFifth6El = document.createElement('div');
    const divFifth7El = document.createElement('div');

    liFirstEl.textContent = "Todo objects to be made from factories or constructors/classes";

    liSecEl.textContent = "Properties for todo objects";

    ulThirdEl.innerHTML = htmlCopyulThirdEl;

    liFourthEl.innerHTML = htmlCopyliFourthEl;

    h3Fifth1El.textContent = "Separation of logic into modules: The Application Logic (Data Layer) and the UI Logic (DOM Layer)";
    divFifth1El.innerHTML = htmlCopydivFifth1El;
    divFifth2El.innerHTML = htmlCopydivFifth2El;
    divFifth3El.innerHTML = "The edits (all Data Layer):<br />";
    divFifth4El.innerHTML = "The delete from archives (all Data Layer):<br /> <ul><li>delete a project/todo from the archive (removeTodo())</li></ul>";
    divFifth5El.innerHTML = htmlCopydivFifth5El;
    divFifth6El.innerHTML = "The archives (Data Layer for data archival and restoration, DOM Layer for display of archive and restore options):<br />";
    divFifth7El.innerHTML = htmlCopydivFifth7El;
    liFifthEl.appendChild(h3Fifth1El);
    liFifthEl.appendChild(divFifth1El);
    liFifthEl.appendChild(divFifth2El);
    liFifthEl.appendChild(divFifth3El);
    liFifthEl.appendChild(divFifth4El);
    liFifthEl.appendChild(divFifth5El);
    liFifthEl.appendChild(divFifth6El);
    liFifthEl.appendChild(divFifth7El);

    ulContainerEl.appendChild(liFirstEl);
    ulContainerEl.appendChild(liSecEl);
    ulContainerEl.appendChild(ulThirdEl);
    ulContainerEl.appendChild(liFourthEl);
    ulContainerEl.appendChild(liFifthEl);

    return ulContainerEl;
};

export default getBodyContents;
