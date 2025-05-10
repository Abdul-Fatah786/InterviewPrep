// 03_callbacks_promises.js

// Callback function
function fetchData(callback) {
    setTimeout(() => {
        const data = "Data fetched from server with callback";
        callback(data);
    }, 2000);
}
// Usage of callback
fetchData((data) => {
    console.log(data); // Output: Data fetched from server
});

function fetchDataWithPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = false;
            if (!success) {
                return reject("Error fetching data");
            }
            const data = "Data fetched from server with Promise";
            resolve(data);
        }, 2000);
    });
}

// Usage of promise
fetchDataWithPromise()
    .then((data) => {
        console.log(data); // Output: Data fetched from server
    })
    .catch((error) => {
        console.error("Error:", error);
    });