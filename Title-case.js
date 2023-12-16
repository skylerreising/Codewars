/*
Title Case
A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

Arguments (Haskell)
First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
Second argument: the original string to be converted.
Arguments (Other languages)
First argument (required): the original string to be converted.
Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.
Example
titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'
*/

function titleCase(title, minorWords) {
  if(minorWords===undefined){
    return title.toLowerCase().split(" ").map(x => x.charAt(0).toUpperCase()+x.substring(1)).join(" ")
  }
  let splitTitle = title.toLowerCase().split(" ")
  //capitolize the first letter of each word in splitTitle
  let firstUpper = splitTitle.map(x => x.charAt(0).toUpperCase()+x.substring(1))
  
  let splitMinor = minorWords.split(" ")

  //if firstUpper element lowercased equals splitMinor element lowercased, firstUpper element should be lowercased
  for(let i=1; i<firstUpper.length; i++){
    for(let j=0; j<splitMinor.length; j++){
      if(firstUpper[i].toLowerCase()===splitMinor[j].toLowerCase()){
        firstUpper[i]=firstUpper[i].toLowerCase();
      }
    }
  }
  return firstUpper.join(" ")
}
console.log(titleCase('a clash of KINGS', 'a an the of'))
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'))
console.log(titleCase('the quick brown fox'))
console.log(titleCase('a bc', 'bc'))