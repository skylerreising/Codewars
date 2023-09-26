/**
 * Task:
Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
Rules:
You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return 0.00

You will only be given Natural Numbers as arguments.

Examples:(Input --> Output)
1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
 */

function SeriesSum(n){
    let sum = 0
    let denom = 1
    //loop to return correct value
    for(let i=1; i<=n; i++){
        //formula for demoninator = add 3 every iteration
        sum += (1/denom)
        denom += 3
    }
    //return rounded hundredths place
    return sum.toFixed(2)
}
console.log(SeriesSum(0))
console.log(SeriesSum(1))
console.log(SeriesSum(2))
console.log(SeriesSum(3))
console.log(SeriesSum(4))