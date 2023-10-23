/*
Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
*/

using System;

public static string RepeatStr(int n, string s)
{
    var arr = new char[s.Length * n];
    for (var i = 0; i < n; i++)
    {
        s.CopyTo(0, arr, i * s.Length, s.Length);
    }
    return new string(arr);
}

Console.WriteLine(RepeatStr(3, "*"));
Console.WriteLine(RepeatStr(5, "#"));
Console.WriteLine(RepeatStr(2, "ha "));