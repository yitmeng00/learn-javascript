function breakPalindrome(palindromeStr) {
    const n = palindromeStr.length;

    if (n < 3) return "IMPOSSIBLE";

    let chars = palindromeStr.split("");

    for (let i = 0; i < Math.floor(n / 2); i++) {
        if (chars[i] != "a") {
            chars[i] = "a";
            return chars.join("");
        }
    }

    chars[n - 1] = "b";
    return chars.join("");
}

console.log(breakPalindrome("aaaabaaaa"));
