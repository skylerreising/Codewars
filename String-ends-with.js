/*
String ends with

Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/

function solution(str, ending){
    if(ending === ""){
      return true
    }
    //count the number of characters in string ending
    let endingLength = Number(ending.length)
    //remove the number of characters in string-ending from the end of str
    let strToCompare = str.slice(-endingLength)
    //If these are the same, return true
    return strToCompare === ending
  }

console.log(solution('abcde', 'cde'))//true
console.log(solution('abcde', 'abc'))//false