import { countriesHighLvl } from "./countries-highlevel.js"

// The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// Sort the array and find the min and max age
console.log(ages.sort())

// Find the median age(one middle item or two middle items divided by two)
let middleIndex = parseInt(ages.length/2)
console.log(ages[middleIndex])

// Find the average age(all items divided by number of items)
let total = 0
for(let i of ages) total+=i
console.log(`The average age are ${parseInt(total/ages.length)}.`)

// Find the range of the ages(max minus min)
console.log(`The min age are: ${ages[0]}`)
console.log(`The max age are: ${ages[ages.length-1]}`)

// Compare the value of (min - average) and (max - average), use abs() method 
let min = Math.abs(ages[0] - total)
let max = Math.abs(ages[ages.length-1] - total)
console.log(`${max} are different to ${min}`)

// Slice the first ten countries from the countries array
console.log(countriesHighLvl.slice(0, 11))

// Find the middle country(ies) in the countries array
let middle = parseInt(countriesHighLvl.length/2)
console.log(countriesHighLvl[middle])

// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.

let even = (countriesHighLvl.length)%2
let totalCountries = countriesHighLvl.length

if(even != 0){
    let firstHalf = countriesHighLvl.slice(0,(parseInt(totalCountries/2))+1)
    let secondHalf = countriesHighLvl.slice((parseInt(totalCountries/2))+1)
    console.log(firstHalf, secondHalf)
}else{
    let firstHalf = countriesHighLvl.slice(0,(parseInt(totalCountries/2))+2)
    let secondHalf = countriesHighLvl.slice((parseInt(totalCountries/2))+2)
    console.log(firstHalf, secondHalf)
}