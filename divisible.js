function solution(A, B, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(K < 1) return null;
    if(B < A) return null;
    // if(B === A) return 1;
    let arr = [];
    for(let i = A ; i < B ; i++ ){
        arr.push(i);
    }; 
    let count = arr.filter(elem => elem%K === 0).length
    return count;
}
console.log(solution(11,345,17))