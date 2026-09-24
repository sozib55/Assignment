function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

let celsius = 25;
let fahrenheit = celsiusToFahrenheit(celsius);

console.log(celsius + " Celsius = " + fahrenheit + " Fahrenheit");