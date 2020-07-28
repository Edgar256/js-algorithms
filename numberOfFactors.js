/*
    Get the number factors of a given number

    Example
    12 =>
    1 * 12 = 12
    2 * 6 = 12
    3 * 4 = 12
    12 has factors [1,2,3,4,6,12], they are 6
    numberOfFactors(6) returns 6
*/

function numberOfFactors(num) {
    if(isNaN(num)) return null;
    let arr = [];
    for (let i = 1; i <= num; i++) {
        if(num % i === 0){
            arr.push(i);   
        }            
    }
    return arr.length;    
}
module.exports = numberOfFactors;