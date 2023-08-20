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

// function fakeBin(x){
//     let stringToNum = x.split("").map((x) => +x)
    
//     let binString = stringToNum.map((x) => x<5 ? "0":"1").join("")

//     return binString
// }

// console.log(fakeBin('45385593107843568'))

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

// function check(a, x) {
//     let doesInclude = a.includes(x) ? true:false
//     return doesInclude
//   }

//   console.log(check([66,101], 66))

// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

// function smash (words) {
//     let newSentence = words.join(" ").trim()
//     return newSentence
//  };

//  console.log(smash(["hello", "amazing", "world"]))

// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

// function DNAtoRNA(dna) {
//     let DNA = dna.replaceAll("T","U")
//     return DNA
//   }

//   console.log(DNAtoRNA("GCAT"))
//   console.log(DNAtoRNA("UTTT"))

// Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

// function stringToArray(string){
//     return string.split(" ")
// }

// console.log(stringToArray("I love arrays they are my favorite"))

// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

// var countSheep = function (num){
//     let nums = ""
//     for(let i=1; i<=num; i++){
//         nums += i + " sheep..."
//     }
//     return nums
//   }

//   console.log(countSheep(10))

// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'

// function greet (name, owner) {
//     return  name === owner ? "Hello boss":"Hello guest"
//   }

//   console.log(greet('Daniel', 'Daniel'))

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// function removeExclamationMarks(s) {
//     return s.replaceAll("!","")
//   }

//   console.log(removeExclamationMarks("Hello World!"))

// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

// function points(games) {
//     let totalPoints = 0

//     for(let result of games){
//         let [x,y] = result.split(":").map(Number)
//         if(x>y){
//             totalPoints += 3
//         }else if(x===y){
//             totalPoints += 1
//         }
//     }
//     return totalPoints
//   }

//   console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]))

// Complete the solution so that it reverses all of the words within the string passed in.

// Words are separated by exactly one space and there are no leading or trailing spaces.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

// function reverseWords(str){
//     let reversedString = []
//     reversedString += str.split(" ").reverse().join(" ")
//     return reversedString; 
//   }

//   console.log(reverseWords("battle no requires which that is victory greatest The"))

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// function sumMix(x){
//     let sum = 0
//     let nums = x.map((c) => Number(c))
//     return sum = nums.reduce((a,b) => a+b)
// }

// function sumMix(x){
//     let sum = 0
//     return sum = x.map((c) => Number(c)).reduce((a,b) => a+b)
// }

// console.log(sumMix([9, 3, '7', '3']))

// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

// function feast(beast, dish) {
//    return beast.charAt(0) == dish.charAt(0) && beast.charAt(beast.length-1) === dish.charAt(dish.length-1) ? true : false
//     }

// console.log(feast("great blue heron", "garlic naan"))
// console.log(feast("brown bear", "bear claw"))

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

// function doubleChar(str) {
//     return str.split("").map((x)=> x+x).join("")
//   }

//   console.log(doubleChar("abcd"))

// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

// Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java, Scala, and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell, and Lua) or "¥" (Rust).

// function bonusTime(salary, bonus) {
//     return bonus ? `£${salary*10}`:`£${salary}`
//     }

//     console.log(bonusTime(10000, true))
//     console.log(bonusTime(25000, true))
//     console.log(bonusTime(10000, false))

// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// str_count("Hello", 'o'); // returns 1
// str_count("Hello", 'l'); // returns 2
// str_count("", 'z'); // returns 0

// function strCount(str, letter){  
//     let splitStr = str.split("")
//     let count = 0
//     for(let i=0; i<splitStr.length; i++){
//         splitStr[i]===letter ? count++ : count
//     }
//     return (count)
//   }

// function strCount(str, letter){
//     return str.split(letter).length-1
// }

// console.log(strCount("Hello", 'o')); // returns 1
// console.log(strCount("Hello", 'l')); // returns 2
// console.log(strCount("", 'z')); // returns 0

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

// function countSheeps(arrayOfSheep) {
//     let count = 0
//     arrayOfSheep.map((x)=> x ? count++:count)
//     return count
//   }

//   console.log(countSheeps([true,  true,  true,  false,
//       true,  true,  true,  true ,
//       true,  false, true,  false,
//       true,  false, false, true ,
//       true,  true,  true,  true ,
//       false, false, true,  true]))

// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

// function digitize(n) {
//     return n.toString().split("").reverse().map((x)=> parseInt(x,10))
//   }

//   console.log(digitize(35231))

// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

// function maps(x){
//     return x.map((a)=>a*2)
// }

// console.log(maps([1,2,3]))

// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"

// function findNeedle(haystack) {
//     let numINeed = haystack.indexOf("needle")
//     return `found the needle at position ${numINeed}`
//   }

//   console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]))

// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.
// What We're Testing
// We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
// Advanced users may find this extremely easy and can easily write this in one line.

// function sum (numbers) {
//     "use strict";
//     // let output = 0
//     // numbers.length === 0 ? output=numbers.length:output = numbers.reduce((a,b)=> a+b)
//     // return output
//     return numbers.reduce((a,b)=> a+b,0)
// };

// console.log(sum([1, 5.2, 4, 0, -1]))
// console.log(sum([]))

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

// function invert(array) {
//     return array.map((x) => x>=0 ? x-x*2:x+x*-2);
//  }

//  console.log(invert([1,2,3,4,5]))
//  console.log(invert([1,-2,3,-4,5]))
//  console.log(invert([]))

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// function findAverage(array) {
//     // let sum = array.reduce((a,b) => a+b)
//     // let ave = sum/array.length
//     // return ave
//     return array.length === 0 ? 0 : array.reduce((a,b) => a+b, 0)/array.length
//   }

//   console.log(findAverage([1,1,1]))
//   console.log(findAverage([1,2,3]))
//   console.log(findAverage([1,2,3,4]))
//   console.log(findAverage([]))

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// function countPositivesSumNegatives(input) {
//     let positives = 0
//     let negatives = 0
//     let emptyArr = []
//     if(input === null || input.length === 0 ){
//         return emptyArr
//     }else {
//         input.map((x) => x>0 ? positives++ :negatives += x)
//     return [positives, negatives]
//     }
//   }

//   console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))
//   console.log(countPositivesSumNegatives([]))

// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// function grow(x){
//     return x.reduce((a,b) => a*b)
// }

// console.log(grow([1, 2, 3, 4]))

// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).

// Examples
// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

// function countBy(x, n) {
//     let z = [];
//     for(let i=1; i<=n; i++){
//         z.push(i*x)
//     }
//     return z;
//   }

//   console.log(countBy(1,10))
//   console.log(countBy(2,5))

// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

// function getAverage(marks){
//     return Math.floor(marks.reduce((x,y) => x+y)/marks.length)
//   }

//   console.log(getAverage([2,2,2,2]))
//   console.log(getAverage([1,2,3,4,5,]))
//   console.log(getAverage([1,1,1,1,1,1,1,2]))

// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

// function arrayPlusArray(arr1, arr2) {
//     return arr1.reduce((a,b) => a+b) + arr2.reduce((a,b) => a+b);
//   }

//   console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))
//   console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]))
//   console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]))
//   console.log(arrayPlusArray([100, 200, 300], [400, 500, 600]))

// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

// function removeEveryOther(arr){
//     return arr.filter((a,b) => b % 2 === 0)
//     }

//   console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]))

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// function getCount(str) {
//   //return the number of vowels in the string
//   let count = 0
  
//   let strArr = str.split("")
  
//   for(let i=0; i<strArr.length; i++){
//     if(strArr[i]=="a"||strArr[i]=="e"||strArr[i]=="i"||strArr[i]=="o"||strArr[i]=="u"){
//       count++
//     }
//   }
//   return count;
// }

// console.log(getCount("abracadabra"))
// console.log(getCount("aaeeiioouu"))

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

// function solution(number){
//   let numArray = []
//   if(number<=0){
//     return 0
//   }else {
//   for(let i=0; i<number; i++){
//     if(i % 3===0 || i % 5===0){
//       numArray.push(i)
//     }
//   }
//   }
//   return numArray.reduce((x,y) => x+y)
// }

// console.log(solution(10))
// console.log(solution(-10))

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"

// function spinWords(string){
//     let stringArray = string.split(" ")
//     for(let i=0; i<stringArray.length; i++){
//       if(stringArray[i].length>=5){ 
//         stringArray[i] = stringArray[i].split("").reverse().join("")
//                                }
//     }
    
