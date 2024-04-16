"user strict"

// Scope of a Function

// {} (curly brackets) shows the scope.

// Global Scope is available for block scope also.
let a=300
var b=10

// Block scope is only for conditional block.
if (true){
    let a=30
    var b = 50
    const c=10
}


// console.log(a);
// console.log(b);

// Nested Scope means Function with in Function.

/* closure in an interesting technique, we need to understand dome (Document Object Model)
means how to manipulate HTML page through Javascript*/

function one(){
    const username="Daniyal"

    function two(){
        const website="daniyalsyed074@gmail.com"
        console.log(username);
    }
    // console.log(website);  // this is a part of function two block and can't be call out of block.

    two() // calls username which is a global scope and out of block that's why it is called in second block.
    /* when we declare function and call it so, there will be a separate call stack means a separate
    scope is formed.(Closure)*/
    /* child function is able to call variable from parent function*/
}

one()

if(true){
    const username="Daniyal"

    if(username=="Daniyal"){
        const website = "Youtube"
        console.log(username + website) // username is called because it has global scope.
    }
    // console.log(website) // can't be called out of block scope.
}

// console.log(username) // can't be called out of block scope.








