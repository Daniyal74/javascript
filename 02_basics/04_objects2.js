// singleton object

const tinderUser = new Object()
// console.log(tinderUser);

// non-singleton object

const tinder = {}
// console.log(tinder);

tinderUser.name = "Syed Daniyal Shah"
tinderUser.age = 30
tinderUser.state ="karachi"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "daniyalsyed074@gmail.com",
    fullname: {
        username:{
            firstname: "Syed",
            middlename:"Daniyal",
            lastname: "Shah"
        }
    }
}

// console.log(regularUser.fullname.username.middlename);

const obj1 ={1:"s",2:"e",3:"l"}
const obj2 = {4:"r", 5:"t", 6:"i"}

const obj3 = Object.assign(obj1,obj2)
console.log(obj3);




