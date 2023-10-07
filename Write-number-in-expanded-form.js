/**
 * Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.
 */

function expandedForm(num) {
    //given a number, return it as a string in Expanded Form.
    //Variable to hold the string and reverse to make adding 0's easier
    let expStr = num.toString().split("").reverse();
    //add 0's to the numbers
    for(let i=0; i<expStr.length; i++){
        if(expStr!==0){
            for(let j=1; j<=i; j++){
                expStr[i] = expStr[i]+"0"
            }
        }
    }
    //reverse the numbers back
    expStr.reverse();
    //remove values of 0
    for(let i=0; i<expStr.length; i++){
        if(Number(expStr[i])===0){
            expStr.splice(i,1)
            i--
        }
    }
    //join values of the array together 
    return expStr.join(" + ")
  }

console.log(expandedForm(12))// Should return '10 + 2'
console.log(expandedForm(42))// Should return '40 + 2'
console.log(expandedForm(70304))// Should return '70000 + 300 + 4'
console.log(expandedForm(420370022))