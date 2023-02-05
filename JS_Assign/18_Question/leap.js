// 18. Write a program which tells the number of days in a month, now consider leap year.


const prompt = require('prompt-sync')();

const year = prompt('Enter the year: ');
const month = prompt("enter the month: ");


const Months =['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

let numOfDays = new Date(year,month,0).getDate();


// if (year % 4 == 0){

//     if(month == 2){
//     console.log(`The number of days in the month of ${Months[month-1]} in leap year ${year} is ${numOfDays+1} `);
//     }
//     else{
//     console.log(`The number of days in the month of ${Months[month-1]} in leap year ${year} is ${numOfDays} `);
//     }

// }

// else{

if (numOfDays == 29){
console.log(`The number of days in the month of ${Months[month-1]} in year ${year} is ${numOfDays}, Because its an leap year `);

}
else{
    console.log(`The number of days in the month of ${Months[month-1]} in year ${year} is ${numOfDays} `);

}

// }
