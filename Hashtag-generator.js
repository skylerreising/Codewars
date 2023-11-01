/*
Hashtag Generator
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/
function generateHashtag (str) {
    if(!str ||str.trim()===""){
      return false;
    }
    let newArr = ["#"];
    
    //Capitalize the first letter of every word
    let wordArr = str.trim().split(" ");
    //if there is only one word, return with hashtag
    if(wordArr.length===1){
        str = str.split("")
        str[0] = str[0].toUpperCase()
        str = str.join("")
        let hashStr = "#"+str
      if(hashStr.length<=140){
        return hashStr
      }else{
        return false
      }
    }
    //if there are multiple spaces between words, reduce them to only 1 space between words
    if(wordArr.includes("")){
        let numOfEmptys = 0
        let firstEmpty = wordArr.indexOf("")
        for(let i=0; i<wordArr.length; i++){
            if(wordArr[i]===""){
                numOfEmptys++
            }
        }
        wordArr.splice(firstEmpty,numOfEmptys)
    }
    
    for(let i=0; i<wordArr.length; i++){
      let splitStr = wordArr[i].split("");
      splitStr[0] = splitStr[0].toUpperCase();
      wordArr[i] = splitStr.join("");
    }
    wordArr = wordArr.join("");
    newArr.push(wordArr);
    let final = newArr.join("").trim();
    if(final.length<=140){
      return final.trim();
    }else{
      return false;
    }
  }
  console.log(generateHashtag("Do We have A Hashtag"))
  console.log(generateHashtag(" ".repeat(200)))
  console.log(generateHashtag("Codewars"))
  console.log(generateHashtag("    Hello     World   "))