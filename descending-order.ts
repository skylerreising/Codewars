/**
 * Descending Order
 * Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
 */

export function descendingOrder(n: number): number {
  const numbers: number = Number(
    n
      .toString()
      .split("")
      .map((num) => Number(num))
      .sort((a, b) => b - a)
      .map((x) => x.toString())
      .join("")
  );

  return numbers;
}

console.log(descendingOrder(42145));
console.log(descendingOrder(145263));
console.log(descendingOrder(123456789));
