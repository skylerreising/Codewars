/**
 * Most digits
 * Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.
 */
function findLongest(array){
    //Can I use Math.max to find the longest length?
    let longestDigits = Math.max(...array)

    //find length of longest digits
    let longestDigLength = longestDigits.toString().length;

    //convert array of nums to strings
    let strArr = array.map(x => x.toString())

    //use find to return the first element with the longest length
    return Number(strArr.find(x => x.length === longestDigLength));
}
console.log(findLongest([1,10,100]))