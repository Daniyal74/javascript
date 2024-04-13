// example 05

function celsiusToFahrenheit(celsius){
    temp_in_celcius=celsius
    temp_in_farhenheit= (5/9)*(celsius + 32)
    console.log(`${celsius}°C is ${temp_in_farhenheit.toPrecision(3)}°F.`);
    return
}

celsiusToFahrenheit(100)

function fahrenheitToCelsius(farhenheit){
    temp_in_farhenheit=farhenheit
    temp_in_celcius=((9*farhenheit)/5)-32
    console.log(`${farhenheit}°F is ${temp_in_celcius.toPrecision(3)}°C.`);
    return
}

fahrenheitToCelsius(113)

