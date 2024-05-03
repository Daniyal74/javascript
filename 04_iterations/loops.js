// For Loop

/*
for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is best number.");
        // break
    }
    console.log(element);
}
*/

/*
for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
        console.log(`Inner loop value is ${j} and Outer loop value is ${i}.`);;
        
    }
    
}
*/

/*
for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i*j}`);
        
    }
    
}
*/

/*
let newArray=["Spiderman, Captain America", "Superman"]
for (let i = 0; i < newArray.length; i++) {
    const element = newArray[i];
    console.log(element);
    
}
*/

/*
for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log(`Detected 5`);
        break
    }
    console.log(`Value of i is ${i}`);
    
}
*/

/*
for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log(`Detected 5`);
        continue // allow one time
    }
    console.log(`Value of i is ${i}`);
    
}
*/

/*
let i = 0
while (i <= 10) {
    console.log(`Value of index is ${i}`);
    i = i + 2
}
*/

/*
let myArray = ["Antman", "Ironman", "Hulk"]

let arr = 0
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}.`);
    arr++
}
*/

let score = 12
do {
    console.log(`Score is ${score}.`);
    score++
} while (score <= 10);












