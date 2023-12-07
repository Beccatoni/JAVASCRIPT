// iteration in array *for loop*
let array = [1,2,3,4,5,6];

for(let index=0; index < array.length; index++){
    console.log(array[index]);
}
// using for each() method
let index = 0;
let array1 = [1,2,3,4,5,6];

console.log("Using forEach method to iterate throughout the loop: ")
array1.forEach(myFunction);

function myFunction(item, index) {
    console.log(item);
}

// using every() method

let x = 0;
let array2 = [1,2,3,4,5,6];
const under_five = x => x < 5;

if (array2.every(under_five)){
    console.log("All are less than 5");
}
else {
    console.log("At least one element is not less than 5");
}

// using map() method
let y = 0;
let array3 = [1,2,3,4,5,6];

let square = y => Math.pow(y, 2);
let squaredArray = array3.map(square);

console.log("Our array: ", array3);
console.log("Our array with items squared: ", square);

// using reduce() method
const helperSum = (acc, curr) => acc + curr;

const sum = array3.reduce(helperSum, 0)
console.log(array3);
console.log(sum);
