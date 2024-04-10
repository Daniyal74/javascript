"user strict"

const score = 400
console.log(score);

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
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString("en-IN"));



