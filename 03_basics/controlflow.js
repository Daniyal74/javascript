// ************************** CONTROL FLOW Basics *******************************8

/*

if (conditions){
    scope of function
}

"if" statement runs only, when the condition is true otherwise the if statement doesn't work.
*/

var prompt = require("prompt_sync")()
let temperature = prompt("Enter your temperature: ")
let temp =+ temperature;
const room_Temp = 25

// const temp1 = 30
// const temp2 = 40

if (temp > room_Temp) {
    console.log(`Today weather is hot and the temperature is ${temp}.`);
} else {
    console.log("Temperature is Normal.");
}


