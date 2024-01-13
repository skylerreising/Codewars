/**
 * Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

the array can't be empty
only non-negative, single digit integers are allowed
Return nil (or your language's equivalent) for invalid inputs.

Examples
Valid arrays

[4, 3, 2, 5] would return [4, 3, 2, 6]
[1, 2, 3, 9] would return [1, 2, 4, 0]
[9, 9, 9, 9] would return [1, 0, 0, 0, 0]
[0, 1, 3, 7] would return [0, 1, 3, 8]

Invalid arrays

[1, -9] is invalid because -9 is not a non-negative integer

[1, 2, 33] is invalid because 33 is not a single-digit integer
 */
function upArray(arr){
    //check array for all valid inputs
    if(arr.length === 0){
        return null
    }

    for(let i=0; i<arr.length; i++){
        if(arr[i] !== Math.abs(arr[i]) || arr[i]>9){
            return null;
        }
    }

    //turn the numbers in the array into strings
    let stringArray = arr.map(x => x.toString());

    //join it
    stringArray = stringArray.join("");

    //if there are leading 0's, count those 0's to be added later
    let zeroCount = 0;
    for(let i=0; i<stringArray.length; i++){
        if(stringArray[i] === "0"){
            zeroCount++;
        }
        else{
            break;
        }
    }

    //turn it into a number
    let num = BigInt(stringArray);

    //add 1
    num += 1n;

    //turn it into a string
    let stringNum = num.toString();

    //add leading 0's
    let zeroString = "";
    for(let i=1; i<=zeroCount; i++){
        zeroString += "0"
    }
    stringNum = zeroString+stringNum;

    //split the string
    stringNum = stringNum.split("");

    //loop through the array and turn each string into a number
    for(let i=0; i<stringNum.length; i++){
        stringNum[i] = Number(stringNum[i])
    }

    //return the array
    return stringNum;
  }
// console.log(upArray([4, 3, 2, 5]))//[4, 3, 2, 6]
// console.log(upArray([1, 2, 3, 9]))//[1, 2, 4, 0]
// console.log(upArray([9, 9, 9, 9]))//[1, 0, 0, 0, 0]
// console.log(upArray([0, 1, 3, 7]))//[0, 1, 3, 8]
// console.log(upArray([0, 7]))//[0, 1, 3, 8]
console.log(upArray([1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0]))
console.log(upArray([-1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0]))
console.log(upArray([]))