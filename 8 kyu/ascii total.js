// DESCRIPTION:
// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.
// Examples:
// uniTotal("a") == 97
// uniTotal("aaa") == 291

// SOLUTION:

function uniTotal(string) {
    let resultSum = 0;
    for (let i = 0; i < string.length; i++) {
        resultSum += string.charCodeAt(i)
    }
    return resultSum;
}

console.log(uniTotal("aaa"));