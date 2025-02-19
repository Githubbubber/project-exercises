/**
 * Retrieve the count of all of the todo items from localStorage
 * The application logic, or data layer
 */
class Project {
    constructor(title, description, notes) {
        this.title = title;
        this.description = description;
        this.notes = notes;
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
