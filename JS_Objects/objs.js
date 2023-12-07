
// learning objects; Methods are properties that are
// functions. They change the behavior of an object
let duck = {
    name:'aflac',
    numLegs:2,
    sayName: function(){return "The name of this duck is", this.name},
}
// console.log(duck.sayName());

// constructors of are functions that create new objects: 
// we define them with a capitalized leter to identify them from
// other functions
// use keyword `this`
// constructors define properties and behaviors instead of
// returning a value as pther functiomns might
function Bird(){
    this.name = "Albert";
    this.color = "blue";
    this.numLegs = 2
}
let blueBird = new Bird();

//  let the constructor accept parameters
function Bird1(name, color){
    this.name = name;
    this.color = color;
    this.numLegs = 2;
}

// Verify an Object's Constructor with instanceof
let crow = new Bird1("Alice", "yellow");

console.log(crow instanceof Bird1);