var moveZeros = function (arr) {
    // console.log(arr.splice(0,2), arr);
    let nonZArr = [], zArr = [];
    for(let i = 0; i < arr.length; i++){
            arr[i] === 0 ? zArr.push(arr[i]) : nonZArr.push(arr[i]);				
    }
    let rArr = [...nonZArr, ...zArr] 
    return rArr;

}
console.log(moveZeros([ 9, 0, 0, 9, 1, 2, 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9 ]))