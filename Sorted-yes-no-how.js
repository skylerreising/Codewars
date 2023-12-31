/**
 * Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.
 */
function isSortedAndHow(array) {
    //console.log(array.sort((a,b) => a-b))//ascending
    const ascend = [...array].sort((a,b) => a-b);
    const descend = [...array].sort((a,b) => b-a);

    let count = 0;

    for(let i=0; i<array.length; i++){
        if(array[i] === ascend[i]){
            count++
        }
    }

    if(count === ascend.length){
        return "yes, ascending";
    }

    count = 0;
    for(let i=0; i<array.length; i++){
        if(array[i] === descend[i]){
            count++
        }
    }

    if(count === descend.length){
        return "yes, descending";
    }
    
    return "no";
}
console.log(isSortedAndHow([1, 2]))
console.log(isSortedAndHow([15, 7, 3, -8]))
console.log(isSortedAndHow([4, 2, 30]))