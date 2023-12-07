function generateRandomPlateNum(){
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    
    // Generate random letter
    const randomLetter = letters[Math.floor(Math.random() * letters.length)];
    // console.log(randomLetter);
    const randomLetter2 = letters[Math.floor(Math.random() * letters.length)];
    const randomLetter3 = letters[Math.floor(Math.random() * letters.length)];
    
    // generate random number
    const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
    const randomNumber2 = numbers[Math.floor(Math.random() * numbers.length)];
    const randomNumber3 = numbers[Math.floor(Math.random() * numbers.length)];

    const plateNum = `${randomLetter}${randomLetter2}${randomLetter3}${randomNumber}${randomNumber2}${randomNumber}${randomNumber3}`;
    return plateNum;
}   

generateRandomPlateNum();