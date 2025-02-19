// Application Logic (todo.js) handles todo creation and state.
// The application logic, or data layer 

import TodoItem from "./TodoItemClass";
import Project from "./ProjectClass";

const retrieveProjects = () => {
    const allProjects = localStorage.getItem("projects");
    const parsedProjects = allProjects ? JSON.parse(allProjects) : {
        default: {
            title: "Default",
            description: "The default project",
            todoArray: [],
            notes: null
        }
    };

    return parsedProjects;
};

const retrieveTodos = () => {
    const allTodos = localStorage.getItem("todos");
    const parsedTodos = allTodos ? JSON.parse(allTodos) : [];

    return parsedTodos;
};

/**
 * @param {string} item 
 * @param {(object|Array<object>)} parsedItem 
 */
const setItemIntoLS = (item, parsedItem) => {
    const stringifiedData = JSON.stringify(parsedItem);

    localStorage.setItem(item, stringifiedData);
};

/**
 * The first thing that is made is always a default project.
 * All subsequent todo items are assigned to it until the user moves it elsewhere.
 * 
 * @param {string} title 
 * @param {string} description 
 * @param {string} notes 
 */
const createProject = (title, description, notes) => {
    const createdProject = new Project(title, description, notes);
    const parsedProjects = retrieveProjects();

    parsedProjects[title] = createdProject;
    setItemIntoLS("projects", parsedProjects);
};

/**
 * Required: title, description, dueDate
 * Optional: categories = "other", priority = 4, notes = null, status = "to do", project = "default"
 * 
 * @param {string} title 
 * @param {string} description 
 * @param {string} dueDate 
 * @param {string} categories 
 * @param {number} priority 
 * @param {string} notes 
 * @param {string} status 
 * @param {string} project 
 */
const createTodoItem = (title, description, dueDate, categories, priority, notes, status, project) => {
    try {
        const parsedProjects = retrieveProjects();
        const projectsCount = parsedProjects.length;
        const id = projectsCount + 1;
        const newTodoItem = new TodoItem(id, title, description, dueDate, categories, priority, notes, status, project);
        const parsedTodos = retrieveTodos();

        parsedTodos.push(newTodoItem);
        setItemIntoLS("todos", parsedTodos);

        parsedProjects[project]["todoArray"].push(id);
        setItemIntoLS("projects", parsedProjects);
    } catch (e) {
        throw new Error("Please try again: " + e)
    }
};

/** Pulling up all todo info: id (param), title, due date, status, categories, 
 * description, associated project, priority, and notes
 * Todos will be an array of objects. Each object will be a todo item.
 * 
 *  Ex: 
 *      todos: [{
 *          id: 0,
 *          title: "Test",
 *          description: "Test",
 *          dueDate: "January 1, 2024 05:30 pm",
 *          status: "doing",
 *          categories: "work",
 *          parentProject: 1,
 *          priority: 4,
 *          notes: null
 *      }, {
 *          id: 1,
 *          title: "First",
 *          description: "The first todo item",
 *          dueDate: "January 1, 2024 05:30 pm",
 *          status: "doing",
 *          categories: "work",
 *          parentProject: 1,
 *          priority: 4,
 *          notes: null
 *      },{
 *          id: 2,
 *          title: "Second",
 *          description: "The second todo item",
 *          dueDate: "January 2, 2024 05:30 pm",
 *          status: "done",
 *          categories: "school",
 *          parentProject: 1,
 *          priority: 3,
 *          notes: "The default project will have these two items"
 *      }]
 * 
 * @param (*) todoID
 */
const viewTodoItem = (todoID) => {
    const allTodoItems = retrieveTodos();

    return allTodoItems(todoID);
};

/** Pulling up all project info: title, description, its
 * associated todos, and notes
 * Projects will be an array of objects. Each object will be a project.
 * 
 *  Ex: 
 *      projects: {
 *          default: {
 *              title: "Default",
 *              description: "The default project",
 *              todoArray: [1, 2],
 *              notes: null
 *          },
 *          "Classroom Lessons": {
 *              title: "Classroom Lessons",
 *              description: "The classroom lessons",
 *              todoArray: [],
 *              notes: "This project has no items for now"
 *          }
 *      }
 */
const viewProjectItem = (projectID) => {
    const allProjects = retrieveProjects();

    return allProjects[projectID];
};

export {
    createTodoItem,
    createProject,
    viewTodoItem,
    viewProjectItem
};
