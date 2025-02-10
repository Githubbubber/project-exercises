class Project {
    // Retrieve the count of all of the todo items from localStorage

    constructor(type) {
        this.type = type;
        this.todoItems = [];
    }

    addTodoItem(todoItem) {
        this.todoItems.push(todoItem);
    }

    removeTodoItem(todoItem) {
        this.todoItems = this.todoItems.filter(i => i !== todoItem);
    }

    getAllTodoItems() {
        return this.todoItems;
    }

    getTodoItem(id) {
        return this.todoItems.find(todoItem => todoItem.id === id);
    }
}

module.exports = Project;
