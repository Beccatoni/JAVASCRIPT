// using test method
let sentence = "The dog chased the cat.";
let findThe = /the/;
// let thefind = findThe.test(sentence)
// console.log(thefind);

let myString = "Hello, World!";
 let myRegex=/Hello/;
// let result = myRegex.test(myString);

// console.log(result)

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/;
// let result = waldoRegex.test(waldoIsHiding);

// console.log(result);

// or operator |
let petString = "James has a pet cat."
let petRegex = /dog|cat|bird|fish|cow/;
// let result = petRegex.test(petString)
// console.log(result);

// Ignore case while matching
let myStr = "freeCodeCamp is great";
let fccRegex = /freecodecamp/i; 
// let result = fccRegex.test(myStr);
// console.log(result);

// extract matches
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
// let result = extractStr.match(codingRegex);
// console.log(result)

// find more than the first match
let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
// const result = testStr.match(ourRegex);
// console.log(result);

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/g;
let result = twinkleStar.match(starRegex);
console.log(result);