const getDistinctValues = (N) => {
    if(!(Array.isArray(N))) return null;
    if(N.length < 0) return null;
    let dinstinctArray = [...new Set(N)];
    let length = dinstinctArray.length;
    return length;
}

getDistinctValues([2,4,2,2,2,1,1,2,3,4,5])