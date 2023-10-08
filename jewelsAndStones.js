/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
function numJewelsInStones(jewels, stones) {
    const jewelsMap = new Map();
    let count = 0;
    for (let j = 0; j < jewels.length; j++) {
        jewelsMap.set(jewels[j], true);
    }

    for (let s = 0; s < stones.length; s++) {
        if (jewelsMap.get(stones[s])) {
            count++;
        }
    }
    return count;
};