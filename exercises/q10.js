/*  Create a function that displays a patern like this:
	* * * * *
	* * * * *
	* * * * *
	* * * * *    */

function displayPattern(rows, columns){
    for (let i = 0; i<rows; i++){
        let row = "";
        for (let j = 0; j<columns; j++){
            row += "*" 
        }
        console.log(row);
    }
}
displayPattern(3,7);