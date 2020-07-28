function truncateString(str, num) {
    if(!str || !num) return null;
    if(num < str.length){
        let trunc = (str.slice(0,num)).concat('...');
        return trunc;
      }else{
        let trunc = str;
        return trunc;
      }
}  

module.exports = truncateString;