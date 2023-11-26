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

// function twoSort(s) {
//     let squorted = s.sort()
//     let firstWord = squorted.shift()
//     let divideWord = firstWord.split('')
//     let lastChar = divideWord[divideWord.length-1]
//     let addStars = divideWord.map(x => x+"***")
//     addStars.pop()
//     addStars.push(lastChar)
//     let finalFight = addStars.join("")
//     return finalFight
// }

//from codewars... yea this is better lol
// function twoSort(s) {
//     return s.sort()[0].split('').join('***');
//   }

// console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]))

// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

//My answer
// function findMultiples(integer, limit) {
//     let multiArr = []
//     let staticInt = integer
//     for(let i=0; i<=limit; i++){
//        if(integer<=limit){ multiArr.push(integer)
//         integer+=staticInt
//        }
//     }
//     return multiArr
//   }

//Best answer from codewars
// function findMultiples(int,limit){
//     let result = []
    
//     for (let i = int; i<=limit ; i+=int)
//       result.push(i)
      
//     return result
//   }

//   console.log(findMultiples(5, 25))
//   console.log(findMultiples(5, 10))
//   console.log(findMultiples(11, 415))

  // Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

// Example(Input1, Input2 --> Output)
// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

// function divisibleBy(numbers, divisor){
//   let divisorArray = []
//   for(let i=0; i<numbers.length; i++){
//     if(numbers[i] % divisor === 0){
//       divisorArray.push(numbers[i])
//     }
//   }
//   return divisorArray
// }

// console.log(divisibleBy([1,2,3,4,5,6], 2))

// Best solution from Codewars
// function divisibleBy(numbers, divisor) {
//   return numbers.filter(n => n % divisor === 0)
// }

// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:

//   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// For example, if this array were passed as an argument:

//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// Your function would return the following array:

// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.

// function gooseFilter (birds) {
//     var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    
//     // return an array containing all of the strings in the input array except those that match strings in geese
//   let filteredBirds = birds.filter((bird) => !geese.includes(bird))
//     return filteredBirds
//   };
  
//   console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]))

// You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

// Examples (input -> output)
// * [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]

// function mergeArrays(arr1, arr2) {
//     let combinedArray = arr1.concat(arr2)
//     let oneAndOnly = Array.from(new Set(combinedArray))
//     oneAndOnly.sort((a,b) => a-b)
//     return oneAndOnly
// }

// console.log(mergeArrays([1,2,3,4], [5,6,7,8]))
// console.log(mergeArrays([1,3,5,7,9], [10,8,6,4,2]))

// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1
// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

// Note: there will always be exactly one wolf in the array.

// Examples
// Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
// Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

// Input: ["sheep", "sheep", "wolf"]
// Output: "Pls go away and stop eating my sheep"

// function warnTheSheep(queue) {
//     let reversedQueue = queue.reverse()
//     for(let i=0; i<reversedQueue.length; i++){
//         if(reversedQueue[i]==="wolf" && i===0){
//             return "Pls go away and stop eating my sheep"
//         }else if(reversedQueue[i]==="wolf"){
//             return `Oi! Sheep number ${i}! You are about to be eaten by a wolf!`
//         }
//     }
// }

// console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]))
// console.log(warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]))
// console.log(warnTheSheep(["wolf"]))

// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

// function well(x){
//     let goods = [0]
//     for(let i=0; i<x.length; i++){
//       if(x[i]==="good"){
//         goods++
//       }
//     }
//     if(1<=goods && goods<=2){
//       return "Publish!"
//     }else if(goods>2){
//       return "I smell a series!"
//     }else {
//       return "Fail!"
//     }
//   }
//   console.log(well(['bad', 'bad', 'bad']))
//   console.log(well(['good', 'bad', 'bad', 'bad', 'bad']))
//   console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']))

// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

// Examples:

// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]

// function distinct(a) {
//     return Array.from(new Set(a));
//   }

//Best answer from codewars using spread operator

// function distinct(a){
//     return [...new Set(a)]
// }

//   console.log(distinct([1]))
//   console.log(distinct([1,2]))
//   console.log(distinct([1,1,2]))

// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// Example(Input --> Output)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.

// function addLength(str) {
//     return str.split(" ").map((x) => x+" "+x.length)
//     }

//     console.log(addLength("apple ban"))
//     console.log(addLength("you will win"))

    // Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

// [68, -1, 1, -7, 10, 10] => [-1, 10]

// [-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]

// function multipleOfIndex(array) {
//   if(array[0]===0){
//     let zeroArr = [0]
//     let zeroThenSome = []
//     zeroThenSome = array.filter((x,y) => x % y===0)
//     return zeroArr.concat(zeroThenSome)
    
//   }
//   return array.filter((x,y) => x % y===0)
// }

//Other codewars ways to do this
// let multipleOfIndex = a => a.filter((n, i) => n % i === 0);

// function multipleOfIndex(array) {
//   return array.filter((x,i) => x == 0 || x % i === 0)
// }

// console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]))
// console.log(multipleOfIndex([0,2,3,6,9]))

// Find Mean
// Find the mean (average) of a list of numbers in an array.

// Information
// To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

// For an example list of 1, 3, 5, 7

// 1. Add all of the numbers

// 1+3+5+7 = 16
// 2. Divide by the number of values in the list. In this example there are 4 numbers in the list.

// 16/4 = 4
// 3. The mean (or average) of this list is 4

// var findAverage = function (nums) {
//   return nums.reduce((a,b) => a+b)/nums.length
// }

// console.log(findAverage([1]))
// console.log(findAverage([1,3,5,7]))

// *** No Loops Allowed ***

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value, without using a loop.

// Array can contain numbers or strings. x can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.

// function check(a,x){
//   return a.includes(x) ? true : false
// };

// console.log(check([80, 117, 115, 104, 45, 85, 112, 115], 45))
// console.log(check(['what', 'a', 'great', 'kata'], 'kat'))

// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

// function sumOfDifferences(arr) {
//     let sum = 0
//     if(arr.length<=1){
//       return 0
//     }else if(arr.length===2){
//       let descendingArr = arr.sort((x,y) => x-y).reverse()
//       return (descendingArr[0]-descendingArr[1]) 
//     }else {
//       let descendingArr = arr.sort((x,y) => x-y).reverse()
//         for(let i=0; i<descendingArr.length - 1; i++){
//             sum += descendingArr[i] - descendingArr[i+1]
//         }
//         return sum
//     }
//   }
  
//   console.log(sumOfDifferences([1, 2, 10]))
//   console.log(sumOfDifferences([-5,2,-7,-6,-3,1,-5,6,-6,-9,1,-8]))
//   console.log(sumOfDifferences([-17,17]))
//   console.log(sumOfDifferences([]))

// Input: Array of elements

// ["h","o","l","a"]

// Output: String with comma delimited elements of the array in th same order.

// "h,o,l,a"

// function printArray(array){
//     return array.toString()
//   }

//   console.log(printArray([2,4,5,2]))

// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

// Examples
// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"

// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL

// function array(string) {
//     let newArr = []
//     newArr = string.split(",")
//     if(newArr.length<3){
//         return null
//     }else {
//         newArr.pop()
//         newArr.shift()
//         return newArr.join(" ")
//     }
//   }

//   console.log(array(''))
//   console.log(array('1'))
//   console.log(array('A1,B2'))
//   console.log(array('1,2,3'))
//   console.log(array('1,2,3,4'))

// Suzuki is a monk who climbs a large staircase to the monastery as part of a ritual. Some days he climbs more stairs than others depending on the number of students he must train in the morning. He is curious how many stairs might be climbed over the next 20 years and has spent a year marking down his daily progress.

// The sum of all the stairs logged in a year will be used for estimating the number he might climb in 20.

// 20_year_estimate = one_year_total * 20

// You will receive the following data structure representing the stairs Suzuki logged in a year. You will have all data for the entire year so regardless of how it is logged the problem should be simple to solve.

