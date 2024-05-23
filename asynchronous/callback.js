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
