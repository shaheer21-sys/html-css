// 27. Write a program to print all the prime number between 0 to 100 (0 and 100 included).
let primeNum = [];

function isPrimeNumber(num){
    if (num<=1){
        console.log('enter number which is greater than 1');
    }
    else{

        for(let i = 2 ; i <= num ; i++){
                let isprime = true;
                for(let j=2; j <= Math.sqrt(i); j++){
                    // console.log(i,j);
                    if(i%j == 0){
                        isprime = false;
                        // console.log(i,j);
                        break;
                    }
                }
                // console.log(`aree ${i}`);
                if (isprime){
                    console.log(i);
                }
        }

    }
    
}

const prompt = require('prompt-sync')();
const number = prompt('enter the number to print prime numbers till that number: ')
isPrimeNumber(number);
