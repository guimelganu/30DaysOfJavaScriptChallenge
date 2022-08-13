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
const numbers = [1, 2, 3, 4, 5]
numbers[0] = 10      // changing 1 at index 0 to 10
numbers[1] = 20      // changing  2 at index 1 to 20
console.log(numbers) // [10, 20, 3, 4, 5]

//Methods to manipulate arrays.
//Array Constructor (Array:To create an array)
let arra = Array() //Creates an empty array

let eightspaces = Array(8) //Creates an array with eight empty values
console.log(eightspaces)

//Array with an static value
let eightspacesFill = Array(8).fill('X') //It creates eight element values filled with 'X'.
console.log(eightspaces)

//Concatenating array using concat (concat:To concatenate 2 arrays)
const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
console.log(firstList.concat(secondList))

//Getting array length
const ar = (firstList.concat(secondList)).length
console.log(ar)

// indexOf:To check if an item exist in an array. If it exists it returns the index else it returns -1.
const ck = ['a' , 'b', 'c', 'd']
console.log(ck.indexOf('a')) //0
console.log(ck.indexOf('d')) //3
console.log(ck.indexOf('z')) //-1

// let us check if a banana exist in the array

const fruits2 = ['banana', 'orange', 'mango', 'lemon']
let index = fruits2.indexOf('banana')  // 0

if(index === -1){
   console.log('This fruit does not exist in the array')  
} else {
    console.log('This fruit does exist in the array')
} // This fruit does exist in the array

// we can use also ternary here
index === -1 ? console.log('This fruit does not exist in the array'): console.log('This fruit does exist in the array')

// lastIndexOf: It gives the position of the last item in the array. If it exist, it returns the index else it returns -1.

let last = [1, 2, 3, 5, 2, 5, 8]
console.log(last.lastIndexOf(5)) //5
console.log(last.lastIndexOf(4)) //-1

// includes:To check if an item exist in an array. If it exist it returns the true else it returns false.
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
console.log(webTechs.includes('HTML')) //true
console.log(webTechs.includes('Python')) //false

// Array.isArray:To check if the data type is an array
let webTech = 'NodeJs'
console.log(Array.isArray(webTechs)) //true
console.log(Array.isArray(webTech)) //false

// toString:Converts array to string
const names = ['Andres', 'Julio', 'Federico']
console.log(names.toString()) //Andres,Julio,Federico

// join: It is used to join the elements of the array, the argument we passed in the join method will be joined in the array and return as a string. 
// By default, it joins with a comma.

console.log(names.join()) //Andres,Julio,Federico
console.log(names.join('')) //AndresJulioFederico
console.log(names.join(' ')) //Andres Julio Federico
console.log(names.join(', ')) //Andres, Julio, Federico
console.log(names.join(' # ')) //Andres, Julio, Federico

// Slice: To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position.
const numberss = [1, 2, 3, 4, 5]
console.log(numberss.slice(1,4)) //[2,3,4] it doesn´t include the ending position.
console.log(numberss.slice()) //it copies all items
console.log(numberss.slice(0)) //it copies all items

// Splice: It takes three parameters:Starting position, number of times to be removed and number of items to be added.
console.log(numberss.splice(3,1,'Sup!')) //It remove 1 item in position 3 (4) and replace it with 'Sup!'
console.log(numberss) //If we made a console log of the array, the expected output is [1, 2, 3, 'Sup!', 5]
console.log(numberss.splice(2,0,'insertedItem')) //You can also insert an item without deleted another.
console.log(numberss)

// Push: adding item in the end. To add item to the end of an existing array we use the push method.
const arraa = ['item1', 'item2', 'item3']
arraa.push('itemPushed')
console.log(arraa) //['item1', 'item2', 'item3', 'itemPushed']

// pop: Removing item in the end.
arraa.pop()
console.log(arraa) //['item1', 'item2', 'item3']

// shift: Removing one array element in the beginning of the array.
arraa.shift()
console.log(arraa)

// unshift: Adding array element in the beginning of the array.
arraa.unshift('Hello there!');
console.log(arraa)

// reverse: reverse the order of an array.
arraa.reverse()
console.log(arraa)

// sort: arrange array elements in ascending order. 
webTechs.sort()
console.log(webTechs)

// Array can store different data types including an array itself.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = [frontEnd, backEnd]
console.log(fullStack)   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
console.log(fullStack.length)  // 2
console.log(fullStack[0])  // ["HTML", "CSS", "JS", "React", "Redux"]
console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]
