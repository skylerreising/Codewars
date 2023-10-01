/**
 * Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
 */

function solution(string) {
    //A word as a string is passed in. It could have camelcasing, it might not. It could also be an empty string.

    //split the string passed in
    let newStr = string.split("")
    //check if a letter is capitolized, and if it is, add a space " " before the capitolized letter
    for(let i=0; i<newStr.length; i++){
        if(newStr[i]===newStr[i].toUpperCase()){
            newStr[i] = " "+newStr[i]
        }
    }
    //join the string and return it
    newStr = newStr.join("")
    //Return the string with a space before the capitolized letter if the string is camel cased, otherwise just return the string
    return newStr
}

console.log(solution("camelCasing"))
console.log(solution("identifier"))
console.log(solution(""))