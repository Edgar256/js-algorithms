function int32ToIp(int32){
    let str = int32.toString(2);
    let zero = '0';
    let zeros = zero.repeat(32-str.length);
    let arrbin = (zeros + str).split('');
    const pushValues = (start) => {
        let arr = []
        for(let i = start; i > start-8; i--){
            arr.push(arrbin[i])
        }
        return arr;
    };
    const toBaseTen = (n) => {
        let num = parseInt(n.reverse().join(''),2);
        return num;
    };
    let forthOctet = toBaseTen(pushValues(31));
    let thirdOctet = toBaseTen(pushValues(23));
    let secondOctet = toBaseTen(pushValues(15));
    let firstOctet = toBaseTen(pushValues(7));
    let ip = `${firstOctet}.${secondOctet}.${thirdOctet}.${forthOctet}`;
    return ip;
}
int32ToIp(2154959208)