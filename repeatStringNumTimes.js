/*
    Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.
    
    Examples : 
    repeatStringNumTimes("*", 3) should return "***".

    repeatStringNumTimes("abc", 3) should return "abcabcabc".

    repeatStringNumTimes("abc", 4) should return "abcabcabcabc".

    repeatStringNumTimes("abc", 1) should return "abc".

    repeatStringNumTimes("*", 8) should return "********".

    repeatStringNumTimes("abc", -2) should return "".
*/

function repeatStringNumTimes(str, num) {
    if(!str || !num) return null;
    if(num === 1) return str;
    let rStr = '' ;
    if(num < 1) return rStr;

    for(let i = 0 ;i <= num-1 ; i++ ){
        rStr = rStr.concat(str)
    }
    return rStr;
}
  
repeatStringNumTimes("abc", 3);
module.exports = repeatStringNumTimes;
  