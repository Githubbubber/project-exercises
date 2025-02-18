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
    "        <li>ribbon for tags/categories to add to a todo</li>" +
    "        <li>22EF ellipsis for collapsed project/todo</li>" +
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
    "    <li>Showns a form with fields to fill in the project's title, description, and category option</li>" +
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
    "    <li>Shows buttons to edit, tag, and archive the project</li>" +
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
    "    <li>tagging a todo/project</li>" +
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

const firstWhatNames = [
    ["accessible-quiz.html", "Accessible Quiz"],
    ["admin-dashboard.html", "Admin Dashboard"],
    ["admin-dashboard2.html", "Admin Dashboard Two"],
    ["balance-sheet.html", "A Balance Sheet"],
    ["calculator.html", "A Calculator"],
    ["cats.html", "A Page Dedicated to Cats"],
    ["cats-two.html", "Another Page Dedicated to Cats"],
    ["city.html", "City... Resize to see day to night"],
    ["coffee-shop.html", "Camper Cafe"],
    ["example.html", "Example"],
    ["ferris-wheel.html", "A Fun Ferris Wheel Animation"],
    ["form.html", "A pretty HTML Form"],
    ["magazine.html", "Bored? Read a freeCodeCamp Magazine"],
    ["markers.html", "CSS Color Markers"],
    ["nutrition-label.html", "US Nutrition Label"],
    ["penguin.html", "Penguin Animation"],
    ["piano.html", "freeCodeCamp Piano"],
    ["picasso.html", "A Picasso-Inspired Painting"],
    ["restaurant.html", "Restaurant"],
    ["rothko.html", "Rothko Painting Creation"],
    ["tictactoe.html", "Tic Tac Toe"],
];

const todoIconsSection = "<ul>Icons from https://home.unicode.org:" +
    "<li>&#127882; confetti for completions</li>" +
    "<li>&#x2193; download for projects</li>" +
    "<li>&ctdot; ellipsis for collapsed project/todo</li>" +
    "<li>&#x2315; magnifying glass for general search</li>" +
    "</ul>";

const todoPriorityFlag = [null, "red", "orange", "blue", "purple"];

// checks for localStorage or sessionStorage
const isStorageAvailable = (type) => {
    let storage;

    try {
        const x = "__storage_test__";

        storage = window[type];
        storage.setItem(x, x);
        storage.removeItem(x);

        return true;
    } catch (e) {
        return (
            e instanceof DOMException &&
            e.name === "QuotaExceededError" &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage &&
            storage.length !== 0
        );
    }
};

export {
    htmlCopyulThirdEl,
    htmlCopyliFourthEl,
    htmlCopydivFifth1El,
    htmlCopydivFifth2El,
    htmlCopydivFifth5El,
    htmlCopydivFifth7El,
    firstWhatNames,
    todoPriorityFlag,
    todoIconsSection,
    isStorageAvailable
};
