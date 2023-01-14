/**
 * @param {string} s
 * @return {number}
 */

const dict = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
}

var romanToInt = function(s) {
    let ignorePosition;
    let finalNumber = 0;
    for(var i = s.length-1; i >= 0; i--) { // iterates through string backwards
            if (i !== ignorePosition) { // if ignore if index is of prefix 
            if (dict[s[i - 1]] < dict[s[i]]) { // if index has prefix letter
                ignorePosition = i - 1; // add prefix letter to be ignored on next iteration
                finalNumber += (dict[s[i]] - dict[s[i - 1]]) // add letter value minus prefix letter value
            } else {
                finalNumber += dict[s[i]] // add letter value
        }}
    }
    return finalNumber;
};