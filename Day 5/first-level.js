//1.- Declare an empty array
const array = Array()

//2.- Declare an array with more than 5 number of elements
const arra = [1, 2, 3, 4, 5]

//3.- Find the length of your array
console.log(arra.length)

//4.- Get the first item, the middle item and the last item of the array
console.log(arra[0])
let middleIndex = (parseInt(arra.length/2))
console.log(arra[middleIndex])
let lastIndex = (arra.length-1)
console.log(arra[lastIndex])

//5.- Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [1, 'b', false, 5.4, "Hi", 8]
console.log(mixedDataTypes.length)

//6.- Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const  itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', "Amazon"]

//7.- Print the array using console.log()
console.log(itCompanies)

//8.- Print the number of companies in the array
console.log(itCompanies.length)

//9.- Print the first company, middle and last company
console.log(itCompanies[0])
console.log(itCompanies[(arra.length/2)])
console.log(itCompanies[(itCompanies.length-1)])

//10.- Print out each company
console.log(itCompanies[0])
console.log(itCompanies[1])
console.log(itCompanies[2])
console.log(itCompanies[3])
console.log(itCompanies[4])
console.log(itCompanies[5])
console.log(itCompanies[6])

//11.- Change each company name to uppercase one by one and print them out
console.log(itCompanies[0].toUpperCase())
console.log(itCompanies[1].toUpperCase())
console.log(itCompanies[2].toUpperCase())
console.log(itCompanies[3].toUpperCase())
console.log(itCompanies[4].toUpperCase())
console.log(itCompanies[5].toUpperCase())
console.log(itCompanies[6].toUpperCase())

//12.- Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.join(', '), 'are big IT companies.')

//13.- Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
if(itCompanies.includes('Tesla')){
    console.log('Yes, it exits')
}
else{
    console.log("It, doesn't exist")
}

//14.- Filter out companies which have more than one 'o' without the filter method
let first = itCompanies.indexOf('Facebook')
let second = itCompanies.indexOf('Microsoft')
let filter = [itCompanies[first], itCompanies[second]]
console.log(filter)

//15.- Sort the array using sort() method
console.log(itCompanies.sort())

//16.- Reverse the array using reverse() method
console.log(itCompanies.reverse())

//17.- Slice out the first 3 companies from the array
console.log(itCompanies.slice(0,3))

//18.- Slice out the last 3 companies from the array
console.log(itCompanies.slice(4))