//     return stringArray.join(" ")
//   }
  
//   console.log(spinWords("Hey fellow warriors"))

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

// function sumTwoSmallestNumbers(numbers) {  
//     // let sum = 0
//     // let orderedArray = numbers.sort((a,b)=>a-b)
//     // sum = orderedArray[0] + orderedArray[1]
//     // return sum
//     return numbers.sort((a,b)=>a-b)[0] + numbers.sort((a,b)=>a-b)[1]
//   }

//   console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))

// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

// function rowSumOddNumbers(n) {
//     //create array to put numbers into
//     let oddNumArray = []
    
//     //put odd numbers into the array based on n
//         //need a number variable based on n that will stop the loop adding odd numbers to the array
//         let numVar = 0
//     for(let i=0; i<=n; i++){
//         numVar += n
//     }

//     for(let i=0; i<=numVar; i++){
//        if(i % 2 !== 0){
//         oddNumArray.push(i)
//        }
//     }
    
//     //shift numbers out of the array based on n and oddNumArray length using a loop
// 	let numShifter = oddNumArray.length - n
//     for(let i=1; i<=numShifter; i++){
//         oddNumArray.shift()
//     }
//     //return the sum of the array
//     return oddNumArray.reduce((x,y)=>x+y)
// }

// function rowSumOddNumbers(n) {
//     let oddNumArray = []
//     let numVarStart = n * (n-1) + 1
//     for(let i=0; i<n; i++){
//         oddNumArray.push(numVarStart + 2*i)
//     }
//     return oddNumArray.reduce((x,y)=>x+y)
// }

// console.log(rowSumOddNumbers(1))
// console.log(rowSumOddNumbers(2))
// console.log(rowSumOddNumbers(3))
// console.log(rowSumOddNumbers(4))
// console.log(rowSumOddNumbers(5))
// console.log(rowSumOddNumbers(42))
// console.log(rowSumOddNumbers(212))

// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.

// const binaryArrayToNumber = arr => {
//     return parseInt(arr.toString().replaceAll(",",""),2)
//   };

//   console.log(binaryArrayToNumber([0,0,0,1]))
//   console.log(binaryArrayToNumber([0,0,1,0]))
//   console.log(binaryArrayToNumber([1,1,1,1]))
//   console.log(binaryArrayToNumber([0,1,1,0]))

// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

// For example(Input --> Output):

// 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  1 --> [1]

// function monkeyCount(n) {
//     let monkeyArray = []
//     for(let i=1; i<=n; i++){
//         monkeyArray.push(i)
//     }
//     return monkeyArray
//     }

//     console.log(monkeyCount(5))
//     console.log(monkeyCount(3))
//     console.log(monkeyCount(20))

// Your task is to find the first element of an array that is not consecutive.

// By not consecutive we mean not exactly 1 larger than the previous element of the array.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

// If the whole array is consecutive then return null2.

// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

// function firstNonConsecutive(arr){
//     for(let i=1; i<arr.length; i++){
//         if(arr[i]-arr[i-1]!==1){
//             return arr[i]
//         }
//     }
//     return null
// }

// console.log(firstNonConsecutive([1,2,3,4,6,7,8]))
// console.log(firstNonConsecutive([1,2,3,4]))

// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// "I love you"
// "a little"
// "a lot"
// "passionately"
// "madly"
// "not at all"
// If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.

// function howMuchILoveYou(nbPetals) {
//     let whichOne = ["I love you","a little","a lot","passionately","madly","not at all"]

//     let indexOfWhichOne = (nbPetals - 1)%whichOne.length

//     return whichOne[indexOfWhichOne]
// }

// console.log(howMuchILoveYou(7))
// console.log(howMuchILoveYou(3))
// console.log(howMuchILoveYou(6))
// console.log(howMuchILoveYou(1))

// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

function twoSort(s) {
    let squorted = s.sort()
    let firstWord = squorted.shift()
    let divideWord = firstWord.split('')
    let lastChar = divideWord[divideWord.length-1]
    let addStars = divideWord.map(x => x+"***")
    addStars.pop()
    addStars.push(lastChar)
    let finalFight = addStars.join("")
    return finalFight
}

//from codewars... yea this is better lol
// function twoSort(s) {
//     return s.sort()[0].split('').join('***');
//   }

console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]))