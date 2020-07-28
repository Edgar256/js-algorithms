function rot13(message){
    //your code here
    let alpha = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let arr = message.split(' ').map(elem => elem.split('')).map(el => el.map(et => et.toLowerCase()));
    
    // let numArr = arr.map(elem => elem==='E')
    let numArr = [], s= [];
    for(let i=0; i< arr.length; i++){
        for(let j = 0; j < arr[i].length;j++ ){
            if(alpha.indexOf(arr[i][j]) !== -1){
                s.push(alpha.indexOf(arr[i][j]))                
            }    console.log(s)        
        }
        
        // numArr.push(s)
        
    }
    console.log(message,arr,numArr);

}
rot13('Edgar. Stop there')