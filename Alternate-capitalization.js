/**
 * Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!
 */
function capitalize(s){
    //declare two variables, one for even caps, and one for odd caps
    let evenCap = "";
    let oddCap = "";

    //two loops, one for each string to be returned
    for(let i=0; i<s.length; i++){
        if(i%2===0){
            evenCap = evenCap.concat(s.charAt(i).toUpperCase());
        }else{
            evenCap = evenCap.concat(s.charAt(i));
        }
    }

    for(let i=0; i<s.length; i++){
        if(i%2===1){
            oddCap = oddCap.concat(s.charAt(i).toUpperCase());
        }else{
            oddCap = oddCap.concat(s.charAt(i));
        }
    }
    return [evenCap, oddCap];
}
console.log(capitalize("abcdef"))