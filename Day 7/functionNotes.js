//A function is a reusable block of code or programming statements designed to perform a certain task. If a function take a parameter it will be called with argument.
// Function Declaration

function functionName(){
    //block of code
}
functionName() //Calling the function by its name

//Function without a parameter and return
function addTwoNumbers() {
    let numOne = 10
    let numTwo = 20
    let sum = numOne + numTwo
    console.log(sum)
}
addTwoNumbers()

//Function returning value
function addTwoNumbers() {
    let numOne = 2
    let numTwo = 3
    let total = numOne + numTwo
    return total
}
console.log(addTwoNumbers())

// Function with a parameter
function square(number) {
    return number * number
}
console.log(square(10)) //should be called with one argument

//Function with two parameters
function printFullName(firstName, lastName) {
    return `${firstName} ${lastName}`
}
console.log(printFullName('Asabeneh', 'Yetayeh'))

//Function with many parameters
function sumArrayValues(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
const numbers = [1, 2, 3, 4, 5];
console.log(sumArrayValues(numbers)); //calling the function with argument numbers(array)

//Unlimited number of parameters in regular function. Anything we passed as argument in the function can be accessed from arguments object inside the functions.
function sumAllNums() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}
console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10)) // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40)) //173

//Unlimited number of parameters in arrow function. To implement a function which takes unlimited number of arguments in an arrow function we use spread operator followed by any parameter name.
const sumAllNums = (...args) => {
    let sum = 0
    for (const element of args) {
        sum += element
    }
    return sum
}
console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10)) // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40)) // 173

//Anonymous Function
const anonymousFun = function() {
    console.log('I am an anonymous function and my value is stored in anonymousFun')
}

//Expression functions are anonymous functions. To return a value from the function we should call the variable. Look at the example below
// Function expression
const square = function(n) {
    return n * n
}
console.log(square(2)) // -> 4

//Self Invoking Functions
let squaredNum = (function(n) {
    return n * n
})(10)
console.log(squaredNum)

//Arrow Function. Arrow function uses arrow instead of the keyword function to declare a function
const square = (n) => {
    return n * n
}
console.log(square(2)) 

const chngToUpperCase = (arr) => {
    const nwArray = []
    for (const element of arr) {
        nwArray.push(element.toUpperCase())
    }
    return nwArray
}

const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
console.log(chngToUpperCase(countries))

const printFullName = (firstName,lastName) =>{
    return `${firstName} ${lastName}`
}

console.log(printFullName('Jorge', 'García'))

// Function with default parameters. Sometimes we pass default values to parameters, when we invoke the function 
//if we do not pass an argument the default value will be used. Both function declaration and arrow function can have a default value or values.
function fullName (firstName = 'Jorge', lastName = 'Garcia'){
    let fullName = firstName + lastName
    return fullName
}

const fullName = (firstName = 'Pepe', lastName = 'Nuñez') => {
    let fullName = firstName + lastName
    return fullName
}

const weightOfAnObject = (mass, gravity = 9.81) => {
    let weight = mass *  gravity + ' N'
    return weight
}


