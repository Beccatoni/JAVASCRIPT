/* Create a function that recieves an array and 
return the sum of all the elements inside that array*/
function sumOfArrayItems(arr){
    let total = 0
    for (let a = 0; a<arr.length; a++){
        total += arr[a];
    }
    return total;
}

let myArray = [4,6,7,8,3];
console.log("The sum of the given array items is: ",sumOfArrayItems(myArray));
