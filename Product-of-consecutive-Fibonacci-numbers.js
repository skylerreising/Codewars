/*
Product of consecutive Fib numbers
The Fibonacci numbers are the numbers in the following integer sequence (Fn):

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

such as

F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

F(n) * F(n+1) = prod.

Your function productFib takes an integer (prod) and returns an array:

[F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
depending on the language if F(n) * F(n+1) = prod.

If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prodyou will return

[F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
F(n) being the smallest one such as F(n) * F(n+1) > prod.

Some Examples of Return:
(depend on the language)

productFib(714) # should return (21, 34, true), 
                # since F(8) = 21, F(9) = 34 and 714 = 21 * 34

productFib(800) # should return (34, 55, false), 
                # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
-----
productFib(714) # should return [21, 34, true], 
productFib(800) # should return [34, 55, false], 
-----
productFib(714) # should return {21, 34, 1}, 
productFib(800) # should return {34, 55, 0},        
-----
productFib(714) # should return {21, 34, true}, 
productFib(800) # should return {34, 55, false}, 
Note:
You can see examples for your language in "Sample Tests".
*/
function productFib(prod){
  //loop through fib numbs
  let fibNums = [0,1];
  let i=0;
  //while loop to push numbers to the fibNums array
  while(fibNums[i]*fibNums[i+1]<=prod){
    fibNums.push(fibNums[i]+fibNums[i+1])
    //if the product of F(n)*F(n+1) equals prod, put those numbers into an array along with true
    if(fibNums[i]*fibNums[i+1]===prod){
      return [fibNums[i], fibNums[i+1], true]
    }
    i++
  }
    //if the product of F(n)*F(n+1) is greater than prod, put those numbers into an array long with false
  return [fibNums[fibNums.length-2],fibNums[fibNums.length-1],false]
}
console.log(productFib(4895))// [55, 89, true]
console.log(productFib(800))// [34, 55, false]
console.log(productFib(447577))//[610,987,false]