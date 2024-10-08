﻿// See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!");

/*
Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
N will never be less than 1.

Method calling example:

string[] result = FizzBuzz.GetFizzBuzzArray(3); // => [ "1", "2", "Fizz" ]
*/
// using System;
// using System.Collections.Generic;

// public class FizzBuzz
// {
// 	public static string[] GetFizzBuzzArray(int n)
// 	{
//     string[] result = new string[n];
//     for(int i=0; i<=n-1; i++)
//     {
//         int num = i+1;

//         if(num % 3 == 0 && num % 5 == 0)
//         {
//             result[i] = "FizzBuzz";
//         }
//         else if(num % 3 == 0)
//         {
//             result[i] = "Fizz";
//         }
//         else if(num % 5 == 0)
//         {
//             result[i] = "Buzz";
//         }
//         else
//         {
//             result[i] = num.ToString();
//         }
//     }
//     return result;
// 	}

//     public static void Main(string[] args)
//     {
//         int n = 100;
//         string[] fizzBuzzArray = GetFizzBuzzArray(n);

//         foreach(string element in fizzBuzzArray)
//         {
//             Console.WriteLine(element);
//         }
//     }
// }

/*
Write a function that removes the spaces from the string, then return the resultant string.

Examples:

Input -> Output
"8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
"8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
"8aaaaa dddd r     " -> "8aaaaaddddr"
*/
// using System;
// using System.Linq;

// namespace Solution 
// {
//   public static class SpacesRemover
//   {
//     public static string NoSpace(string input)
//     {
//         return new string(input.Where(c => !char.IsWhiteSpace(c)).ToArray());
//     }  
//      public static void Main(string[] args)
//     {
//         string input = "8 j 8   mBliB8g  imjB8B8  jl  B";
//         string newString = NoSpace(input);
//         Console.WriteLine(newString);
//     }
//   }
// }

// namespace Solution 
// {
//   public static class SpacesRemover
//   {
//     public static string NoSpace(string input)
//     {
//       return input.Replace(" ", "");
//     }  

//     public static void Main(string[] args)
//     {
//       string input = "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd";
//       string newString = NoSpace(input);
//       Console.WriteLine(newString);
//     }
//   }
// }

/*
Convert a String to a Number!
Description
We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

Examples
"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7
*/
// using System;
//   public class Kata
//   {
//     public static int StringToNumber(String str) 
//     {
//         int num = Convert.ToInt32(str);
//         return num;
//     }
//     public static void Main(string[] args)
//     {
//       string input = "1234";
//       int newString = StringToNumber(input);
//       Console.WriteLine(newString);
//     }
//   }

/*
Abbreviate a Two Word Name
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/
// using System;
// public class Kata
// {
//   public static string AbbrevName(string name)
//   {
//     //variable to hold new string
//     string initials = name.Substring(0,1).ToUpper();
//     initials += ".";

//     //find the letter after the space
//     for(int i=0; i<name.Length; i++)
//     {
//       if(name[i] == ' ')
//       {
//         string nextLetter = name.Substring(i+1,1);
//         initials += nextLetter.ToUpper();
//       }
//     }
//     return initials;
//   }

//   public static void Main(string[] args)
//   {
//     Console.WriteLine(AbbrevName("sam harris"));
//   }
// }

/*
Are You Playing Banjo?
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.
*/

// using System;

// public class Kata
// {
//   public static string AreYouPlayingBanjo(string name)
//   {
//     if(name.Substring(0,1).ToUpper() == "R")
//     {
//       return $"{name} plays banjo";
//     }else
//     {
//       return $"{name} does not play banjo";
//     }
//   }

//   public static void Main(string[] args)
//   {
//     Console.WriteLine(AreYouPlayingBanjo("Martin"));
//     Console.WriteLine(AreYouPlayingBanjo("Rikke"));
//   } 
// }

/*
Highest and Lowest
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
Kata.HighAndLow("1 2 3 4 5");  // return "5 1"
Kata.HighAndLow("1 2 -3 4 5"); // return "5 -3"
Kata.HighAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
*/
// using System;
// using System.Linq;

// public static class Kata
// {
//   public static string HighAndLow(string numbers)
//   {
//     //split the string into numbers
//     string[] nums = numbers.Split(" ");

//     //Convert string numbers to numbers
//     int[] numberNumbers = Array.ConvertAll(nums, int.Parse);

//     int high = numberNumbers.Max();
//     int low = numberNumbers.Min();

//     return $"{high} {low}";
//   }
//   public static void Main(string[] args)
//   {
//     Console.WriteLine(HighAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
//   }
// }

/*
Get Nth Even Number

Return the Nth Even Number

Example(Input --> Output)

1 --> 0 (the first even number is 0)
3 --> 4 (the 3rd even number is 4 (0, 2, 4))
100 --> 198
1298734 --> 2597466
The input will not be 0.
*/
// using System;
// public class Kata
// {
//   public static int NthEven(int n)
//   {
//     return n*2 - 2;
//   }
//   public static void Main(string[] args)
//   {
//     Console.WriteLine(NthEven(0));
//     Console.WriteLine(NthEven(3));
//     Console.WriteLine(NthEven(100));
//     Console.WriteLine(NthEven(1298734));
//   }
// }

