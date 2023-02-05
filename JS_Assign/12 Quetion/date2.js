// 12. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

var currentDate = new Date();
console.log(currentDate);

console.log(`yyyy-mm-dd is ${currentDate.getFullYear()} - ${currentDate.getMonth() + 1} - ${currentDate.getDate()} HH:mm is ${currentDate.getHours()}:${currentDate.getMinutes()}`);
console.log(`dd-mm-yyyy is ${currentDate.getDate()} - ${currentDate.getMonth() + 1} - ${currentDate.getFullYear()} HH:mm is ${currentDate.getHours()}:${currentDate.getMinutes()}`);
console.log(`dd/mm/yyyy is ${currentDate.getDate()} / ${currentDate.getMonth() + 1} / ${currentDate.getFullYear()} HH:mm is ${currentDate.getHours()}:${currentDate.getMinutes()}`);