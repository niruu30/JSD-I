const quizData = [
    {
        id: "q1",
        isMultiple: false,
        question: "A developer initiates a server with the file server.js and adds dependencies in the source code ' s package.json that are required to run the server. Which command should the developer run to start the server locally?",
        options: [
            { letter: "A", text: "npm start server.js" },
            { letter: "B", text: "npm start" },
            { letter: "C", text: "start server.js" },
            { letter: "D", text: "node start" }
        ],
        answer: "B"
    },
    {
        id: "q2",
        isMultiple: false,
        question: "Value of: true + 3 + ' 100 ' + null",
        options: [
            { letter: "A", text: "\" 4100 \"" },
            { letter: "B", text: "104" },
            { letter: "C", text: "\"4100null\"" },
            { letter: "D", text: "\"220null\"" }
        ],
        answer: "C"
    },
    {
        id: "q3",
        isMultiple: false,
        question: "Considering type coercion, what does the following expression evaluate to? true + ' 13 ' + NaN",
        options: [
            { letter: "A", text: "\' 113NaN \'" },
            { letter: "B", text: "\' true13NaN \'" },
            { letter: "C", text: "14" },
            { letter: "D", text: "\' true13 \'" }
        ],
        answer: "B"
    },
    {
        id: "q4",
        isMultiple: false,
        question: "A developer needs to debug a Node.js web server because a runtime error keeps occurring at one of the endpoints. The developer wants to test the endpoint on a local machine and make the request against a local server to look at the behavior. In the source code, the server.js file will start the server. The developer wants to debug the Node.js server only using the terminal. \nWhich command can the developer use to open the CLI debugger in their current terminal window? \n(With corrected typing errors: node_inspect # node inspect, node_start_inspect # node start inspect.)",
        options: [
            { letter: "A", text: "node start inspect server.js" },
            { letter: "B", text: "node inspect server.js" },
            { letter: "C", text: "node server.js --inspect" },
            { letter: "D", text: "node -i server.js" }
        ],
        answer: "B"
    },
    {
        id: "q5",
        isMultiple: false,
        question: "Which statement accurately describes an aspect of promises?",
        options: [
            { letter: "A", text: "Arguments for the callback function passed to .then() are optional." },
            { letter: "B", text: ".then() cannot be added after a catch." },
            { letter: "C", text: ".then() manipulates and returns the original promise." },
            { letter: "D", text: "In a .then() function, returning results is not necessary since callbacks will catch the result of a previous promise." }
        ],
        answer: "A"
    },
    {
        id: "q6",
        isMultiple: true,
        question: "A developer is leading the creation of a new web server for their team that will fulfill API requests from an existing client. The team wants a web server that runs on Node.js, and they want to use the new web framework Minimalist.js. The lead developer wants to advocate for a more seasoned back-end framework that already has a community around it.\nWhich two frameworks could the lead developer advocate for?",
        options: [
            { letter: "A", text: "Angular" },
            { letter: "B", text: "Next" },
            { letter: "C", text: "Gatsby" },
            { letter: "D", text: "Next.js" }
        ],
        answer: ["B", "D"]
    },
    {
        id: "q7",
        isMultiple: false,
        question: "A developer imports: \nimport printPrice from ' /path/PricePrettyPrint.js ' ; \nWhat must be true about printPrice for this import to work?",
        options: [
            { letter: "A", text: "printPrice must be a named export" },
            { letter: "B", text: "printPrice must be an all export" },
            { letter: "C", text: "printPrice must be the default export" },
            { letter: "D", text: "printPrice must be a multi export" }
        ],
        answer: "C"
    },
    {
        id: "q8",
        isMultiple: true,
        question: "Which three browser specific APIs are available for developers to persist data between page loads?",
        options: [
            { letter: "A", text: "localStorage" },
            { letter: "B", text: "indexedDB" },
            { letter: "C", text: "cookies" },
            { letter: "D", text: "global variables" },
            { letter: "E", text: "IIFEs" }
        ],
        answer: ["A", "B", "C"]
    },
    {
        id: "q9",
        isMultiple: true,
        question: "const str = ' Salesforce ' ; \nWhich two statements result in the word \" Sales \" ?",
        options: [
            { letter: "A", text: "str.substring(0, 5);" },
            { letter: "B", text: "str.substr(s, 5);" },
            { letter: "C", text: "str.substring(0, 5);" },
            { letter: "D", text: "str.substr(0, 5);" }
        ],
        answer: ["A", "D"]
    },
    {
        id: "q10",
        isMultiple: true,
        question: "Refer to the following array: \nlet arr = [1, 2, 3, 4, 5]; \nWhich two lines of code result in a second array, arr2, created such that arr2 is a reference to arr?",
        options: [
            { letter: "A", text: "let arr2 = arr.slice(0, 5);" },
            { letter: "B", text: "let arr2 = Array.from(arr);" },
            { letter: "C", text: "let arr2 = arr;" },
            { letter: "D", text: "let arr2 = arr.sort();" }
        ],
        answer: ["C", "D"]
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
            { letter: "D", text: "\' London \'" }
        ],
        answer: "B"
    },
    {
        id: "q12",
        isMultiple: true,
        imageUrl: "pics/img2.png",
        question: "A developer needs to dispatch a custom event called update to send information about recordId. Which two options can be inserted at line 02?",
        options: [
            { letter: "A", text: "{ type: \' update \' , recordId: \' 123abc \' }" },
            { letter: "B", text: "\' update \' , { detail: { recordId: \' 123abc \' } }" },
            { letter: "C", text: "\' update \' , \' 123abc \'" },
            { letter: "D", text: "\' update \' , { recordId: \' 123abc \' }" }
        ],
        answer: ["B", "D"]
    },
    {
        id: "q13",
        isMultiple: false,
        imageUrl: "pics/img3.png",
        question: "Which code change should be done for the console to log the following when \" Click me! \" is clicked? \nRow log \nTable log",
        options: [
            { letter: "A", text: "Change line 14 to elem.addEventListener( \' click \' , printMessage, true);" },
            { letter: "B", text: "Remove lines 13 and 14" },
            { letter: "C", text: "Change line 10 to event.stopPropagation(false);" },
            { letter: "D", text: "Remove line 10" }
        ],
        answer: "D"
    },
    {
        id: "q14",
        isMultiple: true,
        imageUrl: "pics/img4.png",
        question: "Which two assert statements are valid tests for this function?",
        options: [
            { letter: "A", text: "console.assert(sum3([1, \' 2 \' ]) == 12);" },
            { letter: "B", text: "console.assert(sum3([ \' hello \' , 2, 3, 4]) === NaN);" },
            { letter: "C", text: "console.assert(sum3([-3, 2]) === -1);" },
            { letter: "D", text: "console.assert(sum3([0]) === 0);" }
        ],
        answer: ["C", "D"]
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
            { letter: "D", text: "21435" }
        ],
        answer: "A"
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
            { letter: "D", text: "Jackie got 70% on test." }
        ],
        answer: "C"
    },
    {
        id: "q17",
        isMultiple: false,
        imageUrl: "pics/img7.png",
        question: "This does not print \" Hello World \" .\nWhat change is needed?",
        options: [
            { letter: "A", text: "Change line 2 to console.log( ' Hello ' , name());" },
            { letter: "B", text: "Change line 7 to }();" },
            { letter: "C", text: "Change line 9 to sayHello(world)();" },
            { letter: "D", text: "Change line 5 to function world() {" }
        ],
        answer: "A"
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
            { letter: "D", text: "4 5 1 2 3" }
        ],
        answer: "A"
    },
    {
        id: "q19",
        isMultiple: false,
        imageUrl: "pics/img9.png",
        question: "A developer is required to write a function that calculates the sum of elements in an array but is getting undefined every time the code is executed. The developer needs to find what is missing in the code below.\nWhich line replacement makes the code work as expected?",
        options: [
            { letter: "A", text: "if(arr.length == 0) { return 0; }" },
            { letter: "B", text: "result = result + current;" },
            { letter: "C", text: "arr.map((result, current) = > {" },
            { letter: "D", text: "return result;" }
        ],
        answer: "D"
    },
    {
        id: "q20",
        isMultiple: false,
        imageUrl: "pics/img10.png",
        question: "What happens when the code executes?",
        options: [
            { letter: "A", text: "The url variable has global scope and line 02 throws an error." },
            { letter: "B", text: "The url variable has global scope and line 02 executes correctly." },
            { letter: "C", text: "The url variable has local scope and line 02 executes correctly." },
            { letter: "D", text: "The url variable has local scope and line 02 throws an error." }
        ],
        answer: "B"
    },
    {
        id: "q21",
        isMultiple: false,
        imageUrl: "pics/img11.png",
        question: "What is the return value of msg when getAvailableilityMessage( \" newUserName \" ) is executed and getAvailableility( \" newUserName \" ) returns false?",
        options: [
            { letter: "A", text: "\" newUserName \"" },
            { letter: "B", text: "\" msg is not defined \"" },
            { letter: "C", text: "undefined" },
            { letter: "D", text: "\" Username available \"" }
        ],
        answer: "C"
    },
    {
        id: "q22",
        isMultiple: false,
        imageUrl: "pics/img12.png",
        question: "Which JavaScript statement results in changing \" Leo \" to \" The Lion \" ?",
        options: [
            { letter: "A", text: "document.querySelectorAll( \' #main #Leo \' ).innerHTML = \' The Lion \' ;" },
            { letter: "B", text: "document.querySelector( \' #main li:second-child \' ).innerHTML = \' The Lion \' ;" },
            { letter: "C", text: "document.querySelectorAll( \' #main li,Leo \' ).innerHTML = \' The Lion \' ;" },
            { letter: "D", text: "document.querySelector( \' #main li:nth-child(1) \' ).innerHTML = \' The Lion \' ;" }
        ],
        answer: "D"
    },
    {
        id: "q23",
        isMultiple: false,
        question: "HTML: \n< p > The current status of an Order: < span id= \" status \" > In Progress < /span > < /p > Which JavaScript statement changes \' In Progress \' to \' Completed \' ?",
        options: [
            { letter: "A", text: "document.getElementById( \" .status \" ).innerHTML = \' Completed \' ;" },
            { letter: "B", text: "document.getElementById( \" #status \" ).innerHTML = \' Completed \' ;" },
            { letter: "C", text: "document.getElementById( \" status \" ).innerHTML = \' Completed \' ;" },
            { letter: "D", text: "document.getElementById( \" status \" ).Value = \' Completed \' ;" }
        ],
        answer: "C"
    },
    {
        id: "q24",
        isMultiple: false,
        question: "A developer needs the function personalizeWebsiteContent to run when the webpage is fully loaded (HTML and all external resources).\nWhich implementation should be used?",
        options: [
            { letter: "A", text: "Add a handler to the personalizeWebsiteContent script to handle the DOMContentLoaded event" },
            { letter: "B", text: "Add a listener to the window object to handle the load event" },
            { letter: "C", text: "Add a listener to the window object to handle the DOMContentLoaded event" },
            { letter: "D", text: "Add a handler to the personalizeWebsiteContent script to handle the load event" }
        ],
        answer: "B"
    },
    {
        id: "q25",
        isMultiple: true,
        question: "Refer to the code below: \nconst addBy = ? \nconst addByEight = addBy(8); \nconst sum = addByEight(50); \nWhich two functions can replace line 01 and return 58 to sum?",
        options: [
            { letter: "A", text: "const addBy = function(num1) {\nreturn function(num2) {\nreturn num1 + num2;\n}\n}" },
            { letter: "B", text: "const addBy = function(num1) {\nreturn num1 * num2;\n}" },
            { letter: "C", text: "const addBy = (num1) = > num1 + num2;" },
            { letter: "D", text: "(Corrected for typing errors)\nconst addBy = (num1) = > {\nreturn function(num2) {\nreturn num1 + num2;\n}\n}" }
        ],
        answer: ["A", "D"]
    },
    {
        id: "q26",
        isMultiple: false,
        question: "What is the value of result when line 10 executes?",
        options: [
            { letter: "A", text: "Error: myFather.job is not a function" },
            { letter: "B", text: "undefined Developer" },
            { letter: "C", text: "John Developer" },
            { letter: "D", text: "John undefined" }
        ],
        answer: "A"
    },
    {
        id: "q27",
        isMultiple: true,
        question: "Refer to the code declarations below:\nlet str1 = \' Java \' \nlet str2 = \' Script \' ; \nWhich three expressions return the string JavaScript?",
        options: [
            { letter: "A", text: "`${str1}${str2}`" },
            { letter: "B", text: "str1.concat(str2);" },
            { letter: "C", text: "const({str1, str2});" },
            { letter: "D", text: "str1 + str2;" },
            { letter: "E", text: "str1.join(str2);" }
        ],
        answer: ["A", "B", "D"]
    },
    {
        id: "q28",
        isMultiple: false,
        question: "A developer removes the HTML class attribute from the checkout button, so now it is simply: \n< button > Checkout < /button > \nThere is a test to verify the existence of the checkout button, however it looks for a button with class= \" blue \" \n. The test fails because no such button is found. \nWhich type of test category describes this test?",
        options: [
            { letter: "A", text: "True negative" },
            { letter: "B", text: "True positive" },
            { letter: "C", text: "False negative" },
            { letter: "D", text: "False positive" }
        ],
        answer: "D"
    },
    {
        id: "q29",
        isMultiple: true,
        question: "Given a value, which three options can a developer use to detect if the value is NaN?\nChoose 3 answers.",
        options: [
            { letter: "A", text: "value === Number.NaN" },
            { letter: "B", text: "Number.isNaN(value)" },
            { letter: "C", text: "value == NaN" },
            { letter: "D", text: "value !== value" },
            { letter: "E", text: "Object.is(value, NaN)" }
        ],
        answer: ["B", "D", "E"]
    },
    {
        id: "q30",
        isMultiple: false,
        question: "Refer to the code: \nconst pi = 3.1415926; \nWhat is the data type of pi?",
        options: [
            { letter: "A", text: "Float" },
            { letter: "B", text: "Double" },
            { letter: "C", text: "Decimal" },
            { letter: "D", text: "Number" }
        ],
        answer: "D"
    },
    {
        id: "q31",
        isMultiple: true,
        question: "A developer wrote the following code to test a sum3 function that takes in an array of numbers and returns the sum of the first three numbers in the array. The test passes:\nlet res = sum3([1, 2, 3]);\nconsole.assert(res === 6);\n\nres = sum3([1, 2, 3, 4]);\nconsole.assert(res === 6);\n\nA different developer made changes to the behavior of sum3 to instead sum all of the numbers present in the array.\nWhich two results occur when running the test on the updated sum3 function?",
        options: [
            { letter: "A", text: "The first assertion fails." },
            { letter: "B", text: "The second assertion passes." },
            { letter: "C", text: "The second assertion fails." },
            { letter: "D", text: "The first assertion passes." }
        ],
        answer: ["C", "D"]
    },
    {
        id: "q32",
        isMultiple: false,
        question: "Refer to the following object:\nconst dog = {\n    firstName: 'Beau',\n    lastName: 'Boo',\n    get fullName() {\n        return this.firstName + ' ' + this.lastName;\n    }\n};\n\nHow can a developer access the fullName property for dog?",
        options: [
            { letter: "A", text: "dog.fullName" },
            { letter: "B", text: "dog.fullName()" },
            { letter: "C", text: "dog.get.fullName" },
            { letter: "D", text: "dog.function.fullName()" }
        ],
        answer: "A"
    },
    {
        id: "q33",
        isMultiple: false,
        question: "A developer creates a class that represents a news story based on the requirements that a Story should have a body, author, and view count. The code is shown below:\nclass Story {\n    // Insert code here\n    this.body = body;\n    this.author = author;\n    this.viewCount = viewCount;\n}\n\nWhich statement should be inserted in the placeholder to allow for a variable to be set to a new instance of a Story with the three attributes correctly populated?",
        options: [
            { letter: "A", text: "constructor() {" },
            { letter: "B", text: "super(body, author, viewCount) {" },
            { letter: "C", text: "function Story(body, author, viewCount) {" },
            { letter: "D", text: "constructor(body, author, viewCount) {" }
        ],
        answer: "D"
    },
    {
        id: "q34",
        isMultiple: false,
        question: "Refer to the code below:\n\nflag();\nanotherFlag();\n\nfunction flag() {\n    console.log(\"flag\");\n}\n\nconst anotherFlag = () => {\n    console.log(\"flag\");\n}\n\nWhat is result of the code block?",
        options: [
            { letter: "A", text: "The console logs only 'flag'." },
            { letter: "B", text: "The console logs 'flag' and 'another flag'." },
            { letter: "C", text: "The console logs 'flag' and then an error is thrown." },
            { letter: "D", text: "An error is thrown." }
        ],
        answer: "C"
    },
    {
        id: "q35",
        isMultiple: false,
        question: "A developer wrote the following code:\nlet x = object.value;\n\ntry {\n    handleObjectValue(x);\n} catch(error) {\n    handleError(error);\n}\n\nThe developer has a getNextValue function to execute after handleObjectValue(), but does not want to execute getNextValue() if an error occurs. How can the developer change the code to ensure this behavior?",
        options: [
            { letter: "A", text: "try {\n    handleObjectValue(x);\n} catch(error) {\n    handleError(error);\n} then {\n    getNextValue();\n}" },
            { letter: "B", text: "try {\n    handleObjectValue(x);\n    getNextValue();\n} catch(error) {\n    handleError(error);\n}" },
            { letter: "C", text: "try {\n    handleObjectValue(x);\n} catch(error) {\n    handleError(error);\n}\ngetNextValue();" },
            { letter: "D", text: "try {\n    handleObjectValue(x);\n} catch(error) {\n    handleError(error);\n} finally {\n    getNextValue();\n}" }
        ],
        answer: "B"
    },
    {
        id: "q36",
        isMultiple: false,
        question: "A team at Universal Containers works on a big project and uses Yarn to deal with the project's dependencies. A developer added a dependency to manipulate dates and pushed the updates to the remote repository. The rest of the team complains that the dependency does not get downloaded when they execute yarn.\n\nWhat could be the reason for this?",
        options: [
            { letter: "A", text: "The developer missed the option --add when adding the dependency." },
            { letter: "B", text: "The developer added the dependency as a dev dependency, and NODE_ENV is set to production." },
            { letter: "C", text: "The developer added the dependency as a dev dependency, and YARN_ENV is set to production." },
            { letter: "D", text: "The developer missed the option --save when adding the dependency." }
        ],
        answer: "B"
    },
    {
        id: "q37",
        isMultiple: false,
        question: "Given the code:\nconst copy = JSON.stringify([new String('false'), new Boolean(false), undefined]);\n\nWhat is the value of copy?",
        options: [
            { letter: "A", text: "'[\"false\", false, null]'" },
            { letter: "B", text: "'[false, {}]'" },
            { letter: "C", text: "'[\"false\", false, undefined]'" },
            { letter: "D", text: "'[\"false\", {}]'" }
        ],
        answer: "A"
    },
    {
        id: "q38",
        isMultiple: false,
        question: "Refer to the following code:\nlet a = \"*\";\nlet b = \"**\";\n// x = 3;\nconsole.log(a);\n\nWhat is displayed when the code executes?",
        options: [
            { letter: "A", text: "ReferenceError: a is not defined" },
            { letter: "B", text: "*" },
            { letter: "C", text: "undefined" },
            { letter: "D", text: "null" }
        ],
        answer: "B"
    },
    {
        id: "q39",
        isMultiple: false,
        question: "Refer to the following code:\n<html lang=\"en\">\n<body>\n    <button class=\"secondary\">Save draft</button>\n    <button class=\"primary\">Save and close</button>\n</body>\n<script>\nfunction displaySaveMessage(event) {\n    console.log('Save message.');\n}\n\nfunction displaySuccessMessage(event) {\n    console.log('Success message.');\n}\n\nwindow.onload = function() {\n    document.querySelector('.secondary')\n        .addEventListener('click', displaySaveMessage, true);\n    document.querySelector('.primary')\n        .addEventListener('click', displaySuccessMessage, true);\n}\n</script>\n</html>\n\nWhich messages are displayed when the code executes?",
        options: [
            { letter: "A", text: "Outer message" },
            { letter: "B", text: "Outer message\nInner message" },
            { letter: "C", text: "Inner message" },
            { letter: "D", text: "Inner message\nOuter message" }
        ],
        answer: "B"
    },
    {
        id: "q40",
        isMultiple: true,
        question: "Which two console logs output NaN?",
        options: [
            { letter: "A", text: "console.log(10 / 0);" },
            { letter: "B", text: "console.log(parseInt('two'));" },
            { letter: "C", text: "console.log(10 / Number('5'));" },
            { letter: "D", text: "console.log(10 / 'five');" }
        ],
        answer: ["B", "D"]
    },
    {
        id: "q41",
        isMultiple: false,
        question: "Refer to the code below:\n<html>\n<body>\n    <div id=\"logo\">Hello Logo!</div>\n    <button id=\"test\">Click me</button>\n</body>\n<script>\nfunction printMessage(event) {\n    console.log('This is a test message');\n}\n\nlet el = document.getElementById('test');\nel.addEventListener('click', printMessage, false);\n</script>\n</html>\n\nWhich action should be done?",
        options: [
            { letter: "A", text: "Add event.removeEventListener(); to the window.onload event handler." },
            { letter: "B", text: "Add event.removeEventListener(); to the printMessage function." },
            { letter: "C", text: "Add event.stopPropagation(); to the printMessage function." },
            { letter: "D", text: "Add event.stopPropagation(); to the window.onload event handler." }
        ],
        answer: "C"
    },
    {
        id: "q42",
        isMultiple: false,
        question: "Refer to the code below:\nlet o = {\n    get js() {\n        let city1 = String('St. Louis');\n        let city2 = String('New York');\n\n        return {\n            firstCity: city1.toLowerCase(),\n            secondCity: city2.toLowerCase(),\n        };\n    }\n};\n\nWhat value can a developer expect when referencing o.js.secondCity?",
        options: [
            { letter: "A", text: "undefined" },
            { letter: "B", text: "An error" },
            { letter: "C", text: "'New York'" },
            { letter: "D", text: "'new york'" }
        ],
        answer: "D"
    },
    {
        id: "q43",
        isMultiple: false,
        question: "Refer to the code below:\nnew Promise((resolve, reject) => {\n    const fraction = Math.random();\n    if (fraction > 0.5) reject('fraction > 0.5, ' + fraction);\n    resolve(fraction);\n})\n.then(() => console.log('resolved'))\n.catch((error) => console.error(error))\n.finally(() => console.log('when am I called?'));\n\nWhen does Promise.finally get called?",
        options: [
            { letter: "A", text: "When rejected" },
            { letter: "B", text: "When resolved and settled" },
            { letter: "C", text: "When resolved" },
            { letter: "D", text: "When resolved or rejected" }
        ],
        answer: "D"
    },
    {
        id: "q44",
        isMultiple: false,
        question: "Refer to the code:\nlet array = [1, 2, 3, 4, 4, 5, 4, 4];\nfor (let i = 0; i < array.length; i++) {\n    if (array[i] === 4) {\n        array.splice(i, 1);\n        i--;\n    }\n}\n\nWhat is the value of array after execution?",
        options: [
            { letter: "A", text: "[1, 2, 3, 4, 5, 4]" },
            { letter: "B", text: "[1, 2, 3, 5]" },
            { letter: "C", text: "[1, 2, 3, 4, 5, 4, 4]" },
            { letter: "D", text: "[1, 2, 3, 4, 4, 5, 4]" }
        ],
        answer: "B"
    },
    {
        id: "q45",
        isMultiple: false,
        question: "Refer to the code below:\nlet total = 10;\nconst interval = setInterval(() => {\n    total++;\n    clearInterval(interval);\n    total++;\n}, 0);\ntotal++;\nconsole.log(total);\n\nConsidering that JavaScript is single-threaded, what is the output after the code executes?",
        options: [
            { letter: "A", text: "11" },
            { letter: "B", text: "12" },
            { letter: "C", text: "10" },
            { letter: "D", text: "13" }
        ],
        answer: "A"
    },
    {
        id: "q46",
        isMultiple: false,
        question: "A developer at Universal Containers creates a new landing page based on HTML, CSS, and JavaScript. To ensure that visitors have a good experience, a script named personalizeWebsiteContent needs to be executed to do some custom initialization when the webpage is fully loaded with HTML content and all related files.\n\nWhich statement should be used to call personalizeWebsiteContent based on the above business requirement?",
        options: [
            { letter: "A", text: "document.addEventListener('DOMContentLoaded', personalizeWebsiteContent);" },
            { letter: "B", text: "document.addEventListener('onDOMContentLoaded', personalizeWebsiteContent);" },
            { letter: "C", text: "window.addEventListener('load', personalizeWebsiteContent);" },
            { letter: "D", text: "window.addEventListener('onload', personalizeWebsiteContent);" }
        ],
        answer: "C"
    },
    {
        id: "q47",
        isMultiple: false,
        question: "Refer to the following code:\nfunction changeValue(obj) {\n    obj.value = obj.value / 2;\n}\n\nconst objA = { value: 10 };\nconst objB = objA;\n\nchangeValue(objB);\nconst result = objA.value;\n\nWhat is the value of result after the code executes?",
        options: [
            { letter: "A", text: "low" },
            { letter: "B", text: "10" },
            { letter: "C", text: "5" },
            { letter: "D", text: "undefined" }
        ],
        answer: "C"
    },
    {
        id: "q48",
        isMultiple: false,
        question: "A developer has an ErrorHandler module that contains multiple functions.\n\nWhat kind of export should be leveraged so that multiple functions can be used?",
        options: [
            { letter: "A", text: "Multi" },
            { letter: "B", text: "Named" },
            { letter: "C", text: "Default" },
            { letter: "D", text: "All" }
        ],
        answer: "B"
    },
    {
        id: "q49",
        isMultiple: false,
        question: "Given the following code:\nlet x = ('15' + 10) * 2;\n\nWhat is the value of x?",
        options: [
            { letter: "A", text: "1520" },
            { letter: "B", text: "3020" },
            { letter: "C", text: "50" },
            { letter: "D", text: "35" }
        ],
        answer: "B"
    },
    {
        id: "q50",
        isMultiple: false,
        question: "At Universal Containers, every team has its own way of copying JavaScript objects. The code snippet shows an implementation from one team:\nfunction Person() {\n    this.firstName = \"John\";\n    this.lastName = \"Doe\";\n    this.name = () => {\n        console.log(`Hello ${this.firstName} ${this.lastName}`);\n    };\n}\n\nconst john = new Person();\nconst dan = JSON.parse(JSON.stringify(john));\ndan.firstName = 'Dan';\ndan.name();\n\nWhat is the output of the code execution?",
        options: [
            { letter: "A", text: "Hello John Doe" },
            { letter: "B", text: "Hello Dan Doe" },
            { letter: "C", text: "TypeError: dan.name is not a function" },
            { letter: "D", text: "Hello Dan" }
        ],
        answer: "C"
    },
    {
        id: "q51",
        isMultiple: true,
        question: "Refer to the following code:\nlet codeName = 'Bond';\nlet sampleText = `The name is ${codeName}, Jim ${codeName}`;\n\nA developer is trying to determine if a certain substring is part of a string.\nWhich three code statements return true?",
        options: [
            { letter: "A", text: "sampleText.includes('Jim');" },
            { letter: "B", text: "sampleText.includes('The', 1);" },
            { letter: "C", text: "sampleText.includes('Jim', 4);" },
            { letter: "D", text: "sampleText.indexOf('Bond') !== -1;" },
            { letter: "E", text: "sampleText.substring('Jim');" }
        ],
        answer: ["A", "C", "D"]
    },
    {
        id: "q52",
        isMultiple: false,
        question: "Refer to the following code:\nlet obj = {\n    foo: 1,\n    bar: 2\n};\nlet output = [];\nfor (let something in obj) {\n    output.push(something);\n}\nconsole.log(output);\n\nWhat is the output?",
        options: [
            { letter: "A", text: "[\"bar\", \"foo\"]" },
            { letter: "B", text: "[1, 2]" },
            { letter: "C", text: "[\"foo\", \"bar\"]" },
            { letter: "D", text: "[\"foo:1\", \"bar:2\"]" }
        ],
        answer: "C"
    },
    {
        id: "q53",
        isMultiple: false,
        question: "Refer to the following code:\nconst myFunction = arr => {\n    return arr.reduce((result, current) => {\n        return result + current;\n    }, 10);\n};\n\nWhat is the output of this function when called with an empty array?",
        options: [
            { letter: "A", text: "Returns 0" },
            { letter: "B", text: "Throws an error" },
            { letter: "C", text: "Returns NaN" },
            { letter: "D", text: "Returns 10" }
        ],
        answer: "D"
    },
    {
        id: "q54",
        isMultiple: true,
        question: "Which two code snippets show working examples of a recursive function?",
        options: [
            { letter: "A", text: "const sumToTen = numVar => {\n    if (numVar < 0) return;\n    return sumToTen(numVar + 1);\n};" },
            { letter: "B", text: "function factorial(numVar) {\n    if (numVar < 0) return;\n    if (numVar === 0) return 1;\n    return numVar - 1;\n}" },
            { letter: "C", text: "const factorial = numVar => {\n    if (numVar < 0) return;\n    if (numVar === 0) return 1;\n    return numVar * factorial(numVar - 1);\n};" },
            { letter: "D", text: "let countingDown = function(startNumber) {\n    if (startNumber > 0) {\n        console.log(startNumber);\n        return countingDown(startNumber - 1);\n    } else {\n        return startNumber;\n    }\n};" }
        ],
        answer: ["C", "D"]
    },
    {
        id: "q55",
        isMultiple: false,
        question: "A developer executes:\ndocument.cookie;\ndocument.cookie = 'key=John Smith';\n\nWhat is the behavior?",
        options: [
            { letter: "A", text: "Cookies are read and the key value is set, and all cookies are wiped." },
            { letter: "B", text: "Cookies are read and the key value is set, the remaining cookies are unaffected." },
            { letter: "C", text: "Cookies are read, but the key value is not set because the value is not URL encoded." },
            { letter: "D", text: "Cookies are not read because line 01 should be document.cookies, but the key value is set and all cookies are wiped." }
        ],
        answer: "B"
    },
    {
        id: "q56",
        isMultiple: true,
        question: "Refer to the code:\n\nfunction Animal(size, type) {\n    this.size = size || \"small\";\n    this.type = type || \"Animal\";\n    this.canTalk = false;\n}\n\nlet Pet = function (size, type, name, owner) {\n    Animal.call(this, size, type);\n    this.name = name;\n    this.owner = owner;\n}\n\nPet.prototype = Object.create(Animal.prototype);\nlet pet1 = new Pet();\nconsole.log(pet1);\n\nGiven the code above, which three properties are set pet1?\nChoose 3 answers.",
        options: [
            { letter: "A", text: "Owner" },
            { letter: "B", text: "Size" },
            { letter: "C", text: "canTalk" },
            { letter: "D", text: "Type" },
            { letter: "E", text: "Name" }
        ],
        answer: ["B", "C", "D"]
    },
    {
        id: "q57",
        isMultiple: true,
        question: "A developer has a fizzbuzz function that, when passed in a number, returns the following:\n* 'fizz' if the number is divisible by 3.\n* 'buzz' if the number is divisible by 5.\n* 'fizzbuzz' if the number is divisible by both 3 and 5.\n* Empty string '' if the number is divisible by neither 3 nor 5.\n\nWhich two test cases properly test scenarios for the fizzbuzz function?",
        options: [
            { letter: "A", text: "let res = fizzbuzz(true);\nconsole.assert(res === '');" },
            { letter: "B", text: "let res = fizzbuzz(3);\nconsole.assert(res === '');" },
            { letter: "C", text: "let res = fizzbuzz(5);\nconsole.assert(res === 'fizz');" },
            { letter: "D", text: "let res = fizzbuzz(15);\nconsole.assert(res === 'fizzbuzz');" }
        ],
        answer: ["A", "D"]
    },
    {
        id: "q58",
        isMultiple: false,
        question: "A page loads 50+ <div class=\"ad-library-item\"> elements, all ads. A developer wants to quickly and temporarily remove them.\n\nWhich option should the developer use?",
        options: [
            { letter: "A", text: "Use the browser console to execute a script that prevents the load event from firing." },
            { letter: "B", text: "Use the DOM inspector to prevent the load event from firing." },
            { letter: "C", text: "Use the browser console to execute a script that removes all elements containing the class ad-library-item." },
            { letter: "D", text: "Use the DOM inspector to remove all elements containing the class ad-library-item." }
        ],
        answer: "C"
    },
    {
        id: "q59",
        isMultiple: false,
        question: "Refer to the following code:\nfunction Monster() {\n    this.name = 'hello';\n}\nconst m = Monster();\n\nWhat happens due to the missing new keyword?",
        options: [
            { letter: "A", text: "The m variable is assigned the correct object." },
            { letter: "B", text: "window.name is assigned to 'hello' and the variable m remains undefined." },
            { letter: "C", text: "window.m is assigned the correct object." },
            { letter: "D", text: "The m variable is assigned the correct object but this.name remains undefined." }
        ],
        answer: "B"
    },
    {
        id: "q60",
        isMultiple: true,
        question: "Given two expressions var1 and var2, what are two valid ways to return the concatenation of the two expressions and ensure it is data type string?",
        options: [
            { letter: "A", text: "String(var1).concat(var2)" },
            { letter: "B", text: "String.concat(var1 + var2)" },
            { letter: "C", text: "var1 + var2" },
            { letter: "D", text: "var1.toString() + var2.toString()" }
        ],
        answer: ["A", "D"]
    },
    {
        id: "q61",
        isMultiple: false,
        question: "Refer to the code:\nfunction execute() {\n    return new Promise((resolve, reject) => reject());\n}\n\nlet promise = execute();\n\npromise\n    .then(() => console.log('Resolved1'))\n    .then(() => console.log('Resolved2'))\n    .then(() => console.log('Resolved3'))\n    .catch(() => console.log('Rejected'))\n    .then(() => console.log('Resolved4'));\n\nWhat is the result when the Promise in the execute function is rejected?",
        options: [
            { letter: "A", text: "Resolved1 Resolved2 Resolved3 Rejected Resolved4" },
            { letter: "B", text: "Rejected" },
            { letter: "C", text: "Resolved1 Resolved2 Resolved3 Resolved4" },
            { letter: "D", text: "Rejected Resolved4" }
        ],
        answer: "D"
    },
    {
        id: "q62",
        isMultiple: false,
        question: "Given the following code:\nlet x = null;\nconsole.log(typeof x);\n\nWhat is the output?",
        options: [
            { letter: "A", text: "\"object\"" },
            { letter: "B", text: "\"undefined\"" },
            { letter: "C", text: "\"x\"" },
            { letter: "D", text: "\"null\"" }
        ],
        answer: "A"
    },
    {
        id: "q63",
        isMultiple: true,
        question: "Refer to the following JavaScript:\nfunction Tiger() {\n    this.type = 'Cat';\n    this.size = 'large';\n}\n\nlet tony = new Tiger();\ntony.roar = () => {\n    console.log(\"They're great!\");\n};\n\nfunction Lion() {\n    this.type = 'Cat';\n    this.size = 'large';\n}\n\nlet leo = new Lion();\n// Insert code here\nleo.roar();\n\nWhich two statements could be inserted at the placeholder to enable leo.roar()?",
        options: [
            { letter: "A", text: "leo.roar = () => { console.log(\"They're pretty good!\"); };" },
            { letter: "B", text: "Object.assign(leo, tony);" },
            { letter: "C", text: "Object.assign(leo, Tiger);" },
            { letter: "D", text: "leo.prototype.roar = () => { console.log(\"They're pretty good!\"); };" }
        ],
        answer: ["A", "B"]
    },
    {
        id: "q64",
        isMultiple: false,
        question: "Which statement allows a developer to update the browser navigation history without a page refresh?",
        options: [
            { letter: "A", text: "window.customHistory.pushState(newStateObject, '', null);" },
            { letter: "B", text: "window.history.createState(newStateObject, '');" },
            { letter: "C", text: "window.history.pushState(newStateObject, '', null);" },
            { letter: "D", text: "window.history.updateState(newStateObject, '');" }
        ],
        answer: "C"
    },
    {
        id: "q65",
        isMultiple: false,
        question: "Refer to the following code:\nlet requestPromise = client.getRequest;\n\nrequestPromise().then((response) => {\n    handleResponse(response);\n});\n\nThe developer wants to gracefully handle errors from a Promise-based GET request.\nWhich code modification is correct?",
        options: [
            { letter: "A", text: "Wrap the requestPromise().then(...) call in a try/catch block." },
            { letter: "B", text: "Duplicate option A by wrapping the requestPromise().then(...) call in a try/catch block." },
            { letter: "C", text: "Add a .catch() handler to the Promise chain." },
            { letter: "D", text: "Use a .finally() handler to handle errors." }
        ],
        answer: "C"
    },
    {
        id: "q66",
        isMultiple: false,
        question: "A developer publishes a new version of a package with new features that do not break backward compatibility. The previous version number was 1.1.3.\n\nFollowing semantic versioning formats, what should the new package version number be?",
        options: [
            { letter: "A", text: "1.2.3" },
            { letter: "B", text: "1.1.4" },
            { letter: "C", text: "2.0.0" },
            { letter: "D", text: "1.2.0" }
        ],
        answer: "D"
    },
    {
        id: "q67",
        isMultiple: true,
        question: "A developer uses a parsed JSON string to work with user information as in the block below:\nconst userInformation = {\n    \"id\": \"user-01\",\n    \"email\": \"user01@universalcontainers.demo\",\n    \"age\": 25\n};\n\nWhich two options access the email attribute in the object?",
        options: [
            { letter: "A", text: "userInformation.email" },
            { letter: "B", text: "userInformation.get(\"email\")" },
            { letter: "C", text: "userInformation[\"email\"]" },
            { letter: "D", text: "userInformation[email]" }
        ],
        answer: ["A", "C"]
    },
    {
        id: "q68",
        isMultiple: false,
        question: "Refer to the following code:\nlet car1 = new Promise((_, reject) =>\n    setTimeout(reject, 2000, \"Car 1 crashed in\")\n);\n\nlet car2 = new Promise(resolve =>\n    setTimeout(resolve, 1500, \"Car 2 completed\")\n);\n\nlet car3 = new Promise(resolve =>\n    setTimeout(resolve, 3000, \"Car 3 completed\")\n);\n\nPromise.race([car1, car2, car3])\n    .then(value => {\n        let result = `${value} the race.`;\n    })\n    .catch(err => {\n        console.log(\"Race is cancelled.\", err);\n    });\n\nWhat is the value of result when Promise.race executes?",
        options: [
            { letter: "A", text: "Car 3 completed the race." },
            { letter: "B", text: "Car 2 completed the race." },
            { letter: "C", text: "Race is cancelled." },
            { letter: "D", text: "Car 1 crashed in the race." }
        ],
        answer: "B"
    },
    {
        id: "q69",
        isMultiple: false,
        question: "A developer writes the code below to return a message to a user attempting to register a new username. If the username is available, a variable named msg is declared and assigned a value on line 03.\n\nfunction getAvailabilityMessage(item) {\n    if (getAvailability(item)) {\n        var msg = \"Username available\";\n        return msg;\n    }\n}\n\nWhat is returned when the username is available?",
        options: [
            { letter: "A", text: "\"msg is not defined\"" },
            { letter: "B", text: "\"newUserName\"" },
            { letter: "C", text: "\"Username available\"" },
            { letter: "D", text: "undefined" }
        ],
        answer: "C"
    },
    {
        id: "q70",
        isMultiple: false,
        question: "Refer to the code:\nconsole.log('Start');\nPromise.resolve('Success').then(function(value) {\n    console.log('Success');\n});\nconsole.log('End');\n\nWhat is the output after the code executes successfully?",
        options: [
            { letter: "A", text: "Start\nSuccess\nEnd" },
            { letter: "B", text: "Start\nEnd\nSuccess" },
            { letter: "C", text: "End\nStart\nSuccess" },
            { letter: "D", text: "Success\nStart\nEnd" }
        ],
        answer: "B"
    },
    {
        id: "q71",
        isMultiple: false,
        question: "A developer publishes a new version of a package with bug fixes but no breaking changes. The old version number was 2.1.1.\n\nWhat should the new package version number be based on semantic versioning?",
        options: [
            { letter: "A", text: "2.1.2" },
            { letter: "B", text: "2.2.0" },
            { letter: "C", text: "2.2.1" },
            { letter: "D", text: "3.1.1" }
        ],
        answer: "A"
    },
    {
        id: "q72",
        isMultiple: false,
        question: "Universal Containers (UC) just launched a new landing page, but users complain that the website is slow. A developer found some functions that might cause this problem. To verify this, the developer decides to execute everything and log the time each of these three suspicious functions consumes.\n\nconsole.time('Performance');\n\nmaybeAHeavyFunction();\n\nthisCouldTakeTooLong();\n\norMaybeThisOne();\n\nconsole.timeEnd('Performance');\n\nWhich function can the developer use to obtain the time spent by every one of the three functions?",
        options: [
            { letter: "A", text: "console.timeLog()" },
            { letter: "B", text: "console.trace()" },
            { letter: "C", text: "console.timeStamp()" },
            { letter: "D", text: "console.getTime()" }
        ],
        answer: "A"
    },
    {
        id: "q73",
        isMultiple: false,
        question: "A developer wants to use a module named universalContainerslib and then call functions from it. How should a developer import every function from the module and then call the functions foo and bar?",
        options: [
            { letter: "A", text: "import * as lib from '/path/universalContainerslib.js';\nlib.foo();\nlib.bar();" },
            { letter: "B", text: "import * from '/path/universalContainerslib.js';\nuniversalContainerslib.foo();\nuniversalContainerslib.bar();" },
            { letter: "C", text: "import all from '/path/universalContainerslib.js';\nuniversalContainerslib.foo();\nuniversalContainerslib.bar();" },
            { letter: "D", text: "import { foo, bar } from '/path/universalContainerslib.js';\nfoo();\nbar();" }
        ],
        answer: "A"
    },
    {
        id: "q74",
        isMultiple: true,
        question: "Refer to the code:\n\nfunction Animal(size, type) {\n    this.size = size || \"small\";\n    this.type = type || \"Animal\";\n    this.canTalk = false;\n}\n\nlet Pet = function (size, type, name, owner) {\n    Animal.call(this, size, type);\n    this.name = name;\n    this.owner = owner;\n}\n\nPet.prototype = Object.create(Animal.prototype);\nlet pet1 = new Pet();\nconsole.log(pet1);\n\nGiven the code above, which three properties are set pet1?\nChoose 3 answers.",
        options: [
            { letter: "A", text: "Owner" },
            { letter: "B", text: "Size" },
            { letter: "C", text: "canTalk" },
            { letter: "D", text: "Type" },
            { letter: "E", text: "Name" }
        ],
        answer: ["B", "C", "D"]
    },
    {
        id: "q75",
        isMultiple: true,
        question: "Refer to the code below:\nx = 3.14;\n\nfunction myFunction() {\n    'use strict';\n    y = x;\n}\n\nz = x;\nmyFunction();\n\nConsidering the implications of 'use strict' on line 04, which three statements describe the execution of the code?",
        options: [
            { letter: "A", text: "'use strict' is hoisted, so it has an effect on all lines." },
            { letter: "B", text: "z is equal to 3.14." },
            { letter: "C", text: "'use strict' has an effect between line 04 and the end of the file." },
            { letter: "D", text: "'use strict' has an effect only on line 05." },
            { letter: "E", text: "Line 05 throws an error." }
        ],
        answer: ["B", "D", "E"]
    },
    {
        id: "q76",
        isMultiple: false,
        question: "Refer to the following code:\nfor (let number = 2; number <= 5; number += 1) {\n    // faster code statement here\n}\n\nWhich statement meets the requirements to log an error when the Boolean statement evaluates to false?",
        options: [
            { letter: "A", text: "console.classy(number + 2 === 0);" },
            { letter: "B", text: "assert(number + 2 === 0);" },
            { letter: "C", text: "console.assert(number + 2 === 0);" },
            { letter: "D", text: "console.error(number + 2 === 0);" }
        ],
        answer: "C"
    },
    {
        id: "q77",
        isMultiple: false,
        question: "Refer to the code below:\nconst objBook = {\n    title: 'JavaScript'\n};\n\nObject.preventExtensions(objBook);\nconst newObjBook = objBook;\nnewObjBook.author = 'Robert';\n\nWhat are the values of objBook and newObjBook respectively?",
        options: [
            { letter: "A", text: "{ title: 'JavaScript' }\n{ title: 'JavaScript' }" },
            { letter: "B", text: "{ author: 'Robert', title: 'JavaScript' }\nundefined" },
            { letter: "C", text: "{ author: 'Robert' }\n{ author: 'Robert', title: 'JavaScript' }" },
            { letter: "D", text: "{ author: 'Robert', title: 'JavaScript' }\n{ author: 'Robert', title: 'JavaScript' }" }
        ],
        answer: "A"
    },
    {
        id: "q78",
        isMultiple: false,
        question: "Which is the correct implementation of try...catch for countsDeep()?",
        options: [
            { letter: "A", text: "try {\n    countsDeep();\n} handleError(e) {\n    catch(e);\n}" },
            { letter: "B", text: "setTimeout(function() {\n    try {\n        countsDeep();\n    } catch (e) {\n        handleError(e);\n    }\n}, 1000);" },
            { letter: "C", text: "try {\n    setTimeout(function() {\n        countsDeep();\n    }, 1000);\n} catch (e) {\n    handleError(e);\n}" },
            { letter: "D", text: "try {\n    setTimeout(function() {\n        countsDeep();\n    }, 1000);\n} catch (e) {\n    handleError(e);\n}" }
        ],
        answer: "B"
    },
    {
        id: "q79",
        isMultiple: false,
        question: "Refer to code below:\nlet first = 'who';\nlet second = 'what';\n\ntry {\n    try {\n        throw new Error('Sad trombone');\n    } catch (err) {\n        first = 'Why';\n    } finally {\n        second = 'when';\n    }\n} catch (err) {\n    second = 'Where';\n}\n\nWhat are the values for first and second once the code executes?",

        options: [
            { letter: "A", text: "First is why and second is when." },
            { letter: "B", text: "First is who and second is where." },
            { letter: "C", text: "First is Who and second is When." },
            { letter: "D", text: "First is why and second is where." }
        ],

        answer: "A"
    },
    {
        id: "q80",
        isMultiple: false,
        question: "Refer to the following code:\nfunction myFunction() {\n    a = a + b;\n    var b = 1;\n}\n\nmyFunction();\nconsole.log(a);\nconsole.log(b);\n\nWhich statement is correct?",
        options: [
            { letter: "A", text: "Line 02 throws a reference error, therefore line 03 is never executed." },
            { letter: "B", text: "Both line 02 and line 03 are executed, but the values printed are undefined." },
            { letter: "C", text: "Both line 02 and line 03 are executed, and the variables are hoisted." },
            { letter: "D", text: "Line 08 outputs the variable, but line 09 throws an error." }
        ],
        answer: "D"
    },
    {
        id: "q81",
        isMultiple: false,
        question: "Given the following code:\nfunction Person() {\n    this.firstName = 'John';\n}\n\nPerson.proto = {\n    job: x => 'Developer'\n});\n\nconst myFather = new Person();\nconst result = myFather.firstName + ' ' + myFather.job();\n\nWhat is the value of result when the code executes?",
        options: [
            { letter: "A", text: "Error: myFather.job is not a function" },
            { letter: "B", text: "undefined Developer" },
            { letter: "C", text: "John Developer" },
            { letter: "D", text: "John undefined" }
        ],
        answer: "A"
    },
    {
        id: "q82",
        isMultiple: true,
        question: "Which three actions can the code execute in the browser console?",
        options: [
            { letter: "A", text: "Run code that is not related to the page." },
            { letter: "B", text: "View and change security cookies." },
            { letter: "C", text: "Display a report showing the performance of a page." },
            { letter: "D", text: "View, change, and debug the JavaScript code of the page." },
            { letter: "E", text: "View and change the DOM of the page." }
        ],
        answer: ["A", "D", "E"]
    },
    {
        id: "q83",
        isMultiple: false,
        question: "A developer wants to use a try...catch statement to catch any error that countSheep() may throw and pass it to a handleError() function.\n\nWhat is the correct implementation of the try...catch?",
        options: [
            { letter: "A", text: "try {\n    setTimeout(function() {\n        countSheep();\n    }, 1000);\n} catch (e) {\n    handleError(e);\n}" },
            { letter: "B", text: "try {\n    countSheep();\n} finally {\n    handleError(e);\n}" },
            { letter: "C", text: "setTimeout(function() {\n    try {\n        countSheep();\n    } catch (e) {\n        handleError(e);\n    }\n}, 1000);" },
            { letter: "D", text: "try {\n    countSheep();\n} handleError(e) {\n    catch(e);\n}" }
        ],
        answer: "C"
    },
    {
        id: "q84",
        isMultiple: true,
        question: "Given the code below:\n\nWhich three code segments result in a correct conversion from number to string? Choose 3 answers.",
        options: [
            { letter: "A", text: "let scrValue = String(numValue);" },
            { letter: "B", text: "let strValue = numValue.toString();" },
            { letter: "C", text: "let strValue = numValue.toText();" },
            { letter: "D", text: "let strValue = '' + numValue;" },
            { letter: "E", text: "let strValue = (String)numValue;" }
        ],
        answer: ["A", "B", "D"]
    },
    {
        id: "q85",
        isMultiple: false,
        question: "Refer to the following code:\n\n<html lang=\"en\">\n<body>\n<div onclick=\"console.log('Outer message');\">\n<button id=\"myButton\">Click me</button>\n</div>\n</body>\n<script>\nfunction displayMessage(ev) {\n    ev.stopPropagation();\n    console.log('Inner message.');\n}\nconst elem = document.getElementById('myButton');\nelem.addEventListener('click', displayMessage);\n</script>\n</html>\n\nWhat will the console show when the button is clicked?",
        options: [
            { letter: "A", text: "Inner message\nOuter message" },
            { letter: "B", text: "Inner message" },
            { letter: "C", text: "Outer message" },
            { letter: "D", text: "Outer message\nInner message" }
        ],
        answer: "B"
    },
    {
        id: "q86",
        isMultiple: false,
        question: "A developer creates a simple webpage with an input field. When a user enters text in the input field and clicks the button, the actual value of the field must be displayed in the console.\n\nHere is the HTML file content:\n<input type=\"text\" value=\"Hello\" name=\"input\">\n<button type=\"button\">Display</button>\n\nThe developer wrote the JavaScript code below:\n\nconst button = document.querySelector('button');\nbutton.addEventListener('click', () => {\n    const input = document.querySelector('input');\n    console.log(input.getAttribute('value'));\n});\n\nWhen the user clicks the button, the output is always \"Hello\".\n\nWhat needs to be done to make this code work as expected?",
        options: [
            { letter: "A", text: "Replace line 03 with const input = document.getElementByName('input');" },
            { letter: "B", text: "Replace line 02 with button.addEventListener(\"onclick\", function() {" },
            { letter: "C", text: "Replace line 02 with button.addCallback(\"click\", function() {" },
            { letter: "D", text: "Replace line 04 with console.log(input.value);" }
        ],
        answer: "D"
    },
    {
        id: "q87",
        isMultiple: false,
        question: "Given the code below:\n\n01 function GameConsole(name) {\n02     this.name = name;\n03 }\n04\n05 GameConsole.prototype.load = function(gamename) {\n06     console.log(`${this.name} is loading a game: ${gamename} ...`);\n07 }\n08 function Console16Bit(name) {\n09     GameConsole.call(this, name);\n10 }\n11 Console16Bit.prototype = Object.create(GameConsole.prototype);\n12 // insert code here\n13     console.log(`${this.name} is loading a cartridge game: ${gamename} ...`);\n14 }\n15 const console16bit = new Console16Bit('SNEGeneziz');\n16 console16bit.load('Super Monic 3x Force');\n\nWhat should a developer insert at line 12 to output the following message using the method?\n\nSNEGeneziz is loading a cartridge game: Super Monic 3x Force ...",
        options: [
            { letter: "A", text: "Console16Bit.prototype.load = function(gamename) {" },
            { letter: "B", text: "Console16Bit.prototype.load(gamename) = function() {" },
            { letter: "C", text: "Console16Bit = Object.create(GameConsole.prototype).load = function(gamename) {" },
            { letter: "D", text: "Console16Bit.prototype.load(gamename) {" }
        ],
        answer: "A"
    },
    {
        id: "q88",
        isMultiple: false,
        question: "Given the following code:\n\n<input type=\"file\" onchange=\"previewFile()\">\n<img src=\"\" height=\"200\" alt=\"Image Preview...\"/>\n\nThe JavaScript portion is:\n\n01 function previewFile(){\n02     const preview = document.querySelector('img');\n03     const file = document.querySelector('input[type=file]').files[0];\n04     // line 4 code\n05     reader.addEventListener(\"load\", () => {\n06         preview.src = reader.result;\n07     }, false);\n08     // line 8 code\n09 }\n\nIn lines 04 and 08, which code allows the user to select an image from their local computer and to display the image in the browser?",
        options: [
            { letter: "A", text: "04 const reader = new FileReader();\n08 if (file) URL.createObjectURL(file);" },
            { letter: "B", text: "04 const reader = new File();\n08 if (file) reader.readAsDataURL(file);" },
            { letter: "C", text: "04 const reader = new File();\n08 if (file) URL.createObjectURL(file);" },
            { letter: "D", text: "04 const reader = new FileReader();\n08 if (file) reader.readAsDataURL(file);" }
        ],
        answer: "D"
    },
    {
        id: "q89",
        isMultiple: true,
        question: "Refer to the following code:\n\nlet sampleText = 'The quick brown fox jumps';\n\nA developer needs to determine if a certain substring is part of a string.\nWhich three expressions return true for the given substring? Choose 3 answers.",
        options: [
            { letter: "A", text: "sampleText.includes(' quick ', 4);" },
            { letter: "B", text: "sampleText.includes(' quick ') !== -1;" },
            { letter: "C", text: "sampleText.includes(' Fox ', 3)" },
            { letter: "D", text: "sampleText.includes('fox');" },
            { letter: "E", text: "sampleText.includes(' fox ');" }
        ],
        answer: ["A", "D", "E"]
    },
    {
        id: "q90",
        isMultiple: false,
        question: "A developer creates a new web server that uses Node.js. It imports a server library that uses events and callbacks for handling server functionality.\n\nThe server library is imported with require and is made available to the code by a variable named server. The developer wants to log any issues that the server has while booting up.\n\nGiven the code and the information the developer has, which code logs an error at boot with an event?",
        options: [
            { letter: "A", text: "try {\n    server.start();\n} catch(error) {\n    console.log('ERROR', error);\n}" },
            { letter: "B", text: "server.catch((server) => {\n    console.log('ERROR', error);\n});" },
            { letter: "C", text: "server.on('error', (error) => {\n    console.log('ERROR', error);\n});" },
            { letter: "D", text: "server.error((server) => {\n    console.log('ERROR', error);\n});" }
        ],
        answer: "C"
    },
    {
        id: "q91",
        isMultiple: false,
        question: "A developer has a formatName function that takes two arguments, firstName and lastName, and returns a string. They want to schedule the function to run once after five seconds.\n\nWhat is the correct syntax to schedule this function?",
        options: [
            { letter: "A", text: "setTimeout('formatName', 5000, 'John', 'Doe');" },
            { letter: "B", text: "setTimeout(() => { formatName('John', 'Doe') }, 5000);" },
            { letter: "C", text: "setTimeout(formatName('John', 'Doe'), 5000);" },
            { letter: "D", text: "setTimeout(formatName(), 5000, \"John\", \"Doe\");" }
        ],
        answer: "B"
    },
    {
        id: "q92",
        isMultiple: false,
        question: "A developer receives a comment from the Tech Lead that the code given below has an error:\n\nconst monthName = 'July';\nconst year = 2019;\nif(year === 2019) {\n    monthName = 'June';\n}\n\nWhich line edit should be made to make this code run?",
        options: [
            { letter: "A", text: "03 if (year == 2019) {" },
            { letter: "B", text: "02 let year = 2019;" },
            { letter: "C", text: "01 let monthName = 'July';" },
            { letter: "D", text: "02 const year = 2020;" }
        ],
        answer: "C"
    },
    {
        id: "q93",
        isMultiple: true,
        question: "A developer is wondering whether to use Promise.then or Promise.catch, especially when a Promise throws an error.\n\nWhich two promises are rejected? Choose 2 answers.",
        options: [
            { letter: "A", text: "Promise.reject('cool error here').catch(error => console.error(error));" },
            { letter: "B", text: "Promise.reject('cool error here').then(error => console.error(error));" },
            { letter: "C", text: "new Promise(() => { throw 'cool error here'; }).then(null, error => console.error(error));" },
            { letter: "D", text: "new Promise((resolve, reject) => { throw 'cool error here'; }).catch(error => console.error(error));" }
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
            { letter: "A", text: "[] => (console.log('executed');)" },
            { letter: "B", text: "(x, y, z) => (console.log('executed');)" },
            { letter: "C", text: "x, y, z => (console.log('executed');)" },
            { letter: "D", text: "x => (console.log('executed');)" },
            { letter: "E", text: "() => (console.log('executed');)" }
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
            { letter: "A", text: "const retrieveFromLocalStorage = (storageKey) => {\n    return window.localStorage[storageKey];\n}" },
            { letter: "B", text: "const retrieveFromLocalStorage = () => {\n    return JSON.stringify(window.localStorage.getItem(storageKey));\n}" },
            { letter: "C", text: "const retrieveFromLocalStorage = (storageKey) => {\n    return window.localStorage.getItem(storageKey);\n}" },
            { letter: "D", text: "const retrieveFromLocalStorage = (storageKey) => {\n    return JSON.parse(window.localStorage.getItem(storageKey));\n}" }
        ],
        answer: "D"
    },
    {
        id: "q98",
        isMultiple: true,
        question: "A developer creates a generic function to log custom messages in the console. To do this, the function below is implemented.\n\n01 function logStatus(status){\n02     console./*Answer goes here*/('Item status is: %s', status);\n03 }\n\nWhich three console logging methods allow the use of string substitution in line 02? Choose 3 answers.",
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
        question: "A developer uses the code below to format a date:\n\nconst date = new Date(2020, 05, 10);\nconst dateDisplayOptions = {\n    year: 'numeric',\n    month: 'long',\n    day: 'numeric'\n};\n\nconst formattedDate = date.toLocaleDateString('en', dateDisplayOptions);\n\nAfter executing, what is the value of formattedDate?",
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
        question: "Cloud Kicks has a class to represent items for sale in an online store, as shown below:\n\nclass Item {\n    constructor(name, price) {\n        this.name = name;\n        this.price = price;\n    }\n    formattedPrice() {\n        return '$' + String(this.price);\n    }\n}\n\nA new business requirement comes in that requests a ClothingItem class that should have all of the properties and methods of the Item class but will also have properties that are specific to clothes.\n\nWhich line of code properly declares the ClothingItem class such that it inherits from Item?",
        options: [
            { letter: "A", text: "class ClothingItem implements Item {" },
            { letter: "B", text: "class ClothingItem {" },
            { letter: "C", text: "class ClothingItem extends Item {" },
            { letter: "D", text: "class ClothingItem super Item {" }
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
        question: "Refer to the code below:\n\n01 try {\n02     greeting = 'Goodbye';\n03     salutation = 'Hello, Hello, Hello';\n04     greeting = 'Hello';\n05     console.log('Hello');\n06     salutation = 'Goodbye';\n07 } catch(err) {\n08     salutation = 'Hey hello';\n09 } finally {\n10     salutation = 'Hello, Hello';\n11 }\n\nLine 05 causes an error.\nWhat are the values of greeting and salutation once code completes?",
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
        question: "Given HTML below:\n\n<div>\n    <div id=\"row-uc\">Universal Container</div>\n    <div id=\"row-aa\">Applied Shipping</div>\n    <div id=\"row-bt\">Burlington Textiles</div>\n</div>\n\nWhich statement adds the priority-account CSS class to the Universal Container row?",
        options: [
            { letter: "A", text: "document.querySelector('#row-uc').classes.push('priority-account');" },
            { letter: "B", text: "document.querySelector('#row-uc').classList.add('priority-account');" },
            { letter: "C", text: "document.querySelectorAll('#row-uc').classList.add('priority-account');" },
            { letter: "D", text: "document.queryElementById('row-uc').addClass('priority-account');" }
        ],
        answer: "B"
    },
    {
        id: "q105",
        isMultiple: true,
        question: "Refer to the code below:\n\nlet inArray = [[1, 2], [3, 4, 5]];\n\nWhich two statements result in the array [1, 2, 3, 4, 5]?\nChoose 2 answers.",
        options: [
            { letter: "A", text: "[].concat.apply([], inArray);" },
            { letter: "B", text: "[].concat([...inArray]);" },
            { letter: "C", text: "[].concat.apply(inArray, []);" },
            { letter: "D", text: "[].concat(...inArray);" }
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
        question: "Refer to the following code:\n\nfunction test(val) {\n    if (val === undefined) {\n        return 'Undefined values!';\n    }\n    if (val === null) {\n        return 'Null value!';\n    }\n    return val;\n}\n\nlet x;\ntest(x);\n\nWhat is returned by the function call?",
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
        question: "Given the following code:\n\ndocument.body.addEventListener('click', (event) => {\n    if (/* CODE REPLACEMENT HERE */) {\n        console.log('button clicked!');\n    }\n});\n\nWhich replacement for the conditional statement allows a developer to correctly determine that a button on the page is clicked?",
        options: [
            { letter: "A", text: "event.nodeTarget == this" },
            { letter: "B", text: "event.target.nodeName == 'BUTTON'" },
            { letter: "C", text: "button.addEventListener('click')" },
            { letter: "D", text: "event.clicked" }
        ],
        answer: "B"
    },
    {
        id: "q110",
        isMultiple: false,
        question: "Refer to the code below:\n\nconsole.log(0);\nsetTimeout(() => {\n    console.log(1);\n});\nconsole.log(2);\nsetTimeout(() => {\n    console.log(3);\n}, 0);\nconsole.log(4);\n\nIn which sequence will the numbers be logged?",
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
        question: "Refer to the code snippet:\n\nfunction getAvailabilityMessage(item) {\n    if (getAvailability(item)) {\n        var msg = \"Username available\";\n    }\n    return msg;\n}\n\nA developer writes this code to return a message to a user attempting to register a new username. If the username is available, the variable msg contains the message. What is the return value of msg when getAvailabilityMessage(\"newUserName\") is executed and getAvailability(\"newUserName\") returns false?",
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
        question: "Refer to the code below:\n\nlet timedFunction = () => {\n    console.log('Timer called.');\n};\nlet timerId = setTimeout(timedFunction, 1000);\n\nWhich statement allows a developer to cancel the scheduled timed function?",
        options: [
            { letter: "A", text: "removeTimeout(timedFunction);" },
            { letter: "B", text: "removeTimeout(timerId);" },
            { letter: "C", text: "clearTimeout(timerId);" },
            { letter: "D", text: "clearTimeout(timedFunction);" }
        ],
        answer: "C"
    },
    {
        id: "q113",
        isMultiple: false,
        question: "Refer to the code below:\n\n01 let car1 = new Promise((_, reject) =>\n02     setTimeout(reject, 2000, \"Car 1 crashed in\"));\n03 let car2 = new Promise(resolve => setTimeout(resolve, 1500, \"Car 2 completed\"));\n04 let car3 = new Promise(resolve => setTimeout(resolve, 3000, \"Car 3 completed\"));\n05 Promise.race([car1, car2, car3])\n06 .then(value => {\n07     let result = `${value} the race.`;\n08 })\n09 .catch(err => {\n10     console.log(\"Race is cancelled.\", err);\n11 });\n\nWhat is the value of result when Promise.race executes?",
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
        question: "Refer to the code below:\n\nconst searchText = \"Yay! Salesforce is amazing!\";\nlet result1 = searchText.search(/sales/i);\nlet result21 = searchText.search(/sales/i);\nconsole.log(result1);\nconsole.log(result2);\n\nAfter running this code, which result is displayed on the console?",
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
        question: "Given the following code:\n\nlet counter = 0;\nconst logCounter = () => {\n    console.log(counter);\n};\n\nlogCounter();\nsetTimeout(logCounter, 1000);\nsetTimeout(() => {\n    counter++;\n    logCounter();\n}, 1000);\n\nWhat will be the first four numbers logged?",
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
        question: "Refer to the code below:\n\nfunction changeValue(param) {\n    param = 5;\n}\n\nlet a = 10;\nlet b = 10;\n\nchangeValue(b);\nconst result = a + '-' + b;\n\nWhat is the value of result when the code executes?",
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
        question: "A developer writes the code below to calculate the factorial of a given number.\n\nfunction factorial(number) {\n    return number + factorial(number - 1);\n}\nfactorial(3);\n\nWhat is the result of executing line 04?",
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
        question: "A developer writes the code below to calculate the factorial of a given number:\n\nfunction sum(number) {\n    return number * sum(number - 1);\n}\nsum(3);\n\nWhat is the result of executing the code?",
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
            { letter: "A", text: "var1 && var2" },
            { letter: "B", text: "var1.toBoolean() && var2.toBoolean()" },
            { letter: "C", text: "Boolean(var1 && var2)" },
            { letter: "D", text: "Boolean(var1) && Boolean(var2)" }
        ],
        answer: ["C", "D"]
    },
    {
        id: "q120",
        isMultiple: false,
        question: "A developer has the function shown below, that is called when a page loads.\n\nfunction onload() {\n    console.log(\"Page has loaded!\");\n}\n\nWhere can the developer see the log statement after loading the page in the browser?",
        options: [
            { letter: "A", text: "Browser JavaScript console" },
            { letter: "B", text: "Terminal running the web server" },
            { letter: "C", text: "Browser performance tools" },
            { letter: "D", text: "On the webpage" }
        ],
        answer: "A"
    },
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