const quizData = [
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
];