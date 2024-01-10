/**
 * Pyramid Array
 * 
 * Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

pyramid(0) => [ ]
pyramid(1) => [ [1] ]
pyramid(2) => [ [1], [1, 1] ]
pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
Note: the subarrays should be filled with 1s

 */

function pyramid(n) {
    //Declare an array to hold the arrays.
    let resultArray = [];

    //Control for 0.
    if(n===0){
        return resultArray;
    }

    //Nested loop to create resultArray
    for(let i=1; i<=n; i++){
        //declare array to be added to resultArray
        let addArray = [];

        //loop to push 1's to addArray
        for(let j=1; j<=i; j++){
            addArray.push(1);
        }

        //push addArray to resultArray
        resultArray.push(addArray);
    }
    //return resultArray
    return resultArray;
}
console.log(pyramid(0));
console.log(pyramid(1));
console.log(pyramid(2));
console.log(pyramid(3));