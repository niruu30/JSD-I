const quizData = [
    {
        id: "q121",
        isMultiple: false,
        question: "Which assertion accurately tests the above code?",
        code: `async function functionUnderTest(isOK) {
    if (isOK) return 'OK';
    throw new Error('not OK');
}`,
        options: [
            { letter: "A", text: `console.assert(await functionUnderTest(true), 'not OK')` },
            { letter: "B", text: `console.assert(await functionUnderTest(true), 'OK')` },
            { letter: "C", text: `console.assert(await functionUnderTest(false), 'not OK')` },
            { letter: "D", text: `console.assert(await functionUnderTest(true), 'OK')` }
        ],
        answer: "D"
    },
    {
        id: "q122",
        isMultiple: false,
        question: "A developer has the following array of hourly wages:\n\nFor workers making less than $10 an hour, the rate should be multiplied by 1.25 and returned in a new array.\nHow should the developer implement the request?",
        code: `let arr = [8, 5, 9, 75, 11, 25, 7, 75, 13, 25];`,
        options: [
            { letter: "A", text: `let arr1 = arr.filterBy((val) => val < 10).map((num) => num * 1.25);` },
            { letter: "B", text: `let arr1 = arr.filter((val) => val < 10).map((num) => { num * 1.25 });` },
            { letter: "C", text: `let arr1 = arr.filter((val) => val < 10).map((num) => num = 1.25);` },
            { letter: "D", text: `let arr1 = arr.map((num) => { return num * 1.25 }).filter((val) => { return val < 10 });` }
        ],
        answer: "D"
    },
    {
        id: "q123",
        isMultiple: false,
        question: "A developer imports a library that creates a web server. The imported library uses events and callbacks to start the server. Which code should be inserted at the line 03 to set up an event and start the web server?",
        code: `01 const server = require('server');
02 /* Insert code here */`,
        options: [
            { letter: "A", text: `server()` },
            { letter: "B", text: `server.on('connect', (port) => {
    console.log('Listening on ', port);
})` },
            { letter: "C", text: `Server.start();` },
            { letter: "D", text: `console.log('Listening on ', port);` },
            { letter: "E", text: `serve((port) => {` }
        ],
        answer: "B"
    },
    {
        id: "q124",
        isMultiple: true,
        question: "Refer to the following code that imports a module named utils:\n\nWhich two implementations of Utils.js export foo and bar such that the code above runs without error?\nChoose 2 answers.",
        code: `import { foo, bar } from '/path/Utils.js';
foo();
bar();`,
        options: [
            {
                letter: "A",
                text: `const foo = () => { return 'foo'; }
const bar = () => { return 'bar'; }
export { bar, foo }`
            },
            {
                letter: "B",
                text: `// FooUtils.js and BarUtils.js exist
import { foo } from '/path/FooUtils.js';
import { bar } from '/path/BarUtils.js';`
            },
            {
                letter: "C",
                text: `export default class {
    foo() { return 'foo'; }
    bar() { return 'bar'; }
}`
            },
            {
                letter: "D",
                text: `const foo = () => { return 'foo'; }
const bar = () => { return 'bar'; }
export default foo, bar;`
            }
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
    isMultiple: true,
    question:
      "A developer wants to advocate for a mature, well-supported web framework/library instead of a new one (Minimalist.js). Which two should be recommended?",
    options: [
      { letter: "A", text: "React" },
      { letter: "B", text: "Koa" },
      { letter: "C", text: "Vue" },
      { letter: "D", text: "Express" },
    ],
    answer: ["A", "C"],
  },
];