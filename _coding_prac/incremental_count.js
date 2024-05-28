function findLongestIncrementalCount(arr) {
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);

    let longestCount = 0;
    let currentCount = 1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1] + 1) {
            currentCount++;
        } else {
            longestCount = currentCount;
        }
    }

    return longestCount;
}

const inputArray = [2, 4, 9, 7, 6, 100, 101, 1, 3, 5, 8];
const result = findLongestIncrementalCount(inputArray);
console.log(result); // Output: 9
