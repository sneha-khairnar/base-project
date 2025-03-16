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

let playAgain = "yes";
let count = 0;

while(playAgain.trim().toLowerCase() == "yes"){

    const random = keys[Math.floor(Math.random() * keys.length)];
    let selectedQues = quiz[random];
    const usrAns = prompt(selectedQues.q);
    if(usrAns.toLowerCase == selectedQues.answer.toLowerCase){
        alert("Right answer");
        count++;
    }
    else{
        alert("Wrong answer");
    }
    playAgain = prompt("Do you want to play again?")
}
alert(count);


