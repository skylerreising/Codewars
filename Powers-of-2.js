/**
 * Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
 */
function powersOfTwo(n){
    let powerArray = [1];
    let i=1;
    while(i<=n){
        powerArray.push(Math.pow(2,i));
        i++;
    }
    return powerArray
  }

  console.log(powersOfTwo(0))
  console.log(powersOfTwo(1))
  console.log(powersOfTwo(2))
  console.log(powersOfTwo(4))