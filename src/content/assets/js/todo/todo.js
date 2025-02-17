// Application Logic (todo.js) handles todo creation and state.
// The application logic, or data layer 

import TodoItem from "./TodoItemClass";
import Project from "./ProjectClass";

const defaultProject = new Project('default');
const projects = [defaultProject];
let currentProject;

const storeTodoItem = (id, title, description, dueDate, priority = false) => {
    projects[currentProject].items.push(new TodoItem(id, title, description, dueDate, priority));
};

export default storeTodoItem;
