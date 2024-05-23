// try-catch block
/*
Situation: Use `try-catch` when you want to handle errors synchronously within a specific block of code.
Example: You might use it around a function call that could throw an exception, and you want to handle the exception immediately.
*/
try {
    // Code that may throw an error
    const result = someFunction();
    console.log(result);
} catch (error) {
    // Handle the error
    console.error("An error occurred:", error.message);
}

// handling specific errors
/*
Situation: Use specific error handling within a `try-catch` block when you need to handle different types of errors differently.
Example: When working with JSON parsing, you might want to handle `SyntaxError` separately from other errors.
 */
try {
    // Code that may throw a specific error
    const result = JSON.parse("{ invalid JSON }");
    console.log(result);
} catch (jsonError) {
    if (jsonError instanceof SyntaxError) {
        console.error("JSON syntax error:", jsonError.message);
    } else {
        console.error("An unexpected error occurred:", jsonError.message);
    }
}

// async/await with try-catch
/*
Situation: Use `async/await` with `try-catch` when working with asynchronous operations to handle errors in a more synchronous style.
Example: When making asynchronous API calls using `fetch`.
 */
async function fetchData() {
    try {
        const response = await fetch("https://api.example.com/data");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Failed to fetch data:", error.message);
    }
}

fetchData();

// promise error handling
/*
Situation: Use `.then().catch()` when working with Promises and you prefer a more functional approach to error handling.
Example: When dealing with asynchronous operations that return Promises.
 */
someAsyncFunction()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error("An error occurred:", error.message);
    });

// throwing custom errors
/*
Situation: Throw custom errors when you want to create your own error types for specific scenarios.
Example: In a function that performs a specific operation, throw a custom error if the input is invalid.
 */
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

try {
    const result = divide(10, 0);
    console.log(result);
} catch (error) {
    console.error("Error:", error.message);
}

// finally block
/*
Situation: Use the `finally` block when you need to execute cleanup code, whether an error occurred or not.
Example: Closing a file, releasing resources, or logging final statements.
 */
try {
    // Code that may throw an error
    const result = someFunction();
    console.log(result);
} catch (error) {
    // Handle the error
    console.error("An error occurred:", error.message);
} finally {
    // Code that will be executed regardless of whether an error occurred or not
    console.log("Finally block executed");
}

// Callbacks with Error Objects
/*
Many Node.js functions use callbacks to handle errors, and it's common to pass an error object as the first argument to the callback
*/

function someFunction(callback) {
    if (errorCondition) {
        return callback(new Error("An error occurred"));
    }
    // Callback with success
    callback(null, result);
}

// Using Middleware for Express.js
/*
When working with Express.js, you can use middleware for error handling. You define error-handling middleware functions with four arguments (err, req, res, next):
*/
app.use((err, req, res, next) => {
    // Handle the error
});

// Properly Handling Unhandled Exceptions
/*
Handle uncaught exceptions to prevent Node.js from crashing
*/

process.on("uncaughtException", (err) => {
    console.error("Uncaught Exception: ", err);
    // Perform cleanup or graceful shutdown if necessary
    process.exit(1);
});

// Logging Errors
// Logging errors is crucial for debugging and monitoring. You can use popular libraries like Winston or Morgan for logging errors.
