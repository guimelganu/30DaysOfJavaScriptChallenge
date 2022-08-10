// 1.- Write a program which tells the number of days in a month (consider leap year).
let year = prompt('Enter a year: ');
let monthInput = prompt('Enter a month: ');
let month = monthInput.toLowerCase();

if((year%4) == 0){
    switch(month){
        case 'january': case 'march': case 'may': case 'july': case 'august': case 'october': case 'december':
            console.log(`${monthInput} has 31 days.`);
            break;
        case  'april': case 'june': case 'september':  case 'november':
            console.log(`${monthInput} has 30 days.`);
            break;
        case 'february':
            console.log(`${monthInput} has 29 days.`);
            break;
        default:
            console.log('Pls, enter a valid month.');
    }
    console.log(`Note: ${year} is a leap year.`);
}
else{
    switch(month){
        case 'january': case 'march': case 'may': case 'july': case 'august': case 'october': case 'december':
            console.log(`${monthInput} has 31 days.`);
            break;
        case  'april': case 'june': case 'september':  case 'november':
            console.log(`${monthInput} has 30 days.`);
            break;
        case 'february':
            console.log(`${monthInput} has 28 days.`);
            break;
        default:
            console.log('Pls, enter a valid month.');
    }
}


