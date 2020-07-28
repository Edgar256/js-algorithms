/*
  Check if string b is a substring of string a and return true

  Example

  mutation(['hello', 'heo]) should return true

*/

function mutation(arr) {
    if(!(Array.isArray(arr))) return null;
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
  module.exports = mutation;