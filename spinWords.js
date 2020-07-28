function spinWords(input,num){
    //TODO Have fun :)
    const stringReverse = (str) => str.split('').reverse().join('');  
    return input.split(' ').map(elem => elem.length >= num ? stringReverse(elem) : elem).join(' ');  
}
  
// stringReverse('edgar')
console.log(spinWords('hey Edgar pat earnest',3))