/*
Counting Sheep...
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
*/
// using System;

// public static class Kata
// {
//   public static int CountSheeps(bool[] sheeps)
//   {
//     int count = 0;
//     for(int i=0; i<sheeps.Length; i++)
//     {
//       if(sheeps[i] == true)
//       {
//         count++;
//       }
//     }
//     return count;
//   }

//   public static void Main(string[] args)
//   {
//     Console.WriteLine(CountSheeps(new bool[] { true, false, true} ));
//   }
// }

/*
Basic Mathematical Operations
Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7
*/

// namespace Solution
// {
//   public static class Program
//   {
//     public static double BasicOp(char operation, double value1, double value2)
//     {
//       switch (operation)
//       {
//         case '+' : return value1 + value2;
//         case '-' : return value1 - value2;
//         case '*' : return value1 * value2;
//         case '/' : return value1 / value2;
//         default: throw new ArgumentException("Invalid operation");
//       }
//     }

//     public static void Main(string[] args)
//     {
//       Console.WriteLine(BasicOp('+', 4, 7));
//       Console.WriteLine(BasicOp('-', 15, 18));
//       Console.WriteLine(BasicOp('*', 5, 5));
//       Console.WriteLine(BasicOp('/', 49, 7));
//     }
//   }
// }

/*
Keep Hydrated!
Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5
*/
// using System;

// public class Kata
// {
//   public static int Litres(double time)
//   {
//     return (int)Math.Floor(time * .5);
//   }
//   public static void Main(string[] args)
//   {
//     Console.WriteLine(Litres(1.4));
//     Console.WriteLine(Litres(12.3));
//   }
// }

/*
Century From Year

The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20

Programmer: Skyler Reising
Date: 1/3/24

Requirements
(1) Return the century in integer format from the given year

Algorithm:
** If year >= 1 and <= 100, than century is 1. If year >= 101 and <=200, than century is 2. etc
(1) Declare a double to hold the century number rounded up to the next int
(2) Convert the double to an int and return
*/

// using System;

// public static class Kata
// {
//   public static int CenturyFromYear(int year)
//   {
//     //(1) Declare a double to hold the century number rounded up to the next int
//     double century = Math.Ceiling((double) year/100);

//     //(2) Convert the double to an int and return
//     int answer = Convert.ToInt32(century);
    
//     return answer;
//   }

//   public static void Main(string[] args)
//   {
//     Console.WriteLine(CenturyFromYear(1705));//18
//     Console.WriteLine(CenturyFromYear(1900));//19
//     Console.WriteLine(CenturyFromYear(1601));//17
//     Console.WriteLine(CenturyFromYear(2000));//20
//   }
// }

/*
Is n divisible by x and y?

Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

Examples:
1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5

Software Engineer: Skyler Reising
Date: 1/4/24

Requirements
(1) Three integer numbers, n, x, and y are passed in.
(2) Method must return a boolean.

Algorithm:
(1) store n % x in variable 1.
(2) store n % y in variable 2.
(3) If variable 1 && variable 2 == 0, return true.
  (3a) Else return false.

*/

// public class DivisibleNb 
// {
// 	public static bool IsDivisible(int n, int x, int y) 
//   {
// 		// (1) store n % x in variable 1.
//     int var1 = n % x;

//     // (2) store n % y in variable 2.
//     int var2 = n % y;

//     // (3) If variable 1 && variable 2 == 0, return true.
//     // (3a) Else return false.
//     return (var1 == 0 && var2 == 0);
// 	}

//   public static void Main(string[] args)
//   {
//     Console.WriteLine(IsDivisible(12,4,3));//true
//     Console.WriteLine(IsDivisible(3,3,4));//false
//     Console.WriteLine(IsDivisible(8,3,4));//false
//   }
// }

/*
Returning Strings

Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

[Make sure you type the exact thing I wrote or the program may not execute properly]

Software Engineer: Skyler Reising

Requirements
(1) Return a greeting that includes a name passed as an argument to the Method.
(2) The greeting has to be exactly what is given in the problem

*/
// using System;

// public static class Kata
// {
//   public static string Greet(string name)
//   {
//     return "Hello, " + name + " how are you doing today?";
//   }

//   public static void Main(string[] args)
//   {
//     Console.WriteLine(Greet("Skyler"));
//   }
// }

/*
Multiples of 3 or 5

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once.

*/
// using System;
// public static class Kata
// {
//   public static int Solution(int value)
//   {
//     //control for value < 0
//     if(value < 0)
//     {
//       return 0;
//     }
//     //Declare a sum variable
//     int sum = 0;

//     //loop from 0 to value and add those values that meet the criteria to sum
//     for(int i=0; i<value; i++)
//     {
//       if(i % 3 == 0 || i % 5 == 0)
//       {
//         sum += i;
//       }
//     }
    
//     //return the sum
//     return sum;
//   }

