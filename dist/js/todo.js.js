class Item {
    constructor(id, title, description, dueDate, priority) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    getItem() {
        return this;
    }

    setItem(id, title, description, dueDate, priority) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

class Project {
    constructor(type) {
        this.type = type;
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem(item) {
        this.items = this.items.filter(i => i !== item);
    }

    getAllItems() {
        return this.items;
    }

    getItem(id) {
        return this.items.find(item => item.id === id);
    }
}

const defaultProject = new Project('default');
const projects = [defaultProject]; //"default"
let currentProject;

const storeItem = (id, title, description, dueDate, priority) => {
    projects[currentProject].items.push(new Item(id, title, description, dueDate, priority));
};

const displayItems = () => {
    projects[currentProject].items.forEach(item => {
        console.log(item.title);
    });
};

const displayList = () => {
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

                displayList();
            });

            pElement.appendChild(titleSpan);
            pElement.appendChild(delBtn);

            itemsListContainer.appendChild(pElement);
        });
    });
};

const inputListener = () => {
    // const input = document.getElementById('input');
    // const button = document.getElementById('button');

    // button.addEventListener('click', () => {
    //     storeItem(projects[currentProject].items.length, input.value);
    //     displayItems();
    // });
};

displayList();
