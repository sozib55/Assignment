function isPalindrome(word) {
    let reversedWord = word.split("").reverse().join("");

    return word === reversedWord;
}

let word = "racecar";
let result = isPalindrome(word);

console.log(word + " is palindrome:", result);