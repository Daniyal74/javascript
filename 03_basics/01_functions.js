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

// console.log(logInUserMessage());

// in functions "..." shows rest operator which actually place all passed arguments in a array.

/* if we pass more than two argument when calling a function then the first value goes to val1,
second value goes to val2 and the remaining all value will go into an array because of rest
operator */

function calculateCartPrice(val1, val2,...num1){
    return num1
}

// console.log(calculateCartPrice(1,4,5,6));

const teacherProfile={
    name: "Syed Daniyal Shah",
    subject: "Artificial Intelligence",
    experience: "7 Years",
}

function profile(anyobject){
    console.log(`Teacher's name is ${anyobject.name} and has experience of ${anyobject.experience} of teaching ${anyobject.subject}.`);
}

// profile(teacherProfile)
// profile({
//     name: "Shafqat",
//     subject:"Computer Science",
//     experience: "14 Years"
// })

const myArray=[200,500,400,600]

function returnThirdValue(getArray){
    return getArray[2]
}

console.log(returnThirdValue(myArray));

console.log(`Third value of an array is ${returnThirdValue([300,200,600,700])}`);



