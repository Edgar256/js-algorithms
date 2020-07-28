function truncateString(str, num) {
    if(num < str.length){
        let trunc = (str.slice(0,num)).concat('...');
        return trunc;
      }else{
        let trunc = str;
        return trunc;
      }
}
  
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length - 2))  