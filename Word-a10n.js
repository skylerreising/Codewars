/**
 * The word i18n is a common abbreviation of internationalization in the developer community, used instead of typing the whole word and trying to spell it correctly. Similarly, a11y is an abbreviation of accessibility.

Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater into an abbreviation, following these rules:

A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter (eg. "elephant ride" => "e6t r2e").
Example
abbreviate("elephant-rides are really fun!")
//          ^^^^^^^^*^^^^^*^^^*^^^^^^*^^^*
// words (^):   "elephant" "rides" "are" "really" "fun"
//                123456     123     1     1234     1
// ignore short words:               X              X

// abbreviate:    "e6t"     "r3s"  "are"  "r4y"   "fun"
// all non-word characters (*) remain in place
//                     "-"      " "    " "     " "     "!"
=== "e6t-r3s are r4y fun!"
 */
function abbreviate(string) {
    //if word in string has length >= 4, abbreviate it. Both space and hyphen separate words, but if hypen, it has to go back to where it was before returned
    //first letter, num of chars removed, last letter
    //all non word chars remain in place
    //first split by space
    let splitStr = string.split(" ");
    
    //split out words from special characters
    for(let i=0; i<splitStr.length; i++){
        //if the word contains a special char, use slice to separate the words and special chars
        for(let j=0; j<splitStr[i].length; j++){
            if(splitStr[i].charCodeAt(j)<65 || splitStr[i].charCodeAt(j)>122 || splitStr[i].charCodeAt(j)>90 && splitStr[i].charCodeAt(j)<97){
                let specialChar = splitStr[i].charAt(j);
                splitStr[i] = splitStr[i].slice(0,j) + " " + specialChar + " " + splitStr[i].slice(j+1,splitStr[i].length);
                break;
            }
        }
    }

    splitStr = splitStr.join(" ")

    splitStr = splitStr.split(" ")

    for(let i=0; i<splitStr.length; i++){
        if(splitStr[i].length>=4){
            splitStr[i] = `${splitStr[i][0]}${(splitStr[i].length-2).toString()}${splitStr[i][splitStr[i].length-1]}`;
        }
    }
    splitStr = splitStr.join(" ")

    //loop through string. If the char is a hyphen or comma, remove spaces in front and behind it
    for(let i=0; i<splitStr.length; i++){
        if(splitStr[i]==="-"){
            splitStr = splitStr.slice(0,i-1)+"-"+splitStr.slice(i+2,splitStr.length);
        }
    }
    for(let i=0; i<splitStr.length; i++){
        if(splitStr[i]===","){
            splitStr = splitStr.slice(0,i-1)+","+splitStr.slice(i+2,splitStr.length);
        }
    }

    //If the last char is not a letter, delete the space in front of it and behind it
    if(splitStr[splitStr.length-1]===" "){
        if(splitStr.charCodeAt(splitStr.length-2)<65 || splitStr.charCodeAt(splitStr.length-2)>122 || splitStr.charCodeAt(splitStr.length-2)>90 && splitStr.charCodeAt(splitStr.length-2)<97){
            splitStr = splitStr.slice(0,splitStr.length-3)+splitStr[splitStr.length-2]
        }
    }
    return splitStr
  }
console.log(abbreviate("You need, need not want, to complete this code-wars mission"))
console.log(abbreviate("internationalization"))//"i18n"
console.log(abbreviate("elephant-rides are really fun!"))//"e6t-r3s are r4y fun!"