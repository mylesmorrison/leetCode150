/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let count = 0
    //remove the duplicates
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[j] == nums[i]) {
                nums[j] = null
                count++;
            }
        }
        //console.log(nums)

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
        //console.log(nums)
    }
    
    //get rid of zeros
    let i = nums.length-1
    while (nums[i] == null) {
        nums.pop()
        
        i--
    }
    console.log(nums)
};


nums = [0,0,1,1,1,2,2,3,3,4]
nums2 = [1,1,2]

removeDuplicates(nums2)