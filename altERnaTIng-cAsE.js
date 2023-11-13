/*
altERnaTIng cAsE <=> ALTerNAtiNG CaSe
Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

"hello world".toAlternatingCase() === "HELLO WORLD"
"HELLO WORLD".toAlternatingCase() === "hello world"
"hello WORLD".toAlternatingCase() === "HELLO world"
"HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
"12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
"1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
"String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
As usual, your function/method should be pure, i.e. it should not mutate the original string.
*/
String.prototype.toAlternatingCase = function () {
  //split the string
  let splitStr = this.split("")

  //loop and conditional to alternate casing on each character
  for(let i=0; i<splitStr.length; i++){
    if(splitStr[i] === splitStr[i].toUpperCase()){
      splitStr[i] = splitStr[i].toLowerCase();
    }else if(splitStr[i] === splitStr[i].toLowerCase()){
      splitStr[i] = splitStr[i].toUpperCase();
    }
  }
  //join and return the string
  return splitStr.join("")
}

console.log("hello world".toAlternatingCase())
console.log("HELLO WORLD".toAlternatingCase())
console.log("hello WORLD".toAlternatingCase())
console.log("HeLLo WoRLD".toAlternatingCase())
console.log("12345".toAlternatingCase())
console.log("1a2b3c4d5e".toAlternatingCase())
console.log("String.prototype.toAlternatingCase".toAlternatingCase())