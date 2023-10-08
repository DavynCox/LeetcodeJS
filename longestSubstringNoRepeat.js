/**
 * @param {string} s
 * @return {number}
 */
// Note this is really bad right now, will someday improve.
function lengthOfLongestSubstring(s) {
    if (s.length === 0) return 0;
    if (s.length === 1) return 1;
    const substrings = [];
    for (let i = 0; i < s.length; i++) {
        let currentSubstring = "";
        let currentSubstringMap = new Map();
        for (let j = i; j < s.length; j++) {
            if (!currentSubstringMap.get(s[j])) {
                currentSubstringMap.set(s[j], true);
                currentSubstring += s[j]
            } else {
                substrings.push(currentSubstring);
                currentSubstring = s[j];
                currentSubstringMap = new Map();
                currentSubstringMap.set(s[j], true);
                break;
            }
            substrings.push(currentSubstring);
        }
    }   
    const longest = substrings.sort(
        function (a, b) {
            return b.length - a.length;
        }
    )[0];
    return longest?.length ?? 0
};

console.log(lengthOfLongestSubstring("au"));
