/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

function removeZeros(array1) { 
    newArray = array1.filter(function(a){return a != 0})     
    return newArray
}

//should use merge sort 
var merge = function(nums1, m, nums2, n) {
    let nums3 = []
    nums1 = removeZeros(nums1)
    while (nums1.length && nums2.length) {
        if (nums1[0] > nums2[0]) {
            nums3.push(nums2[0])
            nums2.shift()
        } else {
            nums3.push(nums1[0])
            nums1.shift()
        }
    }
    while (nums1.length > 0) {
        nums3.push(nums1[0])
        nums1.shift()
    }
    while (nums2.length > 0) {
        nums3.push(nums2[0])
        nums2.shift()
    }
    return nums3
};
nums1 = [1,2,3,0,0,0]
m = 3
nums2 = [2,5,6]
n = 3
console.log(merge(nums1, m, nums2, n))

