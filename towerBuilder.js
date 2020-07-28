/*
    Build Tower by the following given argument:
    number of floors (integer and always greater than 0).

    Tower block is represented as * such that it forms a pyramid.

    for example:
    A tower of 3 floors looks like below

        [
        '  *  ', 
        ' *** ', 
        '*****'
        ]

    A tower of 5 floors looks like below
        [
        '   *   ', 
        '  ***  ', 
        ' ***** '
        '*******'
        ]
*/

function towerBuilder(nFloors) {
    if(!nFloors) return null;
    let arr = [];
    for(let i = 1; i <= nFloors; i++){
        i === 1 ? arr.push('*') : arr.push(arr[i-2]+'**');
    }
    let bLength = arr[arr.length-1].length
    let temp = 0,rArr = []
    for(let i = 0; i < arr.length; i++){
        temp = (bLength-arr[i].length)/2;
        let emptySpace = ' ',curIndex;
        if(i !== arr.length-1){
            curIndex = emptySpace.repeat(temp) + arr[i] + emptySpace.repeat(temp)
        }else{
            curIndex = arr[i]
        }        
        rArr.push(curIndex);
    }
    return rArr;
}

module.exports = towerBuilder;