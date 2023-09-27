/**
 * Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

Example
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
 */

function countSmileys(arr) {
    //use includes to check if the string includes the right characters in the right order and return a count of the number of smiley faces
    let count = 0
    for(let i=0; i<arr.length; i++){
        //check if each element is 2 or 3 chars long
        if(arr[i].length === 2){
            if(arr[i].includes(':') || arr[i].includes(';')){
                if(arr[i].includes(')') || arr[i].includes('D')){
                    count++
                }
            }
        }else if(arr[i].length === 3){
            if(arr[i].includes(':') || arr[i].includes(';')){
                if(arr[i].includes(')') || arr[i].includes('D')){
                    if(arr[i].includes('-') || arr[i].includes('~')){
                        count++
                    }
                }
            }
        }
    }
    return count
  }

  console.log(countSmileys([':)', ';(', ';}', ':-D']))
  console.log(countSmileys([';D', ':-(', ':-)', ';~)']))
  console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']))