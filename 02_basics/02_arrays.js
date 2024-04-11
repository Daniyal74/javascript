const marvel_heros = ["ironman", "thor", "hulk"]
const dc_heros = ["superman", "flash", "wonderwoman"]

marvel_heros.push(dc_heros) // ".push()", function always put any sort of datatype into array.
// console.log(marvel_heros);

const marvel_heros1 = ["spiderman", "blackpanther", "antman"]
const allHeros = marvel_heros1.concat(dc_heros) // ".concat()", function give the value in new array.
// console.log(allHeros);

const all_new_heros = [...marvel_heros1, ...dc_heros,]
/* "..." is called spread which actually makes all elements of array, an individual value */
// console.log(all_new_heros);

const another_array = [34,56,23,12,[45,37,98,43],76,78,[54,55,57,[32,31, [43,76,[58,90]]]]]
// console.log(another_array);

let real_array = another_array.flat(Infinity)
/* ".flat()", this function Returns a new array with all sub-array elements 
concatenated into it recursively up to the specified depth. */

// console.log(real_array);

// console.log(Array.isArray("daniyal"));
// console.log(Array.from("daniyal"));  // forms an array of whatever type of data we input.

// console.log(Array.from({name:"daniyal"}));
/* gives empty as an output because not able to convert it into array so, at this point we have to
mention whether we want an array of keys or values */

let score1=200
let name="daniyal"
let score2=400

console.log(Array.of(score1,score2,"daniyal",false));

/* The "Array.of()" static method creates a new Array instance 
from a variable number of arguments, regardless of number or type of the arguments. */
















