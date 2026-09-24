function factorial(number) {
    let result = 1;

    for (let i = 1; i <= number; i++) {
        result = result * i;
    }

    return result;
}

let number = 5;
let result = factorial(number);

console.log(number + "! = " + result);
