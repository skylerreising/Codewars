/**
 * Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
Examples
'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1
 */

function sameCase(a, b){
    if(!a.match(/[a-zA-Z]/) || !b.match(/[a-zA-Z]/)){
        return -1;
    }

    if(a.toUpperCase() === a && b.toUpperCase() === b){
        return 1;
    }else if(a.toLowerCase() === a && b.toLowerCase() === b){
        return 1;
    }else if(a.toUpperCase() === a && b.toLowerCase() === b || a.toLowerCase() === a && b.toUpperCase() === b){
        return 0;
    }
  }

  console.log(sameCase('C','B'))//1
  console.log(sameCase('c','b'))//1
  console.log(sameCase('A','s'))//0
  console.log(sameCase('s','A'))//0
  console.log(sameCase('0','?'))//-1