"user strict"

const name="Daniyal"
const age=30

// console.log(name + " is " + age + " years old."); /* This syntax of concatenation is outdated and should not be used */

/* Modern way of concatenation is to use "Back ticks (` `)". It provides string interpolation
in which we make place holders and the variables can be directly injected */

// for injecting variables we use the format ${}.

// console.log(`My name is ${name} and my age is ${age} years old.`);

const gameName = new String('Super Mario') // New way of declaring a string.
// console.log(gameName);

// console.log(gameName[3]);

// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());

// console.log(gameName.charAt(4));
// console.log(gameName.charAt(5));

// console.log(gameName.indexOf('M'));

const newString = gameName.substring(0,5)

console.log(newString);

console.log(gameName);
const anotherString = gameName.slice(1, 6)
console.log(anotherString);












