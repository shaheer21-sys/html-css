// 15. Write a program which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F

const prompt = require('prompt-sync')();

const grade = prompt("enter the grade: ");

if (80<=grade && grade<=100){
    console.log('A grade');
}
else if(70<=grade && grade<=89){
    console.log('B grade');
}
else if(60<=grade && grade<=69){
    console.log('C grade');
}
else if(50<= grade && grade<=59){
    console.log('D grade');
}
else{
    console.log('F grade');
}
