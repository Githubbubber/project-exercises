// Application Logic (todo.js) handles todo creation and state.

import TodoItem from "../todo/TodoItemClass";
import Project from "../todo/ProjectClass";

const defaultProject = new Project('default');
const projects = [defaultProject];
let currentProject;

const storeTodoItem = (id, title, description, dueDate, priority = false) => {
    projects[currentProject].items.push(new TodoItem(id, title, description, dueDate, priority));
};

export default storeTodoItem;
