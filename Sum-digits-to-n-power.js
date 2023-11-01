/*
Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!
The number 
89
89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number

[a,b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

Examples
Let's see some cases (input -> output):

1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
If there are no numbers of this kind in the range 
[a,b] the function should output an empty list.
90, 100 --> []
Enjoy it!!
*/
function sumDigPow(a, b) {
  //loop between the numbers, split them if they're greater than 9, and check if they meet the criteria of the function
  let eurekaNums = [];
  for(let i=a; i<=b; i++){
    if(i<10 && i>=1){
      eurekaNums.push(i);
    }else if(i>=10){
      //split double digit or higher numbers
      let newNum = i.toString().split("");
      for(let i=0; i<newNum.length; i++){
        newNum[i] = Number(newNum[i]);
      }
      
      //variable to hold the sum of those numbers run through the loop
      let sumCheck = 0;
      
      for(let i=0; i<newNum.length; i++){
        sumCheck += Math.pow(newNum[i],(i+1));
      }
      if(sumCheck === i){
        eurekaNums.push(i)
      }
    }
  }
  return eurekaNums
}

console.log(sumDigPow(1,10))
console.log(sumDigPow(1,100))
console.log(sumDigPow(90,100))