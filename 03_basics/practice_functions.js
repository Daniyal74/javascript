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

checking_a_palindrome("madam")
checking_a_palindrome("sad")


