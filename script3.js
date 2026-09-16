const quizData = [
    {
        id: "q61",
        isMultiple: false,
        question: "Refer to the code:\n\nWhat is the result when the Promise in the execute function is rejected?",

        code: `function execute() {
    return new Promise((resolve, reject) => reject());
}

let promise = execute();

promise
    .then(() => console.log('Resolved1'))
    .then(() => console.log('Resolved2'))
    .then(() => console.log('Resolved3'))
    .catch(() => console.log('Rejected'))
    .then(() => console.log('Resolved4'));`,

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
        question: "Given the following code:\n\nWhat is the output?",

        code: `let x = null;
console.log(typeof x);`,

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
        question: "Refer to the following JavaScript.\n\nWhich two statements could be inserted at the placeholder to enable leo.roar()?",

        code: `function Tiger() {
    this.type = 'Cat';
    this.size = 'large';
}

let tony = new Tiger();

tony.roar = () => {
    console.log("They're great!");
};

function Lion() {
    this.type = 'Cat';
    this.size = 'large';
}

let leo = new Lion();

// Insert code here

leo.roar();`,

        options: [
            {
                letter: "A",
                text: `leo.roar = () => {
    console.log("They're pretty good!");
};`,
                isCode: true
            },
            {
                letter: "B",
                text: `Object.assign(leo, tony);`,
                isCode: true
            },
            {
                letter: "C",
                text: `Object.assign(leo, Tiger);`,
                isCode: true
            },
            {
                letter: "D",
                text: `leo.prototype.roar = () => {
    console.log("They're pretty good!");
};`,
                isCode: true
            }
        ],
        answer: ["A", "B"]
    },

    {
        id: "q64",
        isMultiple: false,
        question: "Which statement allows a developer to update the browser navigation history without a page refresh?",
        options: [
            {
                letter: "A",
                text: `window.customHistory.pushState(newStateObject, '', null);`,
                isCode: true
            },
            {
                letter: "B",
                text: `window.history.createState(newStateObject, '');`,
                isCode: true
            },
            {
                letter: "C",
                text: `window.history.pushState(newStateObject, '', null);`,
                isCode: true
            },
            {
                letter: "D",
                text: `window.history.updateState(newStateObject, '');`,
                isCode: true
            }
        ],
        answer: "C"
    },

    {
        id: "q65",
        isMultiple: false,
        question: "Refer to the following code.\n\nThe developer wants to gracefully handle errors from a Promise-based GET request.\nWhich code modification is correct?",

        code: `let requestPromise = client.getRequest;

requestPromise().then((response) => {
    handleResponse(response);
});`,

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
        question: "A developer uses a parsed JSON string to work with user information as in the block below.\n\nWhich two options access the email attribute in the object?",

        code: `const userInformation = {
    "id": "user-01",
    "email": "user01@universalcontainers.demo",
    "age": 25
};`,

        options: [
            { letter: "A", text: "userInformation.email"  },
            { letter: "B", text: "userInformation.get(\"email\")"  },
            { letter: "C", text: "userInformation[\"email\"]"  },
            { letter: "D", text: "userInformation[email]"  }
        ],
        answer: ["A", "C"]
    },

    {
        id: "q68",
        isMultiple: false,
        question: "Refer to the following code.\n\nWhat is the value of result when Promise.race executes?",

        code: `let car1 = new Promise((_, reject) =>
    setTimeout(reject, 2000, "Car 1 crashed in")
);

let car2 = new Promise(resolve =>
    setTimeout(resolve, 1500, "Car 2 completed")
);

let car3 = new Promise(resolve =>
    setTimeout(resolve, 3000, "Car 3 completed")
);

Promise.race([car1, car2, car3])
    .then(value => {
        let result = \${value} the race.;
    })
    .catch(err => {
        console.log("Race is cancelled.", err);
    });`,

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
        question: "A developer writes the code below to return a message to a user attempting to register a new username. If the username is available, a variable named msg is declared and assigned a value on line 03.\n\nWhat is returned when the username is available?",

        code: `function getAvailabilityMessage(item) {
    if (getAvailability(item)) {
        var msg = "Username available";
        return msg;
    }
}`,

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
        question: "Refer to the code.\n\nWhat is the output after the code executes successfully?",

        code: `console.log('Start');

Promise.resolve('Success').then(function(value) {
    console.log('Success');
});

console.log('End');`,

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
        question: "Universal Containers (UC) just launched a new landing page, but users complain that the website is slow. A developer found some functions that might cause this problem. To verify this, the developer decides to execute everything and log the time each of these three suspicious functions consumes.\n\nWhich function can the developer use to obtain the time spent by every one of the three functions?",

        code: `console.time('Performance');

maybeAHeavyFunction();

thisCouldTakeTooLong();

orMaybeThisOne();

console.timeEnd('Performance');`,

        options: [
            { letter: "A", text: "console.timeLog()"  },
            { letter: "B", text: "console.trace()"  },
            { letter: "C", text: "console.timeStamp()"  },
            { letter: "D", text: "console.getTime()"  }
        ],
        answer: "A"
    },

    {
        id: "q73",
        isMultiple: false,
        question: "A developer wants to use a module named universalContainerslib and then call functions from it. How should a developer import every function from the module and then call the functions foo and bar?",
        options: [
            {
                letter: "A",
                text: `import * as lib from '/path/universalContainerslib.js';
lib.foo();
lib.bar();`,
                isCode: true
            },
            {
                letter: "B",
                text: `import * from '/path/universalContainerslib.js';
universalContainerslib.foo();
universalContainerslib.bar();`,
                isCode: true
            },
            {
                letter: "C",
                text: `import all from '/path/universalContainerslib.js';
universalContainerslib.foo();
universalContainerslib.bar();`,
                isCode: true
            },
            {
                letter: "D",
                text: `import { foo, bar } from '/path/universalContainerslib.js';
foo();
bar();`,
                isCode: true
            }
        ],
        answer: "A"
    },

    {
        id: "q74",
        isMultiple: true,
        question: "Refer to the code below.\n\nGiven the code above, which three properties are set pet1?\nChoose 3 answers.",

        code: `function Animal(size, type) {
    this.size = size || "small";
    this.type = type || "Animal";
    this.canTalk = false;
}

let Pet = function (size, type, name, owner) {
    Animal.call(this, size, type);
    this.name = name;
    this.owner = owner;
}

Pet.prototype = Object.create(Animal.prototype);

let pet1 = new Pet();

console.log(pet1);`,

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
        question: "Refer to the code below.\n\nConsidering the implications of 'use strict' on line 04, which three statements describe the execution of the code?",

        code: `x = 3.14;

function myFunction() {
    'use strict';
    y = x;
}

z = x;
myFunction();`,

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
        question: "Refer to the following code.\n\nWhich statement meets the requirements to log an error when the Boolean statement evaluates to false?",

        code: `for (let number = 2; number <= 5; number += 1) {
    // faster code statement here
}`,

        options: [
            { letter: "A", text: "console.classy(number + 2 === 0);"  },
            { letter: "B", text: "assert(number + 2 === 0);"  },
            { letter: "C", text: "console.assert(number + 2 === 0);"  },
            { letter: "D", text: "console.error(number + 2 === 0);"  }
        ],
        answer: "C"
    },

    {
        id: "q77",
        isMultiple: false,
        question: "Refer to the following code.\n\nWhat are the values of objBook and newObjBook respectively?",

        code: `const objBook = {
    title: 'JavaScript'
};

Object.preventExtensions(objBook);

const newObjBook = objBook;

newObjBook.author = 'Robert';`,

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
            {
                letter: "A",
                text: `try {
    countsDeep();
} handleError(e) {
    catch(e);
}`,
                isCode: true
            },
            {
                letter: "B",
                text: `setTimeout(function() {
    try {
        countsDeep();
    } catch (e) {
        handleError(e);
    }
}, 1000);`,
                isCode: true
            },
            {
                letter: "C",
                text: `try {
    setTimeout(function() {
        countsDeep();
    }, 1000);
} catch (e) {
    handleError(e);
}`,
                isCode: true
            },
            {
                letter: "D",
                text: `try {
    setTimeout(function() {
        countsDeep();
    }, 1000);
} catch (e) {
    handleError(e);
}`,
                isCode: true
            }
        ],
        answer: "B"
    },

    {
        id: "q79",
        isMultiple: false,
        question: "Refer to the code below.\n\nWhat are the values for first and second once the code executes?",

        code: `let first = 'who';
let second = 'what';

try {
    try {
        throw new Error('Sad trombone');
    } catch (err) {
        first = 'Why';
    } finally {
        second = 'when';
    }
} catch (err) {
    second = 'Where';
}`,

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
        question: "Refer to the following code.\n\nWhich statement is correct?",

        code: `function myFunction() {
    a = a + b;
    var b = 1;
}

myFunction();

console.log(a);
console.log(b);`,

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
        question: "Given the following code.\n\nWhat is the value of result when the code executes?",

        code: `function Person() {
    this.firstName = 'John';
}

Person.proto = {
    job: x => 'Developer'
});

const myFather = new Person();

const result = myFather.firstName + ' ' + myFather.job();`,

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
            {
                letter: "A",
                text: `try {
    setTimeout(function() {
        countSheep();
    }, 1000);
} catch (e) {
    handleError(e);
}`,
                isCode: true
            },
            {
                letter: "B",
                text: `try {
    countSheep();
} finally {
    handleError(e);
}`,
                isCode: true
            },
            {
                letter: "C",
                text: `setTimeout(function() {
    try {
        countSheep();
    } catch (e) {
        handleError(e);
    }
}, 1000);`,
                isCode: true
            },
            {
                letter: "D",
                text: `try {
    countSheep();
} handleError(e) {
    catch(e);
}`,
                isCode: true
            }
        ],
        answer: "C"
    },

    {
        id: "q84",
        isMultiple: true,
        question: "Given the code below:\n\nWhich three code segments result in a correct conversion from number to string? Choose 3 answers.",

        options: [
            {
                letter: "A",
                text: `let scrValue = String(numValue);`,
                isCode: true
            },
            {
                letter: "B",
                text: `let strValue = numValue.toString();`,
                isCode: true
            },
            {
                letter: "C",
                text: `let strValue = numValue.toText();`,
                isCode: true
            },
            {
                letter: "D",
                text: `let strValue = '' + numValue;`,
                isCode: true
            },
            {
                letter: "E",
                text: `let strValue = (String)numValue;`,
                isCode: true
            }
        ],
        answer: ["A", "B", "D"]
    },

    {
        id: "q85",
        isMultiple: false,
        question: "Refer to the following code.\n\nWhat will the console show when the button is clicked?",

        code: `<html lang="en">
<body>
    <div onclick="console.log('Outer message');">
        <button id="myButton">Click me</button>
    </div>
</body>

<script>
function displayMessage(ev) {
    ev.stopPropagation();
    console.log('Inner message.');
}

const elem = document.getElementById('myButton');

elem.addEventListener('click', displayMessage);
</script>
</html>`,

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
        question: "A developer creates a simple webpage with an input field. When a user enters text in the input field and clicks the button, the actual value of the field must be displayed in the console.\n\nHere is the HTML file content:\n\n<input type=\"text\" value=\"Hello\" name=\"input\">\n<button type=\"button\">Display</button>\n\nThe developer wrote the JavaScript code below.\n\nWhen the user clicks the button, the output is always \"Hello\".\n\nWhat needs to be done to make this code work as expected?",

        code: `const button = document.querySelector('button');

button.addEventListener('click', () => {
    const input = document.querySelector('input');
    console.log(input.getAttribute('value'));
});`,

        options: [
            {
                letter: "A",
                text: `Replace line 03 with:
const input = document.getElementByName('input');`,
                isCode: true
            },
            {
                letter: "B",
                text: `Replace line 02 with:
button.addEventListener("onclick", function() {`,
                isCode: true
            },
            {
                letter: "C",
                text: `Replace line 02 with:
button.addCallback("click", function() {`,
                isCode: true
            },
            {
                letter: "D",
                text: `Replace line 04 with:
console.log(input.value);`,
                isCode: true
            }
        ],
        answer: "D"
    },

    {
        id: "q87",
        isMultiple: false,
        question: "Given the following code.\n\nWhat should a developer insert at line 12 to output the following message using the method?\n\nSNEGeneziz is loading a cartridge game: Super Monic 3x Force ...",

        code: `function GameConsole(name) {
    this.name = name;
}

GameConsole.prototype.load = function(gamename) {
    console.log(\`\${this.name} is loading a game: \${gamename} ...\`);
}

function Console16Bit(name) {
    GameConsole.call(this, name);
}

Console16Bit.prototype = Object.create(GameConsole.prototype);

// insert code here

console.log(\`\${this.name} is loading a cartridge game: \${gamename} ...\`);
}

const console16bit = new Console16Bit('SNEGeneziz');

console16bit.load('Super Monic 3x Force');`,

        options: [
            {
                letter: "A",
                text: `Console16Bit.prototype.load = function(gamename) {`,
                isCode: true
            },
            {
                letter: "B",
                text: `Console16Bit.prototype.load(gamename) = function() {`,
                isCode: true
            },
            {
                letter: "C",
                text: `Console16Bit = Object.create(GameConsole.prototype).load = function(gamename) {`,
                isCode: true
            },
            {
                letter: "D",
                text: `Console16Bit.prototype.load(gamename) {`,
                isCode: true
            }
        ],
        answer: "A"
    },

    {
        id: "q88",
        isMultiple: false,
        question: "Given the following code.\n\nIn lines 04 and 08, which code allows the user to select an image from their local computer and to display the image in the browser?",

        code: `<input type="file" onchange="previewFile()">
<img src="" height="200" alt="Image Preview..."/>

function previewFile() {
    const preview = document.querySelector('img');
    const file = document.querySelector('input[type=file]').files[0];

    // line 4 code

    reader.addEventListener("load", () => {
        preview.src = reader.result;
    }, false);

    // line 8 code
}`,

        options: [
            {
                letter: "A",
                text: `04 const reader = new FileReader();
08 if (file) URL.createObjectURL(file);`,
                isCode: true
            },
            {
                letter: "B",
                text: `04 const reader = new File();
08 if (file) reader.readAsDataURL(file);`,
                isCode: true
            },
            {
                letter: "C",
                text: `04 const reader = new File();
08 if (file) URL.createObjectURL(file);`,
                isCode: true
            },
            {
                letter: "D",
                text: `04 const reader = new FileReader();
08 if (file) reader.readAsDataURL(file);`,
                isCode: true
            }
        ],
        answer: "D"
    },

    {
        id: "q89",
        isMultiple: true,
        question: "Refer to the following code.\n\nA developer needs to determine if a certain substring is part of a string.\nWhich three expressions return true for the given substring? Choose 3 answers.",

        code: `let sampleText = 'The quick brown fox jumps';`,

        options: [
            {
                letter: "A",
                text: `sampleText.includes(' quick ', 4);`,
                isCode: true
            },
            {
                letter: "B",
                text: `sampleText.includes(' quick ') !== -1;`,
                isCode: true
            },
            {
                letter: "C",
                text: `sampleText.includes(' Fox ', 3)`,
                isCode: true
            },
            {
                letter: "D",
                text: `sampleText.includes('fox');`,
                isCode: true
            },
            {
                letter: "E",
                text: `sampleText.includes(' fox ');`,
                isCode: true
            }
        ],
        answer: ["A", "D", "E"]
    },

    {
        id: "q90",
        isMultiple: false,
        question: "A developer creates a new web server that uses Node.js. It imports a server library that uses events and callbacks for handling server functionality.\n\nThe server library is imported with require and is made available to the code by a variable named server. The developer wants to log any issues that the server has while booting up.\n\nGiven the code and the information the developer has, which code logs an error at boot with an event?",

        options: [
            {
                letter: "A",
                text: `try {
    server.start();
} catch(error) {
    console.log('ERROR', error);
}`,
                isCode: true
            },
            {
                letter: "B",
                text: `server.catch((server) => {
    console.log('ERROR', error);
});`,
                isCode: true
            },
            {
                letter: "C",
                text: `server.on('error', (error) => {
    console.log('ERROR', error);
});`,
                isCode: true
            },
            {
                letter: "D",
                text: `server.error((server) => {
    console.log('ERROR', error);
});`,
                isCode: true
            }
        ],
        answer: "C"
    }
];