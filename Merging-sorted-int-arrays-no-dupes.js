/**
 * Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.
 */

function mergeArrays(a,b){
    let newArr = [];
    for(let i=0; i<a.length; i++){
        newArr.push(a[i]);
    }
    for(let i=0; i<b.length; i++){
        newArr.push(b[i]);
    }
    return [...new Set(newArr.sort((x,y) => x-y))]
}
console.log(mergeArrays([1, 3, 5], [2, 4, 6]))
console.log(mergeArrays([2, 4, 8], [2, 4, 6]))