/**
 * Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

  12 ==> 21
 513 ==> 531
2017 ==> 2071
If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift, None in Rust):

  9 ==> -1
111 ==> -1
531 ==> -1
 */
function nextBigger(n){
    //loop through the digits and find a digit that is smaller than the one before it.
    let numArray = n.toString().split("").map(x => +x);
    let indexOfSmaller;
    for(let i=numArray.length-1; i>=0; i--){
        if(numArray[i+1]>numArray[i]){
            indexOfSmaller = i;
            break;
        }
    }
    //control for n is smallest
    if(indexOfSmaller===undefined){
        return -1;
    }
    //find the smallest digit to the right of indexOfSmaller that is greater than indexOfSmaller
    //make a subarray of those digits
    let subArr = numArray.slice(indexOfSmaller+1)
    subArr = subArr.filter(x => x>numArray[indexOfSmaller])
    let smallestOfSub = Math.min(...subArr)
    let indexOfSmallestSub
    for(let i=numArray.length-1; i>=0; i--){
        if(numArray[i]===smallestOfSub){
            indexOfSmallestSub = i;
            break;
        }
    }
    //swap the digits
    let newNum = [...numArray];
    newNum[indexOfSmaller] = numArray[indexOfSmallestSub];
    newNum[indexOfSmallestSub] = numArray[indexOfSmaller];

    //sort the digits to the right of indexOfSmaller
    let sortedSub = newNum.slice(indexOfSmaller+1).sort((a,b) => a-b);
    let finalNum = newNum.slice(0,indexOfSmaller+1).concat(sortedSub)

    return +finalNum.join("")
  }
  console.log(nextBigger(9))//-1
  console.log(nextBigger(12))//21
  console.log(nextBigger(513))//531
  console.log(nextBigger(2017))//2071
  console.log(nextBigger(414))//441
  console.log(nextBigger(144))//414
  console.log(nextBigger(534976))//536479
  console.log(nextBigger(21581957621))//21581961257