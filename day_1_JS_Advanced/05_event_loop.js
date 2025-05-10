// 05_event_loop.js

// Event Loop
// The event loop is a mechanism that allows JavaScript to perform non-blocking I/O operations.
// It enables asynchronous programming by using a single-threaded model with an event queue.
// The event loop continuously checks the call stack and the message queue. 
// If the call stack is empty, it takes the first event from the queue and pushes it to the call stack.
// This allows JavaScript to handle multiple operations concurrently without blocking the main thread.  

// Example of Event Loop
console.log("1️⃣ Start");

// 1. Synchronous code
console.log("2️⃣ Synchronous Log");

// 2. setTimeout (macro-task)
setTimeout(() => {
    console.log("5️⃣ setTimeout Callback");
}, 0);

// 3. Promise (micro-task)
Promise.resolve().then(() => {
    console.log("4️⃣ Promise.then Callback");
});

console.log("3️⃣ End");
