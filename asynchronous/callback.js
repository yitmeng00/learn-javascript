/* Callbacks are functions that are passed as arguments to other functions, and they are executed later, usually after some asynchronous operation completes. Callbacks are commonly used in scenarios like handling asynchronous tasks, event handling, and more. */

// Example without callback hell
function getUser(userId, callback) {
    setTimeout(() => {
        const user = { id: userId, name: "John" };
        callback(user);
    }, 1000);
}

function getPosts(user, callback) {
    setTimeout(() => {
        const posts = ["Post 1", "Post 2", "Post 3"];
        callback(posts);
    }, 1000);
}

getUser(1, (user) => {
    console.log("User:", user);

    getPosts(user, (posts) => {
        console.log("Posts:", posts);
    });
});

// Example with callback hell
getUser(1, (user) => {
    console.log("User:", user);

    getPosts(user, (posts) => {
        console.log("Posts:", posts);

        // Nested callback for getting comments
        getComments(posts[0], (comments) => {
            console.log("Comments:", comments);

            // Nested callback for liking a comment
            likeComment(comments[0], (likedComment) => {
                console.log("Liked Comment:", likedComment);
            });
        });
    });
});

// Synchronous example: Array processing
function filterArray(array, callback) {
    const filteredArray = [];
    for (const item of array) {
        if (callback(item)) {
            filteredArray.push(item);
        }
    }
    return filteredArray;
}

function isEven(number) {
    return number % 2 === 0;
}

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterArray(numbers, isEven);

console.log(evenNumbers); // Output: [2, 4, 6]

// Asynchronous example: Fetching data from an API
function fetchDataFromAPI(url, callback) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log("Data fetched");
            callback(data);
        })
        .catch((error) => console.error("Error fetching data:", error));
}

function processFetchedData(data) {
    console.log("Processing fetched data:", data);
    // Process the data (e.g., display it on the UI, store it in a database, etc.)
}

const apiURL = "https://jsonplaceholder.typicode.com/posts";
fetchDataFromAPI(apiURL, processFetchedData);

// Output will include:
// Data fetched
// Processing fetched data: [...fetched data...]

// Asynchronous example: Chaining API calls
function fetchUserData(userId, callback) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response) => response.json())
        .then((userData) => {
            console.log("User data fetched");
            callback(userData);
        })
        .catch((error) => console.error("Error fetching user data:", error));
}

function fetchUserPosts(userId, callback) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then((response) => response.json())
        .then((userPosts) => {
            console.log("User posts fetched");
            callback(userPosts);
        })
        .catch((error) => console.error("Error fetching user posts:", error));
}

function processUserDataAndPosts(userData, userPosts) {
    console.log("Processing user data and posts");
    console.log("User Data:", userData);
    console.log("User Posts:", userPosts);
}

function fetchUserDataAndPosts(userId) {
    fetchUserData(userId, (userData) => {
        fetchUserPosts(userId, (userPosts) => {
            processUserDataAndPosts(userData, userPosts);
        });
    });
}

const userId = 1;
fetchUserDataAndPosts(userId);

// Output will include:
// User data fetched
// User posts fetched
// Processing user data and posts
// User Data: {...}
// User Posts: [...]
