const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

// Iterate 0 to 10 using for loop, do the same using while and do while loop
for(let i = 0; i <=10; i++){
    console.log(i)
}

let i = 0
while(i <= 10){
    console.log(i++)
}

let i1 = 0
do{
    console.log(i1)
    i1++
}while(i1 <= 10)

//Iterate 10 to 0 using for loop, do the same using while and do while loop
for(let i = 10; i >= 0 ; i--){
    console.log(i)
}

let ir = 10
while(ir >= 0){
    console.log(ir--)
}

let ir2 = 10
do{
    console.log(ir2)
    ir2--
}while(ir2 >= 0)

let n = 7
for(let i=0; i <= n; i++){
    console.log(i)
}

//Write a loop that makes the following pattern using console.log():
let pattern = ''
for(let i = 0; i <= 8; i++){
    console.log(pattern)
    pattern += '#'
}

//Use loop to print the following pattern:
let pat = 0
do{
    console.log(`${pat} x ${pat} = ${pat * pat}`)
    pat++
}while(pat <= 10)

console.log('')
console.log('i  i^2  i^3')
let e = 0
while(e <= 10){
    console.log(`${e}   ${e**2}   ${e**3}`)
    e++
}

// Use for loop to iterate from 0 to 100 and print only even numbers
for(i=0; i <= 100; i++){
    let isEven = i%2
    if(isEven == 0){
        console.log(i)
    }
}

// Use for loop to iterate from 0 to 100 and print only odd numbers
for(i=0; i <= 100; i++){
    let isOdd = i%2
    if(isOdd != 0){
        console.log(i)
    }
}

// Use for loop to iterate from 0 to 100 and print only prime numbers
for(let i = 0; i <= 100; i++){
    let flag = 0;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}

// Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum = 0
for(let i = 0; i <= 100; i++){
    sum += i
}
console.log(`The sum of 1 to 100 is ${sum}`)

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let even = 0
let odd = 0
for(let i = 0; i <= 100; i++){
    if(i%2 == 0){
        even += i
    }else{
        odd += i
    }
}
console.log(`The sum of all evens from 0 to 100 is ${even}. And the sum of all odds from 0 to 100 is ${odd}.`)