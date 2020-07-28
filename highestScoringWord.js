function high(x){
    let alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    let wordArr = x.split(' ');
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
console.log(high('hello my people'))