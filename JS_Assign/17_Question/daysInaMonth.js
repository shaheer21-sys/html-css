// 17. Write a program which tells the number of days in a month.

const prompt = require('prompt-sync')();

const year = prompt('Enter the year: ');
const month = prompt("enter the month: ");


const Months =['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

let numOfDays = new Date(year,month,0).getDate();

console.log(`The number of days in the month of ${Months[month-1]} is ${numOfDays} `);