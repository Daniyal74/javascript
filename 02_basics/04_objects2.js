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

console.log(regularUser.fullname.username.middlename);



