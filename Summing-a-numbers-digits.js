/**
 * Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
Let's assume that all numbers in the input will be integer values.
 */
function sumDigits(number) {
    //number to string then split the string
    let numArray = number.toString().split("");
    
    //filter out negative sign
    numArray = numArray.filter(x => x != "-");

    //map each string to number
    numArray = numArray.map(x => Number(x));

    //reduce and return
    return numArray.reduce((a,b) => a+b);
}
console.log(sumDigits(10));
console.log(sumDigits(99));
console.log(sumDigits(-32));