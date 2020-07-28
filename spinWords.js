function spinWords(input,num){  
    let rex = /\S/; //regex for empty spaces
    let word = input.split(' ').filter(rex.test.bind(rex)) ;  //filter empty spaces out
    if(word.length < 1) return null;
    const stringReverse = (str) => str.split('').reverse().join('');     
    return input.split(' ').map(elem => elem.length >= num ? stringReverse(elem) : elem).join(' ');  
}
module.exports = spinWords;