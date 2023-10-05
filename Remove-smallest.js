function removeSmallest(numbers) {
    // Control for empty array
    if (numbers.length === 0) {
      return [];
    }
  
    // Find the minimum value in the array
    let minNum = Math.min(...numbers);
  
    // Create a flag to track whether the first occurrence of the smallest element has been removed
    let removed = false;
  
    // Create a new array with the same elements, but skip the first occurrence of the smallest element
    let newArr = numbers.filter(num => {
      if (num === minNum && !removed) {
        removed = true;
        return false;
      }
      return true;
    });
  
    return newArr;
  }
  
  
  console.log(removeSmallest([1,2,3,4,5]))
  console.log(removeSmallest([5,3,2,1,4]))
  console.log(removeSmallest([2,2,1,2,1]))
  console.log(removeSmallest([]))