// 22. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

//sort
console.log(ages.sort((a,b) => {
    if (a>b){return 1;}
    else if (a < b) {return -1;}
    else {return 0;}
}));

//min and max
let minimum = Math.min(...ages);
let maximum =Math.max(...ages);

console.log(`Then minimum age is ${minimum} and the maximum is ${maximum}`);

//dublicates
function removedDub(arr) {
    return arr.filter((val, index) => arr.indexOf(val) === index
    );
} 

//median 
let Age = removedDub(ages);
console.log(`after removing dublicates ${Age}`);
// console.log(Age[Age.length/2]);

let median =0;
if (Age.length%2 ==0){
    median =(Age[Age.length/2] + Age[Age.length/2 -1 ])/2;
}
else{
    median = Age[Age.length/2]
}
console.log(`median is ${median}`);

//average 
let sum = 0;
ages.forEach(val => {
    sum+=val;
})
const averageAge = sum / ages.length;
console.log(`average Age is ${averageAge}`);

//     - Find the range of the ages(max minus min)
console.log(`range is ${Age[Age.length-1] - Age[0]}`);

//     - Compare the value of (min - average) and (max - average), use abs() method
let minMaverage = Math.abs(Age[0]-averageAge);
let maxMaverage =Math.abs(Age[ Age.length - 1 ]-averageAge);

if(minMaverage > maxMaverage){
    console.log(`minMavarge is greater than maxMaverage and the values are ${minMaverage} , ${maxMaverage}`);
}
else if (minMaverage < maxMaverage){
    console.log(` maxMaverage is greater than minMavarge and the values are ${minMaverage} , ${maxMaverage}`);
}
else{
    console.log('Both are equal');
}