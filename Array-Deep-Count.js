/*
Array Deep Count
You are given an array. Complete the function that returns the number of ALL elements within an array, including any nested arrays.

Examples
[]                   -->  0
[1, 2, 3]            -->  3
["x", "y", ["z"]]    -->  4
[1, 2, [3, 4, [5]]]  -->  7
The input will always be an array.
*/
function deepCount(a){
  //loop through array and count elements or empty nested arrays
  const array = a;
  let count = 0;
  function counter(b){
    for(let i=0; i<b.length; i++){
    //if element is an array, recurse
      if(Array.isArray(b[i])){
        count++;
        counter(b[i]);
      }else{
        count++;
      }
    }
  }
  //call recursive function
  counter(array);
  
  return count
}
console.log(deepCount([1, 2, [3, 4, [5]]]))//7
console.log(deepCount(["1", "2", 3]))//3
console.log(deepCount([]))//0