// stairs = [sunday,monday,tuesday,wednesday,thursday,friday,saturday]
// Make sure your solution takes into account all of the nesting within the stairs array.

// Each weekday in the stairs array is an array.

// sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274, 7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825]
// Your function should return the 20 year estimate of the stairs climbed using the formula above.

// function stairsIn20(s){
//     let sum = 0
//     for(let i=0; i<s.length; i++){
//         let sumEachDay = s[i].reduce((a,b) => a+b)
//         sum += sumEachDay
//     }
//     return sum*20
//   }
//   const sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274, 7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 
//     5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 
//     6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825],
//     monday = [9175, 7883, 7596, 8635, 9274, 9675, 5603, 6863, 6442, 9500, 7468, 9719,
//         6648, 8180, 7944, 5190, 6209, 7175, 5984, 9737, 5548, 6803, 9254, 5932, 7360, 9221, 
//         5702, 5252, 7041, 7287, 5185, 9139, 7187, 8855, 9310, 9105, 9769, 9679, 7842,
//         7466, 7321, 6785, 8770, 8108, 7985, 5186, 9021, 9098, 6099, 5828, 7217, 9387],
// tuesday = [8646, 6945, 6364, 9563, 5627, 5068, 9157, 9439, 5681, 8674, 6379, 8292,
//          7552, 5370, 7579, 9851, 8520, 5881, 7138, 7890, 6016, 5630, 5985, 9758, 8415, 7313,
//          7761, 9853, 7937, 9268, 7888, 6589, 9366, 9867, 5093, 6684, 8793, 8116, 8493, 
//          5265, 5815, 7191, 9515, 7825, 9508, 6878, 7180, 8756, 5717, 7555, 9447, 7703],
// wednesday = [6353, 9605, 5464, 9752, 9915, 7446, 9419, 6520, 7438, 6512, 7102, 
//            5047, 6601, 8303, 9118, 5093, 8463, 7116, 7378, 9738, 9998, 7125, 6445, 6031, 8710,
//            5182, 9142, 9415, 9710, 7342, 9425, 7927, 9030, 7742, 8394, 9652, 5783, 7698, 
//            9492, 6973, 6531, 7698, 8994, 8058, 6406, 5738, 7500, 8357, 7378, 9598, 5405, 9493],
// thursday = [6149, 6439, 9899, 5897, 8589, 7627, 6348, 9625, 9490, 5502, 5723, 8197,
//           9866, 6609, 6308, 7163, 9726, 7222, 7549, 6203, 5876, 8836, 6442, 6752, 8695, 8402,
//           9638, 9925, 5508, 8636, 5226, 9941, 8936, 5047, 6445, 8063, 6083, 7383, 7548, 5066, 
//           7107, 6911, 9302, 5202, 7487, 5593, 8620, 8858, 5360, 6638, 8012, 8701],
// friday = [5000, 5642, 9143, 7731, 8477, 8000, 7411, 8813, 8288, 5637, 6244, 6589, 6362, 
//        6200, 6781, 8371, 7082, 5348, 8842, 9513, 5896, 6628, 8164, 8473, 5663, 9501, 
//        9177, 8384, 8229, 8781, 9160, 6955, 9407, 7443, 8934, 8072, 8942, 6859, 5617,
//        5078, 8910, 6732, 9848, 8951, 9407, 6699, 9842, 7455, 8720, 5725, 6960, 5127],
// saturday = [5448, 8041, 6573, 8104, 6208, 5912, 7927, 8909, 7000, 5059, 6412, 6354, 8943, 
//           5460, 9979, 5379, 8501, 6831, 7022, 7575, 5828, 5354, 5115, 9625, 7795, 7003, 
//           5524, 9870, 6591, 8616, 5163, 6656, 8150, 8826, 6875, 5242, 9585, 9649, 9838, 
//           7150, 6567, 8524, 7613, 7809, 5562, 7799, 7179, 5184, 7960, 9455, 5633, 9085]


//   let stairs = [sunday,monday,tuesday,wednesday,thursday,friday,saturday]
//   console.log(stairsIn20(stairs))

// Create a function that returns the CSV representation of a two-dimensional numeric array.

// Example:

// input:
//    [[ 0, 1, 2, 3, 4 ],
//     [ 10,11,12,13,14 ],
//     [ 20,21,22,23,24 ],
//     [ 30,31,32,33,34 ]] 
    
// output:
//      '0,1,2,3,4\n'
//     +'10,11,12,13,14\n'
//     +'20,21,22,23,24\n'
//     +'30,31,32,33,34'
// Array's length > 2.

// function toCsvText(array) {
//     return array.join('\n')
// }

//  console.log(toCsvText([
//     [ 0, 1, 2, 3, 45 ],
//     [ 10,11,12,13,14 ],
//     [ 20,21,22,23,24 ],
//     [ 30,31,32,33,34 ]
//    ]))

// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.
  
// function isVow(a) {
//     let result = [];
//     for (let i = 0; i < a.length; i++) {
//       if (a[i] === 97 || a[i] === 101 || a[i] === 105 || a[i] === 111 || a[i] === 117) {
//         result.push(String.fromCharCode(a[i]));
//       } else {
//         result.push(a[i]);
//       }
//     }
//     return result;
//   }
  
//   console.log(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]))
//   console.log(isVow([101,121,110,113,113,103,121,121,101,107,103]))

//   Arrow style Functions
// Come here to practice the Arrow style functions Not much else to say good luck!
// Details
// You will be given an array of numbers which can be used using the String.fromCharCode() (JS), Tools.FromCharCode() (C#) method to convert the number to a character. It is recommended to map over the array of numbers and convert each number to the corresponding ascii character.

// Examples
// These are example of how to convert a number to an ascii Character:
// Javascript => String.fromCharCode(97) // a

// var ArrowFunc = function(arr) {
//     return arr.map((x) => String.fromCharCode(x)).join('')
//   }

//   console.log(ArrowFunc([70,85,83,32,82,79,72,32,68,65,72]))

// Task
// Create a method all which takes two params:

// a sequence
// a function (function pointer in C)
// and returns true if the function in the params returns true for every element in the sequence. Otherwise, it should return false. If the sequence is empty, it should return true, since technically nothing failed the test.

// Example
// all((1, 2, 3, 4, 5), greater_than_9) -> false
// all((1, 2, 3, 4, 5), less_than_9)    -> True

// function all(arr,fun){
//     // loop through the array to see if every element is true for the function
//     let arrSum = 0
//     for(let i=0; i<arr.length; i++){
//         if(fun(arr[i])){
//             arrSum++
//     }
//     //if every element is true, return true, otherwise return false
//   }
//   return arrSum===arr.length
// }
//   console.log(all([1,2,3,4,5], function(v){return v<9}))
//   console.log(all([1,2,3,4,5], function(v){return v>9}))

// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

// function correct(string){
//     let newStr = string.split("")
//     for(let i=0; i<newStr.length; i++){
//         newStr[i] = newStr[i].replaceAll("5","S")
//         newStr[i] = newStr[i].replaceAll("0","O")
//         newStr[i] = newStr[i].replaceAll("1","I")
//     }
//     return newStr.join("")
// }

// console.log(correct("L0ND0N"))
// console.log(correct("DUBL1N"))
// console.log(correct("51NGAP0RE"))

// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

// function high(x){
//     //group words by spaces
//     let wordArray = x.split(" ")
//     let indivWords = x.split(" ")
//     //conversion for letter to number
//         //divide each word into separate number values for each letter
//     for(let i=0; i<indivWords.length; i++){
//         //Need a function that divides each word in the array by letter
//         indivWords[i] = Array.from(indivWords[i])
//     }
//     //assign a value to each letter, and a total of each word
//     for(let i=0; i<indivWords.length; i++){
//         for(let j=0; j<indivWords[i].length; j++){
//             indivWords[i][j] = indivWords[i][j].charCodeAt(indivWords[i][j])-96
//         }
//         indivWords[i]=indivWords[i].reduce((x,y)=> x+y)
//     }
//     //return the word that has the same index as the highest value in the indivWords array
//     let wordIndex = indivWords.indexOf(Math.max(...indivWords))
//     return wordArray[wordIndex]
// }