//   public static void Main(string[] args)
//   {
//     Console.WriteLine(Solution(10));//23
//     Console.WriteLine(Solution(20));//78
//   }
// }

/*
Vowel Count

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

*/

// using System;

// public static class Kata
// {
//     public static int GetVowelCount(string str)
//     {
//         int vowelCount = 0;

//         //loop through the string and if a character is a vowel increment vowelCount
//         for(int i=0; i<str.Length; i++)
//         {
//           if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u')
//           {
//             vowelCount++;
//           }
//         }

//         return vowelCount;
//     }

//     public static void Main(string[] args)
//     {
//       Console.WriteLine(GetVowelCount("abracadabra"));//5
//     }
// }

/*

Convert number to reversed array of digits

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]

*/
// using System;
// using System.Collections.Generic;

// namespace Solution
// {
//   class Digitizer
//   {
//     public static long[] Digitize(long n)
//     {
//       //Convert number to an array of characters
//       char[] numArray = n.ToString().ToCharArray();

//       //Reverse the array
//       Array.Reverse(numArray);

//       //Convert each character back to long and return
//       long[] reversedArray = new long[numArray.Length];
//       for(int i=0; i<numArray.Length; i++)
//       {
//         reversedArray[i] = long.Parse(numArray[i].ToString());
//       }

//       return reversedArray;

//     }

//     public static void Main(string[] args)
//     {
//       long[] digits = Digitize(35231);
//       Console.WriteLine(string.Join(", ", digits));
//     }
//   }
// }

/*

Function 1 - hello world

Make a simple function called greet that returns the most-famous "hello world!".

Style Points
Sure, this is about as easy as it gets. But how clever can you be to create the most creative "hello world" you can think of? What is a "hello world" solution you would want to show your friends?

*/
// using System;

// public static class Kata
// {
//   public static void Main(string[] args)
//   {
//     Console.WriteLine(Greet());
//   }

//     public static string Greet()
//   {
//     return "hello world!";
//   }
// }

/*

Find the odd int

Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

*/

// using System;
// using System.Linq;

// public static class Kata
// {
//   public static void Main(string[] args)
//   {
//     int [] nums = {1,2,2,3,3,3,4,3,3,3,2,2,1};
//     Console.WriteLine(find_it(nums));
//   }

//   public static int find_it(int[] seq) 
//   {
//     //counter for each integer
//     int count = 0;

//     //find the highest value in the array
//     int max = seq.Max();

//     for(int i=0; i<=max; i++)
//     {
//       //nested loop to count is even, count each num. If count is odd, return number.
//       for(int j=0; j<seq.Length; j++)
//       {
//         if(i == seq[j])
//         {
//           count++;
//         }
//       }

//       //If count is odd, return number.
//       if(count % 2 == 1)
//       {
//         return i;
//       }

//       //reset count
//       count = 0;
//     }
//     return -1;
//   }
// }

/*

Opposites Attract

Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

*/
// using System;

// public class LoveDetector
// {
//     public static void Main()
//     {
//       Console.WriteLine(lovefunc(1,4));//true
//       Console.WriteLine(lovefunc(2,4));//false
//     }
//     public static bool lovefunc(int flower1, int flower2)
//     { 
//         int inLoveNum = flower1+flower2;

//         return inLoveNum % 2 == 1;
//     }
// }

/*

Square Every Digit

Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

Note: The function accepts an integer and returns an integer.

Happy Coding!

*/
// using System;

// public class Kata
// {
//   public static int SquareDigits(int n)
//   {
//     //Turn the int into a string
//     string numString = n.ToString();

//     //Declare an empty result string
//     string resultString = "";

//     //loop through each char in the string, convert to an int, square it, convert back to string, and concatenate to resultString
//     foreach (char num in numString)
//     {
//       int digit = Convert.ToInt32(num.ToString());

//       digit *= digit;

//       resultString += digit.ToString();
//     }
//     return Convert.ToInt32(resultString);
//   }

//   public static void Main(string[] args)
//   {
//     Console.WriteLine(SquareDigits(9119));//811181
//     Console.WriteLine(SquareDigits(765));//493625
//   }
// }

/*
Stop gninnipS My sdroW!
Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

"Hey fellow warriors"  --> "Hey wollef sroirraw" 
"This is a test        --> "This is a test" 
"This is another test" --> "This is rehtona test"
*/

// using System;
// using System.Linq;

// public class Kata
// {
//   public static string SpinWords(string sentence)
//   {
//     //Split the string into an array of words

//     //Loop over the words, and if a word has 5 or more letters, reverse that word.
//   }
//   public static void Main(string[] args)
//   {
//     Console.WriteLine(SpinWords("Welcome"));
//     Console.WriteLine(SpinWords("Hey fellow warriors"));
//   }
// }

