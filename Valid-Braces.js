/**
 * Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.

Examples
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False
 */
function validBraces(braces){
    //use a stack to keep track
    let stack = [];

    //use an object to check if items should be popped from the stack
    let braceObj = {
        ")" : "(",
        "}" : "{",
        "]" : "["
    };

    //loop through the string to push to or pop from the stack
    for(let i=0; i<braces.length; i++){
        let currentBrace = braces[i];
        if(currentBrace === "(" || currentBrace === "{" || currentBrace === "["){
            stack.push(currentBrace);
        }else if(stack[stack.length - 1] === braceObj[currentBrace]){
            stack.pop();
        }else{
            return false;
        }
    }
    return stack.length === 0;
}
console.log(validBraces("(){}[]"));
console.log(validBraces("([{}])"));
console.log(validBraces("(}"));
console.log(validBraces("[(])"));
console.log(validBraces("[({})](]"));