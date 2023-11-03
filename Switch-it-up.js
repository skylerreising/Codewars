/*
Switch it up
When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".

*/
function switchItUp(number){
  const numWords = ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"]
  return numWords[number]
}
console.log(switchItUp(0))
console.log(switchItUp(2))
console.log(switchItUp(3))
console.log(switchItUp(4))