/**
 * Write a function

tripledouble(num1,num2)
which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.

If this isn't the case, return 0

Examples
tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
                                          // num2 has straight double 99s

tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

tripledouble(12345, 12345) == 0

tripledouble(666789, 12345667) == 1
 */
function tripledouble(num1, num2) {
    //turn each number into a string
    let num1String = num1.toString();
    let num2String = num2.toString();

    //loop through the first number string
    // let count = 0;
    for(let i=0; i<=9; i++){
        for(let j=0; j<num1String.length; j++){
            //if there are 3 nums in a row, loop through the second number string to see if there are 2 in a row of that number
            if(num1String[j] == i){
                if(num1String[j+1] == i){
                    if(num1String[j+2] == i){
                        for(let k=0; k<num2String.length; k++){
                            if(num2String[k] == i){
                                if(num2String[k+1] == i){
                                    return 1;
                                }
                            }
                        }
                    }
                }
            }
        }
    //if not, continue first loop until all numbers have been searched for in the first string
    }
    return 0;
  }
console.log(tripledouble(451999277, 41177722899));//1
console.log(tripledouble(666789, 12345667));//1
console.log(tripledouble(1222345, 12345));//0