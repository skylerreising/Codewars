/**
 * Write a function called sumIntervals/sum_intervals that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

Intervals
Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

Overlapping Intervals
List containing overlapping intervals:

[
   [1, 4],
   [7, 10],
   [3, 5]
]
The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.

Examples:
sumIntervals( [
   [1, 2],
   [6, 10],
   [11, 15]
] ) => 9

sumIntervals( [
   [1, 4],
   [7, 10],
   [3, 5]
] ) => 7

sumIntervals( [
   [1, 5],
   [10, 20],
   [1, 6],
   [16, 19],
   [5, 11]
] ) => 19

sumIntervals( [
   [0, 20],
   [-100000000, 10],
   [30, 40]
] ) => 100000030
Tests with large intervals
Your algorithm should be able to handle large intervals. All tested intervals are subsets of the range [-1000000000, 1000000000].
 */
//   function sumIntervals(intervals) {
//     //First overlapping intervals should be identified
//     //need to loop through each subarray and...
//     let intervalSum = 0
//     for(let i=0; i<intervals.length; i++){
//         intervalSum += intervals[i][1]-intervals[i][0];
//     }
//     let adjustment = false
//     let upperRange = 0;
//     let lowerRange = 0;
//     //now figure out how to subract overlaps from intervalSum
//     for(let i=0; i<intervals.length; i++){
//         for(let j=0; j<intervals.length; j++){
//             //if i0 is greater than or equal to j0 and i0 is less than or equal to j1 or i1 is greater than or equal to j0 and i1 is less than or equal to j1
//             if(i!==j && ((intervals[i][0]>=intervals[j][0] && intervals[i][0]<=intervals[j][1]) || (intervals[i][1]>=intervals[j][0] && intervals[i][1]<=intervals[j][1]))){
//                 //subtract the values of both pairs
//                 intervalSum -= (intervals[i][1]-intervals[i][0]);
//                 //add the values of the range of both pairs
//                 upperRange = Math.max(intervals[i][1],intervals[j][1]);
//                 lowerRange = Math.min(intervals[i][0],intervals[j][0]);
//                 adjustment = true;
//             }
//         }
//     }
//     if(adjustment){
//         intervalSum += upperRange-lowerRange;
//     }
//     return intervalSum;
//   }

//TODO This whole function needs to be revised to handle all overlapping intervals by sorting intervals by their start points and merging the overlapping intervals
  console.log(sumIntervals([[1,5]]))//4
  console.log(sumIntervals([[1,5],[6,10]]))//8
  console.log(sumIntervals([[1,5],[7,10],[3,6]]))//8