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
function generateHashtag(str){
  //if str is "" return false
  if(str===""){
    return false;
  }
  //split the string so first letters can be capitalized and spaces can be removed
  let splitStr = str.split("");

  if (splitStr[0]!== " " && splitStr[0].toUpperCase===splitStr[0].toUpperCase) {
    splitStr[0] = splitStr[0].toUpperCase();
  }

  for(let i=1; i<splitStr.length; i++){
    if(splitStr[i-1]===" " && splitStr[i].toUpperCase===splitStr[i].toUpperCase){
      splitStr[i] = splitStr[i].toUpperCase();
    }
  }
  
  //loop through splitStr array and push element to noSpace array if the character is not a space then join
  let noSpace = [];
  for(let i=0; i<splitStr.length; i++){
    if(splitStr[i]!==" "){
      noSpace.push(splitStr[i]);
    }
  }
  noSpace = noSpace.join("");

  //if the string isn't empty, add a hashtag an if the string is <=140 characters, return the string
  if(noSpace.length===0){
    return false
  }else if(noSpace.length <=139){
    return "#"+noSpace
  }else{
    return false
  }
}
  console.log(generateHashtag("do we have a hashtag"))
  console.log(generateHashtag(" ".repeat(200)))
  console.log(generateHashtag("codewars"))
  console.log(generateHashtag("    hello     world   "))
  console.log(generateHashtag(""))
  console.log(generateHashtag("wqm jpz w"))