let quiz={
    a1: {q:"What is the only fruit that has its seeds on the outside?",
    answer:"Strawberry"},
    a2: {q:"I have no life, but I can die. What am I?",
    answer:"battery"},
    a3: {q:"The more I eat, the hungrier I become. The more I drink, the more I die. What am I?",
    answer:"fire"},
    a1: {q:"I go in dry and come out wet. I make you sweat, but you love every second. What am I?",
    answer:"teabag"},
}
while(true){
let key=Object.keys(quiz);
let random= key[Math.floor(Math.random()*key.length)];

let Question=quiz[random];
let ans=prompt(Question.q);

if(ans==Question.answer)
{
    alert("THATS CORRECT!!!!!!");
}
else{
    alert("OOPS, NOT CORRECT");
    break;
}
}
