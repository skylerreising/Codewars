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
using System;
using System.Collections.Generic;

public class FizzBuzz
{
	public static string[] GetFizzBuzzArray(int n)
	{
    string[] result = new string[n];
    for(int i=0; i<=n-1; i++)
    {
        int num = i+1;

        if(num % 3 == 0 && num % 5 == 0)
        {
            result[i] = "FizzBuzz";
        }
        else if(num % 3 == 0)
        {
            result[i] = "Fizz";
        }
        else if(num % 5 == 0)
        {
            result[i] = "Buzz";
        }
        else
        {
            result[i] = num.ToString();
        }
    }
    return result;
	}

    public static void Main(string[] args)
    {
        int n = 100;
        string[] fizzBuzzArray = GetFizzBuzzArray(n);

        foreach(string element in fizzBuzzArray)
        {
            Console.WriteLine(element);
        }
    }
}


