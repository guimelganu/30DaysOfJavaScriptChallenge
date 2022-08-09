//1.- Declare firstName, lastName, country, city, age, isMarried, year 
// variable and assign value to it and use the typeof operator to check different data types.

let firstName = "Jorge";
let lastName = "Garcia";
let country = "México State";
let city = "México";
let age = 25;
let isMarried = false;
let year = 2022;

console.log(typeof(firstName));
console.log(typeof(lastName));
console.log(typeof(country));
console.log(typeof(city));
console.log(typeof(age));
console.log(typeof(isMarried));
console.log(typeof(year));

// 2.- Check if type of '10' is equal to 10
let check = typeof('10');
console.log(check == 10);
//Can be also...
console.log(typeof('10') == 10);

//3.- Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') == 10);
console.log(parseInt('9.8'));

// 4.- Boolean value is either true or false.
// Write three JavaScript statement which provide truthy value.
// Write three JavaScript statement which provide falsy value.

console.log(4>2.5); //True
console.log(25 == '25'); //True
console.log(43 != 21); //True

console.log(6 === '6'); //False
console.log(76 >= 12); //False
console.log(0 === ''); //False

// 5.- Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

// 4 > 3 True
// 4 >= 3 True
// 4 < 3 False
// 4 <= 3 False
// 4 == 4 True
// 4 === 4 True
// 4 != 4 False
// 4 !== 4 False
// 4 != '4' False
// 4 == '4' True
// 4 === '4' Fañse
// Find the length of python and jargon and make a falsy comparison statement.

console.log(!('python'.length === 'jargon'.length));

// 6.- Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

// 4 > 3 && 10 < 12 True
// 4 > 3 && 10 > 12 False
// 4 > 3 || 10 < 12 True
// 4 > 3 || 10 > 12 True
// !(4 > 3) False
// !(4 < 3) True
// !(false) True
// !(4 > 3 && 10 < 12) False
// !(4 > 3 && 10 > 12) True
// !(4 === '4') True
// There is no 'on' in both dragon and python
console.log(!'python'.length === !'jargon'.length); //True

// 7.- Use the Date object to do the following activities
const now = new Date();
// What is the year today?
console.log(now.getFullYear());
// What is the month today as a number?
console.log(now.getMonth());
// What is the date today?
console.log(now.getDate());
// What is the day today as a number?
console.log(now.getDay());
// What is the hours now?
console.log(now.getHours());
// What is the minutes now?
console.log(now.getMinutes());
// Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(now.getTime());
