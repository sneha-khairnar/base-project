alert('This is a calculator made using JS');
let num1 = parseInt(prompt('Enter any number'));
let num2 = parseInt(prompt('Enter any number'));
let operator = prompt('Enter any operator');


const operation = {
    "+": (a,b) => a + b,
    "-": (a,b) => a - b,
    "*": (a,b) => a * b,
    "/": (a,b) => a / b,
};

let result = operation[operator] ? operation[operator](num1, num2) : "Invalid operator!";

//  here operator holds the operator value ("=", "-", "*", "/") and then operation accesses it by 
// operation[operator] and gives it to the function (a, b), a and b as num1 and num2
// ? and : works as if-else, if operatation from operator, use it in function (a,b) to perform on num1 num2

console.log("Result: ", result);
alert("Result: " + result);
