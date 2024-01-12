/**
 * Everyone knows passphrases. One can choose passphrases from poems, songs, movies names and so on but frequently they can be guessed due to common cultural references. You can get your passphrases stronger by different means. One is the following:

choose a text in capital letters including or not digits and non alphabetic characters,

shift each letter by a given number but the transformed letter must be a letter (circular shift),
replace each digit by its complement to 9,
keep such as non alphabetic and non digit characters,
downcase each letter in odd position, upcase each letter in even position (the first character is in position 0),
reverse the whole result.
Example:
your text: "BORN IN 2015!", shift 1

1 + 2 + 3 -> "CPSO JO 7984!"

4 "CpSo jO 7984!"

5 "!4897 Oj oSpC"

With longer passphrases it's better to have a small and easy program. Would you write it?
 */

function playPass(s, n) {
    //shift each letter by a given number but the transformed letter must be a letter (circular shift) - "z" should become "a"
    let shiftedString = "";

    for(let i=0; i<s.length; i++){
        if(s[i].toUpperCase() !== s[i].toLowerCase()){
            let characterCode = s.codePointAt(i);
            characterCode += n;
            if(characterCode>90){
                characterCode -= 26;
            }
            shiftedString = shiftedString.concat(String.fromCodePoint(characterCode));
        }else{
            shiftedString = shiftedString.concat(s[i]);
        }
    }

    //replace each digit by its complement to 9. Keep non alphabetic and non digit characters.
    for(let i=0; i<shiftedString.length; i++){
        if(Number.isInteger(+shiftedString[i]) && shiftedString[i] !== " "){
            let newNum = (9 - (Number(shiftedString[i])));
            shiftedString = shiftedString.split("");
            shiftedString[i] = newNum.toString();
            shiftedString = shiftedString.join("");
        }
    }

    //Lowercase each letter in odd position, uppercase each letter in even position (the first character is in position 0)
    let casedString = "";
    for(let i=0; i<shiftedString.length; i++){
        if(i % 2 === 0){
            casedString = casedString.concat(shiftedString[i].toUpperCase());
        }else{
            casedString = casedString.concat(shiftedString[i].toLowerCase());
        }
    }

    //reverse the whole result and return
    return casedString.split("").reverse().join("");
}
console.log(playPass("BORN IN 2015!", 1))//"!4897 Oj oSpC"
console.log(playPass("I LOVE YOU!!!", 1))//"!!!vPz fWpM J"
console.log(playPass("MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015", 2))//"4897 NkTrC Hq fT67 GjV Pq aP OqTh gOcE CoPcTi aO"