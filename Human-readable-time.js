/**
*
Human Readable Time
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

function humanReadable (seconds) {
    if(seconds<10){
      return `00:00:0${seconds}`
    }else if(seconds<60){
      return `00:00:${seconds}`
    }else if(seconds<3600){
      //conversion to minutes and seconds
      let min = Math.floor(seconds/60)
      let sec = seconds % 60
      if(sec<10){
          sec = `0${sec}`
        }
      if(min<10){
        min = `0${min}`
      }return `00:${min}:${sec}`
    }else if(seconds>=3600){
      //conversion to hours, minutes and seconds
      let hours = Math.floor(seconds/3600)
      let leftOverMin = seconds-(hours*3600)
      let mins = Math.floor(leftOverMin/60)
      let secs = seconds % 60
      if(secs<10){
            secs = `0${secs}`
          }
      if(mins<10){
          mins = `0${mins}`
        }
      if(hours<10){ 
        hours = `0${hours}`
      }return `${hours}:${mins}:${secs}`
    }
  }
  
  console.log(humanReadable(0))
  console.log(humanReadable(59))
  console.log(humanReadable(60))
  console.log(humanReadable(69))
  console.log(humanReadable(900))
  console.log(humanReadable(3599))
  console.log(humanReadable(3600))
  console.log(humanReadable(45296))
  console.log(humanReadable(86399))
  console.log(humanReadable(86400))
  console.log(humanReadable(359999))