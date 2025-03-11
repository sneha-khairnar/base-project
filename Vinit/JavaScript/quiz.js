let quiz = {
    a1: "Which engine configuration does BMW M5 competetion has?",
    a2: "Can BMW M5 competetion be driven with front axle dis-enganged?",
    a3: "How much horsepower does BMW M5 competetion makes?",
}

const keys = Object.keys(quiz);
const random = keys[Math.floor(Math.random) * keys.length];
console.log(` ${quiz[random]} `);
console.log(quiz.a1 );