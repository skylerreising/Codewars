/*
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/

using System;

public class Kata
{
    public static string Remove_char(string s)
    {
        int strEnd = (s.Length)-1;
        string endGone = s.Remove(strEnd);
        return endGone.Remove(0,1);
    }
}

Console.WriteLine(Kata.Remove_char("eloquent"));
Console.WriteLine(Kata.Remove_char("place"));
Console.WriteLine(Kata.Remove_char("ok"));