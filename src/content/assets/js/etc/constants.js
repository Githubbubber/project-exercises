const allFCCProjects = [
    ["accessible-quiz.html", "Accessible Quiz"],
    ["admin-dashboard.html", "Admin Dashboard"],
    ["admin-dashboard2.html", "Admin Dashboard Two"],
    ["balance-sheet.html", "A Balance Sheet"],
    ["cats.html", "A Page Dedicated to Cats"],
    ["cats-two.html", "Another Page Dedicated to Cats"],
    ["city.html", "City... Resize to see day to night"],
    ["coffee-shop.html", "Camper Cafe"],
    ["ferris-wheel.html", "A Fun Ferris Wheel Animation"],
    ["form.html", "A pretty HTML Form"],
    ["magazine.html", "Bored? Read a freeCodeCamp Magazine"],
    ["markers.html", "CSS Color Markers"],
    ["nutrition-label.html", "US Nutrition Label"],
    ["penguin.html", "Penguin Animation"],
    ["piano.html", "freeCodeCamp Piano"],
    ["picasso.html", "A Picasso-Inspired Painting"],
    ["rothko.html", "Rothko Painting Creation"],
];

const allTOPProjects = [
    ["example.html", "Generic Example Page"],
    ["calculator.html", "Calculator"],
    ["tictactoe.html", "Tic Tac Toe"],
    ["todo.html", "A Todo List"],
];

const todoIconsSection = "<ul>Icons from https://home.unicode.org:" +
    "<li>&#127882; confetti for completions</li>" +
    "<li>&#x2193; download for projects</li>" +
    "<li>&ctdot; ellipsis for collapsed project/todo</li>" +
    "<li>&#x2315; magnifying glass for general search</li>" +
    "&#x002B; &#x002D; &#x2080; &#x2219; &#x22EF; &#x0076; Tag (&#x0146;) Note (&#x2044;) Due Date (&#x0166;) To Do Item (&#x0235;) Projects (&#x1049;) Create (&#x1063;) View (&#x1036;) Edit (&#x1033;) To Do (&#x0164;) Doing (&#x0126;) Done (&#x0097;) Delete (&#x0114;) Archive (&#x0211;) Priority (&#x1129;, &#x1130;, &#x1131;, &#x1132;)" +
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
    allFCCProjects,
    allTOPProjects,
    todoPriorityFlag,
    todoIconsSection,
    isStorageAvailable
};
