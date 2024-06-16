/*
Isograms

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/

export function isIsogram(str: string): boolean{
    str = str.toLowerCase();
    let strArray = str.split("");
    let onlyOne: boolean = true;

    strArray.forEach((x,y) => {
        if(y != strArray.lastIndexOf(x.toLowerCase())){
            onlyOne = false;
        }
    })

    return onlyOne;
  }

  console.log(isIsogram("Dermatoglyphics"));
  console.log(isIsogram("aba"));
  console.log(isIsogram("moOse"));
