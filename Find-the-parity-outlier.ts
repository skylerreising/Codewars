/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)
*/

export function findOutlier(integers: number[]): number {
    //loop through the first 3 numbers to determine if the outlier is even or odd
    let odd: number = 0;
    let even: number = 0;

    for(let i: number = 0; i<3; i++){
        Math.abs(integers[i]) % 2 === 0 ? even++ : odd++;
    }

    return odd > even ? integers.filter(x => Math.abs(x) % 2 === 0)[0] : 
        integers.filter(x => Math.abs(x) % 2 === 1)[0];
}

console.log(findOutlier([2, 6, 8, 10, 3])); //3
console.log(findOutlier([1, 1, 0, 1, 1])); // 0
