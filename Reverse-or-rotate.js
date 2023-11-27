/**
 * The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

If

sz is <= 0 or if str is empty return ""
sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
Examples:
revrot("123456987654", 6) --> "234561876549"
revrot("123456987653", 6) --> "234561356789"
revrot("66443875", 4) --> "44668753"
revrot("66443875", 8) --> "64438756"
revrot("664438769", 8) --> "67834466"
revrot("123456779", 8) --> "23456771"
revrot("", 8) --> ""
revrot("123456779", 0) --> "" 
revrot("563000655734469485", 4) --> "0365065073456944"
Example of a string rotated to the left by one position:
s = "123456" gives "234561".
 */
function revrot(str, sz) {
    //return "" for sz <= 0 or empty str or sz greater than length of str
    if(sz<=0 || str.length === 0 || sz>str.length){
        return "";
    }
    //use substring. Math on each substring is if sum of the cubes of its digits is divisible by 2 (use modulo), reverse that chunk. Else rotate left one position
    //1. loop to separate each substring. Math.floor to stop loop.
    let newStr = "";
    for(let i=0; i<=Math.floor(str.length/sz)-1; i++){
        let subber = str.substring(i*sz,(i+1)*sz).split("").map(x => Number(x))
        let subSum = subber.reduce((a,b) => a+b**3,0)
        //2. Check for if sum of cubes of each digit of substring is divisible by 2. Reverse or rotate.
        if(subSum % 2 === 0){
            subber = subber.map(x => x.toString()).reverse().join("")
            newStr = newStr.concat(subber)
        }else{
            let first = subber.shift()
            subber.push(first)
            subber = subber.map(x => x.toString()).join("")
            newStr = newStr.concat(subber)
        }
    }
    return newStr
}
console.log(revrot("1234",0))//""
console.log(revrot("",0))//""
console.log(revrot("733049910872815764",5))//"330479108928157"