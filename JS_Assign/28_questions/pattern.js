// 28. Write a program to print the given patterns using the loops-
// 	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
// 	   *
// 	   **
// 	   ***
	
// 	b. Print a square pattern, if the input is 3 then the output should be similar to the given output
// 	   ***
// 	   ***
// 	   ***

// 	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
// 	     *
// 	    ***
//     *****
const prompt =require('prompt-sync')();
const num = prompt('enter the pattern lines: ');

let pattern1 = "", pattern2="",pattern3="",pattern4="";

function p1(num){
    for (let i =1 ;i <= num ; i++){
        for (let j=0 ; j < i ; j++ ){
            pattern1 += "*";
        }
        pattern1+="\n";
    }
}
p1(num);


function p2(num){
    for (let i = 1 ; i <= num; i++){
        for (let j=1; j <= num; j++){
            pattern2+="*";

        }
        pattern2+="\n";
    }


}
p2(num);


function p3(num){
    for (let i =1; i <= num; i++){
        for(let space = 1 ;space <= num-i ; space++){
            pattern3+=" ";
        }

        for (let star = 1;star <= 2*i-1; star++){
            pattern3+="*"
        }
        pattern3+="\n"
    }
}
p3(num);

function p4(num){
    for (let i =1; i <= num; i++){
        for(let space = 1 ;space <= num-i ; space++){
            pattern4+=" ";
        }

        for (let star = 1;star <= i; star++){
            pattern4+="*"
        }
        pattern4+="\n"
    }
}
p4(num);

console.log(pattern1);
console.log(pattern2);
console.log(pattern3);
console.log(pattern4);
 
//     *
//    **
//   ***
//  ****
// *****