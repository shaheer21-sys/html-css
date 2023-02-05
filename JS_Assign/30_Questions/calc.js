const prompt =require('prompt-sync')();
let num1=prompt('Enter the number 1: ');
let operator=prompt('Enter the operation symbol: ')
let num2=prompt('Enter the number 2: ');

function calc(a,operator,b){
    let output;
    switch (operator){
        case "+":
            output=a+b;
            break;
        case "-":
            output=a-b;
            break;

        case "*":
            output=a*b;
            break;

        case "/":
            output=a/b;
            break;

            // console.log(output);
        default:
            console.log('kuch dang ka enter karna BOSDK');
            // console.log(operator);
            output=null;
            break;        
    }
    if(output){
        console.log(`The output of ${a}${operator}${b} is : ${output}`);

    }
}
calc(num1,operator,num2);
