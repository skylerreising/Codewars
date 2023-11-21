/*
Range Extraction
A format for expressing an ordered list of integers is to use a comma separated list of either

-individual integers
-or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

Example:

solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"
*/
function solution(list){
    //loop through the list and if integers are consecutive and there are 3 or more of them in a row, reformat the list accordingly. I think I will need a loop inside of a loop.
     let count = 1;
     let end = 0;
     let newArr = [];
     for(let i=1; i<list.length; i++){
       //loop to see if element is one more than last element and if it is, count goes up by 1
       if(list[i]-1===list[i-1]){
         count++;
       }else{
         count = 1;
       }
       //if count is 3 or more and the element isn't one more than the last element, code to change those nums into a grouping. 
       if(count>=3 && list[i]+1!==list[i-1]){
         //Need something to control for when to stop. Its 3 or greater, but how do I know which number 3 or greater to use?
         if(list[i]+1===undefined || list[i+1]!==list[i]+1){
           end = i+1;
           let rangeArr = [];
           
           //use count to combine numbers with slice
           rangeArr.push(list.slice(i-count+1,end));
           let front = rangeArr[0][0];
           let back = rangeArr[0][rangeArr[0].length-1];
           newArr.push(`${front}-${back}`)
         }
       }else if(count<3){
         if(list[i+1]!==list[i]+1){
           newArr.push(list[i])
         }
         //if the next number is one more than element but the number after that isn't 2 more than the element
           //TODO not working
           if(list[i+1]===list[i]+1 && list[i+2]!==list[i]+2 && list[i-1]!==list[i]-1){
            newArr.push(list[i])
          }
       }
     }
     return newArr.join(",");
   }
   console.log(solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));