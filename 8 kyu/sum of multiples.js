// DESCRIPTION:
// Find the sum of all multiples of n below m.
// n and m are natural numbers (positive integers)
// m is excluded from the multiples.

// SOLUTION:

function sumMul(n, m) {
    let sum = 0;
    for (let i = n; i < m; i++) {
        if (i % n === 0) {
            sum += i;
        }
    }
   return (n && m) <= 0 ? "INVALID" : sum;
}

console.log(sumMul(2,9));
console.log(sumMul(2,-9));