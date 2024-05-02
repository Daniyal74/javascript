// ************************** CONTROL FLOW Basics *******************************8

/*

if (conditions){
    scope of function
}

"if" statement runs only, when the condition is true otherwise the if statement doesn't work.

var has a global scope and can't be used.
*/

// import psp from "prompt-sync-plus";

// const prompt = psp({ sigint: true });
// var prompt = require("prompt_sync")();
// var temperature = prompt("Enter your temperature: ");
// var temp =+ temperature;
// var room_Temp = 25

// const temp1 = 30
// const temp2 = 40

// if (temp > room_Temp) {
//     console.log(`Today weather is hot and the temperature is ${temp}.`);
// } else {
//     console.log("Temperature is Normal.");
// }

// short hand notation

const balance = 100

if (balance > 500) console.log("Fine");  // this is called inplicit scope.

var prompt = require('prompt-sync')();
//
// get input from the user.
//
var n = prompt('Enter your temperature:  ');
const room_Temp = 25

if (n > room_Temp) {
    console.log(`Today weather is hot and the temperature is ${n}.`);
} else {
    console.log("Temperature is Normal.");
}

/*

&& = if all the conditions are true then the if statement executes.
|| = if any one condition is true then the if statement executes.

*/





