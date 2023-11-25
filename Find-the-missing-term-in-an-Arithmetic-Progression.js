/**
 * An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers. You are provided with consecutive elements of an Arithmetic Progression. There is however one hitch: exactly one term from the original series is missing from the set of numbers which have been given to you. The rest of the given series is the same as the original AP. Find the missing term.

You have to write a function that receives a list, list size will always be at least 3 numbers. The missing term will never be the first or last one.

Example
findMissing([1, 3, 5, 9, 11]) == 7
PS: This is a sample question of the facebook engineer challenge on interviewstreet. I found it quite fun to solve on paper using math, derive the algo that way. Have fun!
 */
var findMissing = function (list) {
    let value1 = Math.abs(list[1])-Math.abs(list[0]);
    let value2 = Math.abs(list[2])-Math.abs(list[1]);
    if(list.length===2 || value1 !== value2){
        return list[0] + (((list[1])-list[0])/2);
    }
    //find the correct progression
    // let oneDiff = Math.min(Math.abs((list[1] - list[0])),Math.abs((list[2] - list[1])));
    // let oneDiff = value1 <= value2 ? value1 : value2;


    //loop through list and find the index that doesn't have the correct progression and fix it
    for(let i=0; i<list.length; i++){
        let val1 = Math.abs(list[i+1])-Math.abs(list[i]);
        let val2 = Math.abs(list[i+2])-Math.abs(list[i+1]);
        if(val1 !== val2){
            return list[i+1] + val1
        }
    }
    // for(let i=0; i<list.length; i++){
    //     if(list[i+1] - list[i] !==oneDiff){
    //         return list[i] + oneDiff;
    //     }
    // }
  }
//   console.log(findMissing([0,10]))
  console.log(findMissing([1, 3, 5, 9, 11]))
  console.log(findMissing([1,3,4]))
//   console.log(findMissing([1,2,4,5]))
  console.log(findMissing([-20,-14,-11,-8]))