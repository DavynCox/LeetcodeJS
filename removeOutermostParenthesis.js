/**
 * @param {string} s
 * @return {string}
 */

const pairs = {
    "[": "]",
    "{": "}",
    "(": ")",
}

// I stole this from jayshah28 on LeetCode (partially)
function removeOuterParentheses(s) {
    let tempString = "";
    let open = 0;
    for (let i = 0; i < s.length; i++) {
        if (pairs[s[i]] !== undefined) {
            if (open) tempString += s[i];
            // must be above the increment so that you dont add after adding itself to the value
            open++;
        } else {
            open--;
            // must be below the decrement so you don't add when its 0
            if (open) tempString += s[i];
        }
    }
    return tempString;
};
