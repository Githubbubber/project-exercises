import Item from "../todo/ItemClass";
import Project from "../todo/ProjectClass";

const defaultProject = new Project('default');
const projects = [defaultProject];
let currentProject;

const storeItem = (id, title, description, dueDate, priority) => {
    projects[currentProject].items.push(new Item(id, title, description, dueDate, priority));
};

const displayToDoInput = () => {
    // const input = document.getElementById('input');
    // const button = document.getElementById('button');

    // button.addEventListener('click', () => {
    //     storeItem(projects[currentProject].items.length, input.value);
    //     displayItems();
    // });
};

const displayItems = () => {
    projects[currentProject].items.forEach(item => {
        console.log(item.title);
    });
};

const displayToDoList = () => {
    const itemsListContainer = document.getElementById('itemsList');
    const pElement = document.createElement('p');
    const titleSpan = document.createElement('span');
    const delBtn = document.createElement('button');
    const currentToDoItemsList = projects[currentProject].getAllItems();

    currentToDoItemsList.forEach(toDoProject => {
        toDoProject.forEach(item => {
            pElement.setAttribute('class', item.id);
            titleSpan.textContent = item.title;
            delBtn.textContent = 'Delete';
            delBtn.setAttribute('class', item.id);
            delBtn.addEventListener('click', (e) => {
                toDoProject.removeItem(item);

                let itemsToGrab = itemsListContainer.children;

                itemsToGrab.forEach(grabbedItem => {
                    if (grabbedItem.getAttribute("class") === item.id) {
                        itemsListContainer.removeChild(grabbedItem);
                    }
                });

                displayToDoList();
            });

            pElement.appendChild(titleSpan);
            pElement.appendChild(delBtn);

            itemsListContainer.appendChild(pElement);
        });
    });


};

const getTodo = () => {
    const contentsDivEl = document.getElementById("contents");

    contentsDivEl.childNodes.forEach((child) => {
        child.remove();
    });

    contentsDivEl.appendChild(displayToDoInput());
    contentsDivEl.appendChild(displayToDoList());
};

module.exports = getTodo;
