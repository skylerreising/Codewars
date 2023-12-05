/**
 * Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
 */

function highestRank(arr){
    //object to count each number
    let numObj = {};

    //loop to add values to numObj
    for(let i=0; i<arr.length; i++){
        if(!numObj[arr[i]]){
            numObj[arr[i]] = 1;
        }else{
            numObj[arr[i]]++
        }
    }
    const highVal = Math.max.apply(null, Object.values(numObj))

    //loop through the object and find the property with the highVal and if there are multiple, return the highest of them
    let nums;
    for(const property in numObj){
        if(numObj[property] === highVal){
            nums = property
        }
    }
    return Math.max(nums)
}
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]))//12