/*
Pair of gloves

Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

Examples:
input = ["red", "green", "red", "blue", "blue"]
result = 2 (1 red pair + 1 blue pair)

input = ["red", "red", "red", "red", "red", "red"]
result = 3 (3 red pairs)
*/
function numberOfPairs(gloves){
  //use an object to determine which input colors should be returned
  let pairs = {};
  
  //loop through the gloves array and add properties to the object
  for(const color of gloves){
    if(pairs[color]){
      pairs[color]++;
    }else{
      pairs[color] = 1;
    }
  }
  
  let total = 0;
  //loop through object and increase total
  for(const color in pairs){
    if(pairs[color]>=2){
      total += Math.floor(pairs[color]/2);
    }
  }
  return total;
}
console.log(numberOfPairs(["red", "green", "red", "blue", "blue"]))
console.log(numberOfPairs(["red", "red", "red", "red", "red", "red"]))