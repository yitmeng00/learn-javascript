/* An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. */
// Basic structure of IIFE
(function () {
    // …
})();

(() => {
    // …
})();

(async () => {
    // …
})();

// Example without IIFE:
var a = 5;

function example() {
    var a = 10;
    console.log(a); // Output: 10
}

example();

console.log(a); // Output: 5

// Example with IIFE:
var a = 5;

(function () {
    var a = 10;
    console.log(a); // Output: 10
})();

console.log(a); // Output: 5
