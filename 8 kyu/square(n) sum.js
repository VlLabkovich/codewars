// DESCRIPTION:
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// SOLUTION:

const squareSum = numbers => (numbers.map(el => Math.pow(el, 2))).reduce((acc, cur) => acc + cur, 0);

console.log(squareSum([1,2,2]));