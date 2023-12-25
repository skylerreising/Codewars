/*
So Many Permutations!
In this kata, your task is to create all permutations of a non-empty input string and remove duplicates, if present.

Create as many "shufflings" as you can!

Examples:

With input 'a':
Your function should return: ['a']

With input 'ab':
Your function should return ['ab', 'ba']

With input 'abc':
Your function should return ['abc','acb','bac','bca','cab','cba']

With input 'aabb':
Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
*/
function permutations(string){
  //control for length of 1 and 0
  if(string.length === 1 || string.length === 0){
    return [string];
  }
  
  //variable to hold answer
  let answer = [];
  
  //recursive function to find permutations
  for(let i=0; i<string.length; i++){
    const currentLetter = string.charAt(i);
    const lettersLeft = string.slice(0,i).concat(string.slice(i+1));
    const lettersLeftPermuted = permutations(lettersLeft);

    for(let j=0; j<lettersLeftPermuted.length; j++){
      const permArr = [currentLetter].concat(lettersLeftPermuted[j]);
      
      answer.push(permArr.join(""));
    }
  }
  
  //return only unique values
  return Array.from(new Set(answer));
}
console.log(permutations("abc"));
console.log(permutations("aabb"));