function formatDuration (seconds) {
    // Complete this function
    let years = [], months = [], weeks = [], days = [], hours = [], minutes = [], second = [],temp = 0;
    if(seconds >= (60*60*24*7*4*12)){
        years.push(Math.floor(seconds/(60*60*24*7*4*12)));
        seconds = seconds%(60*60*24*7*4*12);
    }
    if(seconds >= (60*60*24*7*4)){
        months.push(Math.floor(seconds/(60*60*24*7*4)));
        seconds = seconds%(60*60*24*7*4);
    }
    if(seconds >= (60*60*24*7)){
      weeks.push(Math.floor(seconds/(60*60*24*7)));
      seconds = seconds%(60*60*24*7);
    }
    if(seconds >= (60*60*24)){
      days.push(Math.floor(seconds/(60*60*24)));
      seconds = seconds%(60*60*24);
    }
    if(seconds >= (60*60)){
      hours.push(Math.floor(seconds/(60*60)));
      seconds = seconds%(60*60);
    }
    if(seconds >= (60)){
      minutes.push(Math.floor(seconds/(60)));
      seconds = seconds%(60);
    }
    if(seconds > (0)){
      second.push(seconds);
    }
  
    let sayDate = ' ' + ``;
    years[0] ? sayDate + ` ${years[0]} years`: years[0];
    months[0] ? sayDate + ` ${monthss[0]} months`: months[0];
    weeks[0] ? sayDate + ` ${weeks[0]} weeks`: weeks[0];
    days[0] ? sayDate + ` ${days[0]} days`: days[0];
    hours[0] ? sayDate + ` ${hours[0]} hours`: hours[0];
    minutes[0] ? sayDate + ` ${minutes[0]} minutes`: minutes[0];
    second[0] ? sayDate + ` ${second[0]} seconds`: second[0];
  
  
    console.log(years,months,weeks,days,hours, minutes, second, sayDate)
  
}
formatDuration(720000)
  