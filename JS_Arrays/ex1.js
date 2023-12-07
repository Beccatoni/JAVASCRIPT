//example Create an array of given size in JavaScript
// Method 1: Using JavaScript array() constructor
let arr = new Array(5);
console.log("This is the length of our array: ",arr.length);
console.log("Here is the array: ", arr);

// Method 2: Using apply() and map() Methods
// ex1
let arry = Array.apply(null, Array(5)).map(function(){});
console.log("This is the length of array: ", arry.length);
console.log("tHis is the array: ", arry);

// ex2
let arrr = Array.apply(null, Array(5)).map(function(y,i){return i;});
console.log("The length of the array: ", arrr.length);
console.log("The array: ", arrr);

// Method 3: Using JavaScript Array.from() Method
// ex1
let a = Array.from(Array(5));
console.log("Array length: ",a.length);
console.log("Array: ", a);

// ex2
let b = Array.from("Rebecca Mutoni");
console.log("The length of the array: ",b.length);
console.log("The array ", b);
// ex3 
b = Array.from('R'.repeat(5));
console.log("The length", b.length);
console.log("The array: ", b);

// ex4
b = Array.from({length:5}, (x, i) => i);
console.log("The length", b.length);
console.log("The array: ", b);

// Method 4: Using for loop
const size = 5;
const aray = [];

for (let i=0; i<size; i++){
    aray.push(aray[i]);
}
console.log(aray.length)
console.log("The array: ", aray);