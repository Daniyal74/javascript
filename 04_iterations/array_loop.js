"user strict"

/***************** Array specific loops ********************************/

const arr = [1,2,3,4,5,6,7]
// No need to provide any increment or decrement.
for (const num of arr) {
    // console.log(`Value is ${num * num}`);
}

const greet = "Hello, Daniyal"
for (const i of greet) {
    // console.log(`Each character is ${i}`);
    if (i == " ") {
        break
    }
}

/******************** Map *******************************************/
// Map = itself is an object.
// The Map object holds key-value pairs and remembers the original insertion order of the keys.
/* Map doesn't contain duplicate values, always hold unique values and also maintain the order in which the
values are inserted. */

/*
const map = new Map()
map.set("IN", "India")
map.set("Fr", "France")
map.set("PK", "Pakistan")
map.set("UK", "United Kingdom")

console.log(map);

for (const [key, value] of map) {
    console.log(key, ": ", value);
}
*/

const myObject = {
    JS:"Javascript",
    cpp:"C++",
    rb:"Ruby",
    swift: "Swift by Apple"
}

// "For in" loop is used for iterations in objects.
for (const key in myObject) {
    // console.log(key);    
}

for (const key in myObject) {
    // console.log(myObject[key]);
}

for (const key in myObject) {
    // console.log(`${key} is a shortcut for ${myObject[key]}`);
}

const programming = ["Javascript", "C++", "Python", "Ruby", "Swift"]

for (const key in programming) {
    // console.log(programming[key]);
}

// we don't apply "for in" loop on maps because maps are not iterative.

/******************** For each loop **************************************/

const coding = ["JS", "Ruby", "Swift", "cpp", "Java", "Python"]

// call back function doesn't have any specific name.

coding.forEach(function (item){
    // console.log(item);
})

coding.forEach((item)=>{
    // console.log(item);
})

function printMe(item) {
    console.log(item);
}

coding.forEach(printMe)









