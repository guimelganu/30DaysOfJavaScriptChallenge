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

//Confirm Method
let agree = confirm('Are you sure you like to delete it?');
console.log(confirm); 

//Date Methods
const now = new Date();
console.log(now);

//Getting Full Year from an object Date
console.log(now.getFullYear()); //2022

//Getting Month
console.log(now.getMonth()); //07 August because the count begin in 0. (0-11)

//Getting Date 
console.log(now.getDate()); //09th, the date of the month is 09 (1-31)

//Getting Day
console.log(now.getDay()); //2, because it's Thursday (0-6) Sunday is 0.

//Getting hours
console.log(now.getHours()); //13, because it's 1:10pm.

//Getting minutes
console.log(now.getMinutes()); //10, because it's 1:10pm.

//Getting seconds
console.log(now.getSeconds()); 

//Getting time in milliseconds starting from January 1, 1970.
console.log(now.getTime()); //First Method
const allseconds = Date.now(); //Second Method
console.log(allseconds);

const day = now.getDay();
const month = now.getMonth();
const year = now.getFullYear();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

console.log(`${day}/${month}/${year} ${hours}:${minutes}:${seconds}`) //Fully date/time in human readable time format.








