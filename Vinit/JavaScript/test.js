const { rollupVersion } = require("vite");

console.log("Testing Git cli to push code");
console.log("Testing 2.0");
var a = "car"
console.log(a);
console.log('Making changes');
var b = 'sports' 
console.log(b + " "+a);

// Array
let arr = [1,23,34,45,56];
console.log(arr[1]);

// Loop forEach => Arrays
arr.forEach(function(val){
    console.log(val+2)
})

// Object
let obj = {
    type: 'sports car',
    name: 'porshce',
    model: '911 RSR',
    year: 2018,
}
console.log(obj.model);

// Loop forIn => Objects

for( let key in obj){
    // console.log(key); prints  property
    console.log(obj[key]);  //prints object obj
}

// Loop (for)
for(i = 8; i < 11; i++){
    console.log(i +=i);
}

// Loop (while)
var a = 8;
while(a > 0 && a < 10){
    a++;
    console.log('a is greater than ' + a);
}

// Functions
  let YourName; //= prompt('Enter your name');
function fig(YourName){
    console.log(YourName);
}
fig(YourName);

// firstClassFunctions => In JS functions can be  used as values in a function or a variable

