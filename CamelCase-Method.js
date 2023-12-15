/*
CamelCase Method
Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.

Examples (input --> output):
"hello case" --> "HelloCase"
"camel case word" --> "CamelCaseWord"
Don't forget to rate this kata! Thanks :)
*/
String.prototype.camelCase=function(){
  let lowerWords = this.toLowerCase().split(" ");
  //control for empty string
  if(this.length===0){
    return ""
  }
  
  let newArr = [];
  for(let i=0; i<lowerWords.length; i++){
    let splitWord = lowerWords[i].split("")
    splitWord[0] = splitWord[0].toUpperCase()
    newArr.push(splitWord.join(""))//
  }
  return newArr.join("")
}
console.log("camel case word".camelCase())
console.log("".camelCase())