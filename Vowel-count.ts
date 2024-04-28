/*
Vowel count

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

export class Kata {
    static getCount(str: string): number {
        let count: number = 0;
        let vowels: string[] = ["a","e","i","o","u"];
      for(let i: number = 0; i<str.length; i++){
        if(vowels.includes(str[i].toLowerCase())){
            count++
        }
      }
      return count;
    }
  }

console.log(Kata.getCount("Skyler Reising"));