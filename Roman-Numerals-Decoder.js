/**
 * Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

Example:
"MM"      -> 2000
"MDCLXVI" -> 1666
"M"       -> 1000
"CD"      ->  400
"XC"      ->   90
"XL"      ->   40
"I"       ->    1
Help:
Symbol    Value
I          1
IV         4
V          5
IX         9
X          10
XL         40
L          50
XC         90
C          100
CD         400
D          500
CM         900
M          1,000
 */
function solution(roman) {
    //loop through the string and use conditionals to increase a number count to return at the end
    let count = 0;
    const roLeng = roman.length;
    for(let i=0; i<roLeng; i++){
        if(roman[i]==="M"){
            if(roman[i-1]==="C"){
                count -= 200;
            }
                count += 1000;
        }else if(roman[i]==="D"){
            if(roman[i-1]==="C"){
                count -=200;
            }
                count += 500;
        }else if(roman[i]==="C"){
            if(roman[i-1]==="X"){
                count -=20;
            }
                count += 100;
        }else if(roman[i]==="L"){
            if(roman[i-1]==="X"){
                count -=20;
            }
                count += 50;
        }else if(roman[i]==="X"){
            if(roman[i-1]==="I"){
                count -=2;
            }
                count += 10;
        }else if(roman[i]==="V"){
            if(roman[i-1]==="I"){
                count -=2;
            }
                count += 5;
        }else if(roman[i]==="I"){
            count++
        }
    }
      return count;
  }
  console.log(solution('MM'));
  console.log(solution('CM'));
  console.log(solution('XXI'));
  console.log(solution('I'));
  console.log(solution('IV'));
  console.log(solution('MMVII'));
  console.log(solution('MDCLXVI'));