// DESCRIPTION:
// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

// SOLUTION:

const isDivisible = (n, x, y) => (Number.isInteger(n / x) && Number.isInteger(n / y))? true : false;

console.log(isDivisible(8,3,4));