// Understand own properties
function Bird(name){
    this.name = name;
    // this.numLegs = 2;
}
Bird.prototype.numLegs = 2;
let duck = new Bird("Donald");
    // how to add duck's own properties to the array ownProps and
    // prototype properties to the array prototypeProps
    let ownProps1 =[];
    let prototypeProps = [];
    for (let property in duck ){
        if(duck.hasOwnProperty(property)){
            ownProps1.push(property);
        }
        else{
            prototypeProps.push(property);
        }
    }

    console.log("Own properties:",ownProps1);
    console.log("Prototype properties:",prototypeProps);

let canary = new Bird("Tweety");
// name and numLegs are own properties because they
// are defined directly on the instance of the object

let ownProps = [];
for (let property in duck){
    if(duck.hasOwnProperty(property)){
        ownProps.push(property);
    }
}
// console.log(ownProps);

// Use Prototype Properties to Reduce Duplicate Code
function Dog(name){
    this.name = name;
}

Dog.prototype.numLegs = 4;
let beagle = new Dog("Snoopy");

// Iterate Over All Properties
