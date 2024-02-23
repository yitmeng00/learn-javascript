// Creating a regular expression
const re = /ab+c/;
const reg = new RegExp("ab+c");

// method
exec(); // Executes a search for a match in a string. It returns an array of information or null on a mismatch.
test(); // Tests for a match in a string. It returns true or false.
match(); // Returns an array containing all of the matches, including capturing groups, or null if no match is found.
matchAll(); // Returns an iterator containing all of the matches, including capturing groups.
search(); // Tests for a match in a string. It returns the index of the match, or -1 if the search fails.
replace(); // Executes a search for a match in a string, and replaces the matched substring with a replacement substring.
replaceAll(); // Executes a search for all matches in a string, and replaces the matched substrings with a replacement substring.
split(); // Uses a regular expression or a fixed string to break a string into an array of substrings.
