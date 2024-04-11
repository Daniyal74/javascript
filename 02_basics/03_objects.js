
// Object.create ,this is a constructor method and creetes a singleton object.

// Object Literals

const sir_name = Symbol("Sir Name")


const User = {
    name: "Syed Daniyal Shah",
    [sir_name]:"Syed",
    age: 30,
    country:"Pakistan",
    state:"Karachi",
    email: "daniyalsyed074@gmail.com",
}

// console.log(User.country);
// console.log(User["email"]);
// console.log(User[sir_name]);
// console.log(typeof sir_name);

console.log(User);
User.email="daniyalsyed22@outlook.com"
console.log(User);

Object.freeze(User)
User.name="Faizan"
console.log(User);




