// Given a string
// rerurn the character used most in the string

function maxChars(str) {
    const obj = {};
    let max = 0;
    let maxChar = "";

    for (let char of str) {
        obj[char] = obj[char] + 1 || 1;
    }

    for (let char in obj) {
        if (obj[char] > max) {
            maxChar = char;
            max = obj[char]
        }
    }

    return maxChar
}

console.log(maxChars("aaa llll kdkkd lskllkdlkslkjaaaaaaaaallllllllllllllllllllllla"))