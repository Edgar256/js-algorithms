/*
    In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your 
    task is to convert that string to either lowercase only or uppercase only based on:

    make as few changes as possible.
    if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
    For example:

    solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
    solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
    solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
    More examples in test cases. Good luck!

*/

const fixStringCase = (s) => {
    if(!s) return null;
    let alphaLowerCase = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let string;
    let lowerCaseCount = 0;
    let upperCaseCount = 0;
    for(let i = 0; i < s.length; i++){
        alphaLowerCase.indexOf(s.charAt(i)) !== -1 ? lowerCaseCount++ : upperCaseCount++;
    }
    lowerCaseCount >= upperCaseCount ? 
        string = s.split('').map(elem => elem.toLowerCase()).join('') : 
        string = s.split('').map(elem => elem.toUpperCase()).join('');
    
        return string;
}

module.exports = fixStringCase;
