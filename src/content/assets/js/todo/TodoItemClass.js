class Item {
    // Retrieve the count of all of the todo items from localStorage

    constructor(id, title, description, dueDate, priority) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = false;
    }
    
    setCompleteStatus(status) {
        this.completed = status;
    }

    getTitle() {
        return this.title;
    }

    getDesc() {
        return this.description;
    }

    getDueDate() {
        return this.dueDate;
    }

    getPriority() {
        return this.priority;
    }

    setTitle(title) {
        this.title = title;
    }

    setDesc(description) {
        this.description = description;
    }

    setDueDate(dueDate) {
        this.dueDate = dueDate;
    }

    setPriority(priority) {
        this.priority = priority;
    }
}

module.exports = Item;
