let quiz = {
    a1: { q:"Which is BMW's sport sedan?", answer: "M5 competetion"},
    a2: { q:"Where is BMW HQ?",answer: "Munich"},
    a3: { q:"Whats BMW's motorbike division called?",answer: "Motorrad"},
    a4: { q:"Whats the power output of BMW M5 CS?",answer: "635 HP"},
    a5: { q:"Whats the displacement of BMW's current V8 engine?",answer: "4.4L"}
}

console.log(quiz.a2)
const keys = Object.keys(quiz);
console.log(keys);
const random = keys[Math.floor(Math.random() * keys.length)];
console.log(random);
let selectedQues = quiz[random];

console.log(quiz[random]);

const usrAns = prompt(selectedQues.q);
let count = 0;
let i;
for(i = 0; i < 3; i ++){
if(usrAns.toLowerCase == selectedQues.answer.toLowerCase){
    console.log("Right answer");
    count++;
}
else{
    console.log("Wrong answer");
}
}
console.log(count);
