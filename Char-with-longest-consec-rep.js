/**
 * For a given string s find the character c (or C) with longest consecutive repetition and return:

[c, l]
where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

For empty string return:

["", 0]
Happy coding! :)
 */
function longestRepetition(s) {
    //control for empty string
    if(s.length === 0){
        return ['', 0]
    }
    //variables to hold count, maxCount, letter, and maxLetter
    let count = 1;
    let maxCount = 0;
    let letter = s[0];
    let maxLetter = "";

    //loop through the string and count consecutive letters - assign letter and count
    for(let i=0; i<s.length; i++){
        if(s[i] === s[i+1]){
            letter = s[i];
            count++;
        }else{
            //Once consecutive letters are done, assign count to maxCount if its higher than max count and assign letter to maxLetter if count is higher than maxCount
            if(count>maxCount){
                maxCount = count;
                maxLetter = letter;
            }
            count = 1;
        }
    }

    return [maxLetter,maxCount];
  }
console.log(longestRepetition("aaaabb"))//      ["a",4]
console.log(longestRepetition("bbbaaabaaaa"))// ["a",4]
console.log(longestRepetition("ba"))// ["b",1]