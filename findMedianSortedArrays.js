/*
    Given 2 arrays nums1 and nums2.
    Find the median of these arrays combined

    Example
    findMedianSortedArrays([1,3,4],[2]) should return => 2.5

*/

var findMedianSortedArrays = function(nums1, nums2) {
    if(!nums1 || !nums2) return null;
    if(!Array.isArray(nums1) || !Array.isArray(nums2)) return null;
    let arr = [...nums1, ...nums2].sort((a,b) => a-b);
    let median;
    let arraySize = arr.length;
    arraySize%2 === 0 ? median = (arr[arraySize/2] + arr[(arraySize/2)-1])/2 : median = arr[Math.floor(arraySize/2)];
    return median;
};
console.log(findMedianSortedArrays([1,3,4],[2]));
module.exports = findMedianSortedArrays;