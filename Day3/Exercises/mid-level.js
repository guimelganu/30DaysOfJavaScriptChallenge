//1.- Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let base = prompt('Enter a base: ', 'Here goes the number');
let height = prompt('Enter height: ', 'Here goes the number');
let area = 0.5 * base * height;
alert(`Your area is ${area}`);

//2.- Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c).
let a = prompt('Enter side a: ', 'Here goes the number');
let b = prompt('Enter side b: ', 'Here goes the number');
let c = prompt('Enter side c: ', 'Here goes the number');
let perimeter = a + b + c;
alert(`The perimeter of the triangle is ${perimeter}`);

//3.- Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length = prompt('Enter the length of your rectangle: ');
let width = prompt('Enter the width of your rectangle: ');
let areaRectangle = length * width;
let perimeterRectangle = 2 * (length + width);
alert(`The area of you rectangle is: ${areaRectangle}`);
alert(`The perimeter of you rectangle is: ${perimeterRectangle}`);

//4.- Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let radius = prompt('Enter the radius: ');
let areaCircle = 3.14 * radius * radius;
let circumference = 2 * 3.14 * radius;

//5.- Calculate the slope, x-intercept and y-intercept of y = 2x -2
let x_intercept = 1;
let y_intercept = -2;
let slope = 2;

//6.- Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let y2 = 2;
let y1 = 2;
let x2 = 6;
let x1 = 10;
let m = (y2-y1)/(x2-x1);
alert(`The slope is: ${m}`);

//7.- Compare the slope of above two questions.
slope > m 
? console.log('First slope is bigger')
: console.log('Second slope is bigger');

//8.- Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
let x = -3;
let y = x**2 + 6*x + 9;
console.log(`The value of y is ${y}`); 

//9.- Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
let hours = prompt('Enter hours: ');
let pay = prompt('Enter rate per hour: ');
let weeklyPay = hours * pay;
console.log(`Your weekly earning is: ${weeklyPay}`);

//10.- If the length of your name is greater than 7 say, your name is long else say your name is short.

let firstName = 'Guimel';

firstName.length > 7 
? console.log("Your name is long!")
: console.log("Your name is short!");

//11.- Compare your first name length and your family name length and you should get this output.
let familyName = "García";

firstName.length > familyName.length 
? console.log("Your first name is longer than your last name.")
: console.log("Your last name ir longer than your first name.");

//12.- Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

let myAge =  25;
let yourAge = 35;
myAge > yourAge 
? console.log(`I'm (${myAge} - ${yourAge} older than you.)`)
: console.log(`I'm (${yourAge} - ${myAge} younger than you.)`);

//13.- Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
const now = new Date();
let year = prompt('Enter birth year: ');
let yearsOld = now.getFullYear() - year;

year >= 18
? console.log(`You have ${yearsOld}. You are old enough to drive.`)
: console.log(`You have ${yearsOld}. You will be allowed to drive after ${18} - ${yearsOld} years.`)

//14.- Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years.

let age = prompt('Enter number of years you live: ');
alert(`You lived ${age} * ${31536000}`);

//15.- Create a human readable time format using the Date time object.
// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm
console.log(`${now.getFullYear()}-${now.getMonth()}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}`);
console.log(`${now.getDate()}-${now.getMonth()}-${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`);
console.log(`${now.getDate()}/${now.getMonth()}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`);



