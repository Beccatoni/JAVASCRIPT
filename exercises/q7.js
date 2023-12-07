/* Create a function that recieves an array and 
returns the smallest number from that array*/
function smallest(arr){
    let small = arr[0];
    for (i=0; i<arr.length; i++){
        if (arr[i] < small){
            small = arr[i];
        }
    }
     return small;
}

let array = [2,4,1,9,0];
console.log("The smallest in the array is: ", smallest(array));
