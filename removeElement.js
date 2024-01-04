/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    //using two pointers to swap the index if there is no val match
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            //create 
            let temp = nums[index]
            nums[index] = nums[i]
            nums[i] = temp
            index++
        } else {
            //turn the value to a null value
            nums[i] = null
        }
    }
    //after doing that then sort the array 
    return nums
};

let nums = [3,2,2,3]
let val = 3

console.log(removeElement(nums, val))