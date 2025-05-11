// 02_strings.js

function reverseString(str) {
    return str.split('').reverse().join('');
}
// Example usage
const str = "hello";
const reversedStr = reverseString(str);
console.log(reversedStr); // "olleh"

// Function to check if a string is a palindrome
function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}
// Example usage
const palindromeStr = "racecar";
const notPalindromeStr = "hello";
console.log(isPalindrome(palindromeStr)); // true
console.log(isPalindrome(notPalindromeStr)); // false


// Function to count the number of vowels in a string
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// Example usage
const strWithVowels = "hello world";    
const vowelCount = countVowels(strWithVowels);
console.log(vowelCount); // 3

// Function to find the longest word in a string
function findLongestWord(str) {
    const words = str.split(' ');
    let longestWord = '';
    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}
// Example usage
const sentence = "The quick brown fox jumps over the lazy dog"; 
const longestWord = findLongestWord(sentence);
console.log(longestWord); // "quick"