/*
Disemvowel Trolls

Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/

// using System;
// using System.Linq;
// public static class Kata
// {
//     public static string Disemvowel(string str)
//     {
//         // Split the string into an array
//         char[] strArray = str.ToCharArray();

//         char[] vowelArray = { 'a', 'e', 'i', 'o', 'u' };

//         List<char> strList = new List<char>();

//         // Remove each vowel
//         for(int i = 0; i<strArray.Length; i++)
//         {
//           if(!vowelArray.Contains(Char.ToLower(strArray[i])))
//           {
//             strList.Add(strArray[i]);
//           }
//         }

//         // Join and return the array
//         return new string(strList.ToArray());
//     }

//     public static void Main(string[] args)
//     {
//       Console.WriteLine(Disemvowel("This website is for losers LOL!"));
//     }
// }

/*
Stop gninnipS My sdroW!

Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

"Hey fellow warriors"  --> "Hey wollef sroirraw" 
"This is a test        --> "This is a test" 
"This is another test" --> "This is rehtona test"
*/

// using System.Collections.Generic;
// using System.Linq;
// using System;

// public class Kata
// {
//   public static string SpinWords(string sentence)
//   {
//     // Make the sentence into a word array
//     string[] words = sentence.Split(" ");
//     List<string> newWords = new List<string>();

//     // Loop through the word array and reverse the word if the length of the word is >= 5
//     foreach (string word in words)
//     {
//       if(word.Length >= 5)
//       {
//         char[] spltWord = word.ToCharArray();
//         Array.Reverse(spltWord);
//         newWords.Add(new string(spltWord));
//       }
//       else
//       {
//         newWords.Add(word);
//       }
//     }

//     // Join the word list and return the sentence
//     return String.Join(" ", newWords);
//   }

//   public static void Main(string[] args)
//   {
//     Console.WriteLine(SpinWords("Hey fellow warriors"));
//   }
// }

/*
Who likes it?

You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.
*/

// using System;
// using System.Linq;
// using System.Collections.Generic;
// public static class Kata
// {
//   public static string Likes(string[] name)
//   {
//     if (name.Length == 0)
//     {
//       return "no one likes this";
//     }
//     else if (name.Length == 1)
//     {
//       return $"{name[0]} likes this";
//     }
//     else if (name.Length == 2)
//     {
//       return $"{name[0]} and {name[1]} like this";
//     }
//     else if (name.Length == 3)
//     {
//       return $"{name[0]}, {name[1]} and {name[2]} like this";
//     }
//     else
//     {
//       return $"{name[0]}, {name[1]} and {name.Length - 2} others like this";
//     }
//     return "not yet";
//   }

//   public static void Main(string[] args)
//   {
//     string[] empty = Array.Empty<string>();
//     string[] one = {"Peter"};
//     string[] two = {"Jacob", "Alex"};
//     string[] three = {"Max", "John", "Mark"};
//     string[] four = {"Alex", "Jacob", "Mark", "Max"};

//     Console.WriteLine(Likes(empty));
//     Console.WriteLine(Likes(one));
//     Console.WriteLine(Likes(two));
//     Console.WriteLine(Likes(three));
//     Console.WriteLine(Likes(four));
//   }
// }

/*
Sum of Digits / Digital Root

Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/

// using System.Collections.Generic;
// using System.Linq;
// using System;
// using System.Reflection.Metadata.Ecma335;

// public class Number
// {
//   public static int DigitalRoot(long n)
//   {
//     if( n < 10 )
//     {
//       return (int)n;
//     }

//     int sum = 0;
//     string nString = n.ToString();

//     foreach(var num in nString)
//     {
//       sum += int.Parse(num.ToString());
//     }

//     return DigitalRoot(Convert.ToInt64(sum));
//   }

//   public static void Main(string[] args)
//   {
//     Console.WriteLine(DigitalRoot(16));
//     Console.WriteLine(DigitalRoot(942));
//     Console.WriteLine(DigitalRoot(132189));
//     Console.WriteLine(DigitalRoot(493193));
//   }
// }

/*
Array.diff

Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

Kata.ArrayDiff(new int[] {1, 2}, new int[] {1}) => new int[] {2}
If a value is present in b, all of its occurrences must be removed from the other:

Kata.ArrayDiff(new int[] {1, 2, 2, 2, 3}, new int[] {2}) => new int[] {1, 3}
*/

// using System;
// using System.Linq;

// public class Kata
// {
//   public static int[] ArrayDiff(int[] a, int[] b)
//   {
//     // for ever value in b, remove it from a
//     List<int> newArr = a.ToList();

//     foreach(var num in b)
//     {
//       newArr.RemoveAll(x => x == num);
//     }

//     return newArr.ToArray();
//   }

//   public static void Main(string[] args)
//   {
//     var nums = ArrayDiff(new int[] {1, 2, 2, 2, 3}, new int[] {2});
//     foreach(var num in nums)
//     {
//       Console.WriteLine(num);
//     }
//   }
// }

/*
Create Phone Number

Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
Kata.CreatePhoneNumber(new int[] {1, 2, 3, 4, 5, 6, 7, 8, 9, 0}) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!
*/

// using System;
// using System.Linq;

// public class Kata
// {
//   public static string CreatePhoneNumber(int[] numbers)
//   {
//     string phoneNumber = "";

//     phoneNumber += "(" + $"{numbers[0]}{numbers[1]}{numbers[2]}" + ")" + " ";

