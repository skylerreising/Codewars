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

using System;

public class Kata
{
  public static string AreYouPlayingBanjo(string name)
  {
    if(name.Substring(0,1).ToUpper() == "R")
    {
      return $"{name} plays banjo";
    }else
    {
      return $"{name} does not play banjo";
    }
  }

  public static void Main(string[] args)
  {
    Console.WriteLine(AreYouPlayingBanjo("Martin"));
    Console.WriteLine(AreYouPlayingBanjo("Rikke"));
  } 
}