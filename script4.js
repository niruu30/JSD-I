const quizData = [
    {
        id: "q91",
        isMultiple: false,
        question: "A developer has a formatName function that takes two arguments, firstName and lastName, and returns a string. They want to schedule the function to run once after five seconds.\n\nWhat is the correct syntax to schedule this function?",
        options: [
            { letter: "A", text: `setTimeout('formatName', 5000, 'John', 'Doe');` },
            { letter: "B", text: `setTimeout(() => { formatName('John', 'Doe') }, 5000);` },
            { letter: "C", text: `setTimeout(formatName('John', 'Doe'), 5000);` },
            { letter: "D", text: `setTimeout(formatName(), 5000, "John", "Doe");` }
        ],
        answer: "B"
    },
    {
        id: "q92",
        isMultiple: false,
        question: "A developer receives a comment from the Tech Lead that the code given below has an error:\n\nWhich line edit should be made to make this code run?",
        code: `const monthName = 'July';
const year = 2019;
if(year === 2019) {
    monthName = 'June';
}`,
        options: [
            { letter: "A", text: `03 if (year == 2019) {` },
            { letter: "B", text: `02 let year = 2019;` },
            { letter: "C", text: `01 let monthName = 'July';` },
            { letter: "D", text: `02 const year = 2020;` }
        ],
        answer: "C"
    },
    {
        id: "q93",
        isMultiple: true,
        question: "A developer is wondering whether to use Promise.then or Promise.catch, especially when a Promise throws an error.\n\nWhich two promises are rejected? Choose 2 answers.",
        options: [
            { letter: "A", text: `Promise.reject('cool error here').catch(error => console.error(error));` },
            { letter: "B", text: `Promise.reject('cool error here').then(error => console.error(error));` },
            { letter: "C", text: `new Promise(() => { throw 'cool error here'; }).then(null, error => console.error(error));` },
            { letter: "D", text: `new Promise((resolve, reject) => { throw 'cool error here'; }).catch(error => console.error(error));` }
        ],
        answer: ["A", "D"]
    },
    {
        id: "q94",
        isMultiple: true,
        question: "What are two unique features of functions defined with a fat arrow as compared to a normal function definition? Choose 2 answers.",
        options: [
            { letter: "A", text: "If the function has a single expression in the function body, the expression will be evaluated and implicitly returned." },
            { letter: "B", text: "The function receives an argument that is always in scope, called parentThis, which is the enclosing lexical scope." },
            { letter: "C", text: "The function uses the this from the enclosing scope." },
            { letter: "D", text: "The function generates its own this, making it useful for separating the function's scope from its enclosing scope." }
        ],
        answer: ["A", "C"]
    },
    {
        id: "q95",
        isMultiple: true,
        question: "Which three options show valid methods for creating a fat arrow function? Choose 3 answers.",
        options: [
            { letter: "A", text: `[] => (console.log('executed');)` },
            { letter: "B", text: `(x, y, z) => (console.log('executed');)` },
            { letter: "C", text: `x, y, z => (console.log('executed');)` },
            { letter: "D", text: `x => (console.log('executed');)` },
            { letter: "E", text: `() => (console.log('executed');)` }
        ],
        answer: ["B", "D", "E"]
    },
    {
        id: "q96",
        isMultiple: false,
        question: "Which JavaScript methods can be used to serialize an object into a string and deserialize a JSON string into an object, respectively?",
        options: [
            { letter: "A", text: "JSON.parse and JSON.deserialize" },
            { letter: "B", text: "JSON.stringify and JSON.parse" },
            { letter: "C", text: "JSON.serialize and JSON.deserialize" },
            { letter: "D", text: "JSON.encode and JSON.decode" }
        ],
        answer: "B"
    },
    {
        id: "q97",
        isMultiple: false,
        question: "Which code statement correctly retrieves and returns an object from localStorage?",
        options: [
            {
                letter: "A",
                text: `const retrieveFromLocalStorage = (storageKey) => {
    return window.localStorage[storageKey];
}`
            },
            {
                letter: "B",
                text: `const retrieveFromLocalStorage = () => {
    return JSON.stringify(window.localStorage.getItem(storageKey));
}`
            },
            {
                letter: "C",
                text: `const retrieveFromLocalStorage = (storageKey) => {
    return window.localStorage.getItem(storageKey);
}`
            },
            {
                letter: "D",
                text: `const retrieveFromLocalStorage = (storageKey) => {
    return JSON.parse(window.localStorage.getItem(storageKey));
}`
            }
        ],
        answer: "D"
    },
    {
        id: "q98",
        isMultiple: true,
        question: "A developer creates a generic function to log custom messages in the console. To do this, the function below is implemented.\n\nWhich three console logging methods allow the use of string substitution in line 02? Choose 3 answers.",
        code: `01 function logStatus(status){
02     console./*Answer goes here*/('Item status is: %s', status);
03 }`,
        options: [
            { letter: "A", text: "Error" },
            { letter: "B", text: "Assert" },
            { letter: "C", text: "Log" },
            { letter: "D", text: "Message" },
            { letter: "E", text: "Info" }
        ],
        answer: ["A", "C", "E"]
    },
    {
        id: "q99",
        isMultiple: false,
        question: "A developer uses the code below to format a date:\n\nAfter executing, what is the value of formattedDate?",
        code: `const date = new Date(2020, 05, 10);
const dateDisplayOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};

const formattedDate = date.toLocaleDateString('en', dateDisplayOptions);`,
        options: [
            { letter: "A", text: "June 10, 2020" },
            { letter: "B", text: "May 10, 2020" },
            { letter: "C", text: "November 05, 2020" },
            { letter: "D", text: "October 05, 2020" }
        ],
        answer: "A"
    },
    {
        id: "q100",
        isMultiple: true,
        question: "Which two options are core Node.js modules? Choose 2 answers.",
        options: [
            { letter: "A", text: "iostream" },
            { letter: "B", text: "http" },
            { letter: "C", text: "exception" },
            { letter: "D", text: "worker" }
        ],
        answer: ["A", "B"]
    },
    {
        id: "q101",
        isMultiple: false,
        question: "Cloud Kicks has a class to represent items for sale in an online store, as shown below:\n\nA new business requirement comes in that requests a ClothingItem class that should have all of the properties and methods of the Item class but will also have properties that are specific to clothes.\n\nWhich line of code properly declares the ClothingItem class such that it inherits from Item?",
        code: `class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    formattedPrice() {
        return '$' + String(this.price);
    }
}`,
        options: [
            { letter: "A", text: `class ClothingItem implements Item {` },
            { letter: "B", text: `class ClothingItem {` },
            { letter: "C", text: `class ClothingItem extends Item {` },
            { letter: "D", text: `class ClothingItem super Item {` }
        ],
        answer: "C"
    },
    {
        id: "q102",
        isMultiple: false,
        question: "Which statement accurately describes the behaviour of the async/await keywords?",
        options: [
            { letter: "A", text: "The associated function will always return a promise." },
            { letter: "B", text: "The associated function sometimes returns a promise." },
            { letter: "C", text: "The associated class contains some asynchronous functions." },
            { letter: "D", text: "The associated function can only be called via asynchronous methods." }
        ],
        answer: "A"
    },
    {
        id: "q103",
        isMultiple: false,
        question: "Refer to the code below:\n\nLine 05 causes an error.\nWhat are the values of greeting and salutation once code completes?",
        code: `01 try {
02     greeting = 'Goodbye';
03     salutation = 'Hello, Hello, Hello';
04     greeting = 'Hello';
05     console.log('Hello');
06     salutation = 'Goodbye';
07 } catch(err) {
08     salutation = 'Hey hello';
09 } finally {
10     salutation = 'Hello, Hello';
11 }`,
        options: [
            { letter: "A", text: "Greeting is Goodbye and salutation is I say Hello." },
            { letter: "B", text: "Greeting is Hello and salutation is Hello, Hello" },
            { letter: "C", text: "Greeting is Hello and salutation is I say hello." },
            { letter: "D", text: "Greeting is Goodbye and salutation is Hello, Hello." }
        ],
        answer: "B"
    },
    {
        id: "q104",
        isMultiple: false,
        question: "Given HTML below:\n\nWhich statement adds the priority-account CSS class to the Universal Container row?",
        code: `<div>
    <div id="row-uc">Universal Container</div>
    <div id="row-aa">Applied Shipping</div>
    <div id="row-bt">Burlington Textiles</div>
</div>`,
        options: [
            { letter: "A", text: `document.querySelector('#row-uc').classes.push('priority-account');` },
            { letter: "B", text: `document.querySelector('#row-uc').classList.add('priority-account');` },
            { letter: "C", text: `document.querySelectorAll('#row-uc').classList.add('priority-account');` },
            { letter: "D", text: `document.queryElementById('row-uc').addClass('priority-account');` }
        ],
        answer: "B"
    },
    {
        id: "q105",
        isMultiple: true,
        question: "Refer to the code below:\n\nWhich two statements result in the array [1, 2, 3, 4, 5]?\nChoose 2 answers.",
        code: `let inArray = [[1, 2], [3, 4, 5]];`,
        options: [
            { letter: "A", text: `[ ].concat.apply([], inArray);` },
            { letter: "B", text: `[ ].concat([...inArray]);` },
            { letter: "C", text: `[ ].concat.apply(inArray, []);` },
            { letter: "D", text: `[ ].concat(...inArray);` }
        ],
        answer: ["A", "D"]
    },
    {
        id: "q106",
        isMultiple: true,
        question: "Universal Containers (UC) notices that its application that allows users to search for accounts makes a network request each time a key is pressed. This results in too many requests for the server to handle.\n\nTo address this problem, UC decides to implement a debounce function on the string change handler.\n\nWhat are three key steps to implement this debounce function?\nChoose 3 answers.",
        options: [
            { letter: "A", text: "Store the timerId of the setTimeout last enqueued by the search string change handler." },
            { letter: "B", text: "If there is an existing setTimeout and the search string changes, cancel the existing setTimeout using the persisted timerId and replace it with a new setTimeout." },
            { letter: "C", text: "Ensure that the network request has the property debounce set to true." },
            { letter: "D", text: "If there is an existing setTimeout and the search string changes, allow the existing setTimeout to finish, and do not enqueue a new setTimeout." },
            { letter: "E", text: "When the search string changes, enqueue the request within a setTimeout." }
        ],
        answer: ["A", "B", "E"]
    },
    {
        id: "q107",
        isMultiple: false,
        question: "Refer to the following code:\n\nWhat is returned by the function call?",
        code: `function test(val) {
    if (val === undefined) {
        return 'Undefined values!';
    }
    if (val === null) {
        return 'Null value!';
    }
    return val;
}

let x;
test(x);`,
        options: [
            { letter: "A", text: "Undefined" },
            { letter: "B", text: "'Null value!'" },
            { letter: "C", text: "The function call throws an error." },
            { letter: "D", text: "'Undefined values!'" }
        ],
        answer: "D"
    },
    {
        id: "q108",
        isMultiple: true,
        question: "A developer is trying to convince management that their team will benefit from using Node.js for a backend server that they are going to create. The server will be a web server that handles API requests from a website that the team has already built using HTML, CSS, and JavaScript.\n\nWhich three benefits of Node.js can the developer use to persuade their manager?\nChoose 3 answers.",
        options: [
            { letter: "A", text: "Performs a static analysis on code before execution to look for runtime errors." },
            { letter: "B", text: "Uses non-blocking functionality for performant request handling." },
            { letter: "C", text: "Installs with its own package manager to install and manage third-party libraries." },
            { letter: "D", text: "Ensures stability with one major release every few years." },
            { letter: "E", text: "Executes server-side JavaScript code to avoid learning a new language." }
        ],
        answer: ["B", "C", "E"]
    },
    {
        id: "q109",
        isMultiple: false,
        question: "Given the following code:\n\nWhich replacement for the conditional statement allows a developer to correctly determine that a button on the page is clicked?",
        code: `document.body.addEventListener('click', (event) => {
    if (/* CODE REPLACEMENT HERE */) {
        console.log('button clicked!');
    }
});`,
        options: [
            { letter: "A", text: `event.nodeTarget == this` },
            { letter: "B", text: `event.target.nodeName == 'BUTTON'` },
            { letter: "C", text: `button.addEventListener('click')` },
            { letter: "D", text: `event.clicked` }
        ],
        answer: "B"
    },
    {
        id: "q110",
        isMultiple: false,
        question: "Refer to the code below:\n\nIn which sequence will the numbers be logged?",
        code: `console.log(0);
setTimeout(() => {
    console.log(1);
});
console.log(2);
setTimeout(() => {
    console.log(3);
}, 0);
console.log(4);`,
        options: [
            { letter: "A", text: "13024" },
            { letter: "B", text: "02413" },
            { letter: "C", text: "02431" },
            { letter: "D", text: "01234" }
        ],
        answer: "C"
    },
    {
        id: "q111",
        isMultiple: false,
        question: "Refer to the code snippet:\n\nA developer writes this code to return a message to a user attempting to register a new username. If the username is available, the variable msg contains the message. What is the return value of msg when getAvailabilityMessage(\"newUserName\") is executed and getAvailability(\"newUserName\") returns false?",
        code: `function getAvailabilityMessage(item) {
    if (getAvailability(item)) {
        var msg = "Username available";
    }
    return msg;
}`,
        options: [
            { letter: "A", text: "\"Msg is not defined\"" },
            { letter: "B", text: "\"newUserName\"" },
            { letter: "C", text: "\"Username available\"" },
            { letter: "D", text: "undefined" }
        ],
        answer: "D"
    },
    {
        id: "q112",
        isMultiple: false,
        question: "Refer to the code below:\n\nWhich statement allows a developer to cancel the scheduled timed function?",
        code: `let timedFunction = () => {
    console.log('Timer called.');
};
let timerId = setTimeout(timedFunction, 1000);`,
        options: [
            { letter: "A", text: `removeTimeout(timedFunction);` },
            { letter: "B", text: `removeTimeout(timerId);` },
            { letter: "C", text: `clearTimeout(timerId);` },
            { letter: "D", text: `clearTimeout(timedFunction);` }
        ],
        answer: "C"
    },
    {
        id: "q113",
        isMultiple: false,
        question: "Refer to the code below:\n\nWhat is the value of result when Promise.race executes?",
        code: `01 let car1 = new Promise((_, reject) =>
02     setTimeout(reject, 2000, "Car 1 crashed in"));
03 let car2 = new Promise(resolve => setTimeout(resolve, 1500, "Car 2 completed"));
04 let car3 = new Promise(resolve => setTimeout(resolve, 3000, "Car 3 completed"));
05 Promise.race([car1, car2, car3])
06 .then(value => {
07     let result = \${value} the race.;
08 })
09 .catch(err => {
10     console.log("Race is cancelled.", err);
11 });`,
        options: [
            { letter: "A", text: "Car 3 completed the race." },
            { letter: "B", text: "Car 1 crashed in the race." },
            { letter: "C", text: "Race is cancelled." },
            { letter: "D", text: "Car 2 completed the race." }
        ],
        answer: "D"
    },
    {
        id: "q114",
        isMultiple: false,
        question: "Refer to the code below:\n\nAfter running this code, which result is displayed on the console?",
        code: `const searchText = "Yay! Salesforce is amazing!";
let result1 = searchText.search(/sales/i);
let result21 = searchText.search(/sales/i);
console.log(result1);
console.log(result2);`,
        options: [
            { letter: "A", text: "5 > 0" },
            { letter: "B", text: "5 > -1" },
            { letter: "C", text: "true > false" },
            { letter: "D", text: "5 > undefined" }
        ],
        answer: "D"
    },
    {
        id: "q115",
        isMultiple: false,
        question: "Given the following code:\n\nWhat will be the first four numbers logged?",
        code: `let counter = 0;
const logCounter = () => {
    console.log(counter);
};

logCounter();
setTimeout(logCounter, 1000);
setTimeout(() => {
    counter++;
    logCounter();
}, 1000);`,
        options: [
            { letter: "A", text: "0012" },
            { letter: "B", text: "0123" },
            { letter: "C", text: "0112" },
            { letter: "D", text: "0122" }
        ],
        answer: "C"
    },
    {
        id: "q116",
        isMultiple: false,
        question: "Refer to the code below:\n\nWhat is the value of result when the code executes?",
        code: `function changeValue(param) {
    param = 5;
}

let a = 10;
let b = 10;

changeValue(b);
const result = a + '-' + b;`,
        options: [
            { letter: "A", text: "10-5" },
            { letter: "B", text: "10-10" },
            { letter: "C", text: "5-10" },
            { letter: "D", text: "5-5" }
        ],
        answer: "B"
    },
    {
        id: "q117",
        isMultiple: false,
        question: "A developer writes the code below to calculate the factorial of a given number.\n\nWhat is the result of executing line 04?",
        code: `function factorial(number) {
    return number + factorial(number - 1);
}
factorial(3);`,
        options: [
            { letter: "A", text: "0" },
            { letter: "B", text: "6" },
            { letter: "C", text: "-Infinity" },
            { letter: "D", text: "RuntimeError" }
        ],
        answer: "D"
    },
    {
        id: "q118",
        isMultiple: false,
        question: "A developer writes the code below to calculate the factorial of a given number:\n\nWhat is the result of executing the code?",
        code: `function sum(number) {
    return number * sum(number - 1);
}
sum(3);`,
        options: [
            { letter: "A", text: "0" },
            { letter: "B", text: "Error" },
            { letter: "C", text: "6" },
            { letter: "D", text: "-Infinity" }
        ],
        answer: "B"
    },
    {
        id: "q119",
        isMultiple: true,
        question: "Given two expressions var1 and var2, what are two valid ways to return the logical AND of the two expressions and ensure it is data type Boolean?\nChoose 2 answers.",
        options: [
            { letter: "A", text: `var1 && var2` },
            { letter: "B", text: `var1.toBoolean() && var2.toBoolean()` },
            { letter: "C", text: `Boolean(var1 && var2)` },
            { letter: "D", text: `Boolean(var1) && Boolean(var2)` }
        ],
        answer: ["C", "D"]
    },
    {
        id: "q120",
        isMultiple: false,
        question: "A developer has the function shown below, that is called when a page loads.\n\nWhere can the developer see the log statement after loading the page in the browser?",
        code: `function onload() {
    console.log("Page has loaded!");
}`,
        options: [
            { letter: "A", text: "Browser JavaScript console" },
            { letter: "B", text: "Terminal running the web server" },
            { letter: "C", text: "Browser performance tools" },
            { letter: "D", text: "On the webpage" }
        ],
        answer: "A"
    }
];