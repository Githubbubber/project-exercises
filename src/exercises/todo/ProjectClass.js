class Project {
    constructor(type) {
        this.type = type;
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem(item) {
        this.items = this.items.filter(i => i !== item);
    }

    getAllItems() {
        return this.items;
    }

    getItem(id) {
        return this.items.find(item => item.id === id);
    }
}

module.exports = Project;
