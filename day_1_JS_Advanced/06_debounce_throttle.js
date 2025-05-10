// 06_debounce_throttle.js

// Debounce and Throttle are two techniques used to control the rate at which a function is executed.
// They are particularly useful in scenarios where a function is triggered by events that occur frequently, such as scrolling, resizing, or typing.


// 1. Debounce
// Debounce ensures that a function is only executed after a certain period of inactivity.  
// It prevents the function from being called multiple times in quick succession.
// This is useful for scenarios like search input, where you want to wait for the user to stop typing before making an API call.    

function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Example usage of debounce
const searchInput = document.getElementById("search");
searchInput.addEventListener("input", debounce(() => {
    console.log("Searching for:", searchInput.value);
}, 300)); // Wait for 300ms after the last input before executing the function
// This prevents multiple API calls while the user is typing in the search input field.


// 2. Throttle  
// Throttle ensures that a function is executed at most once in a specified time interval.
// It is useful for scenarios like scrolling, where you want to limit the number of times a function is called while the user is scrolling. 
function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function (...args) {
        if (!lastRan) {
            func.apply(this, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(() => {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(this, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}

// Example usage of throttle
const scrollHandler = throttle(() => {
    console.log("Scrolling...");
}, 1000); // Execute the function at most once every 1000ms (1 second)

window.addEventListener("scroll", scrollHandler);
// This prevents the function from being called too frequently while the user is scrolling the page.