// console.log(high('man i need a taxi up to ubud'))
// console.log(high('what time are we climbing up the volcano'))

// Introduction
// The wave (known as the Mexican wave in the English-speaking world outside North America) is an example of metachronal rhythm achieved in a packed stadium when successive groups of spectators briefly stand, yell, and raise their arms. Immediately upon stretching to full height, the spectator returns to the usual seated position.

// The result is a wave of standing spectators that travels through the crowd, even though individual spectators never move away from their seats. In many large arenas the crowd is seated in a contiguous circuit all the way around the sport field, and so the wave is able to travel continuously around the arena; in discontiguous seating arrangements, the wave can instead reflect back and forth through the crowd. When the gap in seating is narrow, the wave can sometimes pass through it. Usually only one wave crest will be present at any given time in an arena, although simultaneous, counter-rotating waves have been produced. (Source Wikipedia)
// Task
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
// Rules
//  1.  The input string will always be lower case but maybe empty.

//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

// function wave(str){
//     let waveArray = []
//     for(let i=0; i<str.length; i++){
//         if(str[i] !== " "){
//             waveArray.push(str.slice(0,i)+str[i].toUpperCase()+str.slice(i+1))
//         }
//     }
//     return waveArray
//   }

//   console.log(wave("hello"))

// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]

// var capitals = function (word) {
// 	let capArray = []
//     for(let i=0; i<word.length; i++){
//         if(word[i]===word[i].toUpperCase()){
//             capArray.push(i)
//         }
//     }
//     return capArray
// };

// console.log(capitals("CodEWaRs"))

// You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.

// Your task is to return the number of JavaScript developers coming from Europe.

// For example, given the following list:

// var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
//   { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
//   { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
//   { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
// ];
// your function should return number 1.

// If, there are no JavaScript developers from Europe then your function should return 0.

// Notes:

// The format of the strings will always be Europe and JavaScript.
// All data will always be valid and uniform as in the example above.

// function countDevelopers(list) {
//     let count = 0
//     for(let i=0; i<list.length; i++){
//         if(list[i].continent==="Europe" && list[i].language==="JavaScript"){
//             count++
//         }
//     }
//     return count
//   }

//   console.log(countDevelopers([
//       { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
//       { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
//       { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
//       { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
//     ]))

// Oh no!
// Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

// You need to cast the whole array to the correct type.

// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

// ie:["1", "2", "3"] to [1, 2, 3]

// Note that you can receive floats as well.

// function toNumberArray(stringarray){
//     return stringarray.map((x)=>+x)
// }

// console.log(toNumberArray(["1.1","2.2","3.3"]))

// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

// function divCon(x){
//     let nonStrInt = 0
//     let strInt = 0
//     for(let i=0; i<x.length; i++){
//         if(x[i]===x[i].toString()){
//             strInt += +x[i]
//         }else {
//             nonStrInt += x[i]
//         }
//     }
//     return nonStrInt-strInt
// }

// console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]))

// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return:

// true if at least one Ruby developer has signed up; or
// false if there will be no Ruby developers.
// For example, given the following input array:

// var list1 = [
//   { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
//   { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
//   { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
// ];
// your function should return true.

// Notes:

// The input array will always be valid and formatted as in the example above.

// function isRubyComing(list) {
//   return list.some(developer=>developer.language==='Ruby')
// }

// console.log(isRubyComing([
//   { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
//   { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
// ]))

// You will be given an array of objects (associative arrays in PHP, tables in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return an array where each object will have a new property 'greeting' with the following string value:

// Hi < firstName here >, what do you like the most about < language here >?

// For example, given the following input array:

// var list1 = [
//   { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
//   { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
// ];
// your function should return the following array:

// [
//   { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
//     greeting: 'Hi Sofia, what do you like the most about Java?'
//   },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
//     greeting: 'Hi Lukas, what do you like the most about Python?'
//   },
//   { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
//     greeting: 'Hi Madison, what do you like the most about Ruby?'
//   } 
// ];
// Notes:

// The order of the properties in the objects does not matter (except in COBOL).
// The input array will always be valid and formatted as in the example above.

// function greetDevelopers(list) {
//   return list.map((x)=>{
//     return {
//       ...x, greeting: `Hi ${x.firstName}, what do you like the most about ${x.language}?`
//     }
//   }
//   )
// }

// console.log(greetDevelopers([
//       {
//         firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
//       },
//       {
//         firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
//       },
//       {
//         firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
//       },
//     ]))

// Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
// Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

// total1 = 656667
//               ^
// total2 = 656661
//               ^
// Then return the difference between the sum of the digits in total1 and total2:

//   (6 + 5 + 6 + 6 + 6 + 7)
// - (6 + 5 + 6 + 6 + 6 + 1)
// -------------------------
//                        6

// function calc(x){
//   let total1 = []
//   for(let i=0; i<x.length; i++){
//     total1.push(x.charCodeAt(i))
//   }
//   total1 = total1.join("")
//   let total2 = total1.replaceAll(7,1)
//   total1 = total1.split("")
//   total2 = total2.split("")
//   let sum1 = total1.map((x)=>Number(x)).reduce((a,b)=>a+b)
//   let sum2 = total2.map((x)=>Number(x)).reduce((a,b)=>a+b)
//   return sum1 - sum2
// }

// console.log(calc("abcdef"))

// Modify the spacify function so that it returns the given string with spaces inserted between each character.

// spacify("hello world") // returns "h e l l o   w o r l d"

// function spacify(str) {
//   let strArr = str.split("")
//   for(let i=0; i<strArr.length-1; i++){
//     strArr[i]+=" "
//   }
//   return strArr.join("")
// }

// console.log(spacify('hello world'))

// Definition
// A Tidy number is a number whose digits are in non-decreasing order.

// Task
// Given a number, Find if it is Tidy or not .

// function tidyNumber(n){
//     let check = 0
//     let numArr = n.toString().split("").map((x)=>+x)
//     for(let i=0; i<numArr.length; i++){
//         if(numArr[i]>numArr[i+1]){
//             return false
//         }
//     }
//     return true
//   }
  
//   console.log(tidyNumber(12))
//   console.log(tidyNumber(102))
//   console.log(tidyNumber(9672))

// Once upon a time, on a way through the old wild mountainous west,…
// … a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.

// Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, with dreadful weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

// How I crossed a mountainous desert the smart way.
// The directions given to the man are, for example, the following (depending on the language):

// ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
// or
// { "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
// or
// [North, South, South, East, West, North, West]
// You can immediately see that going "NORTH" and immediately "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:

// ["WEST"]
// or
// { "WEST" }
// or
// [West]
// Other examples:
// In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away.

// The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is [] (nil in Clojure).

// In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].

// Task
// Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

