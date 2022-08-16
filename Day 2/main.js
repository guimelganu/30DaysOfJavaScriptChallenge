/* 
    Primitive Data Types:
    Numbers
    Strings
    Booleans
    Null
    Undefined
    Symbol
    
    Non-Primitive data types:
    Objects
    Arrays
*/

let numbers = [1, 2, 3];
let nums = [1, 2, 3];

console.log(numbers == nums); //This gonna show us a False, because in non-primitive data types, we cannot compare it each others because it compares by reference instead of value.

let userOne = {
    name: 'Pepe',
    role: 'Teaching',
    country: 'Mexico'
}

let userTwo = {
    name: 'Pepe',
    role: 'Teaching',
    country: 'Mexico'
}

console.log(userOne == userTwo); //Same case, it will be a false.

// /******Math Objects****** 
const PI = Math.PI;

console.log(Math.round(PI)); // 3 to round values to the nearest number
console.log(Math.round(9.45)); // 10
console.log(Math.floor(PI)); // 3 rounding to down
console.log(Math.ceil(PI)); // 4 rounding to up
console.log(Math.min(-5, 3, 20, 4, 5, 10)) // -5, returns the minimum value
console.log(Math.max(-5, 3, 20, 4, 5, 10)) // 20, returns the maximum value

const randNum = Math.random() // creates random number between 0 to 0.999999
console.log(randNum)

// Let us  create random number between 0 to 10

const num = Math.floor(Math.random () * 11) // creates random number between 0 and 10
console.log(num)

//Absolute value
console.log(Math.abs(-10))      // 10

//Square root
console.log(Math.sqrt(100))     // 10

console.log(Math.sqrt(2))       // 1.4142135623730951

// Power
console.log(Math.pow(3, 2))     // 9 

console.log(Math.E); //2.718 Base of narutal Logarithms.

// Logarithm
// Returns the natural logarithm with base E of x, Math.log(x)
console.log(Math.log(2))        // 0.6931471805599453
console.log(Math.log(10))       // 2.302585092994046

// Returns the natural logarithm of 2 and 10 respectively
console.log(Math.LN2)           // 0.6931471805599453
console.log(Math.LN10)          // 2.302585092994046

// Trigonometry
Math.sin(0)
Math.sin(60)

Math.cos(0)
Math.cos(60)

//Entire Randoms
let randomNum = Math.random()         // generates 0 to 0.999
let numBtnZeroAndTen = randomNum * 11

console.log(numBtnZeroAndTen)         // this gives: min 0 and max 10.99

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)
console.log(randomNumRoundToFloor)    // this gives between 0 and 10

//We can use the backslash character (\) at the end of each line to indicate that the string will continue on the next line.

const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."

console.log(paragraph)

/*
In JavaScript and other programming languages \ followed by some characters is an escape sequence. Let's see the most common escape characters:

\n: new line
\t: Tab, means 8 spaces
\\: Back slash
\': Single quote (')
\": Double quote (")
*/

console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')

