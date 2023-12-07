function myFunction(x,y){
    var s = x+y;
    console.log("The sum: ", s);
    var m = x*y;
    console.log("The product: ", m);
    return s+m;
}
console.log(myFunction(3,2));