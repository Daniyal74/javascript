const myNumbers =[1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumbers.map( (num) => num+10)

// console.log(newNums);

// ********************* chaining **********************************
// chaining means using two or more than two methods in a single line.

const newNums = myNumbers
                .map( (num) => num*10)
                .map((num)=> num+1)
                .filter((num) => num>=50)

console.log(newNums);


