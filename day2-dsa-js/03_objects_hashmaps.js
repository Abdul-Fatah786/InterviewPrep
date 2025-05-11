// 03_objects_hashmaps.js


const nestedArray = [1, [2, 3], [4, 5]];
const flattened = nestedArray.flat();    
console.log(flattened); // [1, 2, 3, 4, 5]

const userAges = {
    Alice: 25,
    Bob: 30,
    Charlie: 35
};

// Accessing values
console.log(userAges['Alice']); // 25
console.log(userAges.Bob); // 30
// Adding a new key-value pair
userAges.Dave = 40;
console.log(userAges); // { Alice: 25, Bob: 30, Charlie: 35, Dave: 40 }
// Deleting a key-value pair    
delete userAges.Charlie;
console.log(userAges); // { Alice: 25, Bob: 30, Dave: 40 }

// Checking if a key exists
console.log('Alice' in userAges); // true
console.log('Charlie' in userAges); // false

// Iterating over keys
for (const key in userAges) {
    console.log(`${key}: ${userAges[key]}`);
}

// Iterating over values
for (const value of Object.values(userAges)) {
    console.log(value);
}   



// objects in js
const person = {
    name: 'Alice',
    age: 25,
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};
// Accessing properties
console.log(person.name); // Alice  
console.log(person['age']); // 25
// Calling a method
person.greet(); // Hello, my name is Alice
// Adding a new property
person.city = 'New York';
console.log(person); // { name: 'Alice', age: 25, greet: [Function], city: 'New York' }
// Deleting a property
delete person.age;
console.log(person); // { name: 'Alice', greet: [Function], city: 'New York' }

// Object destructuring
const { name, city } = person;
console.log(name); // Alice
console.log(city); // New York
// Object.keys() in js
const keys = Object.keys(person);
console.log(keys); // ['name', 'greet', 'city']



const text = "hello world hello chatgpt world";
const wordCount = {};
const words = text.split(' ');  
for (const word of words) {
    if (wordCount[word]) {
        wordCount[word]++;
    } else {
        wordCount[word] = 1;
    }
}
console.log(wordCount); // { hello: 2, world: 2, chatgpt: 1 }

