/*
    Given a number n, you are supposed to find the sum of whole halves of halves that make up that number
    
    Example
    Given 10
    10/2 = 5
    5/2 = 2
    2/2 = 1
    sum of halves is 5 + 2 + 1 = 8
    halvingSum(10) should return 8
    halvingSum(25) should return 22
*/


function halvingSum(n) {
    if(isNaN(n)) return null;
    let arr = [];
    for(let i = n; i > 0; i=n){        
        n = Math.floor(n/2)
        arr.push(n)
    }     
    return arr.reduce((cur,pre) => cur+pre)
}
console.log(halvingSum(25))
module.exports = halvingSum;