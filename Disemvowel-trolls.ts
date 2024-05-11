/*
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/

export class Kata {
    static disemvowel(str: string): string {
        console.log(str);
        //vowel array for comparison
        const vowels: string[] = ["a", "e", "i", "o", "u"]

        //loop through str
        for(let i:number = 0; i<str.length; i++){
        //if lowercase char is vowel replace with ""
            if(vowels.includes(str[i].toLowerCase())){
                str = str.replace(str[i], "")
                i--;
            }
        }

        return str;
    }
}
console.log(Kata.disemvowel("This website is for losers LOL!"))