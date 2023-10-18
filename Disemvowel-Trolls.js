/**
 * Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
 */

function disemvowel(str){
    //String is passed in, split the string into an array
    let spltStr = str.split("");

    //loop through array and replace all of the vowels with "" and join the string back together
    let vowelArray = ["a","e","i","o","u"]
    for(let i=0; i<spltStr.length; i++){
        if(vowelArray.includes(spltStr[i].toLowerCase())){
            spltStr[i] = ""
        }
    }
    //return a string without the vowels
    return spltStr.join("")
}

console.log(disemvowel("This website is for losers LOL!"))