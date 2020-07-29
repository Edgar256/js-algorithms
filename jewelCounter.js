/*
    You're given strings J repesenting the types of stones that are jewels, and S representing the stones
    you have. Each character in S is a type of stone that you have . You want to know many stones that
    you have that are also stones.
    The letters in J are guaranteed distinct, and all characters in J and S are letters. The letters are
    case-sensitive , so 'a' is not the same as 'A'

*/

const jewelCounter = ( J, S) => {
    if (J.length < 1 || S.length < 1) return null;
    let jewelArray = J.split('');
    let stoneArray = S.split('');
    let counter = 0;
    for(let i = 0; i < J.length-1; i++){
        for(let j = 0; j < S.length-1; j++){
            if(jewelArray[i] === stoneArray[j]){
                // console.log(stoneArray[i], stoneArray[j])
                counter +=1;               
            }
        }
    }
    console.log(counter)
    return counter;
}
jewelCounter('aAch', 'aaAAcccchfh')