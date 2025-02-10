document.getElementById("add-todo").addEventListener("click", () => {
    const title = document.getElementById("todo-title").value;
    const priority = document.getElementById("todo-priority").value;

    TodoModule.addTodo(title, priority);
    DOMModule.renderTodos();
});
