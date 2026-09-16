const quizData = [
    {
        id: "q31",
        isMultiple: true,
        question:
            "A developer wrote the following code to test a sum3 function that takes in an array of numbers and returns the sum of the first three numbers in the array. The test passes:\n\nA different developer made changes to the behavior of sum3 to instead sum all of the numbers present in the array.\nWhich two results occur when running the test on the updated sum3 function?",

        code: `let res = sum3([1, 2, 3]);
console.assert(res === 6);

res = sum3([1, 2, 3, 4]);
console.assert(res === 6);`,

        options: [
            { letter: "A", text: "The first assertion fails." },
            { letter: "B", text: "The second assertion passes." },
            { letter: "C", text: "The second assertion fails." },
            { letter: "D", text: "The first assertion passes." },
        ],
        answer: ["C", "D"],
    },

    {
        id: "q32",
        isMultiple: false,
        question:
            "Refer to the following object.\n\nHow can a developer access the fullName property for dog?",

        code: `const dog = {
    firstName: 'Beau',
    lastName: 'Boo',
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
};`,

        options: [
            { letter: "A", text: "dog.fullName", isCode: true },
            { letter: "B", text: "dog.fullName()", isCode: true },
            { letter: "C", text: "dog.get.fullName", isCode: true },
            { letter: "D", text: "dog.function.fullName()", isCode: true },
        ],
        answer: "A",
    },

    {
        id: "q33",
        isMultiple: false,
        question:
            "A developer creates a class that represents a news story based on the requirements that a Story should have a body, author, and view count. Which statement should be inserted in the placeholder to allow for a variable to be set to a new instance of a Story with the three attributes correctly populated?",

        code: `class Story {
    // Insert code here
    this.body = body;
    this.author = author;
    this.viewCount = viewCount;
}`,

        options: [
            { letter: "A", text: "constructor() {", isCode: true },
            { letter: "B", text: "super(body, author, viewCount) {", isCode: true },
            { letter: "C", text: "function Story(body, author, viewCount) {", isCode: true },
            { letter: "D", text: "constructor(body, author, viewCount) {", isCode: true },
        ],
        answer: "D",
    },

    {
        id: "q34",
        isMultiple: false,
        question:
            "Refer to the code below.\n\nWhat is result of the code block?",

        code: `flag();
anotherFlag();

function flag() {
    console.log("flag");
}

const anotherFlag = () => {
    console.log("flag");
}`,

        options: [
            { letter: "A", text: "The console logs only 'flag'." },
            { letter: "B", text: "The console logs 'flag' and 'another flag'." },
            { letter: "C", text: "The console logs 'flag' and then an error is thrown." },
            { letter: "D", text: "An error is thrown." },
        ],
        answer: "C",
    },

    {
        id: "q35",
        isMultiple: false,
        question:
            "A developer wrote the following code. The developer has a getNextValue function to execute after handleObjectValue(), but does not want to execute getNextValue() if an error occurs. How can the developer change the code to ensure this behavior?",

        code: `let x = object.value;

try {
    handleObjectValue(x);
} catch(error) {
    handleError(error);
}`,

        options: [
            {
                letter: "A",
                text: `try {
    handleObjectValue(x);
} catch(error) {
    handleError(error);
} then {
    getNextValue();
}`,
                isCode: true
            },
            {
                letter: "B",
                text: `try {
    handleObjectValue(x);
    getNextValue();
} catch(error) {
    handleError(error);
}`,
                isCode: true
            },
            {
                letter: "C",
                text: `try {
    handleObjectValue(x);
} catch(error) {
    handleError(error);
}
getNextValue();`,
                isCode: true
            },
            {
                letter: "D",
                text: `try {
    handleObjectValue(x);
} catch(error) {
    handleError(error);
} finally {
    getNextValue();
}`,
                isCode: true
            },
        ],
        answer: "B",
    },

    {
        id: "q36",
        isMultiple: false,
        question:
            "A team at Universal Containers works on a big project and uses Yarn to deal with the project's dependencies. A developer added a dependency to manipulate dates and pushed the updates to the remote repository. The rest of the team complains that the dependency does not get downloaded when they execute yarn.\n\nWhat could be the reason for this?",

        options: [
            {
                letter: "A",
                text: "The developer missed the option --add when adding the dependency.",
            },
            {
                letter: "B",
                text: "The developer added the dependency as a dev dependency, and NODE_ENV is set to production.",
            },
            {
                letter: "C",
                text: "The developer added the dependency as a dev dependency, and YARN_ENV is set to production.",
            },
            {
                letter: "D",
                text: "The developer missed the option --save when adding the dependency.",
            },
        ],
        answer: "B",
    },

    {
        id: "q37",
        isMultiple: false,
        question:
            "Given the code:\n\nWhat is the value of copy?",

        code: `const copy = JSON.stringify([
    new String('false'),
    new Boolean(false),
    undefined
]);`,

        options: [
            { letter: "A", text: "'[\"false\", false, null]'", isCode: true },
            { letter: "B", text: "'[false, {}]'", isCode: true },
            { letter: "C", text: "'[\"false\", false, undefined]'", isCode: true },
            { letter: "D", text: "'[\"false\", {}]'", isCode: true },
        ],
        answer: "A",
    },

    {
        id: "q38",
        isMultiple: false,
        question:
            "Refer to the following code.\n\nWhat is displayed when the code executes?",

        code: `let a = "*";
let b = "**";
// x = 3;
console.log(a);`,

        options: [
            { letter: "A", text: "ReferenceError: a is not defined" },
            { letter: "B", text: "*" },
            { letter: "C", text: "undefined" },
            { letter: "D", text: "null" },
        ],
        answer: "B",
    },

    {
        id: "q39",
        isMultiple: false,
        question:
            "Refer to the following code.\n\nWhich messages are displayed when the code executes?",

        code: `<html lang="en">
<body>
    <button class="secondary">Save draft</button>
    <button class="primary">Save and close</button>
</body>

<script>
function displaySaveMessage(event) {
    console.log('Save message.');
}

function displaySuccessMessage(event) {
    console.log('Success message.');
}

window.onload = function() {
    document.querySelector('.secondary')
        .addEventListener('click', displaySaveMessage, true);

    document.querySelector('.primary')
        .addEventListener('click', displaySuccessMessage, true);
}
</script>
</html>`,

        options: [
            { letter: "A", text: "Outer message" },
            { letter: "B", text: "Outer message\nInner message" },
            { letter: "C", text: "Inner message" },
            { letter: "D", text: "Inner message\nOuter message" },
        ],
        answer: "B",
    },

    {
        id: "q40",
        isMultiple: true,
        question: "Which two console logs output NaN?",
        options: [
            { letter: "A", text: "console.log(10 / 0);", isCode: true },
            { letter: "B", text: "console.log(parseInt('two'));", isCode: true },
            { letter: "C", text: "console.log(10 / Number('5'));", isCode: true },
            { letter: "D", text: "console.log(10 / 'five');", isCode: true },
        ],
        answer: ["B", "D"],
    },

    {
        id: "q41",
        isMultiple: false,
        question:
            "Refer to the code below.\n\nWhich action should be done?",

        code: `<html>
<body>
    <div id="logo">Hello Logo!</div>
    <button id="test">Click me</button>
</body>

<script>
function printMessage(event) {
    console.log('This is a test message');
}

let el = document.getElementById('test');
el.addEventListener('click', printMessage, false);
</script>
</html>`,

        options: [
            {
                letter: "A",
                text: "Add event.removeEventListener(); to the window.onload event handler."
            },
            {
                letter: "B",
                text: "Add event.removeEventListener(); to the printMessage function."
            },
            {
                letter: "C",
                text: "Add event.stopPropagation(); to the printMessage function.",
                isCode: true
            },
            {
                letter: "D",
                text: "Add event.stopPropagation(); to the window.onload event handler.",
                isCode: true
            },
        ],
        answer: "C",
    },

    {
        id: "q42",
        isMultiple: false,
        question:
            "Refer to the code below.\n\nWhat value can a developer expect when referencing o.js.secondCity?",

        code: `let o = {
    get js() {
        let city1 = String('St. Louis');
        let city2 = String('New York');

        return {
            firstCity: city1.toLowerCase(),
            secondCity: city2.toLowerCase(),
        };
    }
};`,

        options: [
            { letter: "A", text: "undefined" },
            { letter: "B", text: "An error" },
            { letter: "C", text: "'New York'" },
            { letter: "D", text: "'new york'" },
        ],
        answer: "D",
    },

    {
        id: "q43",
        isMultiple: false,
        question:
            "Refer to the code below.\n\nWhen does Promise.finally get called?",

        code: `new Promise((resolve, reject) => {
    const fraction = Math.random();

    if (fraction > 0.5) {
        reject('fraction > 0.5, ' + fraction);
    }

    resolve(fraction);
})
.then(() => console.log('resolved'))
.catch((error) => console.error(error))
.finally(() => console.log('when am I called?'));`,

        options: [
            { letter: "A", text: "When rejected" },
            { letter: "B", text: "When resolved and settled" },
            { letter: "C", text: "When resolved" },
            { letter: "D", text: "When resolved or rejected" },
        ],
        answer: "D",
    },

    {
        id: "q44",
        isMultiple: false,
        question:
            "Refer to the code below.\n\nWhat is the value of array after execution?",

        code: `let array = [1, 2, 3, 4, 4, 5, 4, 4];

for (let i = 0; i < array.length; i++) {
    if (array[i] === 4) {
        array.splice(i, 1);
        i--;
    }
}`,

        options: [
            { letter: "A", text: "[1, 2, 3, 4, 5, 4]" },
            { letter: "B", text: "[1, 2, 3, 5]" },
            { letter: "C", text: "[1, 2, 3, 4, 5, 4, 4]" },
            { letter: "D", text: "[1, 2, 3, 4, 4, 5, 4]" },
        ],
        answer: "B",
    },

    {
        id: "q45",
        isMultiple: false,
        question:
            "Refer to the code below.\n\nConsidering that JavaScript is single-threaded, what is the output after the code executes?",

        code: `let total = 10;

const interval = setInterval(() => {
    total++;
    clearInterval(interval);
    total++;
}, 0);

total++;

console.log(total);`,

        options: [
            { letter: "A", text: "11" },
            { letter: "B", text: "12" },
            { letter: "C", text: "10" },
            { letter: "D", text: "13" },
        ],
        answer: "A",
    },

    {
        id: "q46",
        isMultiple: false,
        question:
            "A developer at Universal Containers creates a new landing page based on HTML, CSS, and JavaScript. To ensure that visitors have a good experience, a script named personalizeWebsiteContent needs to be executed to do some custom initialization when the webpage is fully loaded with HTML content and all related files.\n\nWhich statement should be used to call personalizeWebsiteContent based on the above business requirement?",

        options: [
            {
                letter: "A",
                text: "document.addEventListener('DOMContentLoaded', personalizeWebsiteContent);",
                isCode: true
            },
            {
                letter: "B",
                text: "document.addEventListener('onDOMContentLoaded', personalizeWebsiteContent);",
                isCode: true
            },
            {
                letter: "C",
                text: "window.addEventListener('load', personalizeWebsiteContent);",
                isCode: true
            },
            {
                letter: "D",
                text: "window.addEventListener('onload', personalizeWebsiteContent);",
                isCode: true
            },
        ],
        answer: "C",
    },

    {
        id: "q47",
        isMultiple: false,
        question:
            "Refer to the following code.\n\nWhat is the value of result after the code executes?",

        code: `function changeValue(obj) {
    obj.value = obj.value / 2;
}

const objA = { value: 10 };
const objB = objA;

changeValue(objB);
const result = objA.value;`,

        options: [
            { letter: "A", text: "low" },
            { letter: "B", text: "10" },
            { letter: "C", text: "5" },
            { letter: "D", text: "undefined" },
        ],
        answer: "C",
    },

    {
        id: "q48",
        isMultiple: false,
        question:
            "A developer has an ErrorHandler module that contains multiple functions.\n\nWhat kind of export should be leveraged so that multiple functions can be used?",

        options: [
            { letter: "A", text: "Multi" },
            { letter: "B", text: "Named" },
            { letter: "C", text: "Default" },
            { letter: "D", text: "All" },
        ],
        answer: "B",
    },

    {
        id: "q49",
        isMultiple: false,
        question:
            "Given the following code:\n\nWhat is the value of x?",

        code: `let x = ('15' + 10) * 2;`,

        options: [
            { letter: "A", text: "1520" },
            { letter: "B", text: "3020" },
            { letter: "C", text: "50" },
            { letter: "D", text: "35" },
        ],
        answer: "B",
    },

    {
        id: "q50",
        isMultiple: false,
        question:
            "At Universal Containers, every team has its own way of copying JavaScript objects. The code snippet shows an implementation from one team.\n\nWhat is the output of the code execution?",

        code: `function Person() {
    this.firstName = "John";
    this.lastName = "Doe";
    this.name = () => {
        console.log(\`Hello \${this.firstName} \${this.lastName}\`);
    };
}

const john = new Person();
const dan = JSON.parse(JSON.stringify(john));

dan.firstName = 'Dan';
dan.name();`,

        options: [
            { letter: "A", text: "Hello John Doe" },
            { letter: "B", text: "Hello Dan Doe" },
            { letter: "C", text: "TypeError: dan.name is not a function" },
            { letter: "D", text: "Hello Dan" },
        ],
        answer: "C",
    },

    {
        id: "q51",
        isMultiple: true,
        question:
            "Refer to the following code.\n\nA developer is trying to determine if a certain substring is part of a string.\nWhich three code statements return true?",

        code: `let codeName = 'Bond';
let sampleText = \`The name is \${codeName}, Jim \${codeName}\`;`,

        options: [
            { letter: "A", text: "sampleText.includes('Jim');", isCode: true },
            { letter: "B", text: "sampleText.includes('The', 1);", isCode: true },
            { letter: "C", text: "sampleText.includes('Jim', 4);", isCode: true },
            { letter: "D", text: "sampleText.indexOf('Bond') !== -1;", isCode: true },
            { letter: "E", text: "sampleText.substring('Jim');", isCode: true },
        ],
        answer: ["A", "C", "D"],
    },

    {
        id: "q52",
        isMultiple: false,
        question:
            "Refer to the following code.\n\nWhat is the output?",

        code: `let obj = {
    foo: 1,
    bar: 2
};

let output = [];

for (let something in obj) {
    output.push(something);
}

console.log(output);`,

        options: [
            { letter: "A", text: '["bar", "foo"]' },
            { letter: "B", text: "[1, 2]" },
            { letter: "C", text: '["foo", "bar"]' },
            { letter: "D", text: '["foo:1", "bar:2"]' },
        ],
        answer: "C",
    },

    {
        id: "q53",
        isMultiple: false,
        question:
            "Refer to the following code.\n\nWhat is the output of this function when called with an empty array?",

        code: `const myFunction = arr => {
    return arr.reduce((result, current) => {
        return result + current;
    }, 10);
};`,

        options: [
            { letter: "A", text: "Returns 0" },
            { letter: "B", text: "Throws an error" },
            { letter: "C", text: "Returns NaN" },
            { letter: "D", text: "Returns 10" },
        ],
        answer: "D",
    },

    {
        id: "q54",
        isMultiple: true,
        question: "Which two code snippets show working examples of a recursive function?",
        options: [
            {
                letter: "A",
                text: `const sumToTen = numVar => {
    if (numVar < 0) return;
    return sumToTen(numVar + 1);
};`,
                isCode: true
            },
            {
                letter: "B",
                text: `function factorial(numVar) {
    if (numVar < 0) return;
    if (numVar === 0) return 1;
    return numVar - 1;
}`,
                isCode: true
            },
            {
                letter: "C",
                text: `const factorial = numVar => {
    if (numVar < 0) return;
    if (numVar === 0) return 1;
    return numVar * factorial(numVar - 1);
};`,
                isCode: true
            },
            {
                letter: "D",
                text: `let countingDown = function(startNumber) {
    if (startNumber > 0) {
        console.log(startNumber);
        return countingDown(startNumber - 1);
    } else {
        return startNumber;
    }
};`,
                isCode: true
            },
        ],
        answer: ["C", "D"],
    },

    {
        id: "q55",
        isMultiple: false,
        question:
            "A developer executes the following code.\n\nWhat is the behavior?",

        code: `document.cookie;
document.cookie = 'key=John Smith';`,

        options: [
            {
                letter: "A",
                text: "Cookies are read and the key value is set, and all cookies are wiped."
            },
            {
                letter: "B",
                text: "Cookies are read and the key value is set, the remaining cookies are unaffected."
            },
            {
                letter: "C",
                text: "Cookies are read, but the key value is not set because the value is not URL encoded."
            },
            {
                letter: "D",
                text: "Cookies are not read because line 01 should be document.cookies, but the key value is set and all cookies are wiped."
            },
        ],
        answer: "B",
    },

    {
        id: "q56",
        isMultiple: true,
        question:
            "Refer to the code below.\n\nGiven the code above, which three properties are set pet1?\nChoose 3 answers.",

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
            { letter: "E", text: "Name" },
        ],
        answer: ["B", "C", "D"],
    },

    {
        id: "q57",
        isMultiple: true,
        question:
            "A developer has a fizzbuzz function that, when passed in a number, returns the following:\n* 'fizz' if the number is divisible by 3.\n* 'buzz' if the number is divisible by 5.\n* 'fizzbuzz' if the number is divisible by both 3 and 5.\n* Empty string '' if the number is divisible by neither 3 nor 5.\n\nWhich two test cases properly test scenarios for the fizzbuzz function?",

        options: [
            {
                letter: "A",
                text: `let res = fizzbuzz(true);
console.assert(res === '');`,
                isCode: true
            },
            {
                letter: "B",
                text: `let res = fizzbuzz(3);
console.assert(res === '');`,
                isCode: true
            },
            {
                letter: "C",
                text: `let res = fizzbuzz(5);
console.assert(res === 'fizz');`,
                isCode: true
            },
            {
                letter: "D",
                text: `let res = fizzbuzz(15);
console.assert(res === 'fizzbuzz');`,
                isCode: true
            },
        ],
        answer: ["A", "D"],
    },

    {
        id: "q58",
        isMultiple: false,
        question:
            'A page loads 50+ <div class="ad-library-item"> elements, all ads. A developer wants to quickly and temporarily remove them.\n\nWhich option should the developer use?',

        options: [
            {
                letter: "A",
                text: "Use the browser console to execute a script that prevents the load event from firing."
            },
            {
                letter: "B",
                text: "Use the DOM inspector to prevent the load event from firing."
            },
            {
                letter: "C",
                text: "Use the browser console to execute a script that removes all elements containing the class ad-library-item."
            },
            {
                letter: "D",
                text: "Use the DOM inspector to remove all elements containing the class ad-library-item."
            },
        ],
        answer: "C",
    },

    {
        id: "q59",
        isMultiple: false,
        question:
            "Refer to the following code.\n\nWhat happens due to the missing new keyword?",

        code: `function Monster() {
    this.name = 'hello';
}

const m = Monster();`,

        options: [
            { letter: "A", text: "The m variable is assigned the correct object." },
            {
                letter: "B",
                text: "window.name is assigned to 'hello' and the variable m remains undefined."
            },
            { letter: "C", text: "window.m is assigned the correct object." },
            {
                letter: "D",
                text: "The m variable is assigned the correct object but this.name remains undefined."
            },
        ],
        answer: "B",
    },

    {
        id: "q60",
        isMultiple: true,
        question:
            "Given two expressions var1 and var2, what are two valid ways to return the concatenation of the two expressions and ensure it is data type string?",

        options: [
            {
                letter: "A",
                text: "String(var1).concat(var2)",
                isCode: true
            },
            {
                letter: "B",
                text: "String.concat(var1 + var2)",
                isCode: true
            },
            {
                letter: "C",
                text: "var1 + var2",
                isCode: true
            },
            {
                letter: "D",
                text: "var1.toString() + var2.toString()",
                isCode: true
            },
        ],
        answer: ["A", "D"],
    },
];