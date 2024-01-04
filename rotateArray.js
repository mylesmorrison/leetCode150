/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let n = nums.length;
    if (n == 1) {
        return;
    }
    k = k % n;
    reverseArr(nums,0,n-1);
    reverseArr(nums,0,k-1);
    reverseArr(nums,k,n-1);
    console.log(nums);
};

function reverseArr(nums, l, r) {
    while (l < r) {
        let temp = nums[l];
        nums[l] = nums[r];
        nums[r] = temp;
        l++;
        r--;
    }
}
nums = [1,2]
k = 3

rotate(nums, k)