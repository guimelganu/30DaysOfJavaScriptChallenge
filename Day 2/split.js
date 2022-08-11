let string = '30 Days Of JavaScript';

console.log(string.split());    // Changes to an array -> ["30 Days Of JavaScript"]
console.log(string.split(' ')); // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]
console.log(string.split(''));  // Split to an array at each letter

let countries = 'Finland, Sweden, Norway, Denmark, and Iceland';
console.log(countries.split(',')); // split to any array at comma -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(', ')) // Eliminate the space between the comma and the text.
