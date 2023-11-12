/**
*Human Readable Duration Format
Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

* For seconds = 62, your function should return 
    "1 minute and 2 seconds"
* For seconds = 3662, your function should return
    "1 hour, 1 minute and 2 seconds"
For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.

Detailed rules
The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.
*/

function formatDuration (seconds) {
    //Use mod === 1 for singular, otherwise plural
    //use mod === 0 to determine if a component will appear or not
    //will need to put " and " in front of the last unit, instead of ", "
    //Control for 0
    if(seconds===0){
        return 'now'
    }
    //variables to hold years, days, hours, minutes, and seconds
    let secs = seconds % 60
    let mins = Math.floor(seconds/60)
    let hours = Math.floor(seconds/3600)
    let days = Math.floor(seconds/86400)
    let years = Math.floor(seconds/31536000)

    //create an array of strings that will be joined and returned
    let timeLeft = []

    //Years to be pushed
    if(years>1){
        timeLeft.push(`${years} years`)
    }else if(years===1){
        timeLeft.push(`1 year`)
    }

    //Day(s) to be pushed
    if(days>364){
        days = Math.floor((seconds / 86400) % 365)
    }
    if(days>1){
        timeLeft.push(`${days} days`)
    }else if(days===1){
        timeLeft.push(`1 day`)
    }

    //Hour(s) to be pushed
    if(hours>23){
        hours = Math.floor((seconds / 3600) % 24)
    }
    if(hours>1){
        timeLeft.push(`${hours} hours`)
    }else if(hours===1){
        timeLeft.push(`1 hour`)
    }

    //Min(s) to be pushed
    if(mins>59){
        mins = Math.floor((seconds / 60) % 60)
    }
    if(mins>1){
        timeLeft.push(`${mins} minutes`)
    }else if(mins===1){
        timeLeft.push(`1 minute`)
    }
    //Sec(s) to be pushed
    if(secs>1){
        timeLeft.push(`${secs} seconds`)
    }else if(secs===1){
        timeLeft.push(`1 second`)
    }
    if(timeLeft.length===1){
        return timeLeft[0];
    }else if(timeLeft.length===2){
        timeLeft[timeLeft.length-1] = "and "+timeLeft[timeLeft.length-1]
        return timeLeft.join(" ")
    }else{
        timeLeft[timeLeft.length-1] = "and "+timeLeft[timeLeft.length-1]
        //combine the last element and the 2nd to last element
        timeLeft[timeLeft.length-2] = timeLeft[timeLeft.length-2] +" "+ timeLeft[timeLeft.length-1]
        timeLeft.pop();
        timeLeft = timeLeft.join(", ")
        return timeLeft
    }
  }
//   console.log(formatDuration(0))//now
//   console.log(formatDuration(1))//1 second
//   console.log(formatDuration(62))// 1 minute and 2 seconds
//   console.log(formatDuration(120))//2 minutes
//   console.log(formatDuration(3600))// 1hour
//   console.log(formatDuration(3662))// 1hour, 1 minute and 2 seconds
  console.log(formatDuration(8000))// 2 hours, 13 minutes and 20 seconds
  console.log(formatDuration(86400))// 1 day
  console.log(formatDuration(86520))// 1 day and 2 minutes
  console.log(formatDuration(10000000))// 115 days, 17 hours, 46 minutes and 40 seconds
  console.log(formatDuration(31536000))//1 year
  console.log(formatDuration(73072000))//2 years, 115 days, 17 hours, 46 minutes and 40 seconds