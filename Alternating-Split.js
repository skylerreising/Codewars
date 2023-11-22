/**
 * Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

Examples:

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
Together with the encryption function, you should also implement a decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, return the first argument without changes.
 */

function encrypt(text, n) {
    //if n<1, return text
    if(text===null || n<1){
        return text;
    }
    //loop by spliting the string, making two new strings using odd & even indecies, then concatenating them together
    let splitText = text.split("");

    //I think I need a loop inside a loop
    let together = [];
    for(let i=1; i<=n; i++){
        for(let i=0; i<splitText.length; i++){
            if(i%2!==0){
                together.push(splitText[i]);
            }
        }
        for(let i=0; i<splitText.length; i++){
            if(i%2===0 || i===0){
                together.push(splitText[i]);
            }
        }
        splitText = together;
        together = [];
    }
    return splitText.join("");
}

function decrypt(encryptedText, n) {
    //if n<1, return text
    if(encryptedText===null || n<1){
        return encryptedText;
    }
    //Split the string then divide the elements into two different arrays in the middle
    let splitText = encryptedText.split("");
    let evens = [];
    let odds = [];

    //loop to put the arrays together
    let together = [];
    for(let i=1; i<=n; i++){
        //use splitText.length to half the array
        for(let i=0; i<Math.floor(splitText.length/2); i++){
            odds.push(splitText[i]);
        }
        for(let i=Math.floor(splitText.length/2); i<splitText.length; i++){
            evens.push(splitText[i]);
        }
        //put odds and evens into together in order
        for(let i=0; i<evens.length; i++){
            together.push(evens[i]);
            if(odds[i]!==undefined){
            together.push(odds[i]);
            }
        }
        splitText = together;
        together = [];
        evens = [];
        odds = [];
    }
    return splitText.join("");
}

// console.log(encrypt("This is a test!", 0));
// console.log(encrypt("This is a test!", 1));//"hsi  etTi sats!"
// console.log(encrypt("This is a test!", 2));//"s eT ashi tist!"

console.log(decrypt("This is a test!", 0));
console.log(decrypt("hsi  etTi sats!", 1));//"This is a test!"
console.log(decrypt("s eT ashi tist!", 2));//"This is a test!"