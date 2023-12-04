/**
 * Your Task
Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.

Examples
booleans = [True, True, False], operator = "AND"
True AND True -> True
True AND False -> False
return False
booleans = [True, True, False], operator = "OR"
True OR True -> True
True OR False -> True
return True
booleans = [True, True, False], operator = "XOR"
True XOR True -> False
False XOR False -> False
return False
Input
an array of Boolean values (1 <= array_length <= 50)
a string specifying a logical operator: "AND", "OR", "XOR"
Output
A Boolean value (True or False).
 */
function logicalCalc(array,op){
    //logic for AND
    let ANDResult = true;
    if(op==="AND"){
        for(let i=0; i<array.length; i++){
            ANDResult = ANDResult && array[i];
        }
        return ANDResult;
    }

    //logic for OR
    let ORResult = false;
    if(op==="OR"){
        for(let i=0; i<array.length; i++){
            ORResult = ORResult || array[i];
        }
        return ORResult;
    }

    //logic for XOR
    let XORResult = false;
    if(op==="XOR"){
        for(let i=0; i<array.length; i++){
            XORResult = XORResult !== array[i];
        }
        return XORResult;
    }
}
console.log(logicalCalc([true, true, true, false], "AND"))//false
console.log(logicalCalc([true, true, true, false], "OR"))//true
console.log(logicalCalc([true, true, true, false], "XOR"))//true
console.log(logicalCalc([false], "AND"))//false
console.log(logicalCalc([false], "OR"))//false
console.log(logicalCalc([false], "XOR"))//false
console.log(logicalCalc([true], "AND"))//true
console.log(logicalCalc([true], "OR"))//true
console.log(logicalCalc([true], "XOR"))//true