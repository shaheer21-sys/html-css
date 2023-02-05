function isPrimeNumber (num){
    if (num <= 1){
        console.log('Enter the number which is greater than o1');
    }
    else{
        let isPrime =true;
        for (let  i = 0; i <= Math.sqrt(num) ; i ++){
            if(num % i == 0){
                isPrime =false;
                break;
            }

        }

        if (isPrime){
            console.log(`${num} is an prime number`);
        }
        else{
            console.log(`${num} is not an prime number`);
        }

    }
}


const prompt = require('prompt-sync')();
const num = prompt('enter the number that you wanted to check ');

isPrimeNumber(num);