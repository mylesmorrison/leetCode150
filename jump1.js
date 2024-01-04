/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
     // case 0
    if (nums.length == 0) {
        return true;
    } 

    let reachable = 0;

    for (let i = 0; i < nums.length; i++) {
        if (reachable < i) {
            return false;
        }
        reachable = Math.max(reachable, i+nums[i]);
    }
    return true;

};

nums = [2,3,1,1,4];
console.log(canJump(nums));
