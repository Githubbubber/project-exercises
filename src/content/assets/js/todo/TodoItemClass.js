class TodoItem {
    // Retrieve the count of all of the todo items from localStorage
    // The application logic, or data layer 

    constructor(id, title, description, dueDate, priority) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = false;
    }

    getTitle() { return this.title; }

    getDesc() { return this.description; }

    getDueDate() { return this.dueDate; }

    getNotes() { return this.notes; }

    getProjectInfo() { return this.projectInfo; }

    // "fun", "work", "school", "errand", or "other"
    getCategories() { return this.categories; }

    // 1, 2, 3, or 4
    getPriority() { return this.priority; }

    // "to-do", "doing", "done"
    getDoingStage() { return this.doingStage; }

    getIsTagged() { return this.isTagged; }

    setTitle(title) { this.title = title; }

    setDesc(description) { this.description = description; }

    setDueDate(dueDate) { this.dueDate = dueDate; }

    setPriority(priority) { this.priority = priority; }

    setCompleteStatus(status) { this.completed = status; }
}

module.exports = TodoItem;
