/*
    Given an unordered array N with length greater than 2, return the maximum greatest product of any of its 3 elements

    Example    
    getMaxProduct([2,1,4,5]) should return => 40
*/

const getMaxProduct = (N) => {
    if(!(Array.isArray(N))) return null;
    if(N.length < 3) return null;
    let sortedArray = N.sort((a,b) => (a-b));
    let length = N.length;
    let product = 1;
    for(let i = length - 1; i > length - 4; i-- ){  
        product = product * sortedArray[i];        
    }
    return product;    
}
module.exports = getMaxProduct;