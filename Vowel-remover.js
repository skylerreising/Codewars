/**
 * Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata
 */
function shortcut (string) {
    let newStr = string.replaceAll("a","");
    newStr = newStr.replaceAll("e","");
    newStr = newStr.replaceAll("i","");
    newStr = newStr.replaceAll("o","");
    newStr = newStr.replaceAll("u","");
    return newStr;
  }
  console.log(shortcut("hello"))