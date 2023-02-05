// 13. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let prompt = require('prompt-sync')();

var age = prompt('Enter the Age:');
if(age >=18){
    console.log('You are old enough to drive');

}

else{
    let remainingAge = 18 - age;
    console.log(` You have to wait ${remainingAge} more years to be eligible`);
     
}