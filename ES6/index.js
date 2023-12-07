// ES6 var replaced with let and const
let catName= "Quincy";
let quote;
 catName = "Beau";
function catTalk(){
    "use strict";
    catName = "Olivier";
    quote = catName + " says Meow!";
}
catTalk();

//  compare scopes of the var and let keywords let is block-scoped while i is function scoped
function checkScope(){
    "use strict";
     let i = "function scope";
    if(true){
        let i = "block scope";
        // console.log("Block scope i is: ", i);
    }
    // console.log("Function scope i is: ",i)
    return i;
}
checkScope();

// Declare a read-only variable with const keyword
function printManyTimes(str){
    "use strict";
   const SENTENCE = str + " is cool!";

    // sentence = str+ " is amazing!";

    for(var i=0; i < str.length; i+2){
        // console.log(SENTENCE);
    }
}
printManyTimes("Coding");

// Mutate an array declared with const : you can not
//  reassign it its variable with another value; but you can change contents
const s = [5,7,2];
function editInPlace(){
    "use strict";

    // s = [2,5,7];
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
    // console.log(s)
}
editInPlace();

// Prevent Object Mutation
function freezeObj(){
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    try {
        MATH_CONSTANTS.PI = 99;
    } catch(ex){
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
console.log(PI);