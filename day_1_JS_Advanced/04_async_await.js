// 04_async_await.js

// Async/Await function
async function fetchDataAsync() {
    try {
        const data = await new Promise((resolve, reject) => {
            setTimeout(() => {
                const success = true;
                if (!success) {
                    return reject("Error fetching data with Async/Await");
                }
                resolve("Data fetched from server with Async/Await");
            }, 2000);
        });
        console.log(data); // Output: Data fetched from server
    } catch (error) {
        console.error("Error:", error);
    }
}

// Usage of async/await
fetchDataAsync();   