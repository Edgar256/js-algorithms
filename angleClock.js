/*
    Given hours and minutes hand position, return the smaller angle between the 2 hands

    Example
    angleClock(12, 30) should return 165

*/

var angleClock = function(hour, minutes) {
    if(isNaN(hour) || isNaN(minutes)) return null;
    if(hour > 12 || minutes > 59 ) return null;
    let hourMinutes = ((hour + (minutes/60)) * 5);
    let difference = Math.abs(hourMinutes - minutes);
    difference > 30 ? difference = 60 - difference : difference;
    let angle = difference * 6;
    return angle;
};
module.exports = angleClock;