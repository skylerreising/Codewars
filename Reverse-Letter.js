/**
 * Given a string str, reverse it and omit all non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

Input/Output
[input] string str
A string consists of lowercase latin letters, digits and symbols.

[output] a string
 */
function reverseLetter(str) {
    //remove the non-alphabetic characters
    let newStr = "";
    for(let i=0; i<str.length; i++){
        if(str[i].toUpperCase() !== str[i].toLowerCase()){
            newStr = newStr.concat(str[i]);
        }
    }

    //reverse and return the string
    return newStr.split("").reverse().join("");
  }
console.log(reverseLetter("ultr53o?n"))