function chooseBestSum(t, k, ls) {
    // your code
    let arr = []; 
       //  let aSort = ls.sort((a,b) => b-a);
    for(let i = 0; i < ls.length; i++){
       for(let j = i+1; j < ls.length; j++){
          for(let m = ls.length-1; m>j; m-- ){
            let nArr = [];
            nArr.push(i)
            nArr.push(j)
            nArr.push(m)
            arr.push(nArr)
          }         
       }      
    }
    console.log(arr)
}
chooseBestSum(163, 3, [50, 55, 56, 57, 58])