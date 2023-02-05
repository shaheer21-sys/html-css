// 20. In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of your shopping cart if it has not been already added
//     - remove 'Honey'
//     - modify Tea to 'Green Tea'

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
if (shoppingCart[0] !== 'Meat'){
shoppingCart.unshift('Meat')
}
console.log(shoppingCart);

//     - add Sugar at the end of your shopping cart if it has not been already added
if (shoppingCart[shoppingCart.length-1] !== 'Sugar'){
    shoppingCart.push('Sugar')
}
console.log(shoppingCart);

//remove honey splice(index wer to remove , index till wer to remove)
const index = shoppingCart.indexOf('Honey');
shoppingCart.splice(index,1);
console.log(shoppingCart);

const x = shoppingCart.indexOf('Tea');
shoppingCart[x] = 'Green Tea';
console.log(shoppingCart);



