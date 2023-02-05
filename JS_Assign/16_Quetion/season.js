// 16. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer

const prompt = require('prompt-sync')();

const month = prompt("enter the month: ");

let Autum = ['september','october','november'];
let Winter =['december','january','february'];
let Spring = ['march','april','may'];
let Summer = ['june','july','august'];

if (Autum.includes(month.toLowerCase())){
    console.log('it is autum season');
}
else if (Winter.includes(month.toLowerCase())){
    console.log('it is winter season');
}
else if (Spring.includes(month.toLowerCase())){
    console.log('it is spring season');
}
else if (Summer.includes(month.toLowerCase())){
    console.log('it is summer season');
}
else{
    console.log('please enter with correct spelling');
}