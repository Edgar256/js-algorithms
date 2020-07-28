/*
  Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
  Return the truncated string with a … ending.
  Note that inserting the three dots to the end will add to the string length

  However, if the given maximum string length num is less than or equal to 3, then the addition of the three
  dots does not add to the string length in determining the truncated string.

  Examples:
  truncateString('Edgar',3) should return -> 'Edg...'
  truncateString('A-tisket a-tasket A green and yellow basket', 8) should return -> 'A-tisket...'
  
*/

function truncateString(str, num) {
    if(!str || !num) return null; // return null for empty inputs
    if(num < str.length){
        let trunc = (str.slice(0,num)).concat('...');
        return trunc;
      }else{
        let trunc = str;
        return trunc;
      }
}  

module.exports = truncateString;