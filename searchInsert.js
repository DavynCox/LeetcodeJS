/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// We need to do binary search
var searchInsert = function(nums, target) {
    if (target % 2) {
        return nums.indexOf(target)
    } 
    if (target === 2) {
        return 2
    } else if (target * 2 < nums[nums.length - 1]) {
        return target * 2
    } else {
        return nums.length
    }
};

console.log(searchInsert([1,3,5,6], 4))