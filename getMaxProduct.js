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

getMaxProduct([2, 4, 8, 0, 1, 3, 0, 4, 0,100])