"user strict"
// key = value which is supposed to be checked.


const month = 4

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("Default case match.");
        break;
}

// if we don't put break in any case then the value after the case will also execute except default block.

// ********************** truthy and falsethy ***********************************

const userEmail = ""

if (userEmail) {
    console.log("Got user email.");
} else {
    console.log("Don't have user email.");
}

// falsy values (flase, 0, -0, Bigin 0n, "", null, undefined, Nan)
// truthy values ("0", "false", " ", function(){}, [],{})

/*
if (userEmail.length === 0){
    console.log("Array is empty.");
}
*/

const emptyObject = {}

if (Object.keys(emptyObject).length === 0){
    console.log("Object is empty.");
}

// Nullish Coalescing Operator (??) : null and undefined

let val1;
// val1 = 5 ?? 10

val1 = null ?? 4 ?? 7
val2 = undefined ?? 10

console.log(val1);
console.log(val2);

// Terniary Operator used to directly check the condition.

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("more than 80")











