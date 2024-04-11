
// Object.create ,this is a constructor method and creetes a singleton object.

// Object Literals

const sir_name = Symbol("Sir Name")


const User = {
    name: "Syed Daniyal Shah",
    [sir_name]:"Syed",  // for refering Symbol as a key we always use square brackets.
    age: 30,
    country:"Pakistan",
    state:"Karachi",
    email: "daniyalsyed074@gmail.com",
}

// console.log(User.country);
// console.log(User["email"]);
// console.log(User[sir_name]);
// console.log(typeof sir_name);

// console.log(User);
User.email="daniyalsyed22@outlook.com"
// console.log(User);

// Object.freeze(User)
User.name="Faizan"
// console.log(User);

User.greetings = function(){
    console.log("Hello! User welcome....");
}

// console.log(User);
// console.log(User.greetings); // function doesn't execute only the reference is shown.
// console.log(User.greetings());

/* for injecting the same object into "${}", we always use "this" */

User.greetingsTwo = function(){
    console.log(`Hello! ${this.name} welcome....`);

}

console.log(User.greetingsTwo());





