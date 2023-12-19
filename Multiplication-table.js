/*
Multiplication table
Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9
For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]]
*/

multiplicationTable = function(size) {
  //Using given number, spit out nxn multiplication table
  //Need variable to house an array of arrays
  let multiTable = []

  //need to add arrays to multiTable using loop(s)
  for(let i=1; i<=size; i++){
    let rowArr = []
    for(let j=1; j<=size; j++){
      rowArr.push(i*j)
    }
    multiTable.push(rowArr)
  }
  return multiTable
}
console.log(multiplicationTable(3))