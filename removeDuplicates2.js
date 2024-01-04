/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    //remove duplciates of more than 2
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i] == nums[j]) {
                console.log("nums[i]: " + nums[i])
                console.log("count: " + count)
                count++;
                if (count >= 2) {
                    nums[j] = null;
                }
            }
            
        }
        count = 0;
    }


    //put array back in order
    let index = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != null) {
            let temp = nums[index]
            nums[index] = nums[i]
            nums[i] = temp
            index++
        }
    }
    let i = nums.length-1
    while (nums[i] == null) {
        nums.pop()
        i--
    }

    console.log(nums)
};

nums = [1,1,1,2,2,3]
nums = [1,1,1,1,2,3,3,3]

removeDuplicates(nums)