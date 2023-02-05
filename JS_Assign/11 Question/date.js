// Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.


var currentDate = new Date();

//to get the year 
console.log(currentDate.getFullYear());

//to get the month in number 
console.log('current month is '+ currentDate.getMonth()+1);

//date today 
console.log('current Date is ' + currentDate.getDate());

// day today as a number 
console.log(`current day today as a number ${currentDate.getDay()}` );

//houre now 
console.log(`hour now is ${currentDate.getHours()}`);

//minute now 
console.log(`minutes now are ${currentDate.getMinutes()}`);

//numbers of seconds elapsed from January 1, 1970 to now.
console.log(Date.now() / 1000); //method 1
console.log(new Date().getTime() /1000); //1000 to convert milliseconds to seconds 
console.log(currentDate.getTime() / 1000);
