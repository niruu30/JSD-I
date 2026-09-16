const quizData = [
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
];
