/**
 * Largest Elements
 * Write a program that outputs the top n elements from a list.

Example:

largest(2, [7,6,5,4,3,2,1])
// => [6,7]
 */
function largest(n, array) {
    //declare a variable to hold the result array
    let result = [];

    //sort the array
    array.sort((a,b) => b-a);
    
    //loop through the array and push largest elements to result array
    for(let i=0; i<n; i++){
        result.push(array[i]);
    }

    //sort and return the result
    return result.sort((a,b) => a-b)
  }

console.log(largest(2, [7,6,5,4,3,2,1]))