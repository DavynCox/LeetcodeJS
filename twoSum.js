/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    // iterate through array
    for (let j = i + 1; j < nums.length; i++) {
      // iterate through all numbers after i
      if (nums[i] + nums[j] === target) {
        return [i, j];
        break;
      }
    }
  }
};
