function missingNumber(A) {
    if(A.length < 1) return null;
    let sA = A.sort((a,b) => a-b);
    let N = [...new Set(sA)];
    let rValue;
    for(let i=0; i<N.length; i++ ){
        if(N[i] !== N[i+1]-1){
            rValue = (N[i]+1)
            if(rValue < 0) return 1
            return rValue;
        }
    }
}
console.log(missingNumber([1,3,4,5,6]))