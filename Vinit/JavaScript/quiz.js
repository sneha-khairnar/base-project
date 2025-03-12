let quiz = {
    a1: "Which is BMW's sport sedan?",
    a2: "Where is BMW HQ?",
    a3: "Whats BMW's motorbike division called?",
}

console.log(quiz.a2)
const keys = Object.keys(quiz);
console.log(keys);
const random = keys[Math.floor(Math.random() * keys.length)];
console.log(random);
console.log(`Random Question: ${quiz[random]}`)