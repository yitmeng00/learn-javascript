function topChattiestUsers(chatLog, k) {
    const userWordCount = {}; // Object to store word count for each user
    let currentUser = null; // Variable to keep track of the current user

    // Split the chat log into individual lines
    const lines = chatLog.split("\n");

    lines.forEach((line) => {
        // Check if the line starts with a new username
        const match = line.match(/^<(\w+)>/);
        if (match) {
            // If a new username is found, update the current user
            currentUser = match[1];
            // Remove the username part from the line
            line = line.slice(match[0].length).trim();
        }

        // Ensure that we have a current user before counting words
        if (currentUser) {
            // Split the line into words
            const words = line
                .trim()
                .split(/\s+/)
                .filter((word) => word.length > 0);
            // If there are words to count
            if (words.length > 0) {
                // Initialize the user's word count if not already done
                if (!userWordCount[currentUser]) {
                    userWordCount[currentUser] = 0;
                }
                // Increment the user's word count
                userWordCount[currentUser] += words.length;
            }
        }
    });

    // Convert the dictionary to an array of [username, wordCount] pairs
    const sortedUsers = Object.entries(userWordCount)
        // Sort first by word count in descending order, then by username alphabetically
        .sort((a, b) => {
            if (b[1] !== a[1]) {
                return b[1] - a[1]; // Sort by word count (descending)
            }
            return a[0].localeCompare(b[0]); // Sort alphabetically by username
        })
        // Get the top k users
        .slice(0, k)
        // Extract only the usernames for the final result
        .map((entry) => entry[0]);

    return sortedUsers; // Return the array of top k chattiest users
}

const chatLog = `<user1> this is some chat words
<user2> the sky is blue
This line is still attributed to the user above haha
<user1> more chat from me! 38gad81
<user2> great
<user2> ok
nice to meet u
<user1> see u tomorrow at 8am
<user3> 1
<user3> 2
<user3> 3
<user3> 4`;

console.log(topChattiestUsers(chatLog, 2)); // Example output: [ 'user2', 'user1' ]
