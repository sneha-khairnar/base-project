console.log("testing JS");

document.addEventListener("DOMContentLoaded", function () {
const counterDisplay = document.getElementById  ("counter");
const incrementBtn = document.getElementById ("increment");
const decrementBtn = document.getElementById ("decrement");
const resetBtn = document.getElementById("reset");

let count = 0;

function updateCounterColor(){
 if(count > 0){
    counterDisplay.style.color = "green";
 }
 else if (count < 0) {
    counterDisplay.style.color = "red";
 } else  {
    counterDisplay.style.color = "black";
 }
}
incrementBtn.addEventListener("click", function(){
    count++;
    counterDisplay.textContent = count;
    updateCounterColor();
});

decrementBtn.addEventListener("click", function(){
    count--;    
    counterDisplay.textContent = count;
    updateCounterColor();
});

resetBtn.addEventListener("click", function(){
    count = 0;
    counterDisplay.textContent = count;
})

});