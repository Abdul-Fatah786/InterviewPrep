// 01_scope_closures.js
function outerFunction() {
  let outerVariable = "I am from outer function";

  function innerFunction() {
    let innerVariable = "I am from inner function";
    console.log(outerVariable); // Accessing outer variable
    console.log(innerVariable); // Accessing inner variable
  }

  return innerFunction;
}
const innerFunc = outerFunction();
innerFunc(); // Call the inner function

// 02_closure.js
function makeCounter() {
  let count = 0;

  return function() {
    count += 1;
    return count;
  };
}
// Usage
const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

