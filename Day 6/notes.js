//for Loop
for(let i = 0; i <= 5; i++){
    console.log(i)
  }

//Adding elements in a Array
const numbers = [1, 2, 3, 4, 5]
let sum1 = 0
for(let i = 0; i < numbers.length; i++){
  sum1  = sum1 + numbers[i]  // can be shorten, sum += numbers[i]
}

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []
for(let i = 0; i < countries.length; i++){
  newArr.push(countries[i].toUpperCase())
}

//Creating a new array based on the existing array
const numbers1 = [1, 2, 3, 4, 5]
const newArr1 = []
for(let i = 0; i < numbers1.length; i++){
  newArr1.push( numbers1[i] ** 2)
}
console.log(newArr)  // [1, 4, 9, 16, 25]

//while
let i = 0
while (i <= 5) {
  console.log(i)
  i++
}
// 0 1 2 3 4 5

//do while
let i1 = 0
do {
  console.log(i)
  i1++
} while (i <= 5)
// 0 1 2 3 4 5

//for of loop
const numbers2 = [1, 2, 3, 4, 5]
for (const number of numbers2){
  console.log(number)
}
console.log('Multi')
for (const number of numbers2){
  console.log(number * 2)
}

let sum = 0
for (const num of numbers) {
  sum = sum + num} 
  console.log(sum)

  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

for (const tech of webTechs){
  console.log(tech.toUpperCase())
}

for (const tech of webTechs){
  console.log(tech[2])
}

const countries1 = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']

let nwarray = []
for (const country of countries1){
  nwarray.push(country.toLocaleLowerCase())
}
console.log(nwarray)

//break is used to interrup a loop 
for(let i = 0; i <= 5; i++){
  if(i == 3){
    break
  }
  console.log(i)
}
//The above code stops if 3 found in the iteration process.

//We use the keyword continue to skip (omit) a certain iterations
for(let i = 0; i <= 5; i++){
  if(i == 3){
    continue
  }
  console.log(i)
}
// 0 1 2 4 5
