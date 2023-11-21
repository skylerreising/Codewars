/*
Maximum subarray sum
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
*/
var maxSequence = function(arr){
  //control for empty list
  if(arr.length===0){
    return 0;
  }
  
  //control for every number is negative
  let negative = true;
  for(let i=0; i<arr.length; i++){
    if(Math.sign(arr[i])<=0){
      negative = true;
    }else{
      negative = false;
      break;
    }
  }
  if(negative === true){
    return 0;
  }
  
  //control for if every number in the array is positive
  let positive = true;
  for(let i=0; i<arr.length; i++){
    if(Math.sign(arr[i])>=0){
      positive = true;
    }else{
      positive = false;
      break;
    }
  }
  if(positive === true){
    return arr.reduce((a,b) => a+b);
  }
  
  //declare a variable to hold the largest sum of a subarray
  let largest = arr[0];
  //loops to find the sum of each sub array and compare it to largest
  for(let i=0; i<arr.length; i++){
    for(let j=2; j<arr.length+1; j++){
      let sumCheck = arr.slice(i,j);
      // console.log(sumCheck)
      if(sumCheck.length>0){
        sumCheck = sumCheck.reduce((a,b) => a+b)
      }
      if(sumCheck>largest){
        largest = sumCheck
      }
    }
    
  }
  return largest
}
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))//6
console.log(maxSequence([-2, -1, -3, -4, -1, -2, -1, -5, -4]))//0
console.log(maxSequence([2, 1, 3, 4, 1, 2, 1, 5, 4]))//23
console.log(maxSequence([]))//0