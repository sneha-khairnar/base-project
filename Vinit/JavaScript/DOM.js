console.log("testing JS");

document.addEventListener("DOMContentLoaded", function () {
const counterDisplay = document.getElementById  ("counter");
const incrementBtn = document.getElementById ("increment");
const decrementBtn = document.getElementById ("decrement");

let count = 0;
incrementBtn.addEventListener("click", function(){
    count++;
    alert("Button clicked")
    counterDisplay.textContent = count;
});

decrementBtn.addEventListener("click", function(){
    count--;    
    counterDisplay.textContent = count;
});

});