function halvingSum(n) {
    let arr = [];
    for(let i = n; i >= 1; i--){
        arr.push(n)
        n = Math.floor(n/2)
    }
    return arr.reduce((cur,pre) => cur+pre)
}
console.log(halvingSum(25))