function convertToRoman(num) {
    let int = [
      1000, 900, 500,400, 100, 90, 50, 40, 10, 9, 5, 4,1
    ],times = [];
    let rNumerals =[
      "M","CM","D","CD","C","XC","L","XL","X",
      "IX","V","IV","I"
    ];
    let arr = [];
    let temp = num;
    for(let i = 0; i<int.length; i++){
      if(int[i] <= temp){
        times.push(Math.floor(temp/int[i]))
        let a = times[times.length-1]
        for(let j =0; j<a; j++){
          arr.push(rNumerals[i])
        }
        temp = temp - (int[i]*a)
      }
    }
    return arr.join('');
    // console.log(arr)a
  }
  
  console.log(convertToRoman(400))
  