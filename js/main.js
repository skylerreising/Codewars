//CODEWARS!

// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

// function areYouPlayingBanjo(name) {
//     const firstLetterCheck = `${name.charAt(0)}`.toLowerCase()
//   if(firstLetterCheck === 'r'){
//     name = (name + " plays banjo")
//   }else {
//     name = (name + " does not play banjo")
//   }
//   return name;
// }

// console.log(areYouPlayingBanjo('Skyler'))
// console.log(areYouPlayingBanjo('Roman'))

// Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// Examples
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7

// const stringToNumber = function(str){
//     newString = Number(str)
//     return newString
//   }

// DESCRIPTION:
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

// function makeNegative(num) {
//     if(num>0){
//         num = num - num * 2
//         return num
//     }else {
//         return num
//     }
//   }

// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12

// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

/* NO KATA, LOOKED AT SOLUTION
function century(year) {
    if(year>=1 && year<=100){
        currentCentury = 1
    }else if(year>100 && year<=1000){
        let digits = year.toString().split('');
        let notYet = Number(digits[0])
        currentCentury = (notYet + 1)
    }else if(year>1000 && year<=1999){
        let moreDigits = year.toString().split('');
        let stillNotYet = Number(moreDigits[0])
        currentCentury = (stillNotYet + 10)
    }else if(year>=2000){
        let outtaHand = year.toString().split('');
        let imDone = Number(outtaHand[0])
        currentCentury = (imDone + 18)
    }
    return currentCentury;
  }
console.log(century(101))
console.log(century(333))
console.log(century(1010))
console.log(century(1345))
console.log(century(2000))
console.log(century(2350))

SOLUTIONS*/
// const century = year => Math.ceil(year/100)

// console.log(century(101))
// console.log(century(333))
// console.log(century(1010))
// console.log(century(1345))
// console.log(century(2000))
// console.log(century(2350))

// Make a simple function called greet that returns the most-famous "hello world!".

// function greet(){
//     return('hello world!')
// }
// greet()

// DESCRIPTION:
// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

// function numberToString(num) {
//     return num.toString()
//   }

// console.log(numberToString(456))

// DESCRIPTION:
// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

// function lovefunc(flower1, flower2){
//     if(flower1 % 2 === 0 && flower2 % 2 !== 0){
//         return true
//     }else if(flower2 % 2 === 0 && flower1 % 2 !== 0){
//         return true
//     }else {
//         return false
//     };
// }
// console.log(lovefunc(4,5))
// console.log(lovefunc(4,6))

// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

// function summation(num) {
//     let sum = 0
//     for(let i=1; i<=num; i++){
//         sum += i
//     }
//     return(sum) 
//   }

// function paperwork(n, m) {
//   if(n<=0 || m<=0){
//     return 0
//   }else {
//     return (n*m)
//   }
// }
// console.log(paperwork(5,5))
// console.log(paperwork(5,-5))
// console.log(paperwork(-5,-5))
// console.log(paperwork(-5,5))
// console.log(paperwork(5,0))

// DESCRIPTION:
// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

// function getGrade (s1, s2, s3) {
//     let ave = (s1+s2+s3)/3
//     if(ave<60){
//         return 'F'
//     }else if(ave>=60 && ave<70){
//         return 'D'
//     }else if(ave>=70 && ave<80){
//         return 'C'
//     }else if(ave>=80 && ave<90){
//         return 'B'
//     }else {
//         return 'A'
//     } 
//   }
//   console.log(getGrade(100,100,100))
//   console.log(getGrade(89,89,89))
//   console.log(getGrade(79,79,79))
//   console.log(getGrade(69,69,69))
//   console.log(getGrade(59,59,59))

// function betterThanAverage(classPoints, yourPoints) {
//     //find average of classPoints
//     let classAverage = classPoints.reduce((sum, current) => sum + current, 0)
//     classAverage /= classPoints.length
    
//     //if yourPoints is higher than the average of classPoints, return true
//     return yourPoints>classAverage
//   }
//   console.log(betterThanAverage([10,20,30,40,50,60,70,80,90,100],56))

// Write a function that removes the spaces from the string, then return the resultant string.

// Examples:

// Input -> Output
// "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
// "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
// "8aaaaa dddd r     " -> "8aaaaaddddr"

function noSpace(x){
   x = x.replace(/\s+/g,'')
   return x
}

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"))