//     phoneNumber += $"{numbers[3]}{numbers[4]}{numbers[5]}" + "-";

//     phoneNumber += $"{numbers[6]}{numbers[7]}{numbers[8]}{numbers[9]}";

//     return phoneNumber;
//   }
//   public static void Main(string[] args)
//   {
//     Console.WriteLine(CreatePhoneNumber(new int[]{1,2,3,4,5,6,7,8,9,0}));
//   }
// }

/*
Descending Order

Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/

// using System;
// using System.Collections.Generic;
// using System.Linq;

// public static class Kata
// {
//   public static int DescendingOrder(int num)
//   {
//     // Split into numbers
//     char[] newCharArray = num.ToString().ToCharArray();
//     int[] intArray = newCharArray.Select(x => x - '0').ToArray();

//     // Sort numbers;
//     Array.Sort(intArray);
//     Array.Reverse(intArray);

//     // Join numbers and return
//     string newNum = string.Join("", intArray);
//     int readyToReturn = Convert.ToInt32(newNum);
//     return readyToReturn;
//   }

//   public static void Main(string[] args)
//   {
//     Console.WriteLine(DescendingOrder(42145));
//   }
// }

/*
Bit Counting

Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/

// using System;
// using System.Collections.Generic;
// using System.Linq;

// public class Kata
// {
//   public static int CountBits(int n)
//   {
//     string binNum = Convert.ToString( n, 2);
//     int count = 0;
//     for (int i = 0; i<binNum.Length; i++)
//     {
//       if(binNum[i] == '1')
//       {
//         count++;
//       }
//     }
//     return count;
//   }

//   public static void Main(string[] args)
//   {
//     Console.WriteLine(CountBits(1234));
//   }
// }

/*
Replace vowels to exclamation marks

Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"
*/

// using System;
// using System.Collections.Generic;
// using System.Linq;
// using System.Text;
// public static class Kata
// {
//   public static string Replace(string s)
//   {
//     // make s lowercase
//     string lowString = s.ToLower();

//     // make vowel string
//     char[] vowels = {'a', 'e', 'i', 'o', 'u'};

//     // make new string to be returned after the loop
//     StringBuilder newString = new StringBuilder();

//     // loop through s and if s char is in vowel string, add ! to the string, otherwise add the char to the string
//     for(int i = 0; i < s.Length; i++)
//     {
//       if(vowels.Contains(lowString[i]))
//       {
//         newString.Append('!');
//       }
//       else
//       {
//         newString.Append(s[i]);
//       }
//     }

//     return newString.ToString();
//   }

//   public static void Main(string[] args)
//   {
//     Console.WriteLine(Replace("ABCDE"));
//   }
// }

/*
Mumbling

This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

// using System;
// using System.Collections.Generic;
// using System.Linq;
// using System.Text;

// public class Accumul 
// {
// 	public static String Accum(string s) 
//   {
//     // loop to add to a new string. Each letter is repeated as many times as its index. First letter is always capitol
//     string newString = "";
//     for(int i = 0; i < s.Length; i++)
//     {
//       for(int j = 0; j <= i; j++)
//       {
//         if(j == 0)
//         {
//           newString += s[i].ToString().ToUpper();
//           if(j == i)
//           {
//             newString += "-";
//           }
//         }
//         else
//         {
//           newString += s[i].ToString().ToLower();
//           if(j == i)
//           {
//             newString += "-";
//           }
//         }
//       }
//     }

//     newString = newString.Remove(newString.Count() - 1, 1);
//     return newString;
//   }

//     public static void Main(string[] args)
//   {
//     Console.WriteLine(Accum("RqaEzty"));
//   }
// }

/*
You're a Square!

A square of squares
You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

Task
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.

Examples
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false
*/

// using System;
// using System.Collections.Generic;
// using System.Linq;

// public class Kata
// {
//   public static bool IsSquare(int n)
//   {
//     double squareRoot = Math.Sqrt(n);

//     return ((int)squareRoot)*((int)squareRoot) == n;
//   }

//   public static void Main(string[] args)
//   {
//     Console.WriteLine(IsSquare(0));
//     Console.WriteLine(IsSquare(3));
//     Console.WriteLine(IsSquare(4));
//     Console.WriteLine(IsSquare(25));
//     Console.WriteLine(IsSquare(26));
//   }
// }

/*
Greed is Good

Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point
A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

Example scoring

 Throw       Score
 ---------   ------------------
 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.
*/

// using System;
// using System.Collections.Generic;
// using System.Linq;
// public static class Kata
// {
//   public static int Score(int[] dice) {
//     // count each number throw
//     int count = 0;
//     int points = 0;

//     for(int i = 1; i <= 6; i++)
//     {
//       // count each number
//       foreach(int d in dice)
//       {
//         if(d == i)
//         {
//           count++;
//         }
//       }

//       // apply rules for that number
//       if(i == 1)
//       {
//         // 1 is worth 100 as single, 1000 as triple
//         if(count >= 3)
//         {
//           points += 1000;
//           count -= 3;
//         }
//         for(int j=1; j <= count; j++)
//         {
//           points += 100;
//         }
//         count = 0;
//       }

