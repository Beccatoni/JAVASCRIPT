/*Create a function that recieves an array and returns
 the greates value inside that array*/
 function greatest(arr){
    // if the arr is empty orcontains 1 element
    if (arr.length === 0 && arr.length === 1){
        console.log("Your array is empty or has 1 element")
    }
    let great = arr[0];
    for (let i=1; i< arr.length; i++){
        if (arr[i]> great){
             great = arr[i]
        }
    }
    return great;
}

 let array = [1,2,7,3,4];
 console.log("The greatest in the array is: ",greatest(array));