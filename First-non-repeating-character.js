/*
First non-repeating character
Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.
*/

function first_non_repeating_letter(s) {
    //control for empty string
    if (s.length === 0) {
        return "";
    }

    // Loop through each character in the string
    for (let i = 0; i < s.length; i++) {
        let foundDuplicate = false;

        // Check if the current character is repeated elsewhere in the string
        for (let j = 0; j < s.length; j++) {
            // Ignore comparing the same index
            if (i !== j && s[i].toLowerCase() === s[j].toLowerCase()) {
                foundDuplicate = true;
                break;
            }
        }

        // If no duplicate is found, return the current character
        if (!foundDuplicate) {
            return s[i];
        }
    }

    return "";
}

  console.log(first_non_repeating_letter('sTress'))
  console.log(first_non_repeating_letter('moonmen'))
  console.log(first_non_repeating_letter(''))
  console.log(first_non_repeating_letter('sSsS'))
  console.log(first_non_repeating_letter('a'))
  console.log(first_non_repeating_letter('???????'))