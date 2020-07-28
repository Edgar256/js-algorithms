/*
    Movving zeros to the end of an array

    Example
    moveZeros([1, 9, 0, 8, 0, 7]) should return 1, 9, 8, 7, 0, 0]
*/

var moveZeros = function (arr) {
    if(!Array.isArray(arr)) return null;
    let nonZArr = [], zArr = [];
    for(let i = 0; i < arr.length; i++){
            arr[i] === 0 ? zArr.push(arr[i]) : nonZArr.push(arr[i]);				
    }
    let rArr = [...nonZArr, ...zArr] 
    return rArr;
}

module.exports = moveZeros;