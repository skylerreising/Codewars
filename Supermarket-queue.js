/**
 * There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

input
customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
output
The function should return an integer, the total time required.
 */

function queueTime(customers, n) {
    //control for empty array
    if(customers.length === 0){
        return 0
    }
    //if n tills is greater than or equal to array length, return the largest number in the array
    if(n>=customers.length){
        return Math.max(...customers)
    }
    let kiosks = new Array(n).fill(0)

    for(let i =0; i<customers.length; i++){
        let nextKiosk = kiosks.indexOf(Math.min(...kiosks));
        kiosks[nextKiosk] += customers[i];
    }
    return Math.max(...kiosks);
  }

console.log(queueTime([], 1))//0
console.log(queueTime([3,3,2], 2))//5
console.log(queueTime([1,2,3,4], 1))//10
console.log(queueTime([2,2,3,3,4,4], 2))//9
console.log(queueTime([1,2,3,4,5], 100))//5