//Create an empty array, using Array constructor.
const arr = Array();
console.log(arr);
//Create an empty array, using brackets.
const arr2 = [];
console.log(arr2);

//Array with initial values.
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'];
//Printing the array an the lenght.
console.log('Countries: ', countries);
console.log('Number of countries: ', countries.length);

// Array can have items of different data types
const arr3 = [
    'Asabeneh',
    250,
    true,
    { country: 'Finland', city: 'Helsinki' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
]; // arr containing different data types
console.log(arr3);

//Creating an array using split.
let js = 'JavaScript';
const charsInJavaScript = js.split('');
console.log(charsInJavaScript); // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
const companies = companiesString.split(', ');
console.log(companies); // ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

//Accessing array items using index.
let fruits = ['apple', 'banana', 'mango', 'lemon']
let firstFruit = fruits[0]; //apple
console.log(firstFruit)

secondFruit = fruits[1]
console.log(secondFruit)

let lastIndex = fruits.length - 1
lastFruit = fruits[lastIndex]
console.log(lastFruit) //lemon

//Modify an array element


