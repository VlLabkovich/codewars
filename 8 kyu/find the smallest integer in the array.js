// DESCRIPTION:
// Given an array of integers your solution should find the smallest integer.

// SOLUTION:

class SmallestIntegerFinder {
   findSmallestInt(args) {
        return Math.min(...args);
    };
};
const object = new SmallestIntegerFinder();

console.log(object.findSmallestInt([78, 0, 232, -12, 8, -14]));

