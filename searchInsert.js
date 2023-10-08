/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// We need to do binary search
var searchInsert = function(nums, target) {
    const numMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return target;
        }
        numMap.set(nums[i], i);
    }
    return 
};

console.log(searchInsert([1,3,5,6], 4))