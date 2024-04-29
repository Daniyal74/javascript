// "this" keyword can be used to access current context.

const user={
    username:"Daniyal",
    price:999,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website.`);
        // console.log(this);
    }

    // "this" refers current context.
}

// user.welcomeMessage()
// user.username="Shayan"  // we changed the context and then we call.
// user.welcomeMessage()

// console.log(this);

// the global object in the browser is the "Window".

// function chai(){
//     let username="Daniyal"
//     console.log(this.username);
// }

// "this" only works in objects and doesn't work in functions.
// chai()

const chai = () => {
    let username="Daniyal"
    console.log(this);
}

chai()

// const addNum = (num1, num2) => {
//     return num1+num2
// }

// when we use curly brackets then we have to use return in arrow function. this is called ecplicit return.

const addNum = (num1, num2) => (num1+num2)

console.log(addNum(6,6));

// implicit return, in which we remove the parenthesis.

// IIFE = Immediately Invoked Function Expressions.

// means when you write a function then immediate calling the function.

(function chai(){
    // function chai is a NAMED IIFE.
    console.log("DB Connected.");
})(); // IIFE doesn't know when to stop so, for this we use semicolon = ";"

/* IIFE = (defination)() ,Sometimes problem is caused by the pollution of global scope so, 
inorder to remove the global scope pollution and variables we use IIFE. */


// below is an example of UNNAMED IIFE.
((name) => {
    console.log(`DB Connected Two ${name}.`);
})("Daniyal")






