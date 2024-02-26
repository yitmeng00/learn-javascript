/*
A Promise is an object representing the eventual completion or failure of an asynchronous operation,
such as fetching data from a server, reading a file, or any other operation that may take some time to complete.

3 states
Pending: The initial state. The promise is neither fulfilled nor rejected.
Fulfilled: The operation completed successfully, and the promise has a resulting value.
Rejected: The operation failed, and the promise has a reason for the failure.
*/

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNumber = Math.random();
        if (randomNumber > 0.5) {
            resolve(`Success! Random number: ${randomNumber}`);
        } else {
            reject(new Error(`Failed! Random number: ${randomNumber}`));
        }
    }, 1000); // Simulating a delay of 1000 milliseconds (1 second)
});

// Using the promise
myPromise
    .then((result) => {
        console.log(result); // Executed if the promise is fulfilled
    })
    .catch((error) => {
        console.error(error.message); // Executed if the promise is rejected
    });

// Chaining
doSomething(function (result) {
    doSomethingElse(
        result,
        function (newResult) {
            doThirdThing(
                newResult,
                function (finalResult) {
                    console.log(`Got the final result: ${finalResult}`);
                },
                failureCallback
            );
        },
        failureCallback
    );
}, failureCallback);

/*
Composition
*/
// Function to capitalize a string
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Function to add exclamation to a string
function addExclamation(str) {
    return str + "!";
}

// Function to repeat a string
function repeat(str, times) {
    return str.repeat(times);
}

// Compose functions to create a new function
const createExcitingMessage = (message) => {
    const capitalizedMessage = capitalize(message);
    const excitedMessage = addExclamation(capitalizedMessage);
    const repeatedExcitedMessage = repeat(excitedMessage, 3);
    return repeatedExcitedMessage;
};

// Example usage
const originalMessage = "hello world";
const excitingMessage = createExcitingMessage(originalMessage);
console.log(excitingMessage);

/*
Creating a Promise around an old callback API
*/
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

wait(10 * 1000)
    .then(() => saySomething("10 seconds"))
    .catch(failureCallback);
