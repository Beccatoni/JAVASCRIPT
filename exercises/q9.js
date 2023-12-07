/* Create a function that combines two arrays into one single array. 
	Use the following arrays:
	arrayOne = [a,b,c,d]
	arrayTwo = [e,f,g]*/
function arrayCombiner(arr1, arr2){
    for (let i = 0; i<arr1.length; i++){
        arr2.push(arr1[i]);
    }
    console.log(arr2);
}
let a1 = [4,3,5,6];
let a2 = [5,8,9,4];
arrayCombiner(a1,a2);

