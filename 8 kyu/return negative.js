// DESCRIPTION:
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
// Notes:
//  - The number can be negative already, in which case no change is required.
//  - Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

// SOLUTION:

function makeNegative(num) {
    return num === 0 ? Math.abs(num) : -Math.abs(num);
}
console.log(makeNegative(-22));