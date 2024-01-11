// See https://aka.ms/new-console-template for more information
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
using System;

public class Kata
{
  public static int SquareDigits(int n)
  {
    //Turn the int into a string
    string numString = n.ToString();

    //Declare an empty result string
    string resultString = "";

    //loop through each char in the string, convert to an int, square it, convert back to string, and concatenate to resultString
    foreach (char num in numString)
    {
      int digit = Convert.ToInt32(num.ToString());

      digit *= digit;

      resultString += digit.ToString();
    }
    return Convert.ToInt32(resultString);
  }

  public static void Main(string[] args)
  {
    Console.WriteLine(SquareDigits(9119));//811181
    Console.WriteLine(SquareDigits(765));//493625
  }
}