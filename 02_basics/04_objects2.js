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
const obj4 = {7:"r", 8:"t", 9:"i"}

const obj3 = Object.assign({}, obj1,obj2,obj4)  /* we will take empty {} because there are 
sometimes more objects to be merged */

const obj5 = {...obj1,...obj2,...obj4}

// console.log(obj5);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));  // returns an array of keys.

// format = Object.keys(Objectname)

// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("state"));  /* ".hasownproperty()" can be used to check whether an object has such property or not */

// console.log(tinderUser.hasOwnProperty("country"));

const course={
    coursename: "Physics",
    instructorName: "Daniyal",
    location: "Pakistan",
}

// console.log(course.instructorName);

// Object destructuring
const {instructorName:instructor}=course
console.log(instructor);















