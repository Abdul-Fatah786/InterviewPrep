// 08_memoization.js

// Memoization is an optimization technique used to speed up function calls by caching the results of expensive function calls and returning the cached result when the same inputs occur again.
// It is particularly useful for functions that are called frequently with the same arguments, such as recursive functions or computationally expensive calculations.

// Example of Memoization
function memoize(fn) {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            console.log("Fetching from cache:", key);
            return cache[key];
        }
        console.log("Calculating result for:", key);
        const result = fn.apply(this, args);
        cache[key] = result;
        return result;
    };
}
// Example function to be memoized
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
// Memoized version of the fibonacci function
const memoizedFibonacci = memoize(fibonacci);
// Usage of memoized function
console.log(memoizedFibonacci(10)); // Output: 55