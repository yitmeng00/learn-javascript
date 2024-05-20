var pivotInteger = function (n) {
    for (let i = 1; i <= n; i++) {
        let sumLeft = 0;
        let sumRight = 0;

        // Calculate the sum of elements on the left side of the pivot
        for (let j = 1; j <= i; j++) {
            sumLeft += j;
        }

        // Calculate the sum of elements on the right side of the pivot
        for (let k = i; k <= n; k++) {
            sumRight += k;
        }

        // Check if the sums on both sides are equal
        if (sumLeft == sumRight) {
            return i; // Return the pivot value if found
        }
    }

    return -1;
};

console.log(pivotInteger(8)); // Output: 6
console.log(pivotInteger(1)); // Output: 1
console.log(pivotInteger(4)); // Output: -1
