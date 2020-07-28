function mutation(arr) {
    let a = arr[0].toLowerCase(), b = arr[1].toLowerCase();
    for(let i = 0; i < b.length ; i++){
      let c = a.indexOf(b[i]);
      if(c<0){
        return false
      }      
    }  
    return true
  }
  
  console.log(mutation(["hellO", "hEo"]));