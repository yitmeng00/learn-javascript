function findOppositePerson(n, inputPos) {
    // Calculate the opposite position
    let oppositePos = (inputPos + Math.floor(n / 2)) % n;

    // Handle the case where oppositePos is 0 (since we want it to be in the range [1, n])
    if (oppositePos === 0) {
        oppositePos = n;
    }

    return oppositePos;
}

// Example usage:
const n = 16; // Total number of people
const input = 2; // Input position

const opposite = findOppositePerson(n, input);
console.log("Opposite person is:", opposite); // Output: 7
