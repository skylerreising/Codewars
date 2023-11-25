/**
 * Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""
 */

// function cleanString(s) {
//     //string is passed in containing octothorpes
//     //every octothorp is a backspace and should delete a letter behind it. Multiple octothorpes delete multiple characters
//     //return empty string if all chars are deleted
//     //control for empty string and "#"
//     if(s===""){
//         return "";
//     }
    
//     //control for if there are more #s than other chars in the string
//     let splitStr = s.split("");
//     let octos = 0;
//     for(let i=0; i<splitStr.length; i++){
//         if(splitStr[i]==="#"){
//             octos++;
//         }
//     }
//     if(octos>=s.length/2){
//         return "";
//     }
//     //loop to find #. Once one is found, count additional consecutive #s. Then delete the number of #s and the same number of chars before the first # found. Then continue from the new point in the string which is i-2*number of #s
//     //use split to make an array then splice to remove elements from the array then join once loop is complete
//     for(let i=0; i<splitStr.length; i++){
//         if(splitStr[i]==="#"){
//             splitStr.splice(i-1,2)
//             i-=2
//         }
//     }
//     return splitStr.join("")
//   }

//using a stack
function cleanString(s){
    //declare stack to add and delete from
    let stringStack = [];

    for(let i=0; i<s.length; i++){
        if(s[i]==="#"){
            stringStack.pop();
        }else{
            stringStack.push(s[i])
        }
    }
    return stringStack.join("")
}
  console.log(cleanString('abc#d##c'));//"ac"
  console.log(cleanString("abc##d######"));//""
  console.log(cleanString("######"));//""
  console.log(cleanString("a#bc#d"));//""