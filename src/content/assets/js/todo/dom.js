// UI/DOM Logic (dom.js) updates what the user sees on the screen
// The UI logic, or DOM layer 

import "../../css/todo.css";
import storeTodoItem from "./todo.js";

const showAddTodoItemSection = () => {
    const divEl = document.createElement('div');
    const headingEl = document.createElement('h1');
    headingEl.textContent = 'Todo List';

    const titleInputEl = document.createElement('input');
    titleInputEl.setAttribute('type', 'text');
    const descInputEl = document.createElement('input');
    descInputEl.setAttribute('type', 'text');
    const dueDateInputEl = document.createElement('input');
    dueDateInputEl.setAttribute('type', 'date');

    const priorityLabelEl = document.createElement('label');
    priorityLabelEl.setAttribute("for", "priority");
    const priorityInputEl = document.createElement('input');
    const prioritySpanEl = document.createElement('span');
    const priorityBREl = document.createElement('br');
    prioritySpanEl.textContent = 'Priority?';
    priorityInputEl.setAttribute("name", "priority");
    priorityInputEl.setAttribute('type', 'checkbox');
    priorityLabelEl.appendChild(priorityInputEl);
    priorityLabelEl.appendChild(prioritySpanEl);
    priorityLabelEl.appendChild(priorityBREl);

    const buttonEl = document.createElement('button');
    buttonEl.textContent = 'Add TodoItem';

    buttonEl.addEventListener('click', () => {
        storeTodoItem(projects[currentProject].items.length, titleInputEl.value, descInputEl.value, dueDateInputEl.value, priorityInputEl.checked);
    });

    divEl.appendChild(headingEl);
    divEl.appendChild(titleInputEl);
    divEl.appendChild(descInputEl);
    divEl.appendChild(dueDateInputEl);
    divEl.appendChild(priorityLabelEl);
    divEl.appendChild(buttonEl);

    document.getElementById('itemsList').appendChild(divEl);
};

const displayTodoInput = () => {
    // const input = document.getElementById('input');
    // const button = document.getElementById('button');

    // button.addEventListener('click', () => {
    //     storeTodoItem(projects[currentProject].items.length, input.value);
    //     displayTodoItems();
    // });
};

const displayTodoItems = () => {
    const todoList = document.getElementById("todo-list");
    todoList.innerHTML = ""; // Clear existing list

    TodoModule.getTodos().forEach((todo, index) => {
        const li = document.createElement("li");
        li.textContent = `${todo.title} - ${todo.priority}`;

        if (todo.completed) {
            li.style.textDecoration = "line-through";
        }

        todoList.appendChild(li);
    });
}

const displayTodoList = () => {
    const itemsListContainer = document.getElementById('itemsList');
    const pElement = document.createElement('p');
    const titleSpan = document.createElement('span');
    const delBtn = document.createElement('button');
    const currentTodoItemsList = projects[currentProject].getAllTodoItems();

    if (currentTodoItemsList.length < 1) {
        pElement.innerHTML = "<strong>To Do List:</strong> <br /><em>Currently empty. Please add items above.</em>";
        itemsListContainer.appendChild(pElement);
        return;
    }

    currentTodoItemsList.forEach(toDoProject => {
        toDoProject.forEach(item => {
            pElement.setAttribute('class', item.id);
            titleSpan.textContent = item.title;
            delBtn.textContent = 'Delete';
            delBtn.setAttribute('class', item.id);
            delBtn.addEventListener('click', (e) => {
                toDoProject.removeItem(item);

                let itemsToGrab = itemsListContainer.children;

                itemsToGrab.forEach(grabbedTodoItem => {
                    if (grabbedTodoItem.getAttribute("class") === item.id) {
                        itemsListContainer.removeChild(grabbedTodoItem);
                    }
                });

                displayTodoList();
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

    contentsDivEl.appendChild(displayTodoInput());
    contentsDivEl.appendChild(displayTodoList());
};

export default getTodo;