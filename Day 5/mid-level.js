// Create a separate countries.js file and store the countries array in to this file, 
// create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
import {countries} from "./countries.js"
import {webTechs} from "./web_techs.js"

const arrayConcat = countries.concat(webTechs)
console.log(arrayConcat, arrayConcat.length)


// First remove all the punctuations and change the string to array and count the number of words in the array
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
text = text.replace(/[.,]/g, '')
console.log(text)

let textArray = text.split(' ')
console.log(textArray)
console.log(`The number of words for element "text" are ${textArray.length}.`)

// In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.includes('Meat') ? console.log('You already have meat in you list.') : shoppingCart.unshift('Meat')
console.log(shoppingCart) 

// add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.includes('Sugar') ? console.log('You already have sugar in your list.') : shoppingCart.push('Sugar');
console.log(shoppingCart)

// remove 'Honey' if you are allergic to honey
let index = shoppingCart.indexOf('Honey')
shoppingCart.splice(index,1)
console.log(shoppingCart)

// modify Tea to 'Green Tea'
let index1 = shoppingCart.indexOf('Tea')
shoppingCart.splice(index1,1,'Green Tea')
console.log(shoppingCart)

// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
countries.includes('Ethiopia') ? console.log('ETHIOPIA') : countries.push('Ethiopia')

// In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
webTechs.includes('Sass') ? console.log('Sass is a CSS preprocess') : webTechs.push('Sass')
console.log(webTechs)

// Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = backEnd.concat(backEnd)
console.log(fullStack)

