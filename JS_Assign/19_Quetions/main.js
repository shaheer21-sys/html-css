const {countries} = require('./countries');
const {web_techno} = require('./web_services');

// console.log(`printing all countires ${countries.name} and ${web_techno}`);

let web = web_techno.map((ele)=>{
    return ele
})

console.log(countries.map((ele)=> {
    return ele.name
}) +' and ' + web); 
