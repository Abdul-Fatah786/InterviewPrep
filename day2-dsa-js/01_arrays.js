// 01_arrays.js

// map in js
const nums = [1,2,3];
const doubled = nums.map(num => num * 2);
console.log(doubled); // [2, 4, 6]


// filter in js
const nums2 = [1, 2, 3, 4, 5];  
const even = nums2.filter(num => num % 2 === 0);
console.log(even); // [2, 4]

// reduce in js
const nums3 = [1, 2, 3, 4, 5]; 
const sum = nums3.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 15

// forEach in js
const nums4 = [1, 2, 3, 4, 5];  
nums4.forEach(num => {
    console.log(num * 2); // 2, 4, 6, 8, 10
});

// every in js
const nums5 = [1, 2, 3, 4, 5];  
const allEven = nums5.every(num => num % 2 === 0);
console.log(allEven); // false

// some in js
const nums6 = [1, 2, 3, 4, 5];
const anyEven = nums6.some(num => num % 2 === 0);
console.log(anyEven); // true

// find in js
const nums7 = [1, 2, 3, 4, 5];
const firstEven = nums7.find(num => num % 2 === 0);
console.log(firstEven); // 2

// findIndex in js
const nums8 = [1, 2, 3, 4, 5];
const firstEvenIndex = nums8.findIndex(num => num % 2 === 0);
console.log(firstEvenIndex); // 1

// includes in js
const nums9 = [1, 2, 3, 4, 5];
const includesThree = nums9.includes(3);
console.log(includesThree); // true 

// indexOf in js
const nums10 = [1, 2, 3, 4, 5];
const indexOfThree = nums10.indexOf(3);
console.log(indexOfThree); // 2

// lastIndexOf in js
const nums11 = [1, 2, 3, 4, 5, 3];
const lastIndexOfThree = nums11.lastIndexOf(3);
console.log(lastIndexOfThree); // 5

// join in js
const nums12 = [1, 2, 3, 4, 5];
const joined = nums12.join('-');
console.log(joined); // "1-2-3-4-5"

// slice in js
const nums13 = [1, 2, 3, 4, 5]; 
const sliced = nums13.slice(1, 4);
console.log(sliced); // [2, 3, 4]

// splice in js
const nums14 = [1, 2, 3, 4, 5];
const spliced = nums14.splice(1, 2, 6, 7);
console.log(spliced); // [2, 3]
console.log(nums14); // [1, 6, 7, 4, 5]

// concat in js
const nums15 = [1, 2, 3];       
const nums16 = [4, 5, 6];
const concatenated = nums15.concat(nums16);
console.log(concatenated); // [1, 2, 3, 4, 5, 6]

// flat in js
const nums17 = [1, 2, [3, 4], [5, 6]];
const flattened = nums17.flat();
console.log(flattened); // [1, 2, 3, 4, 5, 6]

// flatMap in js
const nums18 = [1, 2, 3];
const flatMapped = nums18.flatMap(num => [num, num * 2]);
console.log(flatMapped); // [1, 2, 2, 4, 3, 6]

// fill in js
const nums19 = [1, 2, 3, 4, 5];
const filled = nums19.fill(0, 1, 4);
console.log(filled); // [1, 0, 0, 0, 5]

// sort in js
const nums20 = [5, 3, 8, 1, 2]; 
const sorted = nums20.sort((a, b) => a - b);
console.log(sorted); // [1, 2, 3, 5, 8]

