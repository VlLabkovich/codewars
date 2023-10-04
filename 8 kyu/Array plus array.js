// DESCRIPTION:
// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

// SOLUTION:

function arrayPlusArray(arr1, arr2) {
    const sumArr = [].concat(arr1, arr2)
    return sumArr.reduce((arr1, arr2) => arr1 + arr2)
}

console.log(arrayPlusArray([5,2,3], [1,3,6]));