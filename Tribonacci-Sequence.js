/**
 * Well met with Fibonacci bigger brother, AKA Tribonacci.

As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

[1, 1 ,1, 3, 5, 9, 17, 31, ...]
But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)
 */

function tribonacci(signature,n){
    //a 3 number array signature is passed in along with n which is the length of the return array. The return array contains the first 3 numbers from the signature and every element after is the sum of the 3 elements before it.

    //if n<1
    if(n<1){
        return [];
    }

    //initiate a return array and populate it with nums from signature
    let trib = [];
    for(let i=0; i<signature.length; i++){
        trib.push(signature[i]);
    }
    
    //if n<3, loop to pop trib
    if(n===2){
        trib.pop();
        return trib;
    }else if(n===1){
        trib.pop();
        trib.pop();
        return trib;
    }

    //loop to populate trib
    for(let i=2; i<n-1; i++){
        trib.push(trib[i-2]+trib[i-1]+trib[i]);
    }
    return trib;
  }

  console.log(tribonacci([1,1,1], 10))
  console.log(tribonacci([0,0,1], 10))
  console.log(tribonacci([1,1,1], 1))
  console.log(tribonacci([300,200,100], 0))
  console.log(tribonacci([20,4,9], 2))
  console.log(tribonacci([16,19,20], 3))