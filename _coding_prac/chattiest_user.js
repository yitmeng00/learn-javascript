function topChattiestUsers(chatLog, k) {
    const wordCounts = {}; // Object to store word counts for each user

    // Regular expression pattern to match usernames and chat words
    const pattern = /<([^>]*)>(.*?)\n?/g;

    let match;
    while ((match = pattern.exec(chatLog))) {
        const [, username, chatWords] = match;
        const words = chatWords.trim().split(/\s+/);
        wordCounts[username] = (wordCounts[username] || 0) + words.length;
        console.log(wordCounts);
    }

    // Sort the users based on their word counts in descending order
    const sortedUsers = Object.entries(wordCounts).sort((a, b) => b[1] - a[1]);

    // Get the top k chattiest users
    const topChattiest = sortedUsers.slice(0, k).map(([user]) => user);

    return topChattiest;
}

// Example usage:
const chatLog = `
  <user1> this is some chat words
  <user2> the sky is blue
  This line is still attributed to the user above haha
  <user1> more chat from me! 38gad81
  <user2> greeat
  <user2> ok
  nice to meet u
  <user1> see u tomorow at 8am
  <user3> 1
  <user3> 2
  <user3> 3
  <user3> 4
  `;

const k = 2; // Replace this with the desired number of chattiest users

const topChattiest = topChattiestUsers(chatLog, k);
console.log(topChattiest); // Output: ['user1', 'user2']
