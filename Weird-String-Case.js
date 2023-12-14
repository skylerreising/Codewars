/*
WeIrD StRiNg CaSe
Write a function that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

Examples:
"String" => "StRiNg"
"Weird string case" => "WeIrD StRiNg CaSe"
*/

function toWeirdCase(string){
  //split the string by spaces
  let splitStr = string.split(" ")
  let newArr = []
  console.log(splitStr)
  //each string element needs to have even characters uppercased and odd characters lower cased.
  for(let i=0; i<splitStr.length; i++){
    let splitEl = splitStr[i].split("")
    for(let j=0; j<splitEl.length; j++){
      if(j%2 === 0 || j===0){
        splitEl[j] = splitEl[j].toUpperCase();
      }else{
        splitEl[j] = splitEl[j].toLowerCase();
      }
    }
    newArr.push(splitEl.join(""));
  }
  return newArr.join(" ")
}
console.log(toWeirdCase("String"))
console.log(toWeirdCase("Weird string case"))