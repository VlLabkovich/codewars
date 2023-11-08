// DESCRIPTION:
// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase.
// As usual, your function/method should be pure, i.e. it should not mutate the original string.

// SOLUTION:

String.prototype.toAlternatingCase = function () {
    let objStr = Object.values(this);
    let newArr = objStr.map((el) => el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase());
    return newArr.join('');
}

console.log("hElLo WoRlD".toAlternatingCase());