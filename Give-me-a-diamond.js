/*
Give me a Diamond

You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

Examples
A size 3 diamond:

 *
***
 *
...which would appear as a string of " *\n***\n *\n"

A size 5 diamond:

  *
 ***
*****
 ***
  *
...that is:

"  *\n ***\n*****\n ***\n  *\n"
*/
function diamond(n){
  //control for even and negative nums
  if(n<1 || n%2===0){
    return null
  }
  
  let diamondStr = `${"*".repeat(n)}`;
  //loop to add strings of spaces and diamonds to a string
  for(let i=n-2; i>0; i-=2){
    diamondStr = `${"*".repeat(i)}\n`+ diamondStr;
    diamondStr = `${" ".repeat((n-i)/2)}`+ diamondStr;
    }
  
  for(let i=n-2; i>0; i-=2){
    diamondStr = diamondStr + "\n" + `${" ".repeat((n-i)/2)}`;
    diamondStr = diamondStr + `${"*".repeat(i)}`;
    }
  return diamondStr + "\n"
}

console.log(diamond(3))
console.log(diamond(5))
console.log(diamond(51))