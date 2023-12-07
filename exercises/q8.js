// Create a function that recieves an array of
//  numbers and return the average of the numbers
function average(arr){
    let total= 0;
    for (i = 0; i<arr.length; i++){
        total += arr[i];
    }
    console.log("The sum of the items is: ", total);
    avg = total/arr.length;
    console.log("The average of the given array elements: ", avg)
}

let s = [4,2,3,6];
average(s);