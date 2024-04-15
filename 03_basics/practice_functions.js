// example 05

function celsiusToFahrenheit(celsius){
    temp_in_celcius=celsius
    temp_in_farhenheit= (5/9)*(celsius + 32)
    console.log(`${celsius}°C is ${temp_in_farhenheit.toPrecision(3)}°F.`);
    return
}

// celsiusToFahrenheit(100)

function fahrenheitToCelsius(farhenheit){
    temp_in_farhenheit=farhenheit
    temp_in_celcius=((9*farhenheit)/5)-32
    console.log(`${farhenheit}°F is ${temp_in_celcius.toPrecision(3)}°C.`);
    return
}

// fahrenheitToCelsius(113)

function reverse_a_number(num){
    num_string=num.toString()
    num_split=num_string.split("")
    num_reverse=num_split.reverse()
    num_join=num_reverse.join("")
    convert_num=Number(num_join)
    console.log(`The reverse of ${num} is ${convert_num}.`);
    return
}

// reverse_a_number(24567)

function checking_a_palindrome(word){
    new_word=word.split("").reverse().join("")
    if (new_word===word){
        console.log("The input string is a Palindrome.");
        return
    }
    console.log("The input string is not a Palindrome.");
    return
}

// checking_a_palindrome("madam")
// checking_a_palindrome("sad")

// Function Example 06

/* for (initialization; condition; afterthought)
   statement */

/*
function substring(str1){
    const array1=[]
    for (x=0, y=1; x<str1.length; x++,y++){
        array1[x]=str1.substring(x,y)
    }
    const combination=[]
    const temp=""
    const slent=Math.pow(2,array1.length)
    for (i=0, i<slent; i++){
        temp=""
        for (j=0; j<array1.length; j++){
            if(i & Math.pow(2,j)){
                temp += array1[j]
            }
        if (temp !== ""){
            combination.push(temp)
        }
        }
    }
    console.log(combination.join("\n"));
}
*/
// substring("dog")

// function example 07

function alphbetical_order(word){
    return word.split("").sort().join("")
}

// console.log(alphbetical_order("webmaster"));

// function example 08

/*
function uppercase(word){
    const array01=word.split("")
    const newArray=[]
    for(var x=0;x<array01.length;x++){
        newArray.push(array01[x].charAt(0).toUpperCase() + array01[x].slice(1))
    }
    return newArray.join("")
}

console.log(uppercase("the quick brown fox jumps over a lazy dog"));
*/

// function example 09

/*
function find_longest_word(str){
    const array2=str.match(/\w[a-z]{0,}/gi)
    const result=array2[0]
    for (i=0; i<array2.length; i++){
        if (result.length<array2[i].length){
            return array2[i]
        }
    }
    // return result
}

*/

// console.log(find_longest_word("Web Dev tutorials"));

// example 10

function isPrime(n, divisor = 2) {
    if (n < 2) {
        return false;
    }
    if (divisor === 2 && n % 2 === 0) {
        return false;
    }
    if (divisor > Math.sqrt(n)) {
        return true;
    }
    if (n % divisor === 0) {
        return false;
    }
    return isPrime(n, divisor + 1);
}

console.log(test_prime(37));









