// 07_currying.js


// Currying is a functional programming technique where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument.
// This allows for partial application of functions, enabling more flexible and reusable code.
//
// Example of Currying  
function add(a) {
    return function (b) {
        return a + b;
    };
}
//
// Usage of Currying        
const add5 = add(5); // Partial application
console.log(add5(3)); // Output: 8

// Currying with multiple arguments
function multiply(a) {
    return function (b) {
        return function (c) {
            return a * b * c;
        };
    };
}   

// Usage of Currying with multiple arguments
const multiply2 = multiply(2); // Partial application
const multiply3 = multiply2(3); // Partial application
console.log(multiply3(4)); // Output: 24