"user strict"

myNums = [1,2,3]

/*
const myTotal = myNums.reduce( function (acc, currval) {
    console.log(`Accumulator: ${acc} and Current Value: ${currval}`);
    return acc + currval
}, 0)

console.log(myTotal);
*/

const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0 )

console.log(myTotal);

/* The reduce() method of Array instances executes a user-supplied "reducer" callback function 
on each element of the array, in order, passing in the return value from the calculation on the 
preceding element. The final result of running the reducer across all elements of the 
array is a single value. */

const shoppingCart = [
    {
        itemName: 'Js Course',
        price: 2999
    },
    {
        itemName: 'Mobile Development Course',
        price: 5999
    },
    {
        itemName: 'Datascience Course',
        price: 8999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0 )

console.log(priceToPay);