//       if(i == 2)
//       {
//         // 2 is worth 200 as a triple
//         if(count >= 3)
//         {
//           points += 200;
//         }
//         count = 0;
//       }

//       if(i == 3)
//       {
//         // 3 is worth 300 as a triple
//         if(count >= 3)
//         {
//           points += 300;
//         }
//         count = 0;
//       }

//       if(i == 4)
//       {
//         // 4 is worth 400 as a triple
//         if(count >= 3)
//         {
//           points += 400;
//         }
//         count = 0;
//       }

//       if(i == 5)
//       {
//         //5 is worth 50 as single, 500 as triple
//         if(count >= 3)
//         {
//           points += 500;
//           count -= 3;
//         }
//         for(int j=1; j <= count; j++)
//         {
//           points += 50;
//         }
//         count = 0;
//       }

//       if(i == 6)
//       {
//         // 6 is worth 600 as a triple
//         if(count >= 3)
//         {
//           points += 600;
//         }
//         count = 0;
//       }
//     }
//     return points;
//   }

//   public static void Main(string[] args)
//   {
//     Console.WriteLine(Score(new int[] {2, 3, 4, 6, 2}));
//     Console.WriteLine(Score(new int[] {4, 4, 4, 3, 3}));
//     Console.WriteLine(Score(new int[] {2, 4, 4, 5, 4}));
//   }
// }

/*
Strip Comments

Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:

apples, pears # and bananas
grapes
bananas !apples
The output expected would be:

apples, pears
grapes
bananas
The code would be called like so:

string stripped = StripCommentsSolution.StripComments("apples, pears # and bananas\ngrapes\nbananas !apples", new [] { "#", "!" })
result should == "apples, pears\ngrapes\nbananas"
*/

// using System;
// using System.Collections.Generic;
// using System.Linq;
// using System.Text.RegularExpressions;
// public class StripCommentsSolution
// {
//   public static string StripComments(string text, string[] commentSymbols)
//   {
//     // split the string into an array of lines
//     var lineArray = text.Split("\n");

//     // loop through each string. If the char is included in the string array, 
//     // use the index of the char to remove the portion between that index and the end of the line.
//     for(int j=0; j<lineArray.Length; j++)
//     {
//       for(int i = 0; i < lineArray[j].Length; i++)
//       {
//         if(commentSymbols.Any(x => x == lineArray[j][i].ToString()))
//         {
//           Console.WriteLine(lineArray[j][i]);
//           lineArray[j] = lineArray[j].Substring(0, i);
//           lineArray[j] = lineArray[j].TrimEnd();
//           break;
//         }
//           lineArray[j] = lineArray[j].TrimEnd();
//       }
//     }

//     // Join the string array and return it
//     return String.Join("\n", lineArray);
//   }

//   public static void Main(string[] args)
//   {
//     string stripped = StripCommentsSolution.StripComments("apples, pears # and bananas\ngrapes\nbananas !apples", new [] { "#", "!" });
//     Console.WriteLine(stripped);
//   }
// }

/*
The Observed PIN

Alright, detective, one of our colleagues successfully observed our target person, Robby the robber. We followed him to a secret warehouse, where we assume to find all the stolen stuff. The door to this warehouse is secured by an electronic combination lock. Unfortunately our spy isn't sure about the PIN he saw, when Robby entered it.

The keypad has the following layout:

┌───┬───┬───┐
│ 1 │ 2 │ 3 │
├───┼───┼───┤
│ 4 │ 5 │ 6 │
├───┼───┼───┤
│ 7 │ 8 │ 9 │
└───┼───┼───┘
    │ 0 │
    └───┘
He noted the PIN 1357, but he also said, it is possible that each of the digits he saw could actually be another adjacent digit (horizontally or vertically, but not diagonally). E.g. instead of the 1 it could also be the 2 or 4. And instead of the 5 it could also be the 2, 4, 6 or 8.

He also mentioned, he knows this kind of locks. You can enter an unlimited amount of wrong PINs, they never finally lock the system or sound the alarm. That's why we can try out all possible (*) variations.

* possible in sense of: the observed PIN itself and all variations considering the adjacent digits

Can you help us to find all those variations? It would be nice to have a function, that returns an array (or a list in Java/Kotlin and C#) of all variations for an observed PIN with a length of 1 to 8 digits. We could name the function getPINs (get_pins in python, GetPINs in C#). But please note that all PINs, the observed one and also the results, must be strings, because of potentially leading '0's. We already prepared some test cases for you.

Detective, we are counting on you!

For C# user: Do not use Mono. Mono is too slower when run your code.
*/
// using System;
// using System.Collections.Generic;
// using System.Linq;
// public class Kata
// {
//     public static List<string> GetPINs(string observed)
//     {
//       // List of strings to be returned
//       List<string> possiblePins = new List<string>();

