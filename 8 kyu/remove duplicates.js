// DESCRIPTION:
// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.
// The order of the sequence has to stay the same.

// SOLUTION:

const distinct = a => ([...new Set(a)]);

console.log(distinct([1, 2, 1, 1, 3, 2]));