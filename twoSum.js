/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        console.log(nums[i])
        for (let j = i + 1; j < nums.length; i++) {
            console.log(j)
            if (nums[i] + nums[j] === target) {
                return [i, j];
                break;
            }
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9))
