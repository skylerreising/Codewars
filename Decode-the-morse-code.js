/*
Decode the Morse code
In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superseded by voice and digital data communication channels, it still has its use in some applications around the world.
The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.

NOTE: Extra spaces before or after the code have no meaning and should be ignored.

In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···. These special codes are treated as single special characters, and usually are transmitted as separate words.

Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.

For example:

decodeMorse('.... . -.--   .--- ..- -.. .')
//should return "HEY JUDE"
NOTE: For coding purposes you have to use ASCII characters . and -, not Unicode characters.

The Morse code table is preloaded for you as a dictionary, feel free to use it:

Coffeescript/C++/Go/JavaScript/Julia/PHP/Python/Ruby/TypeScript: MORSE_CODE['.--']
*/

decodeMorse = function(morseCode){
  // Your code here
  // You can use MORSE_CODE[morse]
const morseAlpha = {
  ".-": "a", "-...": "b", "-.-.": "c", "-..": "d", ".": "e",
  "..-.": "f", "--.": "g", "....": "h", "..": "i", ".---": "j",
  "-.-": "k", ".-..": "l", "--": "m", "-.": "n", "---": "o",
  ".--.": "p", "--.-": "q", ".-.": "r", "...": "s", "-": "t",
  "..-": "u", "...-": "v", ".--": "w", "-..-": "x", "-.--": "y",
  "--..": "z", "-----": "0", ".----": "1", "..---": "2", "...--": "3",
  "....-": "4", ".....": "5", "-....": "6", "--...": "7", "---..": "8",
  "----.": "9", "": " ", "...---...": "SOS", "-.-.--":"!", ".-.-.-": "."
};
//create an array of elements containing each character or space
  let morseArray = morseCode.split(" ");
//put one space in the array where there should be a space between words
  for(let i=0; i<morseArray.length; i++){
    if(morseArray[i]===""){
      morseArray.splice(i,1)
    }
  }
  //put decoded message into a new array
  //add conditional to check for SOS!
  let decodedArray = [];
  for(let i=0; i<morseArray.length; i++){
    decodedArray.push(morseAlpha[morseArray[i]])
  }
  return decodedArray.join("").toUpperCase().trim();
}

console.log(decodeMorse('.... . -.--   .--- ..- -.. .'))
console.log(decodeMorse("      ...---... -.-.--   - .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. ...   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --. .-.-.-  "))