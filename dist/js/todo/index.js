import { StorageManager } from "./components/Storage";
import Item from "/src/exercises/todo/TodoItemClass";

const storageManager = new StorageManager();

document.addEventListener("DOMContentLoaded", () => {
    const storedProjects = storageManager.getStoredProjects();

    // Render out the list of project titles and other info
    return storedProjects;
});

document.getElementById("get-project-todos").addEventListener("click", (e) => {
    const storedProject = storageManager.getStoredProjects(e.target.value);
    
    return storedProject.getTodos();
});

document.getElementById("add-todo").addEventListener("click", () => {
    const title = document.getElementById("todo-title").value;
    const priority = document.getElementById("todo-priority").value;

    TodoModule.addTodo(title, priority);
    DOMModule.renderTodos();
});
