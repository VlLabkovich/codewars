// DESCRIPTION:
// Find the mean (average) of a list of numbers in an array.

// SOLUTION:

const findAverage = nums => nums.reduce((acc, cur) => (acc + cur), 0) / nums.length;

console.log(findAverage([3, 7, 2, 4]));