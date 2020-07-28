function repeatStringNumTimes(str, num) {
    let rStr ='' ;
    if(num < 1) return rStr;

    for(let i = 0 ;i <= num-1 ; i++ ){
        rStr = rStr.concat(str)
    }
    console.log(rStr)
    return rStr;
}
  
repeatStringNumTimes("abc", 3);
  