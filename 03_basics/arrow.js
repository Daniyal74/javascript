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

/* Javascript Execution Context = Means how JS runs a file.
- For running JS will do it in two phases. Firstly, Global EC is formed and can be referred by "this"
- Global EC of browser is different from nodeJS environment. The value of Global EC of this is
"Window Object".
- Execution is being done on thread, Javascript is single threaded and everything in JS is being
done through process.
- Function/Functional Execution Context.
- Eval Execution context (MangoDB) = Itself a property of global object. */

/* {Javascript code} is being run in two phases.
- Memory Creation Phase/ Creation Phase = Location is allocated to the variables and declarations.
- Execution Phase = executes the code. */

// ****************** EXAMPLE *******************************************

let val1 = 10
let val2 = 5
function add_Num(num1, num2) {
    let total = num1 + num2
    return total
}

let result1 = add_Num(val1, val2)
let result2 = add_Num(10, 2)
console.log(result1);
console.log(result2);

/* 1. Code is run by Global Execution/ Environment and allocated in "this".

2. Memory Phase = all variable are collected and place in memory.
- val1 -> undefined
- val2 -> undefined
- add_Num -> defination of function
- result1 -> undefined
- result2 -> undefined

3. Execution Phase:
- val1 <- 10
- val2 <- 5
- add_Num = function is defined and a specified execution context is formed for add_Num

                            (New variable Environment + Execution thread)
                            
                            * Will be deleted after execution.

Everytime when function is executed then a new box is created named New Execution Context contains
a separate environment box for variables(Memory Phase) and a separate execution thread(Execution Phase).
- For function add_Num:
 Memory Creation:
- val1 -> undefined
- val2 -> undefined
- total -> undefined

Execution Context:
Processing and execution is being done in this phase.

- num1 <- 10
- num2 <- 5
- total <- 15 (return to the Global Execution Context).

After the execution of function the box will be deleted and we will revert back to step (3).

- result1 <- 15

For result2, again a separate block is formed (New Variable Environment + Execution Thread).

Memory Phase:
- val1 -> undefined
- val2 -> undefined
- total -> undefined

Execution Context:
Processing and execution is being done in this phase.

- num1 <- 10
- num2 <- 2
- total <- 12 (return to the Global Execution Context).
After the execution of function the box will be deleted and we will revert back to step (3).

result2 <- 12  */

//  ************************** Call Stack *******************************

/*

                                    |                        |     
                                    |                        |
                                    |                        |
                                    |                        |
                                    |        three()         |
                                    |        two()           |
                                    |        one()           |
                                    |      Global EC         |
                                    |________________________|

LIFO (Last In First Out) technique is being used for execution the last function will executes
first and then leave the stack.

