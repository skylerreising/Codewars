"use strict";
/*
Vowel count

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kata = void 0;
var Kata = /** @class */ (function () {
    function Kata() {
    }
    Kata.getCount = function (str) {
        var count = 0;
        var vowels = ["a", "e", "i", "o", "u"];
        for (var i = 0; i < str.length; i++) {
            if (vowels.includes(str[i].toLowerCase())) {
                count++;
            }
        }
        return count;
    };
    return Kata;
}());
exports.Kata = Kata;
console.log(Kata.getCount("Skyler Reising"));
