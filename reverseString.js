// This is from a course I'm doing, not LeetCode

// My attempt
function reverse(str) {
    if (!str || str.length < 2 || typeof str !== "string") return "invalid string";
    let reversed = "";
    for (let i = str.length-1; i >= 0; i--) {
        reversed += str[i]
    }
    return reversed;
}

// Using built in JavaScript Methods
function reverse2(str) {
    return str.split("").reverse().join("");
}