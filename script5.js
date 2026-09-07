const quizData = [
    {
        id: "q121",
        isMultiple: false,
        question: "Refer to the code below:\n\nasync function functionUnderTest(isOK) {\n    if (isOK) return 'OK';\n    throw new Error('not OK');\n}\n\nWhich assertion accurately tests the above code?",
        options: [
            { letter: "A", text: "console.assert(await functionUnderTest(true), 'not OK')" },
            { letter: "B", text: "console.assert(await functionUnderTest(true), 'OK')" },
            { letter: "C", text: "console.assert(await functionUnderTest(false), 'not OK')" },
            { letter: "D", text: "console.assert(await functionUnderTest(true), 'OK')" }
        ],
        answer: "D"
    },
    {
        id: "q122",
        isMultiple: false,
        question: "A developer has the following array of hourly wages:\n\nlet arr = [8, 5, 9, 75, 11, 25, 7, 75, 13, 25];\n\nFor workers making less than $10 an hour, the rate should be multiplied by 1.25 and returned in a new array.\nHow should the developer implement the request?",
        options: [
            { letter: "A", text: "let arr1 = arr.filterBy((val) => val < 10).map((num) => num * 1.25);" },
            { letter: "B", text: "let arr1 = arr.filter((val) => val < 10).map((num) => { num * 1.25 });" },
            { letter: "C", text: "let arr1 = arr.filter((val) => val < 10).map((num) => num = 1.25);" },
            { letter: "D", text: "let arr1 = arr.map((num) => { return num * 1.25 }).filter((val) => { return val < 10 });" }
        ],
        answer: "D"
    },
    {
        id: "q123",
        isMultiple: false,
        question: "Refer to the code below:\n\n01 const server = require('server');\n02 /* Insert code here */\n\nA developer imports a library that creates a web server. The imported library uses events and callbacks to start the server. Which code should be inserted at the line 03 to set up an event and start the web server?",
        options: [
            { letter: "A", text: "server()" },
            { letter: "B", text: "server.on('connect', (port) => {\n    console.log('Listening on ', port);\n})" },
            { letter: "C", text: "Server.start();" },
            { letter: "D", text: "console.log('Listening on ', port);" },
            { letter: "E", text: "serve((port) => {" }
        ],
        answer: "B"
    },
    {
        id: "q124",
        isMultiple: true,
        question: "Refer to the following code that imports a module named utils:\n\nimport { foo, bar } from '/path/Utils.js';\nfoo();\nbar();\n\nWhich two implementations of Utils.js export foo and bar such that the code above runs without error?\nChoose 2 answers.",
        options: [
            { letter: "A", text: "const foo = () => { return 'foo'; }\nconst bar = () => { return 'bar'; }\nexport { bar, foo }" },
            { letter: "B", text: "// FooUtils.js and BarUtils.js exist\nimport { foo } from '/path/FooUtils.js';\nimport { bar } from '/path/BarUtils.js';" },
            { letter: "C", text: "export default class {\n    foo() { return 'foo'; }\n    bar() { return 'bar'; }\n}" },
            { letter: "D", text: "const foo = () => { return 'foo'; }\nconst bar = () => { return 'bar'; }\nexport default foo, bar;" }
        ],
        answer: ["A", "C"]
    },
    {
        id: "q125",
        isMultiple: true,
        question: "A test has a dependency on database.query. During the test, the dependency is replaced with an object called database with the method Calculator.query, that returns an array. The developer does not need to verify how many times the method has been called.\nWhich two test approaches describe the requirement?\nChoose 2 answers.",
        options: [
            { letter: "A", text: "Black box" },
            { letter: "B", text: "White box" },
            { letter: "C", text: "Substitution" },
            { letter: "D", text: "Stubbing" }
        ],
        answer: ["B", "C"]
    },
    {
        id: "q126",
        isMultiple: false,
        question: "Refer to the code below:\n\nfunction foo() {\n    const a = 2;\n    function bar() {\n        console.log(a);\n    }\n    return bar;\n}\n\nWhy does the function bar have access to variable a?",
        options: [
            { letter: "A", text: "Prototype chain" },
            { letter: "B", text: "Hoisting" },
            { letter: "C", text: "Inner function's scope" },
            { letter: "D", text: "Outer function's scope" }
        ],
        answer: "D"
    },
];