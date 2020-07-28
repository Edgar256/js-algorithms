var angleClock = function(hour, minutes) {
    if(hour > 12 ) return null;
    if(minutes > 59) return null;
    let hourMinutes = ((hour + (minutes/60)) * 5);
    let difference = Math.abs(hourMinutes - minutes);
    difference > 30 ? difference = 60 - difference : difference;
    let angle = difference * 6;
    return angle;
};
console.log(angleClock(12,30))