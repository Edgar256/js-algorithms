function confirmEnding(str, target) {
    
    let index = str.length - target.length;
    let tester = str.substring(index);
    if(tester === target){
        console.log(tester,true);
        return true;
    }else{
        console.log(tester, false);
        return false;
    }
}
  
confirmEnding("Bastian", "a");