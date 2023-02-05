//Higher order function //
//for Each
//filter 
//map
//reducer
//find
//every
//some
//sort
//setTimeInterval //
//setTimeout //

// ******************* HOF *******************

//hof
// const square = (n) =>{
//     return n**n;
// };

// function cube (square,n){
//     return square(n) * n;
// }
// console.log(cube(square,2));

//callback function

//forEach is HOf and () => {} is callback
// const names = ['shaheer','jhonny'];
// names.forEach((element) => {
//     console.log(element);
    
// });

// names.forEach(myfun);
// function myfun(val){
//     return console.log(val);
// }


// let a = [1,20,10,12,4];
// console.log(a.sort());
// // *******************************************************
// //hof 2nd example
// let arr = [1,2,3,4,5,6,7,8,9,10];

// // //for odd 
// // function oddfunc(arr){
// //     let filterArr = [];
// //     for (let i =0 ;i < arr.length; i ++){
// //         if(arr[i] % 2 !== 0){
// //             filterArr.push(arr[i]);

// //         }
// //     }

// //     return filterArr;
        
// // }


// // //even func
// // function evenfunc(arr){
// //     let filterArr = [];
// //     for (let i =0 ;i < arr.length; i ++){
// //         if(arr[i] % 2 == 0){
// //             filterArr.push(arr[i]);

// //         }
// //     }

// //     return filterArr;
        
// // }


// // console.log(`${oddfunc(arr)} odd array`);
// // console.log(`${evenfunc(arr)}  even array`);


// // same with higher order fucntion

// // function filterfunc(callback, arr){
// //     let filteredArr = [];
// //     for(let i =0 ; i < arr.length ; i ++){
// //         callback(arr[i]) ? filteredArr.push(arr[i]) : null ;
// //     }

// //     return filteredArr;
// // }

// // same logic with higher order function in array prototype 
// Array.prototype.filterfunc = function (callback) {
//     let filteredArr = [];
//     for(let i =0 ; i < this.length ; i ++){
//         callback(this[i]) ? filteredArr.push(this[i]) : null ;
//     }

//     return filteredArr;
// }

// //functions to pass as arguments for filteredfunc

// function isOdd(x){
//     return x%2 != 0 ;
// }

// function isEven(x){
//     return x%2 === 0 ;
// }

// //funciton for greater than 5

// function greaterThan5 (x) {
//     return x > 5;
// }

// // console.log(filterfunc(isOdd , arr));
// // console.log(filterfunc(isEven , arr));
// // console.log(filterfunc(greaterThan5 , arr));
// // console.log(filterfunc((x) => x < 5 , arr));

// //usign array prototype of hof 

// console.log(arr.filterfunc(isOdd));
// console.log(arr.filterfunc(isEven));

// // console.log();


// ******************* with inbuilt filter function *******************
// console.log(arr.filter((x) => x % 2 == 0));

// console.log(arr.filter((x) => { return x < 3}));

// //function chaining 

// console.log(arr.filter((x) => x > 5).filter((x) => x %2 ==0));

// ******************************** returning a function ********************************
// function calculate(operation) {
//     switch (operation) {
//       case "ADD":
//         return function (a, b) {
//           console.log(`${a} + ${b} = ${a + b}`);
//         };
//       case "SUBTRACT":
//         return function (a, b) {
//           console.log(`${a} - ${b} = ${a - b}`);
//         };
//     }
//   }

// const calculateAdd = calculate("ADD");
// console.log(calculateAdd);

// // Output: 
// // [Function (anonymous)]

// const calculateAdd = calculate("ADD");
// calculateAdd(2, 3);
// // Output: 2 + 3 = 5


// const calculateSubtract = calculate("SUBTRACT");
// calculateSubtract(2, 3);
// // Output: 2 - 3 = -1


// calculate("ADD")(2, 3);
// // Output: 2 + 3 = 5

// calculate("SUBTRACT")(2, 3);
// // Output: 2 - 3 = -1


//find

// let arr = [1,2,3,4,5,6,7,8,9,10];


// let test = arr.find((e)=>{
//     return e > 5;
// })

// console.log(test);

//for Each

let arr = ['shaheer','jathin','praneeth','sameera'];


// let t = arr.forEach((e) => {console.log(e);});