onsole.log(`The sum of 2 and 3 is 5`)              // statically writing the data
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`) // injecting the data dynamically


let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let age = 250
let fullName = firstName + ' ' + lastName

let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.` //ES6 - String interpolation method
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`
console.log(personInfoTwo)
console.log(personInfoThree)

//Using a string template or string interpolation method, we can add expressions, which could be a value, 
//or some operations (comparison, arithmetic operations, ternary operation).

let a1 = 2;
let b1 = 3;
console.log(`${a1} is greater than ${b1}: ${a1 > b1}`);

//Lenght returns the number of characters in a string (includign empty spaces).

let js = 'JavaScript'
console.log(js.length)         // 10

//Accesisng to a index of a String.
let string = 'JavaScript'
let firstLetter = string[0]

console.log(firstLetter)           // J

let secondLetter = string[1]       // a
let thirdLetter = string[2]
let lastLetter = string[9]

console.log(lastLetter)            // t

let lastIndex = string.length - 1

console.log(lastIndex)  // 9
console.log(string[lastIndex])    // t

let string1 = 'JavaScript'

console.log(string1.toUpperCase())     // JAVASCRIPT toUpperCase(): this method changes the string to uppercase letters.
console.log(string1.toLowerCase())    // javascript toLowerCase(): this method changes the string to lowercase letters.

console.log(string1.substring(0,4))     // Java substring(): It takes two arguments, the starting index and the stopping index but 
//it doesn't include the character at the stopping index.
console.log(string1.substring(4,10))    // Script
console.log(string1.substring(4))       // Script

console.log(string1.split());    // Changes to an array -> ["30 Days Of JavaScript"]
console.log(string1.split(' ')); // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]
console.log(string1.split(''));  // Split to an array at each letter

let countries = 'Finland, Sweden, Norway, Denmark, and Iceland';
console.log(countries.split(',')); // split to any array at comma -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(', ')) // Eliminate the space between de comma ant the text.

let string3 = '   30 Days Of JavaScript   ';
console.log(string3.trim()); //trim(): Removes trailing space in the beginning or the end of a string.

//includes(): It takes a substring argument and it checks if substring argument exists in the string. includes() returns a boolean. 
//If a substring exist in a string, it returns true, otherwise it returns false.

console.log(string3.includes('Days'))     // true
console.log(string3.includes('days'))     // false - it is case sensitive!
console.log(string3.includes('Script'))   // true
console.log(string3.includes('script'))   // false
console.log(string3.includes('java'))     // false
console.log(string3.includes('Java'))     // true

let string4 = '30 Days Of JavaScript'

console.log(string4.replace('JavaScript', 'Python')) // 30 Days Of Python replace(): takes as a parameter the old substring and a new substring.

console.log(string4.charAt(0))        // 3 charAt(): Takes index and it returns the value at that index

console.log(string4.charCodeAt(3))  // D ASCII number is 68 charCodeAt(): Takes index and it returns char code (ASCII number) of the value at that index

console.log(string4.indexOf('D')) // 3 indexOf(): Takes a substring and if the substring exists in a string it returns the first position of the substring 
//if does not exist it returns -1

console.log(string4.indexOf('script'))     // -1 Upper case sensitive.

let string5 = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string5.lastIndexOf('love')) // 67 lastIndexOf(): Takes a substring and if the substring exists in a string 
//it returns the last position of the substring if it does not exist it returns -1

let string6 = '30'
console.log(string6.concat("Days", "Of", "JavaScript")) // 30DaysOfJavaScript concat(): it takes many substrings and joins them.

let string7 = 'Love is the best to in this world'

console.log(string7.startsWith('Love'))   // true startsWith: it takes a substring as an argument and it checks if the string starts with that specified substring. 
//It returns a boolean(true or false).

console.log(string7.startsWith('love'))   // false

console.log(string7.startsWith('world'))  // false

// endsWith: it takes a substring as an argument and it checks if the string ends with that specified substring. It returns a boolean(true or false).
console.log(string7.endsWith('world'))         // true
console.log(string7.endsWith('love'))          // false
console.log(string7.endsWith('in the world')) // true

//search: it takes a substring as an argument and it returns the index of the first match. The search value can be a string or a regular expression pattern.
console.log(string5.search('love'))          // 2
console.log(string5.search(/javascript/gi))  // 7

//Regular patterns looks like:
let pattern = 'love' 
let patternOne = /love/     // with out any flag
let patternTwo = /love/gi   // g-means to search in the whole text, i - case insensitive

//match: it takes a substring or regular expression pattern as an argument and it returns an array if there is match if not it returns null. Let us see how a regular expression pattern looks like. It starts with / sign and ends with / sign.
console.log(string5.match('love')) //["love", index: 2, input: "I love JavaScript. If you do not love JavaScript what else can you love.", groups: undefined]

console.log(string5.match(patternTwo))   // ["love", "love", "love"]

//repeat(): it takes a number as argument and it returns the repeated version of the string.
console.log(pattern.repeat(10)) // lovelovelovelovelovelovelovelovelovelove

//To check the data type of a certain variable we use the typeof method.
let jobs;
console.log(typeof job) // undefined
/* 
Casting: Converting one data type to another data type. We use parseInt(), parseFloat(), Number(), + sign, str() When we do arithmetic operations string numbers should be first converted to integer or float if not it returns an error.
String to Int
We can convert string number to a number. Any number inside a quote is a string number. An example of a string number: '10', '5', etc. 
We can convert string to number using the following methods:
-parseInt()
-Number()
-Plus sign(+)
*/

let number = '10'

let numInt = parseInt(number)
console.log(numInt) // 10

let numInt1 = Number(number)
console.log(numInt1) // 10

let numInt3 = +num
console.log(numInt3) // 10

//The same with floats.
let float = '9.81'

let numFloat = parseFloat(float)
console.log(numFloat) // 9.81

let numFloat2 = Number(float)
console.log(numFloat2) // 9.81

let numFloat3 = +num
console.log(numFloat3) // 9.81

//Float to Int:

let float2 = 9.81
let numInt4 = parseInt(float2)
console.log(numInt4) // 9

