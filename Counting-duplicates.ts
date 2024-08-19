/*
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

export function duplicateCount(text: string): number{
    // split text so array map can be used
    let textArray = text.split("");

    // map each char to a key value pair
    // check if the char toLower() exists, if it does, increment it, if it doesn't, add it.
    let characters: Chars = {};

    textArray.forEach(x => {
        x = x.toLowerCase();
        characters.hasOwnProperty(x) ? characters[x]++ : characters[x] = 1;
    });

    let finalNum: number = 0;
    
    for(let num in characters){
        characters[num] > 1 ? finalNum++ : finalNum;
    }

    return finalNum;
  }

export interface Chars {
    [key: string]: number;
}

console.log(duplicateCount("abcde"));//0
console.log(duplicateCount("aabbcde"));//2
console.log(duplicateCount("indivisibility"));//1
console.log(duplicateCount("aA11"));//2
