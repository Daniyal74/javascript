"user strict"

const score = 400
// console.log(score);

const balance = new Number(300)
// console.log(balance);

const newNumber = balance.toString()
// console.log(newNumber); /* ".toString()" converts number into string and allow us to apply all the string operations */
// console.log(typeof(newNumber));

// console.log(balance.toFixed(2)); // ".tofixed()" provide the value to two decimal places.

const otherNumber = 124.678
// console.log(otherNumber.toPrecision(3));
/* ".toPrecision()" return the value to the specified digits mentioned in the () */

// console.log(otherNumber.toPrecision(4));
// console.log(otherNumber.toPrecision(2));

const hundreds = 1000000000
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString("en-IN"));

// *************************** MATHS **********************************

// console.log(Math);

// console.log(Math.abs(-4.7));
// console.log(Math.round(4.2));
// console.log(Math.round(4.7));
// console.log(Math.ceil(5.4));
// console.log(Math.floor(5.7));
// console.log(Math.exp(10));

// console.log(Math.min(45,67,87,34,23));
// console.log(Math.max(45,67,87,34,23));

// console.log(Math.random());  // always gives value between 0 and 1.
// console.log((Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.random());
console.log(Math.random() * (max - min + 1));
console.log(Math.floor(Math.random() * (max - min + 1)));

console.log(Math.floor(Math.random() * (max - min + 1))+min);







