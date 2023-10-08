/**
 * @param {number[]} nums
 * @return {number}
 */

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.
function numIdenticalPairs(nums) {
    let count = 0;
    const numsMap = [];
    for (let i = 0; i < nums.length; i++) {
        numsMap.push({index: i, value: nums[i]});
    }

    for (let j = 1; j < nums.length; j++) {
        const entry = numsMap.filter(entry => entry.value === nums[j] && entry.index < j);
        count += entry.length;
    }
    return count;
};