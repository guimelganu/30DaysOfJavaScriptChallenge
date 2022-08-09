//Pre-increment Operator
let count = 0;

console.log(++count); //1
console.log(count) //1

//Post-increment Operator 

console.log(count++) //0
console.log(count) //1

//Pre-decrement Operator

console.log(--count) //-1
console.log(count) //-1

//Post-decrement Operator

console.log(count--) //0
console.log(count) //-1

//Ternary Operators

let israining = true;
israining //The instance
? console.log("You'll need a rain coat.") //First conditional "if yes".
: console.log("No need a rain coat."); // Second conditional "if no".

israining = false;
israining
? console.log("You'll need a rain coat.")
: console.log("No need a rain coat.");

//Windows Methods
//Window alert method
alert("Hello Mdf's"); //Tip, use it just for test. 
//Prompt Method (prompt('requieredtext', 'optionalText'))

let number = prompt('Enter a number:', 'Here goes the number');
console.log(number);




