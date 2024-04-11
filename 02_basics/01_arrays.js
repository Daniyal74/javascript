"user strict"

const myArray = [2,4,6,7,4]
const myHeros = ["iron man","hulk","spider man","thor"]

const myArr2 = new Array(3,5,7,8,9)

// console.log(myArray);
// console.log(myHeros);
// console.log(myArr2);

// console.log(myHeros[2]);

// *************************** Array's Method ******************************

myArray.push(67, 56, 78)     // ".push()" function add the elements in the array.
// console.log(myArray);  

myArray.pop()    // ".pop()", function removes the last element of an array.
// console.log(myArray);

myArray.unshift(34)  // ".unshift(x)", this function adds any value given to "x" at the start of an array.
// console.log(myArray);

myArray.shift()
// console.log(myArray);

// console.log(myArray.includes(76))   // ".includes()", function always gives the value in Boolean.

// console.log(myArray.indexOf(67));

const newArr = myArray.join()
// console.log(typeof myArray);
// console.log(typeof newArr);


console.log("A", myArray);
console.log(myArray.slice(1,4));

const myn1 = myArray.splice(1,4)
console.log("B", myn1);
console.log("A", myArray);

/* ".slice()", function gives the ouput from an array exclusive of the last range but doesn't
manipulate with the original array. However, ".splice()", function gives output from an array
inclusive of last range and also manipulate the original array */

















