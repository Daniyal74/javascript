// function means we close code in a package and we can take copy of that package to anywhere.

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// function name_of_function(parameters){scope of function}

// const result= addTwoNumbers(4,6)    // for calling function, name_of_function(arguments)
// addTwoNumbers(4,"7")
// addTwoNumbers("5",6)

// console.log(`Result: ${result}`);

// function will not work when you return anything in the function.

function addition(number1,number2){
    let result=number1+number2
    return result
}

// console.log(`Result: ${addition(4,5)}`);

function logInUserMessage(username){
    if (!username){
        console.log("Please enter your name....");
        return
    }
    return `${username}, Just Logged In....`
}

console.log(logInUserMessage());

