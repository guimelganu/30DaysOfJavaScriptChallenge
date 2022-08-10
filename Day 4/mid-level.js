//1.- Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

let score =prompt('Insert your score: ');
switch(true){
    case score >= 80 && score <= 100:
        console.log("Your grade it's an A");
        break;
    case score >= 70 && score <= 79:
        console.log("Your grade it's a B");
        break;
    case score >= 60 && score <= 69:
        console.log("Your grade it´s a C");
        break;
    case score >= 50 && score <= 59:
        console.log("Your grade it's a D");
        break;
    case score >= 0 && score <= 49:
        console.log("Your grade it's an F");
        break;
    default:
        console.log("Please enter a valid score.");
}

//2.- Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

let season = (prompt('Insert the month: ')).toLocaleLowerCase();
switch(season){
    case 'september': case 'october': case 'november':
        console.log('The season is Autumn.');
        break;
    case 'december': case 'january': case 'february':
        console.log('The season is Winter.');
        break;
    case 'march': case 'april': case 'may':
        console.log('The season is Spring.');
        break;
    case 'june': case 'july': case 'august':
        console.log('The season is Summer');
        break;
    default: 
        console.log('Pls, insert a valid month.')
}

//3.- Check if a day is weekend day or a working day. Your script will take day as an input.
let dayInput = prompt('What is the day today?');
let day = dayInput.toLowerCase();
switch(day){
    case 'monday': case 'thursday': case 'wensday': case 'friday':
        console.log(`${dayInput} is a working day.`);
        break;
    case 'saturday': case 'sunday': 
        console.log(`${dayInput} is a weekend.`);
        break;
    default: 
        console.log('Pls, insert a valid day.')
}
