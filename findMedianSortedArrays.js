var findMedianSortedArrays = function(nums1, nums2) {
    let arr = [...nums1, ...nums2].sort((a,b) => a-b);
    let median;
    let arraySize = arr.length;
    arraySize%2 === 0 ? median = (arr[arraySize/2] + arr[(arraySize/2)-1])/2 : median = arr[Math.floor(arraySize/2)];
    console.log(median)
    return median;
};
findMedianSortedArrays([1,3],[2])