const htmlCopyulThirdEl = "<li>title</li>" +
    "<li>description</li>" +
    "<li>dueDate</li>" +
    "<li>priority</li>" +
    "<li>notes</li>" +
    "<li>checklist</li>" +
    "<li>Icons from https://home.unicode.org: " +
    "    <ul>" +
    "        <li>002B plus for a new project/todo</li>" +
    "        <li>archive for removing todo from a project, or a project from view</li>" +
    "        <li>002D minus for a delete of a project/todo</li>" +
    "        <li>pencil for an edit of a project/todo</li>" +
    "        <li>checkbox (un)selected</li>" +
    "        <li>save</li>" +
    "        <li>&2219; bullets</li>" +
    "        <li>calendar</li>" +
    "        <li>priority flags (red priority 1, orange priority 2, blue priority 3, or white priority 4)</li>" +
    "        <li>confetti for completions</li>" +
    "        <li>download for projects</li>" +
    "        <li>ribbon for bookmarked todos</li>" +
    "        <li>22EF ellipsis for collapsed project/todo</li>" +
    "        <li>tag for keywords to add to a project/todo</li>" +
    "        <li>magnifying glass for general search</li>" +
    "    </ul>" +
    "</li>";

const htmlCopyliFourthEl = "<strong>Projects</strong> " +
    "or separate  " +
    "<strong>lists</strong>  " +
    "of todos: Categories for todo objects, as groups. Note: When first opening the app, the user will see a " +
    "default project where all todos are placed";

const htmlCopydivFifth1El = "The creates (all Data Layer):<br />" +
    "<ul>" +
    "    <li>create a new project</li>" +
    "    <li>Showns a form with fields to fill in the project's title, description, and bookmark option</li>" +
    "    <li>also shows an option to create a todo</li>" +
    "</ul>" +
    "<ul>" +
    "    <li>creating new todo (addTodo(), with stages like To Do, Doing, Done)</li>" +
    "</ul>";

const htmlCopydivFifth2El = "The views (Data Layer for retrieval, DOM Layer for display):<br />" +
    "<ul>" +
    "    <li>view a list with all projects</li>" +
    "    <li>The list of projects will shown each one by its title and date created.</li>" +
    "    <li>Title links to view of the project</li>" +
    "</ul>" +
    "<ul>" +
    "    <li>view a single project</li>" +
    "    <li>Showns its list of todos</li>" +
    "    <li>Showns title, description, date created</li>" +
    "    <li>Shows buttons to edit, bookmark, and archive the project</li>" +
    "</ul>" +
    "<ul>" +
    "    <li>view a list with all todos in total, with their stages like To Do, Doing, Done</li>" +
    "</ul>" +
    "<ul>" +
    "    <li>view a list with all todos in a single project, with their stages like To Do, Doing, Done</li>" +
    "</ul>" +
    "<ul>" +
    "    <li>view one todo, with its stage like To Do, Doing, Done</li>" +
    "</ul>" +
    "<ul>" +
    "    <li>viewing one todo with edit and archive options</li>" +
    "</ul>";

const htmlCopydivFifth5El = "The alters (Data Layer for data alterations, DOM Layer for display of forms and verification prompts):<br />" +
    "<ul>" +
    "    <li>bookmarking a todo/project</li>" +
    "</ul>" +
    "<ul>" +
    "    <li>changing todo priority</li>" +
    "</ul>" +
    "<ul>" +
    "    <li>setting todos as complete (markComplete())</li>" +
    "</ul>" +
    "<ul>" +
    "    <li>" +
    "        Storing todo item data (array)" +
    "    </li>" +
    "</ul>" +
    "<ul>" +
    "    <li>" +
    "        Storing project item data (array)" +
    "    </li>" +
    "</ul>";

const htmlCopydivFifth7El = "Etc:<br />" +
    "<ul>" +
    "    <li>legend logic. Ex: {next Friday}, #1 for red priority, etc. (Data Layer)</li>" +
    "</ul>" +
    "<ul>     " +
    "    <li>Use of the date-fns library</li>" +
    "</ul>" +
    "<ul>" +
    "    <li>Use of the localStorage feature of the Web Storage API (add, update, archive, and delete data)</li>" +
    "</ul>";

export {
    htmlCopyulThirdEl,
    htmlCopyliFourthEl,
    htmlCopydivFifth1El,
    htmlCopydivFifth2El,
    htmlCopydivFifth5El,
    htmlCopydivFifth7El
};
