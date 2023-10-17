/*
Find the stray number
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
*/

function stray(numbers) {
  //loop through the array and check if each number after the first is the same as the first. If it isn't and the 2nd one is the same as the 3rd, return the first number, otherwise return the number that isn't the same as the first
  for(let i=0; i<numbers.length; i++){
    if(numbers[0]!==numbers[i]){
      if(numbers[0]!==numbers[1] && numbers[1]===numbers[2]){
        return numbers[0]
      }else{
        return numbers[i]
      }
    }
  }
}

console.log(stray([1, 1, 2]))//2
console.log(stray([17, 17, 3, 17, 17, 17, 17]))//3
console.log(stray([2, 1, 1]))//2
console.log(stray([1, 2, 1]))//2