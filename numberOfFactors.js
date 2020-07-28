function numberOfFactors(num) {
    //code me
    let arr = [];
    for (let i = 1; i <= num; i++) {
        if(num % i === 0){
            arr.push(i);   
        }            
    }
    return arr.length;    
}
console.log(numberOfFactors(12))