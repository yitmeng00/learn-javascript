async function fetchData() {
    try {
        const user = await getUser(1);
        console.log("User:", user);

        // Simulating another asynchronous operation
        const posts = await getPosts(user.id);
        console.log("Posts:", posts);
    } catch (error) {
        console.error("Error:", error);
    }
}

fetchData();
