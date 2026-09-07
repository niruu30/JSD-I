const quizData = [
  {
    id: "q31",
    isMultiple: true,
    question:
      "A developer wrote the following code to test a sum3 function that takes in an array of numbers and returns the sum of the first three numbers in the array. The test passes:\nlet res = sum3([1, 2, 3]);\nconsole.assert(res === 6);\n\nres = sum3([1, 2, 3, 4]);\nconsole.assert(res === 6);\n\nA different developer made changes to the behavior of sum3 to instead sum all of the numbers present in the array.\nWhich two results occur when running the test on the updated sum3 function?",
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
      "Refer to the following object:\nconst dog = {\n    firstName: 'Beau',\n    lastName: 'Boo',\n    get fullName() {\n        return this.firstName + ' ' + this.lastName;\n    }\n};\n\nHow can a developer access the fullName property for dog?",
    options: [
      { letter: "A", text: "dog.fullName" },
      { letter: "B", text: "dog.fullName()" },
      { letter: "C", text: "dog.get.fullName" },
      { letter: "D", text: "dog.function.fullName()" },
    ],
    answer: "A",
  },
  {
    id: "q33",
    isMultiple: false,
    question:
      "A developer creates a class that represents a news story based on the requirements that a Story should have a body, author, and view count. The code is shown below:\nclass Story {\n    // Insert code here\n    this.body = body;\n    this.author = author;\n    this.viewCount = viewCount;\n}\n\nWhich statement should be inserted in the placeholder to allow for a variable to be set to a new instance of a Story with the three attributes correctly populated?",
    options: [
      { letter: "A", text: "constructor() {" },
      { letter: "B", text: "super(body, author, viewCount) {" },
      { letter: "C", text: "function Story(body, author, viewCount) {" },
      { letter: "D", text: "constructor(body, author, viewCount) {" },
    ],
    answer: "D",
  },
  {
    id: "q34",
    isMultiple: false,
    question:
      'Refer to the code below:\n\nflag();\nanotherFlag();\n\nfunction flag() {\n    console.log("flag");\n}\n\nconst anotherFlag = () => {\n    console.log("flag");\n}\n\nWhat is result of the code block?',
    options: [
      { letter: "A", text: "The console logs only 'flag'." },
      { letter: "B", text: "The console logs 'flag' and 'another flag'." },
      {
        letter: "C",
        text: "The console logs 'flag' and then an error is thrown.",
      },
      { letter: "D", text: "An error is thrown." },
    ],
    answer: "C",
  },
  {
    id: "q35",
    isMultiple: false,
    question:
      "A developer wrote the following code:\nlet x = object.value;\n\ntry {\n    handleObjectValue(x);\n} catch(error) {\n    handleError(error);\n}\n\nThe developer has a getNextValue function to execute after handleObjectValue(), but does not want to execute getNextValue() if an error occurs. How can the developer change the code to ensure this behavior?",
    options: [
      {
        letter: "A",
        text: "try {\n    handleObjectValue(x);\n} catch(error) {\n    handleError(error);\n} then {\n    getNextValue();\n}",
      },
      {
        letter: "B",
        text: "try {\n    handleObjectValue(x);\n    getNextValue();\n} catch(error) {\n    handleError(error);\n}",
      },
      {
        letter: "C",
        text: "try {\n    handleObjectValue(x);\n} catch(error) {\n    handleError(error);\n}\ngetNextValue();",
      },
      {
        letter: "D",
        text: "try {\n    handleObjectValue(x);\n} catch(error) {\n    handleError(error);\n} finally {\n    getNextValue();\n}",
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
      "Given the code:\nconst copy = JSON.stringify([new String('false'), new Boolean(false), undefined]);\n\nWhat is the value of copy?",
    options: [
      { letter: "A", text: "'[\"false\", false, null]'" },
      { letter: "B", text: "'[false, {}]'" },
      { letter: "C", text: "'[\"false\", false, undefined]'" },
      { letter: "D", text: "'[\"false\", {}]'" },
    ],
    answer: "A",
  },
  {
    id: "q38",
    isMultiple: false,
    question:
      'Refer to the following code:\nlet a = "*";\nlet b = "**";\n// x = 3;\nconsole.log(a);\n\nWhat is displayed when the code executes?',
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
      "Refer to the following code:\n<html lang=\"en\">\n<body>\n    <button class=\"secondary\">Save draft</button>\n    <button class=\"primary\">Save and close</button>\n</body>\n<script>\nfunction displaySaveMessage(event) {\n    console.log('Save message.');\n}\n\nfunction displaySuccessMessage(event) {\n    console.log('Success message.');\n}\n\nwindow.onload = function() {\n    document.querySelector('.secondary')\n        .addEventListener('click', displaySaveMessage, true);\n    document.querySelector('.primary')\n        .addEventListener('click', displaySuccessMessage, true);\n}\n</script>\n</html>\n\nWhich messages are displayed when the code executes?",
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
      { letter: "A", text: "console.log(10 / 0);" },
      { letter: "B", text: "console.log(parseInt('two'));" },
      { letter: "C", text: "console.log(10 / Number('5'));" },
      { letter: "D", text: "console.log(10 / 'five');" },
    ],
    answer: ["B", "D"],
  },
  {
    id: "q41",
    isMultiple: false,
    question:
      "Refer to the code below:\n<html>\n<body>\n    <div id=\"logo\">Hello Logo!</div>\n    <button id=\"test\">Click me</button>\n</body>\n<script>\nfunction printMessage(event) {\n    console.log('This is a test message');\n}\n\nlet el = document.getElementById('test');\nel.addEventListener('click', printMessage, false);\n</script>\n</html>\n\nWhich action should be done?",
    options: [
      {
        letter: "A",
        text: "Add event.removeEventListener(); to the window.onload event handler.",
      },
      {
        letter: "B",
        text: "Add event.removeEventListener(); to the printMessage function.",
      },
      {
        letter: "C",
        text: "Add event.stopPropagation(); to the printMessage function.",
      },
      {
        letter: "D",
        text: "Add event.stopPropagation(); to the window.onload event handler.",
      },
    ],
    answer: "C",
  },
  {
    id: "q42",
    isMultiple: false,
    question:
      "Refer to the code below:\nlet o = {\n    get js() {\n        let city1 = String('St. Louis');\n        let city2 = String('New York');\n\n        return {\n            firstCity: city1.toLowerCase(),\n            secondCity: city2.toLowerCase(),\n        };\n    }\n};\n\nWhat value can a developer expect when referencing o.js.secondCity?",
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
      "Refer to the code below:\nnew Promise((resolve, reject) => {\n    const fraction = Math.random();\n    if (fraction > 0.5) reject('fraction > 0.5, ' + fraction);\n    resolve(fraction);\n})\n.then(() => console.log('resolved'))\n.catch((error) => console.error(error))\n.finally(() => console.log('when am I called?'));\n\nWhen does Promise.finally get called?",
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
      "Refer to the code:\nlet array = [1, 2, 3, 4, 4, 5, 4, 4];\nfor (let i = 0; i < array.length; i++) {\n    if (array[i] === 4) {\n        array.splice(i, 1);\n        i--;\n    }\n}\n\nWhat is the value of array after execution?",
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
      "Refer to the code below:\nlet total = 10;\nconst interval = setInterval(() => {\n    total++;\n    clearInterval(interval);\n    total++;\n}, 0);\ntotal++;\nconsole.log(total);\n\nConsidering that JavaScript is single-threaded, what is the output after the code executes?",
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
      },
      {
        letter: "B",
        text: "document.addEventListener('onDOMContentLoaded', personalizeWebsiteContent);",
      },
      {
        letter: "C",
        text: "window.addEventListener('load', personalizeWebsiteContent);",
      },
      {
        letter: "D",
        text: "window.addEventListener('onload', personalizeWebsiteContent);",
      },
    ],
    answer: "C",
  },
  {
    id: "q47",
    isMultiple: false,
    question:
      "Refer to the following code:\nfunction changeValue(obj) {\n    obj.value = obj.value / 2;\n}\n\nconst objA = { value: 10 };\nconst objB = objA;\n\nchangeValue(objB);\nconst result = objA.value;\n\nWhat is the value of result after the code executes?",
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
      "Given the following code:\nlet x = ('15' + 10) * 2;\n\nWhat is the value of x?",
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
      'At Universal Containers, every team has its own way of copying JavaScript objects. The code snippet shows an implementation from one team:\nfunction Person() {\n    this.firstName = "John";\n    this.lastName = "Doe";\n    this.name = () => {\n        console.log(`Hello ${this.firstName} ${this.lastName}`);\n    };\n}\n\nconst john = new Person();\nconst dan = JSON.parse(JSON.stringify(john));\ndan.firstName = \'Dan\';\ndan.name();\n\nWhat is the output of the code execution?',
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
      "Refer to the following code:\nlet codeName = 'Bond';\nlet sampleText = `The name is ${codeName}, Jim ${codeName}`;\n\nA developer is trying to determine if a certain substring is part of a string.\nWhich three code statements return true?",
    options: [
      { letter: "A", text: "sampleText.includes('Jim');" },
      { letter: "B", text: "sampleText.includes('The', 1);" },
      { letter: "C", text: "sampleText.includes('Jim', 4);" },
      { letter: "D", text: "sampleText.indexOf('Bond') !== -1;" },
      { letter: "E", text: "sampleText.substring('Jim');" },
    ],
    answer: ["A", "C", "D"],
  },
  {
    id: "q52",
    isMultiple: false,
    question:
      "Refer to the following code:\nlet obj = {\n    foo: 1,\n    bar: 2\n};\nlet output = [];\nfor (let something in obj) {\n    output.push(something);\n}\nconsole.log(output);\n\nWhat is the output?",
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
      "Refer to the following code:\nconst myFunction = arr => {\n    return arr.reduce((result, current) => {\n        return result + current;\n    }, 10);\n};\n\nWhat is the output of this function when called with an empty array?",
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
    question:
      "Which two code snippets show working examples of a recursive function?",
    options: [
      {
        letter: "A",
        text: "const sumToTen = numVar => {\n    if (numVar < 0) return;\n    return sumToTen(numVar + 1);\n};",
      },
      {
        letter: "B",
        text: "function factorial(numVar) {\n    if (numVar < 0) return;\n    if (numVar === 0) return 1;\n    return numVar - 1;\n}",
      },
      {
        letter: "C",
        text: "const factorial = numVar => {\n    if (numVar < 0) return;\n    if (numVar === 0) return 1;\n    return numVar * factorial(numVar - 1);\n};",
      },
      {
        letter: "D",
        text: "let countingDown = function(startNumber) {\n    if (startNumber > 0) {\n        console.log(startNumber);\n        return countingDown(startNumber - 1);\n    } else {\n        return startNumber;\n    }\n};",
      },
    ],
    answer: ["C", "D"],
  },
  {
    id: "q55",
    isMultiple: false,
    question:
      "A developer executes:\ndocument.cookie;\ndocument.cookie = 'key=John Smith';\n\nWhat is the behavior?",
    options: [
      {
        letter: "A",
        text: "Cookies are read and the key value is set, and all cookies are wiped.",
      },
      {
        letter: "B",
        text: "Cookies are read and the key value is set, the remaining cookies are unaffected.",
      },
      {
        letter: "C",
        text: "Cookies are read, but the key value is not set because the value is not URL encoded.",
      },
      {
        letter: "D",
        text: "Cookies are not read because line 01 should be document.cookies, but the key value is set and all cookies are wiped.",
      },
    ],
    answer: "B",
  },
  {
    id: "q56",
    isMultiple: true,
    question:
      'Refer to the code:\n\nfunction Animal(size, type) {\n    this.size = size || "small";\n    this.type = type || "Animal";\n    this.canTalk = false;\n}\n\nlet Pet = function (size, type, name, owner) {\n    Animal.call(this, size, type);\n    this.name = name;\n    this.owner = owner;\n}\n\nPet.prototype = Object.create(Animal.prototype);\nlet pet1 = new Pet();\nconsole.log(pet1);\n\nGiven the code above, which three properties are set pet1?\nChoose 3 answers.',
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
        text: "let res = fizzbuzz(true);\nconsole.assert(res === '');",
      },
      {
        letter: "B",
        text: "let res = fizzbuzz(3);\nconsole.assert(res === '');",
      },
      {
        letter: "C",
        text: "let res = fizzbuzz(5);\nconsole.assert(res === 'fizz');",
      },
      {
        letter: "D",
        text: "let res = fizzbuzz(15);\nconsole.assert(res === 'fizzbuzz');",
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
        text: "Use the browser console to execute a script that prevents the load event from firing.",
      },
      {
        letter: "B",
        text: "Use the DOM inspector to prevent the load event from firing.",
      },
      {
        letter: "C",
        text: "Use the browser console to execute a script that removes all elements containing the class ad-library-item.",
      },
      {
        letter: "D",
        text: "Use the DOM inspector to remove all elements containing the class ad-library-item.",
      },
    ],
    answer: "C",
  },
  {
    id: "q59",
    isMultiple: false,
    question:
      "Refer to the following code:\nfunction Monster() {\n    this.name = 'hello';\n}\nconst m = Monster();\n\nWhat happens due to the missing new keyword?",
    options: [
      { letter: "A", text: "The m variable is assigned the correct object." },
      {
        letter: "B",
        text: "window.name is assigned to 'hello' and the variable m remains undefined.",
      },
      { letter: "C", text: "window.m is assigned the correct object." },
      {
        letter: "D",
        text: "The m variable is assigned the correct object but this.name remains undefined.",
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
      { letter: "A", text: "String(var1).concat(var2)" },
      { letter: "B", text: "String.concat(var1 + var2)" },
      { letter: "C", text: "var1 + var2" },
      { letter: "D", text: "var1.toString() + var2.toString()" },
    ],
    answer: ["A", "D"],
  },
];
