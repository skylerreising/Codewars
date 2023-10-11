/*
Twice as Old

Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.
*/

function twiceAsOld(dadYearsOld, sonYearsOld) {
  //variable to hold double the son's age
  const doubleAge = sonYearsOld*2
  return Math.sign(dadYearsOld-doubleAge)===1 ? dadYearsOld-doubleAge: dadYearsOld-doubleAge+(2*-(dadYearsOld-doubleAge))
}

console.log(twiceAsOld(36,7))
console.log(twiceAsOld(55,30))