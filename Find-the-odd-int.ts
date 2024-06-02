export const findOdd = (xs: number[]): number => {
    return xs[xs.map(x => x = ([...xs].filter(y => x === y)).length)
    .findIndex(x => x % 2 === 1)];
  };

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))// 5