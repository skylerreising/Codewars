/**
 * In this kata you have to write a method that folds a given array of integers by the middle x-times.

An example says more than thousand words:

Fold 1-times:
[1,2,3,4,5] -> [6,6,3]

A little visualization (NOT for the algorithm but for the idea of folding):

 Step 1         Step 2        Step 3       Step 4       Step5
                     5/           5|         5\          
                    4/            4|          4\      
1 2 3 4 5      1 2 3/         1 2 3|       1 2 3\       6 6 3
----*----      ----*          ----*        ----*        ----*


Fold 2-times:
[1,2,3,4,5] -> [9,6]
As you see, if the count of numbers is odd, the middle number will stay. Otherwise the fold-point is between the middle-numbers, so all numbers would be added in a way.

The array will always contain numbers and will never be null. The parameter runs will always be a positive integer greater than 0 and says how many runs of folding your method has to do.

If an array with one element is folded, it stays as the same array.

The input array should not be modified!
 */
function foldArray(array, runs){
  //control for array length of 1
  if(array.length === 1){
    return array;
  }

  //Will need different loops for odd and even
  let newArray = [...array];
  
  //loop to add values to newArray
  for(let i=0; i<runs; i++){
    let resultArray = [];
    if(newArray.length %2 === 1){//for odd numbered arrays
        for(let i=0; i<Math.floor(newArray.length/2); i++){
            let newValue = 0;
            newValue += newArray[i];
            newValue += newArray[newArray.length - 1 - i];
            resultArray.push(newValue);
        }
        resultArray.push(newArray[Math.floor(newArray.length/2)])
        newArray = resultArray;
      }else{//for even numbered arrays
        for(let i=0; i<newArray.length/2; i++){
            let newValue = 0;
            newValue += newArray[i];
            newValue += newArray[newArray.length - 1 - i];
            resultArray.push(newValue);
        }
        newArray = resultArray;
      }
  }
  
  return newArray;
}
console.log(foldArray([1,2,3,4,5],1));//[6,6,3]
console.log(foldArray([1,2,3,4,5],2));//[9,6]
console.log(foldArray([1,2,3,4,5],3));//[15]
console.log(foldArray([1,2,4,5],1));//[6,6]
console.log(foldArray([1,2,4,5],2));//[12]