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

// function noSpace(x){
//    x = x.replace(/\s+/g,'')
//    return x
// }

// console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"))

// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return true if yes, false otherwise :)

// function hero(bullets, dragons){
//     return dragons<=bullets/2 ? true:false
//     }
// console.log(hero(10,5))
// console.log(hero(7,4))

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// function solution(str, ending){
//     //count the number of characters in string ending
//     let endingLength = Number(ending.length)
//     //remove the number of characters in string-ending from the end of str
//     let strToCompare = str.slice(-endingLength)
//     //If these are the same, return true
//     return strToCompare === ending
//   }

// function solution(str, ending){
//     return str.endsWith(ending);
//   }

//   console.log(solution('abc', 'bc'))
//   console.log(solution('abc', 'd'))
//   console.log(solution('abcde', 'cde'))
//   console.log(solution('abcde', 'abc'))
//   console.log(solution('asdfmoimkmosky', 'sky'))

// Code as fast as you can! You need to double the integer and return it.

// function doubleInteger(i) {
//     return i*2;
//   }

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.

// Happy Coding!

// function squareDigits(num){
//     //split the number into an array of individual digits
//     let newArr = Array.from(String(num), Number)
//     // console.log(newArr)
//     //square each digit in the array
//     squareArr = []
//     squareArr = newArr.map((element) => Math.pow(element,2))
    
//     //concatenate the digits and return the value
//     return Number(squareArr.join(''));
//   }

//   console.log(squareDigits(3212))

// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

// function DNAStrand(dna){
//     const complements = {
//         'A' : 'T',
//         'T' : 'A',
//         'C' : 'G',
//         'G' : 'C',
//     };

//     const newStrand = [...dna].map((symbol) => {
//         return complements.hasOwnProperty(symbol) ? complements[symbol] : symbol
//     }).join('');
//     return newStrand
// }
//   console.log(DNAStrand("ATTGC"))
//   console.log(DNAStrand("GTAT"))

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

// function highAndLow(numbers){
//     let numArr = numbers.split(' ').map(Number)

//     let highNum = Math.max(...numArr)
//     let lowNum = Math.min(...numArr)

//     return `${highNum} ${lowNum}`
//   }

// console.log(highAndLow("1 2 3 4 5"));  // return "5 1"
// console.log(highAndLow("1 2 -3 4 5")); // return "5 -3"
// console.log(highAndLow("1 9 3 4 -5")); // return "9 -5"

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// function positiveSum(arr) {
//     let sum = 0
//       for(let i=0; i<=arr.length; i++){
//       if(arr[i]>0){
//         sum += arr[i]
//       }
//     }
//     return sum
// }
//     console.log(positiveSum([1,-4,7,12]))

// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.

// function booleanToString(b){
//     return stringToBooConversion = b ? "true":"false"
//   }

//   alert(booleanToString(true))
//   alert(booleanToString(false))

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

// function abbrevName(name){
//     let separateName = name.split(" ")

//     let lastName = separateName.pop()

//     let firstName = separateName.shift()

//     let lastInitial = lastName.slice(0,1).toUpperCase()

//     let firstInitial = firstName.slice(0,1).toUpperCase()

//     return `${firstInitial}.${lastInitial}`
// }

// console.log(abbrevName("skyler reising"))

// Write a function which converts the input string to uppercase.

// function makeUpperCase(str) {
//     return str.toUpperCase()
//   }

//   console.log(makeUpperCase("hello"))

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x){
    let stringToNum = x.split("").map((x) => +x)
    
    let binString = stringToNum.map((x) => x<5 ? "0":"1").join("")

    return binString
}

console.log(fakeBin('45385593107843568'))