//       // Need a rule for each number, there is some multiplication happening depending on the number
//       List<char> one = new List<char> {'1', '2', '4'};
//       List<char> two = new List<char> {'2', '1', '3', '5'};
//       List<char> three = new List<char> {'3', '2', '6'};
//       List<char> four = new List<char> {'4', '1', '5', '7'};
//       List<char> five = new List<char> {'5', '2', '4', '6', '8'};
//       List<char> six = new List<char> {'6', '3', '5', '9'};
//       List<char> seven = new List<char> {'7', '4', '8'};
//       List<char> eight = new List<char> {'8', '5', '7', '9', '0'};
//       List<char> nine = new List<char> {'9', '6', '8'};
//       List<char> zero = new List<char> {'0', '8'};

//       // split observed into a char array
//       char[] observedArray = observed.ToCharArray();

//       // assign each number in the string to a char list
//       List<List<char>> observedList = new List<List<char>>();
//       foreach(char num in observedArray)
//       {
//         if(num == '1')
//         {
//           observedList.Add(one);
//         }
//         if(num == '2')
//         {
//           observedList.Add(two);
//         }
//         if(num == '3')
//         {
//           observedList.Add(three);
//         }
//         if(num == '4')
//         {
//           observedList.Add(four);
//         }
//         if(num == '5')
//         {
//           observedList.Add(five);
//         }
//         if(num == '6')
//         {
//           observedList.Add(six);
//         }
//         if(num == '7')
//         {
//           observedList.Add(seven);
//         }
//         if(num == '8')
//         {
//           observedList.Add(eight);
//         }
//         if(num == '9')
//         {
//           observedList.Add(nine);
//         }
//         if(num == '0')
//         {
//           observedList.Add(zero);
//         }
//       }

//       // loop through each list in the observedList and add each possible pin to the possiblePins list
//       for(int i = 0; i < observedList.Count; i++)
//       {
//         // create the first chars in each possible pin
//         if(i == 0)
//         {
//           foreach(char num in observedList[i])
//           {
//             possiblePins.Add(num.ToString());
//           }
//         }
//         else
//         // add the rest of the chars to each possible pin
//         {
//           List<string> newPossiblePins = new List<string>();
//           foreach(char num in observedList[i])
//           {
//             foreach(string pin in possiblePins)
//             {
//               newPossiblePins.Add(pin + num.ToString());
//             }
//           }
//           possiblePins = newPossiblePins;
//         }
//       }

//       return possiblePins;
//     }
//     public static void Main(string[] args)
//     {
//       string observed = "369";
//       Console.WriteLine(GetPINs(observed).Count);

//       foreach(string pin in GetPINs(observed))
//       {
//         Console.WriteLine(pin);
//       }
//     }
// }

/*
Multiples of 3 or 5

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once.
*/
// using System;
// using System.Collections.Generic;
// using System.Linq;

// public static class Kata
// {
//   public static int Solution(int value)
//   {
//     if (value < 0) return 0;

//     // return sum of array or list of all nums divisible by 3 or 5 below value
//     List<int> list = new List<int>();

//     for(int i = 1; i < value; i++)
//     {
//       if(i % 3 == 0 || i % 5 == 0)
//       {
//         list.Add(i);
//       }
//     }

//     return list.Sum();
//   }

//   public static void Main(string[] args)
//   {
//     Console.WriteLine(Solution(10));
//   }
// }

/*
Get the Middle Character

You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.
*/

// using System;
// using System.Collections.Generic;
// using System.Linq;
// using System.Text;

// public class Kata
// {
//   public static string GetMiddle(string s)
//   {
//     double halfSLength = s.Length / 2;
//     return ((s.Length) % 2 == 1) ? 
//       s.ToCharArray()[(int)Math.Round(halfSLength, MidpointRounding.ToEven)].ToString():
//       s.ToCharArray()[(int)Math.Round(halfSLength, MidpointRounding.ToZero) - 1].ToString() +
//       s.ToCharArray()[(int)Math.Round(halfSLength, MidpointRounding.ToEven)].ToString();
//   }

//   public static void Main(string[] args)
//   {
//     Console.WriteLine(GetMiddle("test"));
//     Console.WriteLine(GetMiddle("testing"));
//     Console.WriteLine(GetMiddle("middle"));

//   }
// }

/*
Isograms

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/

// using System;
// using System.Collections.Generic;
// using System.Linq;
// using System.Text;

// public class Kata
// {
//   public static bool IsIsogram(string str) 
//   {
//     str = str.ToLower();
//     foreach (char c in str)
//     {
//       if (str.IndexOf(c) != str.LastIndexOf(c))
//       {
//         return false;
//       }
//     }

//     return true;
//   }

//   public static void Main(string[] args)
//   {
//     Console.WriteLine(IsIsogram("Dermatoglyphics"));
//     Console.WriteLine(IsIsogram("aba"));
//     Console.WriteLine(IsIsogram("moOse"));
//   }
// }

/*
Find the Parity Outlier

You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)
*/

// using System;
// using System.Collections.Generic;
// using System.ComponentModel.DataAnnotations;
// using System.Linq;

