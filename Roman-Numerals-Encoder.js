/*
Roman Numerals Encoder
Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Example:

solution(1000); // should return 'M'
Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
*/
function solution(number){
    // convert the number to a roman numeral
    //Params - whole numbers 1-3999
    //Returns - roman numberal strings
    //use number to determine strings RNs to push to a new string array then join it at the end
    //Conditionals for how to split the numbers 
    //if a number is not 0, then it will have to be split out, converted to RN, then pushed to the string array
    //first split the numbers
    let numSplit = number.toString().split("")
    let numArray = []
    //Push correct numbers for conversion into the numArray
    for(let i=0; i<numSplit.length; i++){
      //use repeat to add 0's?
      let zeros = []
      //add numbers with 0's to the num array if the number isn't "0"
      if(numSplit[i]!=="0"){
        numArray.push(numSplit[i]+"0".repeat(numSplit.length-(i+1)))
      }
    }
    let romNums = []
    //Change each string number to a number
    numArray = numArray.map(x => +x)
  
    //loop to add roman numerals to the romNums array
    //push number to romNums array and subtract number from element in numArray
    //If the sum of all digits in the numArray isn't 0, run again
      for(let i=0; i<numArray.length; i++){
        while(numArray[i]>=1){
        if(numArray[i]>=1000){
          romNums.push("M");
          numArray[i] -=1000;
        }else if(numArray[i]>=900){
          romNums.push("CM");
          numArray[i] -=900;
        }else if(numArray[i]>=500){
          romNums.push("D");
          numArray[i] -=500;
        }else if(numArray[i]>=400){
          romNums.push("CD");
          numArray[i] -=400;
        }else if(numArray[i]>=100){
          romNums.push("C");
          numArray[i] -=100;
        }else if(numArray[i]>=90){
          romNums.push("XC");
          numArray[i] -=90;
        }else if(numArray[i]>=50){
          romNums.push("L");
          numArray[i] -=50;
        }else if(numArray[i]>=40){
          romNums.push("XL");
          numArray[i] -=40;
        }else if(numArray[i]>=10){
          romNums.push("X");
          numArray[i] -=10;
        }else if(numArray[i]>=9){
          romNums.push("IX");
          numArray[i] -=9;
        }else if(numArray[i]>=5){
          romNums.push("V");
          numArray[i] -=5;
        }else if(numArray[i]>=4){
          romNums.push("IV");
          numArray[i] -=4;
        }else if(numArray[i]>=1){
          romNums.push("I");
          numArray[i]--;
        }else{
            break;
        }
      }
    }
    return romNums.join("");
  }
  console.log(solution(1))//"I"
  console.log(solution(2))//"II"
  console.log(solution(3))//"III"
  console.log(solution(4))//"IV"
  console.log(solution(5))//"V"
  console.log(solution(9))//"IX"
  console.log(solution(10))//"X"
  console.log(solution(11))//"XI"
  console.log(solution(15))//"XV"
  console.log(solution(19))//"XIX"
  console.log(solution(22))//"XXII"
  console.log(solution(1990))//"MCMXC"
  console.log(solution(2008))//"MMVIII"
  console.log(solution(2000))