"user strict"
let score= null

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number (score) //This decleration accept any type of value in the number type.
//console.log(typeof valueInNumber);
//console.log(valueInNumber); // Give NaN (Not a Number) as output

// If we provide value "null" to a variable score then it will be converted into number and provide zero as an output.
// "33" => 33
// "33abc" => NaN
// true => 1 ; false => 0

let isLoggedIn = "daniyal"
let booleanisLoggedIn = Boolean(isLoggedIn);
// console.log(booleanisLoggedIn);

// 1 => true ; 0 => false
// "" => false
// "daniyal" => true

let someNumber = 33

let stringNumber = String(someNumber);
// console.log(stringNumber)
// console.log(typeof stringNumber)

// ************************ Operations *******************************

let value = 45
let negValue = -value;
// console.log(negValue)

let str1 = "Syed"
let str2 = " Daniyal"
let str3 = " Shah"
let str4 = str1+str2+str3
//console.log(str4);

// console.log("1" + 6); // consider both input as string because the first one is string and concatenate both and gives 16 as output
// console.log(1 + "8"); // when string is present as a second value an the first one is numer the again both concatenated and answer will be 18.
// console.log("3" + 9+7); // when three value are present and the first one is string then it will treat other two also as string and concatenate them.
// console.log(4+6+"8"); // when the first two values are numbers and the last one is string the in the output first two numbers will be added and the concatenate with the last one.

// console.log(true);
// console.log(+true);
// console.log(+false)
// console.log(+"")

// '++' operator is overloaded for two types of operands: numbers and Bigint.
// "x++" (Postfix), the increment operator increments and returns the value before incrementing.
// "++x" (Prefix), the increment operator increments and returns the value after incrementing.

// let x = 3;
// const y = x++;

// console.log(y)

// const a = ++x;
// console.log(a)

let x = 3;
const y = ++x;
// console.log(y)

let gameCounter = 11
++gameCounter;

console.log(gameCounter);


