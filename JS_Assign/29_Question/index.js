// 9. Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.
const prompt =require('prompt-sync')();
const file = prompt('Enter the file name with the extension:  ');

console.log(file.slice(file.indexOf(".")+1,file.length));

