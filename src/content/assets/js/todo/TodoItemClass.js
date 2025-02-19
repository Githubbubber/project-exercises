/** The application logic, or data layer 
 * Possible values
 * categories: "fun", "work", "school", "errand", or "other" (default)
 * priority: 1, 2, 3, or 4 (default)
 * status: "to-do" (default), "doing", "done"
 */
class TodoItem {
    constructor(id, title, description, dueDate, categories = "other", priority = 4, notes = null, status = "to do", project = "default") {
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.categories = categories;
        this.priority = priority;
        this.notes = notes;
        this.status = status;
        this.project = project;
    }

    getTitle() { return this.title; }

    getDesc() { return this.description; }

    getDueDate() { return this.dueDate; }

    getNotes() { return this.notes; }

    getProjectInfo() { return this.projectInfo; }

    getCategories() { return this.categories; }

    getPriority() { return this.priority; }

    getCompletedStatus() { return this.completedStatus; }

    getIsTagged() { return this.isTagged; }

    setTitle(title) { this.title = title; }

    setDescription(description) { this.description = description; }

    setDueDate(dueDate) { this.dueDate = dueDate; }

    setPriority(priority) { this.priority = priority; }

    setCompleteStatus(status) { this.status = status; }
}

module.exports = TodoItem;
