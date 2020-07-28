function generateHashtag (str) {
    let superArr = str.split(' ');    
    let arr = superArr.map(elem => elem.split('')).filter(el => el.length >= 1 );
    
    let gArr = arr.filter(elem => elem.length >= 140 )
    if(gArr.length > 0) return false;
    if(arr.length < 1) return false;

    for(let i=0; i<arr.length; i++){
        let firstChar = arr[i][0].toUpperCase();
        arr[i].splice(0,1);
        arr[i] = [firstChar, ...arr[i]]
    }
    let hashText = arr.map(el => el.join('')).join('');
    let hashTag = `#${hashText}`
    return (hashTag);
}
console.log(generateHashtag("Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"))