"user strict"

// In C language there is an option of "call by value" or "call by reference".
// these two categorisation was done on the basis of how values store/place in a memory and how can we call/access the values.

// Primitive datatypes and Non-primitive (referenced) datatypes.
// Primitive dataypes are of seven(7) categories.
// Primitive dataypes are always called by value and changes can be made in a copy because copy is shown to us.
// String, Number, Boolean, Null(Empty), Undefined (means variable and memory space are declared but value is missing), Symbol (Used to make any value unique), Bigint(contains Scientific values).

// Referenced (Non-Primitive dataype) means reference of the memory can be directly allocated.
// Arrays, Objects, functions

// sometimes in a language we have to define the type of variable, this ultimately increases the safety but this doen't need in javascript.
// Javascript is a dynamically typed language because the type checking takes place at runtime or execution time. This means that values are checked against type when the program is executing.
// Examples: Javascript, Python, Ruby, PHP

/* Statically typed languages are the ones in which the type checking takes place during compile time.
At compile time, source code ina specific programming language is converted into machine readable format.
This means that before source code is compiled, the type associated with each and every variable
must be known.
Examples: C++, Fortran, C, Kotlin, Haskell, Go */

const Id=Symbol("123")
const anotherId=Symbol("123")

/* symbol provides uniquesness to the value. In the above examples although same
value is passed to both variable but the "Symbol" treat both values uniquely */


// console.log(Id==anotherId)
const bigNumber=3456789234556123445n
// console.log(bigNumber)
// console.log(typeof bigNumber)

const heroes= ["ironman", "spiderman", "hulk"]
// console.log(heroes)
// console.log(typeof heroes)

let myObject = {
    name:"Daniyal",
    age: 30,
    Gender: "Male",
}
console.log(myObject)
console.log(typeof myObject)