// function dirReduc(arr){
//     let newArr = []
//     let norSouSum = 0
//     let eastWestSum = 0
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]==="NORTH"){
//             norSouSum++
//         }else if(arr[i]==="SOUTH"){
//             norSouSum--
//         }else if(arr[i]==="EAST"){
//             eastWestSum++
//         }else if(arr[i]==="WEST"){
//             eastWestSum--
//         }
//     }
//     if(eastWestSum>0){
//         newArr.push("EAST")
//     }else if(eastWestSum<0){
//         newArr.push("WEST")
//     }else if(norSouSum<0){
//         newArr.push("SOUTH")
//     }else if(norSouSum>0){
//         newArr.push("NORTH")
//     }
//     return newArr
//   }

// function dirReduc(arr){
//     for(let c=0; c<arr.length; c++){
//     if(arr[c]==="NORTH" && arr[c+1]==="SOUTH" || arr[c]==="SOUTH" && arr[c+1]==="NORTH" ){
//         delete arr[c] && arr[c+1]
//     }
// }
//     return arr
// }

// function dirReduc(arr){
//   const opposites = {
//     NORTH: 'SOUTH',
//     SOUTH: 'NORTH',
//     EAST: 'WEST',
//     WEST: 'EAST'
//   }
//   const finalArray = []
//   for(const direction of arr){
//     if(finalArray.length > 0 && finalArray[finalArray.length-1]===opposites[direction]){
//         finalArray.pop()
//     }else {
//         finalArray.push(direction)
//     }
//   }
//   return finalArray
// }

//   console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]))
//   console.log(dirReduc(["NORTH","WEST","SOUTH","EAST"]))

// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

// function last(x){
//     return x.split(" ")
//             .map((word) => ({ word, lastChar: word.slice(-1) })) // Create an array of objects with words and their last characters
//             .sort((a, b) => a.lastChar.localeCompare(b.lastChar))   // Sort by last character
//             .map(({ word }) => word);                             // Extract the sorted words
//   }
//   console.log(last('man i need a taxi up to ubud'))
//   console.log(last('what time are we climbing up the volcano'))

// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//         return +args.sort((a,b)=>b-a).slice(-1)
//     }

//   }

//   console.log(new SmallestIntegerFinder().findSmallestInt([78,56,232,12,8]))

// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

// function litres(time) {
//     return Math.floor(time*.5)
//   }

//   console.log(litres(2))
//   console.log(litres(1.4))
//   console.log(litres(12.3))

// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

// function basicOp(operation, value1, value2){
//     return eval(value1+operation+value2)
// }


// console.log(basicOp('+', 4, 7))
// console.log(basicOp('-', 15, 18))
// console.log(basicOp('*', 5, 5))
// console.log(basicOp('/', 49, 7))

// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

// function century(year) {
//     return Math.ceil(year*.01)
//   }

//   console.log(century(1705))
//   console.log(century(1900))
//   console.log(century(1601))
//   console.log(century(2000))
//   console.log(century(89))

// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

// function past(h, m, s){
//     return h*3600000+m*60000+s*1000
//   }

//   console.log(past(0,1,1))
//   console.log(past(1,1,1))
//   console.log(past(0,0,0))
//   console.log(past(1,0,0))

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// function simpleMultiplication(number) {
//     return number % 2 === 0 ? number*8 : number*9
// }
// console.log(simpleMultiplication(2))
// console.log(simpleMultiplication(1))
// console.log(simpleMultiplication(8))
// console.log(simpleMultiplication(4))
// console.log(simpleMultiplication(5))

// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

// function bmi(weight, height) {
//     if(weight/height**2<=18.5){
//         return "Underweight"
//     }else if(weight/height**2<=25.0){
//         return "Normal"
//     }else if(weight/height**2<=30.0){
//         return "Overweight"
//     }else{
//         return "Obese"
//     }
//   }

//   console.log(bmi(80, 1.80))

// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

// Examples (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5
// Notes
// You may consider that there will not be any empty arrays/vectors.

// var min = function(list){
    
//     return Math.min(...list);
// }

// var max = function(list){
    
//     return Math.max(...list);
// }

// console.log(min([4,6,2,1,9,63,-134,566]))
// console.log(max([4,6,2,1,9,63,-134,566]))

// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

// Considering these factors, write a function that tells you if it is possible to get to the pump or not.

// Function should return true if it is possible and false if not.

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   return distanceToPump/fuelLeft<=mpg
// };

// console.log(zeroFuel(50,25,2))
// console.log(zeroFuel(100,50,1))

// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

// const reverseSeq = n => {
//     let newArr = []
//     for(let i=n; i>=1; i--){
//       newArr.push(i)
//     }
//     return newArr
//   };
  
//   console.log(reverseSeq(5))

// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

// Constraint:

// 1 <= month <= 12

// const quarterOf = (month) => {
//     if(month<=3){
//         return 1
//     }else if(month<=6){
//         return 2
//     }else if(month<=9){
//         return 3
//     }else {
//         return 4
//     }
//   }

//   console.log(quarterOf(3))
//   console.log(quarterOf(8))
//   console.log(quarterOf(11))

// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).

// function rentalCarCost(d) {
//     let total = d*40
//     if(d>=7){
//         return total-50
//     }else if(d>=3){
//         return total-20
//     }else {
//         return total
//     }
//   }

//   console.log(rentalCarCost(2))
//   console.log(rentalCarCost(6))
//   console.log(rentalCarCost(10))

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// function findOdd(A) {
//     let counts = {}
//     for(let num of A){
//         counts[num] = counts[num] ? counts[num] + 1 : 1
//     }
//     for(let key in counts){
//         if(counts.hasOwnProperty(key)){
//             if(counts[key]%2!==0){
//                 return +key
//             }
//         }
//     }
// }

//   console.log(findOdd([7]))
//   console.log(findOdd([0]))
//   console.log(findOdd([1,1,2]))
//   console.log(findOdd([0,1,0,1,0]))

// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

// const rps = (p1, p2) => {
//     if(p1===p2){
//         return "Draw!"
//     }else if(p1==="scissors" && p2==="paper" || p1==="paper" && p2==="rock" || p1==="rock" && p2==="scissors"){
//         return "Player 1 won!"
//     }else {
//         return "Player 2 won!"
//     }
// };

// console.log(rps('rock', 'scissors'))
// console.log(rps('scissors', 'paper'))
// console.log(rps('scissors', 'rock'))
// console.log(rps('rock', 'rock'))

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

// function likes(names) {
//     if(names.length===0){
//         return "no one likes this"
//     }else if(names.length===1){
//         return `${names} likes this`
//     }else if(names.length===2){
//         return `${names[0]} and ${names[1]} like this`
//     }else if(names.length===3){
//         return `${names[0]}, ${names[1]} and ${names[2]} like this`
//     }else {
//         return `${names[0]}, ${names[1]} and ${names.length-2} others like this`
//     }
//   }

//   console.log(likes([]))
//   console.log(likes(['Peter']))
//   console.log(likes(['Jacob','Alex']))
//   console.log(likes(['Max','John','Mark']))
//   console.log(likes(['Alex','Jacob','Mark','Max']))

// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

// function otherAngle(a, b) {
//     return 180-a-b
//   }

//   console.log(otherAngle(30,60))

// A square of squares
// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false

// var isSquare = function(n){
//     return Number.isInteger(Math.sqrt(n))
//   }

//   console.log(isSquare(-1))
//   console.log(isSquare(0))
//   console.log(isSquare(3))
//   console.log(isSquare(4))
//   console.log(isSquare(25))
//   console.log(isSquare(26))

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// function arrayDiff(a, b) {
//   if(b.length<1){
//         return a
//       }else {
//       for(let i=0; i<b.length; i++){
//         for(let j=0; j<a.length; j++){
//             if(b[i]===a[j]){
//                 a.splice(j,1)
//                 j--
//             }
//         }
//       }
//       return a
//     }
// }

// console.log(arrayDiff([1,2], [1]))
// console.log(arrayDiff([1,2,2], [1]))
// console.log(arrayDiff([1,2,2], [2]))
// console.log(arrayDiff([1,2,2], []))
// console.log(arrayDiff([], [1,2]))
// console.log(arrayDiff([1,2,3], [1,2]))

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

// function descendingOrder(n){
//     return +n.toString().split("").sort().reverse().join("")
//   }
//   console.log(descendingOrder(42145))
//   console.log(descendingOrder(145263))
//   console.log(descendingOrder(123456789))

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

// function getMiddle(s){
//   if(s.length % 2===1){
//     return s.charAt(s.length/2)
//   }else{
//     let characterBefore = s.length/2-1
//     return `${s.charAt(characterBefore)}${s.charAt(s.length/2)}`
//   }
// }

// console.log(getMiddle("test"))
// console.log(getMiddle("testing"))
// console.log(getMiddle("middle"))
// console.log(getMiddle("A"))

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

// function filter_list(l){
//   return l.filter(x => x===Number(x))
// }

// console.log(filter_list([1,2,'a','b']))
// console.log(filter_list([1,'a','b',0,15]))
// console.log(filter_list([1,2,'aasf','1','123',123]))

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

// function isIsogram(str){
//     const newStr = str.toLowerCase()
//     const noRepeat = Array.from(new Set (str.toLowerCase().split("")))
//     return newStr === noRepeat.join("")
//   }
  
//   console.log(isIsogram("Dermatoglyphics"))
//   console.log(isIsogram("moOse"))
//   console.log(isIsogram("aba"))

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// function XO(str) {
//     let newStr = str.toLowerCase()
//     let xCount = 0
//     let oCount = 0
//     for(let i=0; i<newStr.length; i++){
//         if(newStr[i]==="o"){
//             oCount++
//         }else if(newStr[i]==="x"){
//             xCount++
//         }
//     }
//     return xCount === oCount
// }

// console.log(XO('xo'))
// console.log(XO('"xxOo"'))
// console.log(XO("xxxoo"))

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// function findShort(s){
//   return s.split(" ").map((x) => x.length).sort((a,b) => a-b)[0]
// }

// console.log(findShort("bitcoin take over the world maybe who knows perhaps"))

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// function accum(s) {
//     let dividedStr = s.split("").map(x => x.toUpperCase())
//     for(let i=0; i<dividedStr.length; i++){
//         dividedStr[i]+=((dividedStr[i].toLowerCase())).repeat(i)
//     }
//     return dividedStr.join("-")
// }

// console.log(accum("ZpglnRxqenU"))

// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

// function duplicateCount(text){
//     let count = 0
//     let newArr = text.toLowerCase().split("")
//     let seen = []
//     for(let i=0; i<newArr.length; i++){
//       if(seen.includes(newArr[i])){
//         continue
//       }
//       if(newArr.includes(newArr[i],i+1)){
//         count++
//         seen.push(newArr[i])
//         }
//       }
//     return count
//     }
  
//   console.log(duplicateCount(""))
//   console.log(duplicateCount("abcde"))
//   console.log(duplicateCount("aabbcde"))
//   console.log(duplicateCount("aA11"))
//   console.log(duplicateCount("Indivisibilities"))
//   console.log(duplicateCount("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"))

// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

// String.prototype.toJadenCase = function (sent) {
//     for(let i=0; i<sent.length; i++){
//         if(sent[i]===" "){
//             sent[i+1].toUpperCase()
//         }else {
//             continue
//         }
//     }
//     return sent
//   };

String.prototype.toJadenCase = function (){
    // let strArr = this.split("")
    let newArr = []
    //if this[0] is a letter, capitolize it
    if(this[0].toUpperCase()===this[0].toUpperCase()){
        newArr.push(this[0].toUpperCase())
    }
    for(let i=1; i<this.length; i++){
        if(this[i]===" "){
            newArr.push(" " + this[i+1].toUpperCase())
        }else if(this[i-1]===" "){
            continue
        }else {
            newArr.push(this[i].toLowerCase())
        }
    }
    return newArr.join("")
}
console.log("How can mirrors be real if our eyes aren't real".toJadenCase());

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Your function should only return a number, not the explanation about how you get that number.

// function getSum(a, b){
//    let newArr = []
//    let stop = a>=b ? a:b
//    let start = b>a ? a:b
//    let loopStop = stop-start
//    for(let i=start; i<=stop; i++){
//      newArr.push(i)
//    }
//   let sum = newArr.reduce((a,b) => a+b)
//   return sum
// }

// console.log(getSum(1,0))
// console.log(getSum(1,2))
// console.log(getSum(1,1))
// console.log(getSum(-1,2))

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

/**
 * Time complexity O(N^2)
 */
// function duplicateEncode(word){
//     word = word.toLowerCase()
//     let array = []

//     for(let i=0; i<word.length; i++){
//         const letter = word[i];

//         if(word.lastIndexOf(letter) !== word.indexOf(letter)){
//             array.push(")")
//         }else{
//             array.push("(")
//         }
//     }

//     return array.join("")
// }


/**
 * Build a frequency table of the count of letters that appear in the string word.
 */
// function getLetterFrequencies(word) {
//     let freq = {};
//     for(let i=0; i<word.length; i++ ) {
//         const letter = word[i];

//         if ( freq[letter] ) {
//             freq[letter]+=1;
//         }
//         else {
//             freq[letter] = 1;
//         }
//     }
//     return freq;
// }

/**
 * Can we do it faster?
 */
// function duplicateEncode2(word) {
//     word = word.toLowerCase();
//     let array = [];

//     //build freq table
//     let freq = getLetterFrequencies(word);
//     console.log("frequencies of word",word,"is",freq);

//     for (let i=0; i<word.length; i++) {
//         const letter = word[i];

//         freq[letter]===1 ? array.push('(') : array.push(')');
//     }

//     return array.join("");
// }
// duplicateEncode2("din");
// duplicateEncode2("recede");
// duplicateEncode2("Success");

// console.log(duplicateEncode("din"))
// console.log(duplicateEncode("recede"))
// console.log(duplicateEncode("Success"))
// console.log(duplicateEncode("(( @"))

// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

// function alphabetPosition(text) {
//     let splitStr = text.toLowerCase().split("")
//     let numArray = []
    
//     for(let i=0; i<splitStr.length; i++){
        //96 is the charCode for ('a'-1)
//         let aMinusOne = 'a'.charCodeAt()-1;
//         numArray.push(splitStr[i].charCodeAt()-aMinusOne)
//     }
    
//     return numArray.filter(x => x>=1 && x<=26).join(" ")
//   }
  
//   console.log(alphabetPosition("The sunset sets at twelve o' clock."))
//   console.log(alphabetPosition("The narwhal bacons at midnight."))

// 

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

// function shortCircuitExample_Good(a,b,c) {

//     if ( typeof a !== 'string' ) {
//         //a didnt work
//         throw new Error("a wasn't a string")
//     }

//     if ( !b )  {
//         //b didnt work
//         throw new Error("B didnt work?!")
//     }

//     if ( !c ) {
//         //c didnt work
//         throw new Error("C didnt work!!!")
//     }

//     //ok a,b,c all good

// }

// function shortCircuitExample_Bad(a,b,c) {
//     //Bad code
//     if ( a ) {
//         if ( b ) {
//             if ( c ) {
//                 //do stuff with a,b,c
//             }
//             else {
//                 throw new Error("C didnt work!!!")
//             }
//         }
//         else {
//             throw new Error("B didnt work?!")
//         }
//     }
//     else {
//         throw new Error("A didnt work?!")
//     }
// }

/**
 * You live in the city of Cartesia where all roads are laid out in a perfect grid. 
 * You arrived ten minutes too early to an appointment, so you decided to take the 
 * opportunity to go for a short walk. The city provides its citizens with a Walk 
 * Generating App on their phones -- everytime you press the button it sends you an 
 * array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). 
 * 
 * You always walk only a single block for each letter (direction) and you know it takes you 
 * one minute to traverse one city block, so create a function that will return true 
 * if the walk the app gives you will take you exactly ten minutes (you don't want to 
 * be early or late!) and will, of course, return you to your starting point. 
 * Return false otherwise.
 */
// function isValidWalk(walk) {
//     let backToStartNS = 0
//     let backToStartWE = 0
    
//     // short circuiting. 
//     if(walk.length!==10){
//         return false
//     }

//     // if our northSouth position is net zero,
//     // and our eastWest position is net zero, then we got back to where we started.
//     for(let i=0; i<walk.length; i++){
//         if(walk[i]==='n' || walk[i]==='s'){
//             walk[i]==='n' ? backToStartNS++:backToStartNS--
//         }else{
//             walk[i]==='w' ? backToStartWE++:backToStartWE--
//         }
//     }

//     return backToStartNS===0 && backToStartWE===0
//   }

//   console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']))
//   console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']))
//   console.log(isValidWalk(['w']))
//   console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']))
//   console.log(isValidWalk(['n','n','n','n','n','s','s','s','e','e']))

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

/**
 * Takes a number, and returns the digits as a string array
 */
// function numberToDigitsArray(num) {
//     const numAsStr = num.toString();

//     const digitsArr = numAsStr.split("");

//     return digitsArr;
// }


/**
 * 0th - 0
 * 1st - 1
 * 
 */
// let fibLookup = {};
// function fibonacciRecursive(n) {
//     if ( fibLookup[n] ) {
//         return fibLookup[n];
//     }

//     console.log("calling fib recursive:",n);
    //(BASIS CASE) check for basis case to stop recursion
    // if ( n == 0 ) {
    //     return 0;
    // }
    // else if ( n == 1 ) {
    //     return 1;
    // }

    //(RECURSIVE STEP) or we recurse
//     let ans = fibonacciRecursive(n-1) + fibonacciRecursive(n-2);

//     fibLookup[n] = ans;
//     return ans;
// }
// fibonacciRecursive(10);



// function fibonacciIterative(n) {

//     let a=0;
//     let b=1;
//     let c=a+b;
//     let step = 0;

//     for ( step=0; step<n ;step++) {
//         let a_was = a;
//         let b_was = b;

//         a=b
//         b=c        
//         c=a_was+b_was
//     }

//     return a;
// }


/**
 * Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
 * 
 * - Link to where you found it
 * - https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/solutions?filter=all&sort=best_practice&invalids=false 
 * - Example of recursion
 * 
 * @param {*} num - integer number
 * @returns number - "multiplicative persistence"
 */
// function persistence(num) {

//     //check for negatives
//     //check for isNaN
//     //infinity is considered a number
    

//     let arrOfNumString = numberToDigitsArray(num);
//     let count = 0
//     let multiplication = 0

//     function again(x){
//         x = x.toString().split("")
//         multiplication = x.reduce((acc,b) => acc*b)
//         count++
//         if(multiplication.toString().split("").length>1){
//             return again(multiplication)
//         }else{
//             return count
//         }
//     }

//     if(arrOfNumString.length===1){
//         return 0
//     }else{
//         multiplication = arrOfNumString.reduce((acc,b) => acc*b)
//             count++
//         }
//         if(multiplication.toString().split("").length>1){
//             return again(multiplication)
//         }else{
//             return count
//         }
//     }
    
    
/**
 * Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
 * 
 * - Link to where you found it
 * - https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/solutions?filter=all&sort=best_practice&invalids=false 
 * - Example of recursion
 * 
 * @param {*} num - integer number
 * @returns number - "multiplicative persistence"
 */
// function persistence2(num) {
//     let arrOfNumString = numberToDigitsArray(num);
//     let multiplication = 0

    //(BASIS CASE)
    // if(arrOfNumString.length===1){
    //     return 0
    // }

    //(RECURSIVE STEP)
//     multiplication = arrOfNumString.reduce((acc,b) => acc*b)
//     return persistence2(multiplication) + 1;
// }
    // function again(x){
    //     x = x.toString().split("")
    //     multiplication = x.reduce((acc,b) => acc*b)
    //     count++
    //     if(multiplication.toString().split("").length>1){
    //         return again(multiplication)
    //     }else{
    //         return count
    //     }
    // }

    // if(arrOfNumString.length===1){
    //     return 0
    // }else{
    //     multiplication = arrOfNumString.reduce((acc,b) => acc*b)
    //         count++
    //     }
    //     if(multiplication.toString().split("").length>1){
    //         return again(multiplication)
    //     }else{
    //         return count
    //     }
    // }

//  console.log(persistence2(39))
//  console.log(persistence2(4))
//  console.log(persistence2(25))
//  console.log(persistence2(999))

/**
 * Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
 */

// var uniqueInOrder=function(iterable){
//     //Create a new array to be returned
//     let uniqueArray = []

//     //loop to test for character following current character. If the character is the same, remove it from the return, and remove every following character from the return until finding a new character.
//     for(let i=0; i<iterable.length; i++){
//         if(iterable[i]===iterable[i+1]){
//             continue
//         }else{
//             uniqueArray.push(iterable[i])
//         }
//     }
//     return uniqueArray
//   }

//   uniqueInOrder('AAAABBBCCDAABBB')
//   uniqueInOrder('ABBCcAD')
//   uniqueInOrder([1,2,2,3,3])

/**
 * Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
 */

// function friend(friends){
//     //account for undefined since I'm using filter
//     let newArray = friends.filter(x => x !== undefined)

//     //loop through the list and return the items with a length of 4
//     return newArray.filter(x => x.length===4)   
//   }

//   console.log(friend(["Ryan", "Kieran", "Mark"]))
//   console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]))
//   console.log(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]))
//   console.log(friend(["Love", "Your", "Face", "1"]))
//   console.log(friend(["Love", "1234"]))
//   console.log(friend(["Ryan", undefined,"Mark"]))

/**
 * A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
 */
  
// function isPangram(string){
//     //Use includes?
//     //Somehow test for every letter. Can I make a loop that tests for every letter?

//     //Turn string into array of lowercase letters
//     let strArray = string.toLowerCase().split("")
//     //Create a different array of all the lowercase letters using a loop and charCode
//     let allLowercaseArray = []
//     for(let i="a".charCodeAt(); i<="z".charCodeAt(); i++){
//         allLowercaseArray.push(i)
//     }
//     //Test string array against looped charCode array
//         //turn strArray into charCodes
//         for(let i=0; i<strArray.length; i++){
//             strArray[i]=strArray[i].charCodeAt()
//         }
//         //filter array to only letters
//         strArray = strArray.filter(a => a>= 97 && a<=122)

//     return allLowercaseArray.every(b => strArray.includes(b))
//   }

//   console.log(isPangram("The quick brown fox jumps over the lazy dog."))
//   console.log(isPangram("This is not a pangram."))

/**
 * Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).
 */

// function isTriangle(a,b,c){
//    //No side can be greater than the sum of the other two sides
//    //Sort the list
//    let numArr = [a,b,c]
//    numArr = numArr.sort((a,b) => b-a)

//    //check if longest side is greater than sum of the other sides
//    if(numArr[0]<numArr[1]+numArr[2]){
//     return true
//    }else{
//     return false
//    }
// }

// console.log(isTriangle(1,2,2))
// console.log(isTriangle(7,2,2))

/**
 * Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
 */

// function addBinary(a,b) {
//     let sum = a+b
//     if(sum>=0){
//         return sum.toString(2)
//     }else{
//         return '-'+(-sum).toString(2)
//     }
// }

// console.log(addBinary(1,1))
// console.log(addBinary(5,9))
// console.log(addBinary(1,2))

/**
 * Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
 */

// function order(words){
//     if(words===""){
//         return words
//     }else{
//         //turn string into array of words
//         let strArr = words.split(" ")

//         //loop through array and sort based on numbers inside of the words
//         //Create a new array of just the numbers in the words
//         let arrayOfArrays = []
//         let numsOnly = []
//         //first each element of strArr needs its own array
//         for(let i=0; i<strArr.length; i++){
//             arrayOfArrays.push(strArr[i].split(""))
//         }
//         //Create array of just numbers
//         for(let i=0; i<arrayOfArrays.length; i++){
//             numsOnly.push(arrayOfArrays[i].filter(x => Number(x)))
//         }
//         //add numbers from numbers only array to beginning of each item in the string array, sort the array, then shift the numbers off string array and join
//         for(let i=0; i<strArr.length; i++){
//             strArr[i] = `${numsOnly[i][0]}${strArr[i]}`
//         }
//         strArr = strArr.sort()
//         strArr = strArr.map(x => x.substring(1))
//         return strArr.join(" ")
//     }
//   }

//   console.log(order("is2 Thi1s T4est 3a"))
//   console.log(order("4of Fo1r pe6ople g3ood th5e the2"))
//   console.log(order(""))

// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// function longest(s1, s2) {
//   let unique = new Set(s1+s2)
//   let uniqueArr = []
//   unique.forEach(x => uniqueArr.push(x))
//   let finalStr = uniqueArr.sort().join("")
//   return finalStr
// }

// console.log(longest("xyaabbbccccdefww","xxxxyyyyabklmopq"))

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

// function createPhoneNumber(numbers){
//   return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
// }

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

// function digitalRoot(n) {
//   //split the number to prepare it for addition
//   let splitNum = n.toString().split("")
//   //loop through the number to get the sum
//   let sum = 0
//   sum = splitNum.reduce((a,b) => +a + +b)
  
//   while(sum.toString().length>1){
//     sum = sum.toString().split("").reduce((a,b) => +a + +b)
//   }
//   return +sum
// }

// console.log(digitalRoot(16))
// console.log(digitalRoot(942))
// console.log(digitalRoot(132189))
// console.log(digitalRoot(0))

// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

// var countBits = function(n) {
//   //turn number into binary
//   let bin = n.toString(2).split("")

//   //count the number of ones
  
//   return bin.filter(x => x==="1").length
// };

// console.log(countBits(1234))

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

// function findOutlier(integers){
//     //Loop through each element and count how many are odd and how many are even and use that to return the correct number
//     let countOfOdd = 0
//     let countOfEven = 0
//     for(let i=0; i<integers.length; i++){
//         if(integers[i] % 2 === 0){
//             countOfEven++
//         }else{
//             countOfOdd++
//         }
//     }
//     if(countOfEven===1){
//         return integers.filter((x) => x%2===0)[0]
//     }else{
//         return integers.filter((x) => x%2!==0)[0]
//     }
//   }
  
//   console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))
//   console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]))
//   console.log(findOutlier([-48815729,-102346279,24603073,121407439,35141413,14735119,-81586965,193254818,-35348421,180048439,-174156735,23854037,124606765,-168424591]))
//   console.log(findOutlier([123378562,958216,-108021524,-43494136,-156224382,7925986,14522032,-61080392,-151438246,-12181366,-103700526,41244632,157948486,-188420418,-52966560,-194754727,-141691806]))

/**
 * Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples (input --> output):
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"
"Skippy" --> "##ippy"
"Nananananananananananananananana Batman!" --> "####################################man!"
 */

// return masked string
// function maskify(cc) {
//     let splitStr = []
//     //for strings 4 or less
//     if(cc.length<5){
//         return cc
//     }
//     splitStr = cc.split("")
//     //Put last four digits into its own array
//     let lastFour = splitStr.splice(-4)

//     // loop through splitStr and change each element to #
//     splitStr = splitStr.map((x) => x="#").join("")

//     return splitStr + lastFour.join("")
// }

// console.log(maskify("4556364607935616"))
// console.log(maskify("Nananananananananananananananana Batman!"))
// console.log(maskify("11111"))

/**
 * Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"
 */

// function toCamelCase(str){
//     //If the string is empty, return it
//     if(str===""){
//         return str
//     }
//     //Split the string
//     let splitStr = str.split("")
    
//     //loop through using a conditional to capitalize the next letter after underscore or dash
//     for(let i=0; i<splitStr.length; i++){
//         if(splitStr[i]==="-" || splitStr[i]==="_"){
//             splitStr[i+1] = splitStr[i+1].toUpperCase()
//             splitStr[i]=""
//         }
//     }
//     //join the string back together
//     return splitStr.join("")
// }

// console.log(toCamelCase("The_Stealth-Warrior"))
// console.log(toCamelCase("the-stealth-warrior"))
// console.log(toCamelCase(""))

/**
 * A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcissistic:

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
and 1652 (4 digits), which isn't:

    1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
The Challenge:

Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.

This may be True and False in your language, e.g. PHP.

Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.
 */

// function narcissistic(value) {
//     // Code me to return true or false
//     //Split the number into individual digits
//     let splitNums = value.toString().split("")

//     //find the sum of each number to the 3rd power
//     for(let i=0; i<splitNums.length; i++){
//         splitNums[i] = Math.pow(splitNums[i],splitNums.length)
//     }
//         //if sum equals value, return true
//     return splitNums.reduce((a,b) => a+b) === value
//   }

//   console.log(narcissistic(153))
//   console.log(narcissistic(1652))

/**
 * The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input
Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Output
Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

Example
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
 */

// function openOrSenior(data){
//     //greater than or equal to 55 years old & handicap greater than 7
//     let seniorOrOpen = []
//     let seniorAge = 55
//     let handicapLimit = 7
//     for(let i=0; i<data.length; i++){
//         if(data[i][0]>=seniorAge && data[i][1]>handicapLimit){
//             seniorOrOpen.push("Senior")
//         }else{
//             seniorOrOpen.push("Open")
//         }
//     }
//     return seniorOrOpen
//   }

//   console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]))

/**
 * Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
 */

// function moveZeros(arr) {
//     let zeroCount = 0
//     //count zeros
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]===0){
//             zeroCount++
//         }
//     }
//     //filter zeros
//     let filteredArray = arr.filter(x => x!==0)
//     //add zeros to the end
//     for(let i=0; i<zeroCount; i++){
//         filteredArray.push(0)
//     }
//     return filteredArray
//   }

//   console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))

/**
 * In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

At the end of the first year there will be: 
1000 + 1000 * 0.02 + 50 => 1070 inhabitants

At the end of the 2nd year there will be: 
1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 => 1213

It will need 3 entire years.
More generally given parameters:

p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)

the function nb_year should return n number of entire years needed to get a population greater or equal to p.

aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

Examples:
nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10
 */

// function nbYear(p0, percent, aug, p) {
//     let years = 0
//     let population = p0
//     const percentage = percent*.01
//     while(population<p){
//         population = Math.trunc(population + population * percentage + aug)
//         years++
//     }
//     return years
// }

// console.log(nbYear(1500, 5, 100, 5000))
// console.log(nbYear(1500000, 2.5, 10000, 2000000))
// console.log(nbYear(1500000, 0.25, 1000, 2000000))

// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

// For example:

// Let's say you are given the array {1,2,3,4,3,2,1}:
// Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

// Let's look at another one.
// You are given the array {1,100,50,-51,1,1}:
// Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

// Last one:
// You are given the array {20,10,-80,10,10,15,35}
// At index 0 the left side is {}
// The right side is {10,-80,10,10,15,35}
// They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
// Index 0 is the place where the left side and right side are equal.

// Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

// Input:
// An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

// Output:
// The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

// Note:
// If you are given an array with multiple answers, return the lowest correct index.

// function findEvenIndex(arr){
//   //Loop through the array and on each iteration, check to see if the sum of the previous numbers is equal to the sum of the following numbers
//   //check for an empty array
//   if(arr.length === 0){
//     return -1
//   }else{
//     let leftSum = 0
//     let rightSum = arr.reduce((a,b) => a+b, 0)
//     for(let i=0; i<arr.length; i++){
//         rightSum -= arr[i]
        
//         if(leftSum === rightSum){
//           return i
//         }
//       leftSum += arr[i]
//     }
//     return -1
//   }
// }

// console.log(findEvenIndex([1,2,3,4,3,2,1]))
// console.log(findEvenIndex([]))
// console.log(findEvenIndex([1,2,3,4,5,6]))

// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:(Input --> Output)

// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square

// function findNextSquare(sq) {
//   // Return the next square if sq is a perfect square, -1 otherwise
//   if(!Number.isInteger(Math.sqrt(sq))){
//     return -1
//   }else{
//     return (Math.sqrt(sq)+1)*(Math.sqrt(sq)+1)
//   }
// }

// console.log(findNextSquare(121))
// console.log(findNextSquare(625))
// console.log(findNextSquare(114))

/**
 * Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

Examples:
1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5
 */

// function isDivisible(n, x, y) {
//     return n%x===0 && n%y===0 ? true:false
// }

// console.log(isDivisible(3,3,4))//false
// console.log(isDivisible(12,3,4))//true
// console.log(isDivisible(8,3,4))//false

/**
 * There is a bus moving in the city which takes and drops some people at each bus stop.

You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.
 */

// var number = function(busStops){
//     //loop through the array and change the count of how many people are on and off the bus then return the sum
//     let onBus = 0
//     let offBus = 0
//     for(let i=0; i<busStops.length; i++){
//         onBus += busStops[i][0]
//         offBus -= busStops[i][1]
//     }
//     return onBus + offBus
//   }

//   console.log(number([[10,0],[3,5],[5,8]]))
//   console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]))
//   console.log(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]))
//   console.log(number([[0,0]]))

/**
 * Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
 */

// function solution(str){
//     //if empty string, return empty string
//     if(str===""){
//         return []
//     }
//     //control for odd number length,add underscore
//     let newStr = str
//     if(str.length%2!==0){
//        newStr = `${newStr}_`
//     }

//    //split the string
//     let splitStr = newStr.split("")

//    //loop and concatenate every other letter
//    for(let i=0; i<splitStr.length; i+=2){
//     splitStr[i] = splitStr[i]+splitStr[i+1]
//    }
//    //push every even number indexed item into a new array
//    let newArr = []
//    for(let i=0; i<splitStr.length; i++){
//     if(i%2===0){
//         newArr.push(splitStr[i])
//     }
//    }
//    return newArr
// }

// console.log(solution("abcdef"))
// console.log(solution("abcdefg"))
// console.log(solution(""))

// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

// Examples:
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"

// function printerError(s) {
//     //first number is errors, 2nd number is length
//   let countOfErrors = 0
//   let stringLength = s.length
//   //loop and use a conditional using charCode
//   const mCharCode = 'm'.charCodeAt(0)

//   for(let i=0; i<s.length; i++){
//     if(s.charCodeAt(i)>mCharCode){
//       countOfErrors++
//     }
//   }
//   return `${countOfErrors}/${stringLength}`
// }
// console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"))

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

// function validatePIN (pin) {
//   // check pin for length
//   if(pin.length === 4 || pin.length === 6){
//     // check all characters are digits
//     for(let i=0; i<pin.length; i++){
//       if(pin[i].charCode<48 || pin[i].charCode>57){
//         return false
//       }
//     }
//     return true
//   }
//   return false
// }

// console.log(validatePIN("1234"))
// console.log(validatePIN("12345"))
// console.log(validatePIN("a234"))
// console.log(validatePIN(".234"))
// console.log(validatePIN("123 "))
// console.log(validatePIN("098765"))

// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

// function oddOrEven(array) {
//   if(array === [0] || array.length === 0){
//     return "even"
//   }
//   let sum = array.reduce((a,b) => a+b)
//   if(sum%2===0){
//     return "even"
//   }else{
//     return "odd"
//   }
// }
// console.log(oddOrEven([]))
// console.log(oddOrEven([0]))
// console.log(oddOrEven([0,1,5]))
// console.log(oddOrEven([0, -1, -5]))
// console.log(oddOrEven([0, 1, 2]))
// console.log(oddOrEven([-1023, -1, 3]))

// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// function sortArray(array) {
//   //grab odd numbers and their indices
//   let oddNums = []
//   let indices = []
//   for(let i=0; i<array.length; i++){
//     if(array[i]%2!==0){
//       oddNums.push(array[i])
//       indices.push(i)
//     }
//   }
//   //sort odd numbers
//   oddNums.sort((a,b) => a-b)
//   //return odd numbers to their indexes
//   let sortedArr = array
//   for(let i=0; i<indices.length; i++){
//    sortedArr.splice(indices[i],1,oddNums[i])
//   }
//   return sortedArr
// }

// // console.log(sortArray([7, 1]))
// // console.log(sortArray([5, 8, 6, 3, 4]))
// // console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]))

// Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'
// (Use the English alphabet with 26 letters!)

// function findMissingLetter(array){
//     let missingLetter
//     for(let i=0; i<array.length-1; i++){
//       if(array[i].charCodeAt(0) !== array[i+1].charCodeAt(0)-1){
//         missingLetter = array[i].charCodeAt()
//       }
//     }
//     return String.fromCharCode(missingLetter+1)
//   }
  
//   console.log(findMissingLetter(['a','b','c','d','f'])) //a is 91
//   console.log(findMissingLetter(['O','Q','R','S'])) //O is 79

/**
 * Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
 */

// function reverseWords(str) {
//     let strArr = str.split("").reverse().join("")
//     let revWords = strArr.split(" ").reverse().join(" ")
//     return revWords
//   }

//   console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))
//   console.log(reverseWords("double  spaces"))

/**
 * Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
 */

// function pigIt(str){
//     //split the string
//     let splitStr = str.split(" ")

//     //move the first letter of each word to the end of each word
//     //array of first letters
//     let moveLetter = []
//     for(let i=0; i<splitStr.length; i++){
//         moveLetter.push(splitStr[i].split("").shift())
//     }

//     //array of words without the first letter
//     let smallWords = []

//     smallWords = splitStr.map(x => x.slice(1))

//     //add "ay" to the end of each moveLetter
//     //need a conditional that checks if the moveLetter is a letter or punctuation
//     let ays = []
//     ays  = moveLetter.map(x => x.toLowerCase() !== x.toUpperCase() ? x+'ay':x)

//     //join smallWords with the ays
//     let pigLatin = []
//     for(let i=0; i<smallWords.length; i++){
//         pigLatin.push(smallWords[i]+ays[i])
//     }
//     return pigLatin.join(" ")
//   }

//   console.log(pigIt('Pig latin is cool'))
//   console.log(pigIt('Hello world !'))

/**
 * Snail Sort
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]
This image will illustrate things more clearly:


NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].
 */
// snail = function(array) {
//     //control for empty array and 1x1 array
//     let n = array.length
    
//     if(n===1){
//         if(array[0].length===0){
//             return []
//         }else{
//             return array[0]
//         }
//     }
//     let newArr = []

//     //loop to run this code while n >=2
//     while(n>=2){
//         for(let i=0; i<n; i++){
//             newArr.push(array[0][i])
//         }
//         // Put the end of every array after the first into snailArray
//         for(let i=1; i<n; i++){
//             newArr.push(array[i][array[i].length-1])
//         }
//         let reversedLast = []
//         reversedLast.push(array[n-1])
//         reversedLast = reversedLast.toString().split(",").reverse()
//         reversedLast = reversedLast.map(x => Number(x))

//         for(let i=1; i<reversedLast.length; i++){
//             newArr.push(reversedLast[i])
//         }
//         //put the first number of each array into snailArray starting at 2nd to last array and moving to the first, but stop before the first array if n>2
//         if(n>2){
//             for(let i=n-2; i>=1; i--){
//             newArr.push(array[i][0])
//             }
//             //delete perimeter from array and repeat process and decrement n until n<=2
//             array.shift()
//             for(let i=0; i<n-1; i++){
//                 array[i].pop()
//             }
//             array.pop()
//             //shift first element of each array
//             for(let i=0; i<n-2; i++){
//                 array[i].shift()
//             }
//         }
//         n-=2
//         //push last digit into newArr if n is 1
//         if(n===1){
//             newArr.push(array[0][0])
//         }
//     }
//     return newArr
// }

// console.log(snail([[]]))
// console.log(snail([[1]]))
// console.log(snail([[1,2],[3,4]]))
// console.log(snail([[1,2,3,4],[12,13,14,5],[11,16,15,6],[10,9,8,7]]))
// console.log(snail([[1,2,3],[8,9,4],[7,6,5]]))
// console.log(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]))