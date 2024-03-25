//Inorder to store information of any user, we need some memory space to store information and the optimize way of doing this is variables and constant.
//For constant, once the value is declared then it can't be changed.
//For variables, values are declared and can be changed.
const accountId=144553
let accountEmail="daniyalsyed074@gmail.com"
var accountPassword="12345"
accountCity="Karachi"

//accountId = 233 (declared value of constant can't be changed)
console.log(accountId);

accountEmail="daniyal@yahoo.com"
accountPassword="21478"
accountCity="Lahore"

/*
Prefer not to use var because of an issue of block scope and functional scope.
*/
let accountState;

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
