/*
ROT13
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
*/
function rot13(message){
  //Object to hold the letters that correspond to the cipher
  const abcs = {
    "a":"n",
    "b":"o",
    "c":"p",
    "d":"q",
    "e":"r",
    "f":"s",
    "g":"t",
    "h":"u",
    "i":"v",
    "j":"w",
    "k":"x",
    "l":"y",
    "m":"z",
    "n":"a",
    "o":"b",
    "p":"c",
    "q":"d",
    "r":"e",
    "s":"f",
    "t":"g",
    "u":"h",
    "v":"i",
    "w":"j",
    "x":"k",
    "y":"l",
    "z":"m",
  }
  //variable to hold the split string
  let splitStr = message.split("");
  //Loop through each letter and replace that letter with the cipher letter
  for(let i=0; i<splitStr.length; i++){
    if(abcs.hasOwnProperty(splitStr[i].toLowerCase())){
      if(splitStr[i]===splitStr[i].toUpperCase()){
        splitStr[i] = abcs[splitStr[i].toLowerCase()];
        splitStr[i] = splitStr[i].toUpperCase();
      }else{
        splitStr[i] = abcs[splitStr[i]];
      }
    }
  }
  return splitStr.join("")
}
console.log(rot13("test"))
console.log(rot13("Test"))
console.log(rot13("abc123"))