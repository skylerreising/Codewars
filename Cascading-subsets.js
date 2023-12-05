/**
 * Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:

each_cons([1,2,3,4], 2)
  #=> [[1,2], [2,3], [3,4]]

each_cons([1,2,3,4], 3)
  #=> [[1,2,3],[2,3,4]]
  
As you can see, the lists are cascading; ie, they overlap, but never out of order.
 */
function eachCons(array, n){
    //controle for empty array
    if(array.length === 0){
        return array;
    }

    //declare variable to hold array answer
    let arrayAns = [];

    //loop through array length-n times starting at 0
    for(let i=0; i<=array.length-n; i++){
        //loop to create arrays to push to answer
        let subAns = [];
        for(let j=i; j<n+i; j++){
            subAns.push(array[j]);
        }
        arrayAns.push(subAns)
    }
    return arrayAns;
}
console.log(eachCons([1,2,3,4], 2))//[[1,2], [2,3], [3,4]]
console.log(eachCons([1,2,3,4], 3))//[[1,2,3],[2,3,4]]