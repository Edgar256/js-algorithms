var divide = function(dividend, divisor) {
    let count = 0,temp = 0;   
    for(let i = 0; temp <=dividend; i++){
        temp = temp + divisor;
        count++;
    }
    let answer = count-1;
    return answer;   
};
console.log(divide(9, 3))