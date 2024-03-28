"user strict"

const name="Daniyal"
const age=30

console.log(name + " is " + age + " years old."); /* This syntax of concatenation is outdated 
and should not be used*/

/* Modern way of concatenation is to use "Back ticks (` `)". It provides string interpolation
in which we make place holders and the variables can be directly injected */

// for injecting variables we use the format ${}.

console.log(`My name is ${name} and my age is ${age} years old.`);

