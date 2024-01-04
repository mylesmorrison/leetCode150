/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums.sort()
    return nums[Math.floor(nums.length/2)]
};

nums = [3,2,3]
console.log(majorityElement(nums))