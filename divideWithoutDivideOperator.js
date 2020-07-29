/*
    Given a dividend and a divisor, get the answer without using * operator or ' operator

    Example
    divideWithoutDivideOperator(9, 3) should return 3
*/

var divideWithoutDivideOperator = function(dividend, divisor) {
    if(isNaN(dividend) || isNaN(divisor)) return null;
    let count = 0,temp = 0;   
    for(let i = 0; temp <=dividend; i++){
        temp = temp + divisor;
        count++;
    }
    let answer = count-1;
    return answer;   
};

module.exports = divideWithoutDivideOperator;