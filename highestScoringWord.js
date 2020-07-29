/*
    Given a string str, with each of the characters letters.
    Each letter's value is it's position in the alphabet
    Return the string with the largest Total value after adding the values of all its characters

    Example
    highestScoringWord('hello my people) should return -> 'people'
*/


function highestScoringWord(str){
    if(!str) return null;
    let alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    let wordArr = str.split(' ');
    let charArr = wordArr.map(elem => elem.split(''));
    let valueArr = [];
    for(let i = 0; i < charArr.length; i++){
        let value = charArr[i].map(elem => alpha.indexOf(elem)).reduce((a,b) => a+b);
        valueArr.push(value)
    }
    let indexMax = valueArr.indexOf(Math.max(...valueArr));
    let bigWord = wordArr[indexMax]
    return bigWord;
}
module.exports = highestScoringWord;