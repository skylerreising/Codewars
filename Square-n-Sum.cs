/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9
*/
using System;
public static class Kata
{
  public static int SquareSum(int[] numbers)
  {
    int sum = 0;
    foreach (int number in numbers)
    {
        sum += number*number;
    }
    return sum;
  }
}

Console.WriteLine(Kata.SquareSum(new int[] {1,2,2}));
Console.WriteLine(Kata.SquareSum(new int[] {5,3,4}));