// public class Kata
// {
//     public static int Find(int[] integers)
//     {
//       // loop through first 3 ints too find if the array is mostly odds or mostly evens
//       int odd = 0;
//       int even = 0;
//       for(int i=0; i<3; i++)
//       {
//         _ = ((Math.Abs(integers[i] % 2)) == 0) ? even++ : odd++;
//       }

//       // loop through the entire array and return the number that satisfies the outlier requirement
//       var common = odd > even ? 1 : 0;

//       var result = integers.First(x => 
//         !(Math.Abs(x) % 2 == common)
//       );

//       return result;
//     }

//     public static void Main(string[] args)
//     {
//       Console.WriteLine(Find(new int[]{2, 4, 0, 100, 4, 11, 2602, 36}));// 11
//       Console.WriteLine(Find(new int[]{160, 3, 1719, 19, 11, 13, -21}));// 160
//     }
// }

/*
Counting Duplicates

Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

// using System;
// using System.Linq;
// using System.Collections.Generic;

// public class Kata
// {
//   public static int DuplicateCount(string str)
//   {
//     var charArray = str.ToLower().ToCharArray();

//     // Make an object with the char as the key and count of that char in the dictionary as the value
//     Dictionary<char, int> charCount = new Dictionary<char, int>();

//     foreach(char c in charArray)
//     {
//       if(charCount.ContainsKey(c))
//       {
//         charCount[c]++;
//       }
//       else
//       {
//         charCount.Add(c, 1);
//       }
//     }

//     // Return the count of chars in the dictionary that have a value greater than 1
//     var multiChars = charCount.Where(x => x.Value > 1);

//     return multiChars.Count();
//   }

//   // Functional example below, not mine. Added for learning purposes.

//   // public static int DuplicateCount(string str)
//   // {
//   //   return str.ToLower().GroupBy(c => c).Where(g => g.Count() > 1).Count();
//   // }

//   public static void Main(string[] args)
//   {
//     Console.WriteLine(DuplicateCount("abcde"));// 0
//     Console.WriteLine(DuplicateCount("aabbcde"));// 2
//     Console.WriteLine(DuplicateCount("aabBcde"));// 2
//     Console.WriteLine(DuplicateCount("indivisibility"));// 1
//     Console.WriteLine(DuplicateCount("Indivisibilities"));// 2
//   }
// }

/*
Exes and Ohs

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

// using System.Linq;
// using System;
// public static class Kata 
// {
//   public static bool XO (string input)
//   {
//     var lowerString = input.ToLower();
    
//     return lowerString.Count(x => x == 'x') == lowerString.Count(o => o == 'o');
//   }

//   public static void Main(string[] args)
//   {
//     Console.WriteLine(XO("ooxx"));
//     Console.WriteLine(XO("xooxx"));
//   }
// }

/*
Moving Zeros To The End

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

Kata.MoveZeroes(new int[] {1, 2, 0, 1, 0, 1, 0, 3, 0, 1}) => new int[] {1, 2, 1, 1, 3, 1, 0, 0, 0, 0}
*/

// using System;
// using System.Linq;

// public class Kata
// {
//   public static int[] MoveZeroes(int[] arr)
//   {
//     // loop through the array and count 0's.
//     int count = 0;
//     foreach(int num in arr)
//     {
//       if(num == 0)
//       {
//         count++;
//       }
//     }

//     // filter out the 0's.
//     var result = arr.Where(x => x != 0).ToList();

//     // add count of 0's to end of new array/list
//     List<int> zeros = new();

//     zeros = Enumerable.Repeat(0, count).ToList();

//     result.AddRange(zeros);

//     return result.ToArray();
//   }

//   public static void Main(string[] args)
//   {
//     Console.WriteLine(MoveZeroes(new int[] {1, 2, 0, 1, 0, 1, 0, 3, 0, 1})); //{1, 2, 1, 1, 3, 1, 0, 0, 0, 0}
//   }
// }

/*
Snail Sort

Snail Sort
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

using System;
using System.Linq;

public class SnailSolution
{
   public static int[] Snail(int[][] array)
   {
      // NOTE - odd numbered arrays will add the center number at the end
      //Properties
      // int array to hold the result
      List<int> result = new();

      // int to keep track of horizontal left to right
      int horizontalLtoR = 0;

      // int to keep track of vertical top to bottom
      int verticalTtoB = array.Length;
      verticalTtoB--;

      //1. Add the first line of the array to the result
      result.AddRange(array[horizontalLtoR]);
      horizontalLtoR++;

      //2. Add the end of every array after the first.
      for(int i=horizontalLtoR; i<=verticalTtoB; i++)
      {
        result.Add(array[i][verticalTtoB]);
      }

      //3. Add the last array starting at the 2nd to last number and going backwards
      for(int i=verticalTtoB-1; i>=0; i--)
      {
        result.Add(array[verticalTtoB][i]);
      }

      return result.ToArray();
   }

   public static void Main(string[] args)
   {
      int[][] array =
       {
           new []{1, 2, 3},
           new []{4, 5, 6},
           new []{7, 8, 9}
       };

      var result = Snail(array); //[1,2,3,6,9,8,7,4,5]

      foreach(var num in result)
      {
        Console.WriteLine(num);
      }
   }
}