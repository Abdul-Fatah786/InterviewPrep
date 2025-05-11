// 05_sorting_searching.js

// Sorting and Searching Algorithms in JavaScript
// 1. Bubble Sort
function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
// Example usage
const arr1 = [64, 34, 25, 12, 22, 11, 90];
const sortedArr1 = bubbleSort(arr1);
console.log("Bubble Sort:", sortedArr1); // Bubble Sort: [ 11, 12, 22, 25, 34, 64, 90 ]

// 2. Selection Sort
function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // Swap arr[i] and arr[minIndex]
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}
// Example usage
const arr2 = [64, 25, 12, 22, 11];
const sortedArr2 = selectionSort(arr2);
console.log("Selection Sort:", sortedArr2); // Selection Sort: [ 11, 12, 22, 25, 64 ]

