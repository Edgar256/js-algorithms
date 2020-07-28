function findLongestWord(str) {
    let arr = str.split(' ');
    let arrLength = arr.map(elem => elem.length);
    let indexLongestWord = arrLength.indexOf(Math.max(...arrLength));
    let longestWord = arr[indexLongestWord];
    return longestWord;
}
  
findLongestWordLength("The quick brown fox jumped over the lazy dog");