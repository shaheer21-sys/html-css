// const powers = {
//     fly : true,
//     coordinate : Math.random() * 1000
// }

// const obj2 = Object.create(powers);
// console.log(obj2);
// console.log(obj2.fly);
// console.log(Object.getPrototypeOf(obj2));
// console.log(Object.getPrototypeOf(powers));

const obj1 = Object.create({});
Object.defineProperty(obj1, 'book' ,{
    // icon: [],/
    get : () => '📘',
    // set : (cur) => this.icon.push(cur) 

});

// obj1.set('📘');
console.log(obj1.book);
console.log(Object.getPrototypeOf(obj1.ic));