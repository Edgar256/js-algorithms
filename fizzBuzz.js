/*
    Given a number n. If the number n ;
     - is both divisible by 3 and 5 return FizzBuzz
     - is divisible by 3 return Fizz
     - is divisible by 3 return Buzz
     - otherwise return that same number

    Example
    fizzBuzz(15) should return 'FizzBuzz'
    fizzBuzz(21) should return 'Fizz'
    fizzBuzz(25) should return 'Buzz'
    fizzBuzz(11) should return 11
*/


function fizzBuzz(n) {
    if(isNaN(n)) return null;
    if(n%3 === 0 && n%5 === 0){
        return 'FizzBuzz';
    }else if(n%3 === 0){
        return 'Fizz';
    }else if(n%5 === 0){
        return 'Buzz';
    }else{
        return n;
    }
}

module.exports = fizzBuzz;