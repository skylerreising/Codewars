/**
 * An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"
 */
var isAnagram = function(test, original) {
    //if original includes every letter in test return true
    //loop through original and use includes to see if every char in test is included in original
    //add logic to check if strings are the same length and if they aren't, return false
    if(original.length!==test.length){
        return false;
    }

    //need to "cross off letters" after they have been checked
    for(let i=0; i<test.length; i++){
        if(original.toLowerCase().includes(test[i].toLowerCase())){
            original = original.toLowerCase().replace(`${test[i].toLowerCase()}`,"")
        }else{
            return false;
        }
    }
    return original.length === 0
};
console.log(isAnagram("foefet", "toffee"))
console.log(isAnagram("Buckethead", "DeathCubeK"))
console.log(isAnagram("dumble", "bumble"))
console.log(isAnagram("Twoo", "WooT"))