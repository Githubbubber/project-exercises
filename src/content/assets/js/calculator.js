import "../css/calculator.css";

let calcWindow = document.querySelector("#calcWindow");
let everyPress = [];
let results;
let answer = 0;

const display = function () {
    results = "";

    for (let x = 0; x <= everyPress.length - 1; x++) {
        let getNum = Number(everyPress[x]);

        if (getNum) {
            results = results + everyPress[x];
        } else {
            results = results + " " + everyPress[x] + " ";
        }
    }

    calcWindow.innerHTML = results;
};

const add = function (num1, num2) {
    return num1 + num2;
};

const subtract = function (num1, num2) {
    return num1 - num2;
};

const multiply = function (num1, num2) {
    return num1 * num2;
};

const divide = function (num1, num2) {
    return num1 / num2;
};

const power = function (num1, num2) {
    return Math.pow(num1, num2);
};

// Operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
const operator = function (operand, num1, num2) {
    if (operand === 42) { // *
        multiply(num1, num2);
    } else if (operand === 47) { // /
        divide(num1, num2);
    } else if (operand === 43) { // +
        add(num1, num2);
    } else if (operand === 45 || operand === 49) { // -
        subtract(num1, num2);
    } else if (operand === 94) {  // ^
        power(num1, num2);
    } else if (operand === 46) { // .
        // Gotta figure this one out :( )
    }
};

const addPress = function (item) {
    everyPress.push(item);

    display();
};

const clearPress = function () {
    everyPress = [];

    results = "";

    answer = 0;

    calcWindow.innerHTML = results;
};

const deletePress = function () {
    everyPress.pop();

    results = results.split(results[length - 1])[0];

    calcWindow.innerHTML = results;
};

const calculate = function () {
    if (results) {
        let itemsArray = results.replace(/\s/g, "").split(/(\d*)/g).filter(x => x);

        let newArray = itemsArray.map(item => {
            let temp = Number(item);

            if (temp) { return temp; } else { return item; }
        });

        if (results.match(/\+|\-|\*|\/|\.|\^/g) === null || results.match(/\d/g) === null || results.length === 1 || newArray.length % 2 === 0) {
            let errorWindow = document.querySelector("#errorWindow");

            errorWindow.innerHTML = "<p id='msg'>A complete statement is needed for the calculation. Please try again.</p>";

            setTimeout(() => {
                errorWindow.removeChild(document.getElementById("msg"));
            }, 3000);

            clearTimeout();
        } else {
            for (let x = 0; x < newArray.length - 1; x++) {
                if (!Number(newArray[x])) {
                    let num1 = answer ? answer : newArray[x - 1];
                    let operand = newArray[x].charCodeAt(0);
                    let num2 = newArray[x + 1];

                    operator(num1, operand, num2);
                }
            }
        }

        calcWindow.innerHTML = answer;
        results = answer;
        everyPress = [answer]
    }
};