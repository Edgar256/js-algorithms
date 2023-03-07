// Create function that counts the occurence of each letter in a string and returns an object with the count of each letter.
const countLetter = (str) => {
  const obj = {};
  let sanitizedString = str.replace(" ", "").toLowerCase();
  for (let i = 0; i < sanitizedString.length; i++) {
    if(Object.hasOwnProperty.call(obj, sanitizedString.split('')[i])){
        obj[sanitizedString.split('')[i]] += 1;
    } else {
        obj[sanitizedString.split('')[i]] = 1;
    }
  }
  console.log(obj); 
  return obj;
};

countLetter('           ');
