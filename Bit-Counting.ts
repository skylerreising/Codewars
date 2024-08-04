/*
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/

export function countBits(n: number): number {
    // convert to binary string
    // let bin: string = n.toString(2);

    // return the length of the number filtered to only 1's
    // let binArray: string[] = bin.split("");
    // return binArray.filter(x => x === "1").length;

    return n.toString(2).split("").filter(x => x === "1").length;
  }

console.log(countBits(0));
console.log(countBits(4));
console.log(countBits(7));
console.log(countBits(9));
console.log(countBits(10));
