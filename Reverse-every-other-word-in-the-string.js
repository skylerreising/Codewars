/**
 * Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.
 */
function reverse(str){
    //get rid of whitespace
    str = str.trim();

    //Split into array
    let spltArr = str.split(" ");

    //Every other word, split/reverse/join
    for(let i=0; i<spltArr.length; i++){
        if(i % 2 === 1){
            spltArr[i] = spltArr[i].split("").reverse().join("");
        }
    }

    //join the split array and return it
    return spltArr.join(" ");
  }
console.log(reverse("Reverse this string, please!"));//"Reverse siht string, !esaelp" 