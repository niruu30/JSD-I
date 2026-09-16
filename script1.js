const quizData = [
  {
    id: "q1",
    isMultiple: false,
    question:
      "A developer initiates a server with the file server.js and adds dependencies in the source code ' s package.json that are required to run the server. Which command should the developer run to start the server locally?",
    options: [
      { letter: "A", text: "npm start server.js" },
      { letter: "B", text: "npm start" },
      { letter: "C", text: "start server.js" },
      { letter: "D", text: "node start" },
    ],
    answer: "B",
  },
  {
    id: "q2",
    isMultiple: false,
    question: "Value of: true + 3 + ' 100 ' + null",
    options: [
      { letter: "A", text: '" 4100 "' },
      { letter: "B", text: "104" },
      { letter: "C", text: '"4100null"' },
      { letter: "D", text: '"220null"' },
    ],
    answer: "C",
  },
  {
    id: "q3",
    isMultiple: false,
    question:
      "Considering type coercion, what does the following expression evaluate to? true + ' 13 ' + NaN",
    options: [
      { letter: "A", text: "\' 113NaN \'" },
      { letter: "B", text: "\' true13NaN \'" },
      { letter: "C", text: "14" },
      { letter: "D", text: "\' true13 \'" },
    ],
    answer: "B",
  },
  {
    id: "q4",
    isMultiple: false,
    question:
      "A developer needs to debug a Node.js web server because a runtime error keeps occurring at one of the endpoints. The developer wants to test the endpoint on a local machine and make the request against a local server to look at the behavior. In the source code, the server.js file will start the server. The developer wants to debug the Node.js server only using the terminal. \nWhich command can the developer use to open the CLI debugger in their current terminal window? \n(With corrected typing errors: node_inspect # node inspect, node_start_inspect # node start inspect.)",
    options: [
      { letter: "A", text: "node start inspect server.js" },
      { letter: "B", text: "node inspect server.js" },
      { letter: "C", text: "node server.js --inspect" },
      { letter: "D", text: "node -i server.js" },
    ],
    answer: "B",
  },
  {
    id: "q5",
    isMultiple: false,
    question: "Which statement accurately describes an aspect of promises?",
    options: [
      {
        letter: "A",
        text: "Arguments for the callback function passed to .then() are optional.",
      },
      { letter: "B", text: ".then() cannot be added after a catch." },
      {
        letter: "C",
        text: ".then() manipulates and returns the original promise.",
      },
      {
        letter: "D",
        text: "In a .then() function, returning results is not necessary since callbacks will catch the result of a previous promise.",
      },
    ],
    answer: "A",
  },
  {
    id: "q6",
    isMultiple: true,
    question:
      "A developer is leading the creation of a new web server for their team that will fulfill API requests from an existing client. The team wants a web server that runs on Node.js, and they want to use the new web framework Minimalist.js. The lead developer wants to advocate for a more seasoned back-end framework that already has a community around it.\nWhich two frameworks could the lead developer advocate for?",
    options: [
      { letter: "A", text: "Angular" },
      { letter: "B", text: "Next" },
      { letter: "C", text: "Gatsby" },
      { letter: "D", text: "Next.js" },
    ],
    answer: ["B", "D"],
  },
  {
    id: "q7",
    isMultiple: false,
    question:
      "A developer imports: \nimport printPrice from ' /path/PricePrettyPrint.js ' ; \nWhat must be true about printPrice for this import to work?",
    options: [
      { letter: "A", text: "printPrice must be a named export" },
      { letter: "B", text: "printPrice must be an all export" },
      { letter: "C", text: "printPrice must be the default export" },
      { letter: "D", text: "printPrice must be a multi export" },
    ],
    answer: "C",
  },
  {
    id: "q8",
    isMultiple: true,
    question:
      "Which three browser specific APIs are available for developers to persist data between page loads?",
    options: [
      { letter: "A", text: "localStorage" },
      { letter: "B", text: "indexedDB" },
      { letter: "C", text: "cookies" },
      { letter: "D", text: "global variables" },
      { letter: "E", text: "IIFEs" },
    ],
    answer: ["A", "B", "C"],
  },
  {
    id: "q9",
    isMultiple: true,
    question:
      "const str = ' Salesforce ' ; \nWhich two statements result in the word \" Sales \" ?",
    options: [
      { letter: "A", text: "str.substring(0, 5);" },
      { letter: "B", text: "str.substr(s, 5);" },
      { letter: "C", text: "str.substring(0, 5);" },
      { letter: "D", text: "str.substr(0, 5);" },
    ],
    answer: ["A", "D"],
  },
  {
    id: "q10",
    isMultiple: true,
    question:
      "Refer to the following array: \nlet arr = [1, 2, 3, 4, 5]; \nWhich two lines of code result in a second array, arr2, created such that arr2 is a reference to arr?",
    options: [
      { letter: "A", text: "let arr2 = arr.slice(0, 5);" },
      { letter: "B", text: "let arr2 = Array.from(arr);" },
      { letter: "C", text: "let arr2 = arr;" },
      { letter: "D", text: "let arr2 = arr.sort();" },
    ],
    answer: ["C", "D"],
  },
  {
    id: "q11",
    isMultiple: false,
    imageUrl: "pics/img1.png",
    question: "Refer to the code below:",
    options: [
      { letter: "A", text: "An error" },
      { letter: "B", text: "NaN" },
      { letter: "C", text: "undefined" },
      { letter: "D", text: "\' London \'" },
    ],
    answer: "B",
  },
  {
    id: "q12",
    isMultiple: true,
    imageUrl: "pics/img2.png",
    question:
      "A developer needs to dispatch a custom event called update to send information about recordId. Which two options can be inserted at line 02?",
    options: [
      { letter: "A", text: "{ type: \' update \' , recordId: \' 123abc \' }" },
      {
        letter: "B",
        text: "\' update \' , { detail: { recordId: \' 123abc \' } }",
      },
      { letter: "C", text: "\' update \' , \' 123abc \'" },
      { letter: "D", text: "\' update \' , { recordId: \' 123abc \' }" },
    ],
    answer: ["B", "D"],
  },
  {
    id: "q13",
    isMultiple: false,
    imageUrl: "pics/img3.png",
    question:
      'Which code change should be done for the console to log the following when " Click me! " is clicked? \nRow log \nTable log',
    options: [
      {
        letter: "A",
        text: "Change line 14 to elem.addEventListener( \' click \' , printMessage, true);",
      },
      { letter: "B", text: "Remove lines 13 and 14" },
      { letter: "C", text: "Change line 10 to event.stopPropagation(false);" },
      { letter: "D", text: "Remove line 10" },
    ],
    answer: "D",
  },
  {
    id: "q14",
    isMultiple: true,
    imageUrl: "pics/img4.png",
    question: "Which two assert statements are valid tests for this function?",
    options: [
      { letter: "A", text: "console.assert(sum3([1, \' 2 \' ]) == 12);" },
      {
        letter: "B",
        text: "console.assert(sum3([ \' hello \' , 2, 3, 4]) === NaN);",
      },
      { letter: "C", text: "console.assert(sum3([-3, 2]) === -1);" },
      { letter: "D", text: "console.assert(sum3([0]) === 0);" },
    ],
    answer: ["C", "D"],
  },
  {
    id: "q15",
    isMultiple: false,
    imageUrl: "pics/img5.png",
    question: "What is logged to the console?",
    options: [
      { letter: "A", text: "25341" },
      { letter: "B", text: "12435" },
      { letter: "C", text: "12534" },
      { letter: "D", text: "21435" },
    ],
    answer: "A",
  },
  {
    id: "q16",
    isMultiple: false,
    imageUrl: "pics/img6.png",
    question: "What is the console output?",
    options: [
      { letter: "A", text: "Better student Jackie got 70% on test." },
      { letter: "B", text: "Uncaught ReferenceError" },
      { letter: "C", text: "Graduate Student Jane got 100% on test." },
      { letter: "D", text: "Jackie got 70% on test." },
    ],
    answer: "C",
  },
  {
    id: "q17",
    isMultiple: false,
    imageUrl: "pics/img7.png",
    question: 'This does not print " Hello World " .\nWhat change is needed?',
    options: [
      {
        letter: "A",
        text: "Change line 2 to console.log( ' Hello ' , name());",
      },
      { letter: "B", text: "Change line 7 to }();" },
      { letter: "C", text: "Change line 9 to sayHello(world)();" },
      { letter: "D", text: "Change line 5 to function world() {" },
    ],
    answer: "A",
  },
  {
    id: "q18",
    isMultiple: false,
    imageUrl: "pics/img8.png",
    question: "What is logged to the console?",
    options: [
      { letter: "A", text: "4 2 1 5 3" },
      { letter: "B", text: "4 2 1 5 3" },
      { letter: "C", text: "1 4 2 3 5" },
      { letter: "D", text: "4 5 1 2 3" },
    ],
    answer: "A",
  },
  {
    id: "q19",
    isMultiple: false,
    imageUrl: "pics/img9.png",
    question:
      "A developer is required to write a function that calculates the sum of elements in an array but is getting undefined every time the code is executed. The developer needs to find what is missing in the code below.\nWhich line replacement makes the code work as expected?",
    options: [
      { letter: "A", text: "if(arr.length == 0) { return 0; }" },
      { letter: "B", text: "result = result + current;" },
      { letter: "C", text: "arr.map((result, current) = > {" },
      { letter: "D", text: "return result;" },
    ],
    answer: "D",
  },
  {
    id: "q20",
    isMultiple: false,
    imageUrl: "pics/img10.png",
    question: "What happens when the code executes?",
    options: [
      {
        letter: "A",
        text: "The url variable has global scope and line 02 throws an error.",
      },
      {
        letter: "B",
        text: "The url variable has global scope and line 02 executes correctly.",
      },
      {
        letter: "C",
        text: "The url variable has local scope and line 02 executes correctly.",
      },
      {
        letter: "D",
        text: "The url variable has local scope and line 02 throws an error.",
      },
    ],
    answer: "B",
  },
  {
    id: "q21",
    isMultiple: false,
    imageUrl: "pics/img11.png",
    question:
      'What is the return value of msg when getAvailableilityMessage( " newUserName " ) is executed and getAvailableility( " newUserName " ) returns false?',
    options: [
      { letter: "A", text: '" newUserName "' },
      { letter: "B", text: '" msg is not defined "' },
      { letter: "C", text: "undefined" },
      { letter: "D", text: '" Username available "' },
    ],
    answer: "C",
  },
  {
    id: "q22",
    isMultiple: false,
    imageUrl: "pics/img12.png",
    question:
      'Which JavaScript statement results in changing " Leo " to " The Lion " ?',
    options: [
      {
        letter: "A",
        text: "document.querySelectorAll( \' #main #Leo \' ).innerHTML = \' The Lion \' ;",
      },
      {
        letter: "B",
        text: "document.querySelector( \' #main li:second-child \' ).innerHTML = \' The Lion \' ;",
      },
      {
        letter: "C",
        text: "document.querySelectorAll( \' #main li,Leo \' ).innerHTML = \' The Lion \' ;",
      },
      {
        letter: "D",
        text: "document.querySelector( \' #main li:nth-child(1) \' ).innerHTML = \' The Lion \' ;",
      },
    ],
    answer: "D",
  },
  {
    id: "q23",
    isMultiple: false,
    question:
      "HTML: \n< p > The current status of an Order: < span id= \" status \" > In Progress < /span > < /p > Which JavaScript statement changes \' In Progress \' to \' Completed \' ?",
    options: [
      {
        letter: "A",
        text: "document.getElementById( \" .status \" ).innerHTML = \' Completed \' ;",
      },
      {
        letter: "B",
        text: "document.getElementById( \" #status \" ).innerHTML = \' Completed \' ;",
      },
      {
        letter: "C",
        text: "document.getElementById( \" status \" ).innerHTML = \' Completed \' ;",
      },
      {
        letter: "D",
        text: "document.getElementById( \" status \" ).Value = \' Completed \' ;",
      },
    ],
    answer: "C",
  },
  {
    id: "q24",
    isMultiple: false,
    question:
      "A developer needs the function personalizeWebsiteContent to run when the webpage is fully loaded (HTML and all external resources).\nWhich implementation should be used?",
    options: [
      {
        letter: "A",
        text: "Add a handler to the personalizeWebsiteContent script to handle the DOMContentLoaded event",
      },
      {
        letter: "B",
        text: "Add a listener to the window object to handle the load event",
      },
      {
        letter: "C",
        text: "Add a listener to the window object to handle the DOMContentLoaded event",
      },
      {
        letter: "D",
        text: "Add a handler to the personalizeWebsiteContent script to handle the load event",
      },
    ],
    answer: "B",
  },
  {
    id: "q25",
    isMultiple: true,
    question:
      "Refer to the code below. Which two functions can replace line 01 and return 58 to sum?",
    code: `const addBy = ?

const addByEight = addBy(8);
const sum = addByEight(50);`,
    options: [
      {
        letter: "A",
        text: `const addBy = function(num1) {
        return function(num2) {
            return num1 + num2;
        }
    }`,
      },
      {
        letter: "B",
        text: `const addBy = function(num1) {
        return num1 * num2;
    }`,
      },
      {
        letter: "C",
        text: `const addBy = (num1) => num1 + num2;`,
      },
      {
        letter: "D",
        text: `const addBy = (num1) => {
        return function(num2) {
            return num1 + num2;
        }
    }`,
      },
    ],

    answer: ["A", "D"],
  },
  {
    id: "q26",
    isMultiple: false,
    question: "What is the value of result when line 10 executes?",
    code: `function Person() {
this.firstName = "John";
}
Person.prototype = {
job: x => "Developer"
};
const myFather = new Person();
const result = myFather.firstName + " " + myFather.job();`,
    options: [
      { letter: "A", text: "Error: myFather.job is not a function" },
      { letter: "B", text: "undefined Developer" },
      { letter: "C", text: "John Developer" },
      { letter: "D", text: "John undefined" },
    ],
    answer: "A",
  },
  {
    id: "q27",
    isMultiple: true,
    question:
      "Refer to the code declarations below:\nlet str1 = \' Java \' \nlet str2 = \' Script \' ; \nWhich three expressions return the string JavaScript?",
    options: [
      { letter: "A", text: "`${str1}${str2}`" },
      { letter: "B", text: "str1.concat(str2);" },
      { letter: "C", text: "const({str1, str2});" },
      { letter: "D", text: "str1 + str2;" },
      { letter: "E", text: "str1.join(str2);" },
    ],
    answer: ["A", "B", "D"],
  },
  {
    id: "q28",
    isMultiple: false,
    question:
      'A developer removes the HTML class attribute from the checkout button, so now it is simply: \n< button > Checkout < /button > \nThere is a test to verify the existence of the checkout button, however it looks for a button with class= " blue " \n. The test fails because no such button is found. \nWhich type of test category describes this test?',
    options: [
      { letter: "A", text: "True negative" },
      { letter: "B", text: "True positive" },
      { letter: "C", text: "False negative" },
      { letter: "D", text: "False positive" },
    ],
    answer: "D",
  },
  {
    id: "q29",
    isMultiple: true,
    question:
      "Given a value, which three options can a developer use to detect if the value is NaN?\nChoose 3 answers.",
    options: [
      { letter: "A", text: "value === Number.NaN" },
      { letter: "B", text: "Number.isNaN(value)" },
      { letter: "C", text: "value == NaN" },
      { letter: "D", text: "value !== value" },
      { letter: "E", text: "Object.is(value, NaN)" },
    ],
    answer: ["B", "D", "E"],
  },
  {
    id: "q30",
    isMultiple: false,
    question:
      "Refer to the code: \nconst pi = 3.1415926; \nWhat is the data type of pi?",
    options: [
      { letter: "A", text: "Float" },
      { letter: "B", text: "Double" },
      { letter: "C", text: "Decimal" },
      { letter: "D", text: "Number" },
    ],
    answer: "D",
  },
];
