// DESCRIPTION:
// Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// SOLUTION:

const reversString = (str) => str.split('').reverse().join("");

console.log(reversString('world'));