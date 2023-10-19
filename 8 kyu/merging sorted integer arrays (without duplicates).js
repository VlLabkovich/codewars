// DESCRIPTION:
// Write a function that merges two sorted arrays into a single one. The arrays only contain integers.
// Also, the final outcome must be sorted and not have any duplicate.

// SOLUTION:

function mergeArrays(a, b) {
    return [...new Set(([].concat(a,b)).sort((a, b) => a - b))];
}

console.log(mergeArrays([1,5,1,4,2], [5,8,1,9,4]));