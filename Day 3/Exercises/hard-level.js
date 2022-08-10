// Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05

const now = new Date();
let hours = (now.getHours() < 10 ? '0' : '') + (now.getHours());
let minutes = (now.geMinutes() < 10 ? '0' : '') + (now.getMinutes());

console.log(`${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()} ${hours}:${minutes}`);
