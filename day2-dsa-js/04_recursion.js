// 04_recursion.js

// Function to calculate the factorial of a number using recursion
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
// Example usage
const num = 5;  
const fact = factorial(num);
console.log(`Factorial of ${num} is ${fact}`); // Factorial of 5 is 120

// Function to calculate the Fibonacci sequence using recursion
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
// Example usage
const fibNum = 6;
const fib = fibonacci(fibNum);
console.log(`Fibonacci of ${fibNum} is ${fib}`); // Fibonacci of 6 is 8

// Function to calculate the sum of an array using recursion
function sumArray(arr, n) {
    if (n <= 0) {
        return 0;
    }
    return arr[n - 1] + sumArray(arr, n - 1);
}
// Example usage
const arr = [1, 2, 3, 4, 5];
const arrSum = sumArray(arr, arr.length);
console.log(`Sum of array is ${arrSum}`); // Sum of array is 15

// Function to reverse a string using recursion
function reverseString(str) {
    if (str === "") {
        return "";
    }
    return str.charAt(str.length - 1) + reverseString(str.slice(0, str.length - 1));
}
// Example usage    
const strToReverse = "hello";
const reversedStr = reverseString(strToReverse);
console.log(`Reversed string is ${reversedStr}`); // Reversed string is olleh

// Function to check if a string is a palindrome using recursion
function isPalindrome(str) {
    if (str.length <= 1) {
        return true;
    }
    if (str.charAt(0) !== str.charAt(str.length - 1)) {
        return false;
    }
    return isPalindrome(str.slice(1, str.length - 1));
}

// Example usage
const palindromeStr = "racecar";
const notPalindromeStr = "hello";
console.log(`Is "${palindromeStr}" a palindrome? ${isPalindrome(palindromeStr)}`); // Is "racecar" a palindrome? true
console.log(`Is "${notPalindromeStr}" a palindrome? ${isPalindrome(notPalindromeStr)}`); // Is "hello" a palindrome? false