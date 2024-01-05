/*
Check the exam
The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

If the score < 0, return 0.

For example:

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0
*/
function checkExam(array1, array2) {
  //declare variable to hold total
  let total = 0;
  //loop through both arrays
  for(let i=0; i<array1.length; i++){
    //If answer is blank, +0. If answers match, +4. If answers don't match, -1
    if(array2[i]===""){
      continue;
    }else if(array1[i]===array2[i]){
      total += 4;
    }else{
      total--;
    }
  }
  //upon return if score is < 0, return 0
  if(total<0){
    return 0;
  }else{
    return total;
  }
}
console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]))//6