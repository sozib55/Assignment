function sumArray(numbers) {
    let sum = 0;

    for (let number of numbers) {
        sum += number;
    }

    return sum;
}

let numbers = [10, 20, 30, 40, 50];

console.log("Array:", numbers);
console.log("Sum:", sumArray(numbers));