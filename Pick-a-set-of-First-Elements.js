/**
 * Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.

If n == 0 return an empty sequence []

Examples
var arr = ['a', 'b', 'c', 'd', 'e'];
first(arr) //=> ['a'];
first(arr, 2) //=> ['a', 'b']
first(arr, 3) //=> ['a', 'b', 'c'];
first(arr, 0) //=> [];
 */
function first(arr,n){
    //control for n=0
    if(n === 0){
        return [];
    }

    if(n === undefined){
        return [arr[0]]
    }

    //declare variable to hold result
    let result = []
    for(let i=0; i<n; i++){
        //if the element in the array isn't undefined
        if(arr[i]!==undefined){
            result.push(arr[i]);
        }
    }

    return result;
}
const arr = ['a', 'b', 'c', 'd', 'e']
console.log(first([...arr]))//['a']
console.log(first([...arr], 2))//['a','b']