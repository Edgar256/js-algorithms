const getOddOccurrencies = (N) => {
    if(!(Array.isArray(N))) return null;
    if(N.length <= 0) return null;
    if(N.length === 1) return N[0];
    let sortedArray = N.sort((a,b) => (a-b))
    let length = N.length;
    for(let i = 0; i < length; i = i+2){
        if(sortedArray[i] !== sortedArray[i+1]){
            return (sortedArray[i])
        }
    }
    while (condition) {
        
    }
}

console.log(getOddOccurrencies([1,1,5,6,6,8,8,2,4,2,4]))