//1.- Get user input using prompt(“Enter your age:”). 
// If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let age = prompt('Enter your age: ');
if (age >= 18) {
    console.log(`You are the old enough to drive.`);
}
else{
    console.log(`You need to wait ${18 - age} years to drive.`);
}

//2.- Compare the values of myAge and yourAge using if … else. 
// Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

let myAge = 25;
let yourAge = prompt('Enter your age: ');

if(myAge > yourAge){
    console.log('I´m older than you.');
}
else if(yourAge > myAge){
    console.log(`You are ${yourAge-myAge} older than me.`)
}
else{
    console.log('We have the same age.')
}

//3.- If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
// using if else
// ternary operator.

let a = 6;
let b = 9;

b > a ? console.log(`${b} is greater than ${a}`) : console.log(`${a} is greater than ${b}`);

if(a>b){
    console.log(`${a} is greater than ${b}`);
}
else if(b>a){
    console.log(`${b} is greater than ${a}`);
}
else{
    console.log(`${a} is equal to ${b}`);
}

//04.- Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

let check = parseFloat(prompt('Enter the number: '));
(check%2) == 0 ? console.log(`${check} is an even number.`) : console.log(`${check} is an odd number.`);


