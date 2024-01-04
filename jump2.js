/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let totalJumps = 0;
    let destination = nums.length - 1;
    let coverage = 0;
    let lastJumpIndex = 0;

    // Base case 
    if (nums.length == 1) {
        return 0;
    }

    // The Algorithm (Greedy approach)
    for (let i = 0; i < nums.length; i++) {
        coverage = Math.max(coverage, i + nums[i]);

        if (i == lastJumpIndex) {
            lastJumpIndex = coverage;
            totalJumps++;
            if (coverage >= destination) {
                return totalJumps;
            }
        }

        
    }
    return totalJumps;
};

nums = [2,3,1,1,4];
console.log(jump(nums));