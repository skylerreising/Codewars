/**
 * Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

-- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
solve("zodiacs") = 26

For the word "strength", solve("strength") = 57
-- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.
 */
function solve(s){
    //use charcode-96 for letter value
    //Split the string
    let splits = s.split("");
    let highest = 0;
    let total = 0;
    //loop through the string and add the char value to total. If the char is a vowel, don't add value to total and make total the highest if total is greater than highest
    for(let i=0; i<splits.length; i++){
        if(splits[i]!=="a"&&splits[i]!=="e"&&splits[i]!=="i"&&splits[i]!=="o"&&splits[i]!=="u"){
            total += splits[i].charCodeAt()-96
        }else{
            if(total>highest){
                highest = total;
            }
            total = 0;
        }
    }
    return highest === 0 ? total:highest;
}
console.log(solve("zodiac"))//26
console.log(solve("chruschtschov"))//80
console.log(solve("z"))