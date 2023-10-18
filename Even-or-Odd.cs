// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
using System;


  public class SolutionClass
  {
    public static string EvenOrOdd(int number)
    {
      if(number % 2 == 0)
      {
        return "Even";
      }else
      {
        return "Odd";
      }
    }
  }


Console.WriteLine(SolutionClass.EvenOrOdd(7));
Console.WriteLine(SolutionClass.EvenOrOdd(42));