// 06_coding_questions.js

// Find max in array
function findMax(arr) {
  return Math.max(...arr);
}

console.log(findMax([3, 5, 7, 2, 1])); // 7

// Count character frequency
function charFrequency(str) {
  const map = {};
  for (let char of str) {
    map[char] = (map[char] || 0) + 1;
  }
  return map;
}

console.log(charFrequency("banana")); // { b: 1, a: 3, n: 2 }


// Check if two strings are anagrams
function areAnagrams(str1, str2) {
  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");
  return sortedStr1 === sortedStr2;
}
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world")); // false

