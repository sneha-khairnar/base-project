console.log("testing JS");

document.addEventListener("DOMContentLoaded", function () {
const counterDisplay = document.getElementById  ("counter");
const incrementBtn = document.getElementById ("increment");
const decrementBtn = document.getElementById ("decrement");
const resetBtn = document.getElementById("reset");

let count = localStorage.getItem("counter") ? parseInt(localStorage.getItem("counter")): 0;
counterDisplay.textContent = count;

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

function updateCounter(){
    counterDisplay.textContent = count;
    localStorage.setItem("counter", count);
}
incrementBtn.addEventListener("click", function(){
    count++;
    counterDisplay.textContent = count;
    updateCounterColor();
    updateCounter();
});

decrementBtn.addEventListener("click", function(){
    count--;    
    counterDisplay.textContent = count;
    updateCounterColor();
    updateCounter();
});

resetBtn.addEventListener("click", function(){
    count = 0;
    counterDisplay.textContent = count;
})

});