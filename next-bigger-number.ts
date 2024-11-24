/**
 * Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

  12 ==> 21
 513 ==> 531
2017 ==> 2071
If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift, None in Rust):

  9 ==> -1
111 ==> -1
531 ==> -1
 */

// export function nextBigger(n: number): number {
//   let compareNumsArrayofArrays: number[][];
//   let compareNumsArray: number[] = [];
//   let digitsArray: number[] = n
//     .toString()
//     .split("")
//     .map((x) => Number(x));

//   compareNumsArrayofArrays = permutation(digitsArray);

//   compareNumsArrayofArrays.map((arr) => {
//     compareNumsArray.push(Number(arr.map((num) => num.toString()).join("")));
//   });

//   compareNumsArray = compareNumsArray.filter((num) => num > n);

//   let answer = compareNumsArray[0];

//   return answer ? answer : -1;
// }

// export function permutation(
//   nums: number[],
//   size: number = nums.length
// ): number[][] {
//   if (!size) {
//     return [[]];
//   }

//   let result: number[][] = [];

//   nums.forEach((num, i) => {
//     let remainingNums = nums.slice(0, i).concat(nums.slice(i + 1));
//     let perms = permutation(remainingNums, size - 1);

//     perms.forEach((perm) => {
//       result.push([num, ...perm]);
//     });
//   });

//   return result;
// }

export function nextBigger(n: number): number {
  let digitsArray: number[] = n.toString().split("").map(Number);

  let pivot = -1;

  for (let i = digitsArray.length - 1; i > 0; i--) {
    if (digitsArray[i] > digitsArray[i - 1]) {
      pivot = i - 1;
      break;
    }
  }

  if (pivot === -1) {
    return -1;
  }

  let nextNum = -1;
  for (let i = digitsArray.length - 1; i > pivot; i--) {
    if (digitsArray[i] > digitsArray[pivot]) {
      nextNum = i;
      break;
    }
  }

  [digitsArray[pivot], digitsArray[nextNum]] = [
    digitsArray[nextNum],
    digitsArray[pivot],
  ];

  const rightPart = digitsArray.splice(pivot + 1).reverse();
  const resultDigits = digitsArray.concat(rightPart);

  const result = Number(resultDigits.join(""));

  return result;
}
console.log(nextBigger(12));
console.log(nextBigger(513));
console.log(nextBigger(2017));
console.log(nextBigger(414));
