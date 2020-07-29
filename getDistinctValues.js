/*
    Given an array N, get the number of unique elements in the array

    Example
    getDistinctValues([1,2,1,1]) should return 2
    getDistinctValues
*/

const getDistinctValues = (N) => {
    if(!(Array.isArray(N))) return null;
    if(N.length < 0) return null;
    let dinstinctArray = [...new Set(N)];
    let length = dinstinctArray.length;
    return length;
}

console.log(getDistinctValues([2,4,2,2,2,1,1,2,3,4,5]))
module.exports = getDistinctValues;