/*
No oddities here
Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.
*/
function noOdds( values ){
  // Return all non-odd values
  //declare a variable to hold even values
  let evens = [];
  //loop through values and push even values to evens array
  for(let i=0; i<values.length; i++){
    if(values[i] % 2 === 0){
      evens.push(values[i]);
    }
  }
  return evens;
}
console.log(noOdds([0,1,2,3]))