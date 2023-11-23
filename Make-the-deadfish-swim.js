/**
 * Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.

parse("iiisdoso") => [ 8, 64 ]
 */
// Return the output array, and ignore all non-op characters
function parse( data ){
  //declare return array
  let retArray = [];
  let deadFish = 0;

  //loop through string and run each command
  for(let i=0; i<data.length; i++){
    if(data[i]==="i"){
        deadFish++;
    }else if(data[i]==="d"){
        deadFish--;
    }else if(data[i]==="s"){
        deadFish *= deadFish;
    }else if(data[i]==="o"){
        retArray.push(deadFish)
    }else{
        continue;
    }
  }
  return retArray;
}
console.log(parse("iiisdoso"))//[ 8, 64 ]
console.log(parse("iiisxxxdoso"))//[ 8, 64 ]