let prompt = require('prompt-sync')();

let table = prompt('enter the number that you don\'t know the table of😒: ');

for(let i =1; i <= 10;i++){
    console.log(`${table} * ${i} = ${table*i}`);
}