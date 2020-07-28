/*
    How to solve the Codewars's Stop gninnipS My sdroW!

    DESCRIPTION
    Write a function that takes in a string of one or more words, and returns the same string, but with all n or more letter words reversed (Just like the name of this Kata). 
    Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

    n or more letter words : length() >= n
    Examples
    spinWords(“Hey fellow warriors”,5) -> “Hey wollef sroirraw”
    spinWords(“This is a test”,4) -> “sihT is a tset”
    spinWords(“This is another test”,5) -> “This is rehtona test”
*/

function spinWords(input,num){  
    let rex = /\S/; //regex for empty spaces
    let word = input.split(' ').filter(rex.test.bind(rex)) ;  //filter empty spaces out
    if(word.length < 1) return null;
    const stringReverse = (str) => str.split('').reverse().join('');     
    return input.split(' ').map(elem => elem.length >= num ? stringReverse(elem) : elem).join(' ');  
}
module.exports = spinWords;