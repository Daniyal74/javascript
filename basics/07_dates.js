"user strict"

let myDate = new Date()
// console.log(myDate);

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof(myDate));

let myNewDate = new Date(2021, 3, 20)   // date format is "Date(year, month, day)"
// console.log(myNewDate);
// console.log(myNewDate.toDateString());
// console.log(myNewDate.toLocaleString());
// console.log(myNewDate.toLocaleDateString());
// console.log(myNewDate.toISOString());
// console.log(myNewDate.toLocaleTimeString());
// console.log(myNewDate.toJSON());

let myNewDate1 = new Date(2020, 5, 23, 4, 45, 34)
// console.log(myNewDate1.toString());
// console.log(myNewDate1.toDateString());
// console.log(myNewDate1.toLocaleDateString());
// console.log(myNewDate1.toLocaleString());
// console.log(myNewDate1.toLocaleTimeString());

let myCreatedDate = new Date("2023-02-26")
// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(myCreatedDate.getMilliseconds());
// console.log(myCreatedDate.getSeconds());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()

// console.log(newDate);
// console.log(newDate.toString());
// console.log(newDate.getDay());

// console.log(newDate.getMonth());

newDate.toLocaleString('default', {
    weekday: "long",
    month: "2-digit",
    timeZoneName: "long",
})

















