function solution(H) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(H.length === 1) return H[0];
    if(H.length === 2) return H[0] * H[1];
    if(H.length === 3) return H[0] * H[1] * H[2];
    let arr = [];
    for(let i = 1; i < H.length; i++){
        let a = (H.slice(0,i)).sort((a,b) => (b-a)); 
        let b = (H.slice(i,H.length)).sort((a,b) => (b-a));
        let bannerA = a[0] * a.length;
        let bannerB = b[0] * b.length;
        arr.push(bannerA + bannerB);
    }
    let result = arr.sort((a,b) => (a-b));
    // console.log(result, result[0]);
    return result[0]
    
}
solution([3,2,5,6])
module.exports = solution;