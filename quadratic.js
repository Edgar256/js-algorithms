//solving the quadratic equation
// let a, b, c;

const quadratic = (a, b, c) => {
    if(!a  || !b || !c) return null;
    if(isNaN(a) || isNaN(b) || isNaN(b)) return null;
    let x1,x2;
    let root = (b*b) - (4*a*c) //after here check for the polarity of root
    
    if(root < 0){
        x1 = (-(b) - Math.sqrt(Math.abs(root))) / (2*a);
        x2 = (-(b) + Math.sqrt(Math.abs(root))) / (2*a);
        console.log(`x1 : ${x1} x2 : ${x2}`) 
        return (x1, x2)       
    }else{
        x1 = (-(b) + Math.sqrt(Math.abs(root))) / (2*a);
        x2 = (-(b) - Math.sqrt(Math.abs(root))) / (2*a);
        console.log(`x1 : ${x1} x2 : ${x2}`) 
    }
}
console.log(quadratic(2, 2, 6));