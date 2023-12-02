/**
 * Objective
Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

E.g.

arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
Get your timer out. Are you ready? Ready, get set, GO!!!
 */
function arrayMadness(a,b){
    //declare variable to hold sums
    let sumA;
    let sumB;

    //math to find sums
    if(a.length===1){
        sumA = a[0]**2
    }else{
        sumA = a.reduce((x,y) => x+y**2, 0);
    }

    if(b.length===1){
        sumB = b[0]**3
    }else{
        sumB = b.reduce((x,y) => x+y**3, 0);
    }

    console.log(sumA,sumB)
    //comparison return
    return sumA>sumB;
}
console.log(arrayMadness([4,5,6],[1,2,3]))//true
console.log(arrayMadness([5,6,7],[4,5,6]))//false
console.log(arrayMadness([5,3,2,4,1],[15]))//false
console.log(arrayMadness([1,3,5,2,4],[2,2,2,2,2,2,2,1]))//false
console.log(arrayMadness([1,2,3,4,5],[2,2,2,2,2,2,1,1,1]))//true