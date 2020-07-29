/*
    Given a string str, return the longest word in the string

    Example
    findLongestWord('The quick brown fox jumped over the lazy dog') should return => 'jumped'
*/

function findLongestWord(str) {
    if(!str) return null;
    let arr = str.split(' ');
    let arrLength = arr.map(elem => elem.length);
    let indexLongestWord = arrLength.indexOf(Math.max(...arrLength));
    let longestWord = arr[indexLongestWord];
    return longestWord;
}
  
module.exports = findLongestWord;