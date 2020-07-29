/*
    Given three digits A, B an K. 
    Find the number of multiples of K in the range A to B

    Example
    divisible(0, 10, 2) should return 4
*/

function divisible(A, B, K) {
    if(isNaN(A) || isNaN(B) || isNaN(K)) return null;
    if(A >= B ) return null;
    let arr = [];
    for(let i = A+1 ; i < B ; i++ ){
        arr.push(i);
    }; 
    let count = arr.filter(elem => elem%K === 0).length
    return count;
}

module.exports = divisible;