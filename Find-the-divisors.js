/**
 * Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#, empty table in COBOL) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

Example:
divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"
 */

function divisors(integer) {
    //array to add divisors to
    let divisors = []

    //using the given number, loop through each number between 2 and number-1 and check if its a divisor using modulus
    for(let i=2; i<integer-1; i++){
        if(integer % i===0){
            divisors.push(i)
        }
    }
    return divisors.length !== 0 ? divisors : `${integer} is prime`
};

console.log(divisors(15))
console.log(divisors(12))
console.log(divisors(13))