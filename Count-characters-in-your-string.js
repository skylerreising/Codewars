/*
Count Characters in your String
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/

function count(string) {
  //Will need an object to count characters
  let countObj = {};
  //if string is empty return empty object literal
  if(string === ""){
    return {};
  }
  //loop through the string and populate the object
  for(let i=0; i<string.length; i++){
    if(countObj[string[i]]){
      countObj[string[i]]+=1;
    }else{
      countObj[string[i]] = 1;
    }
  }
  return countObj;
}

console.log(count('aba'))
console.log(count('ABC'))