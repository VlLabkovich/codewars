// DESCRIPTION:
// Create a function that always returns true for every item in a given list. 
// However, if an element is the word "flick", switch to always returning the opposite boolean value.

// Notes:
// - "flick" will always be given in lowercase.
// - A list may contain multiple flicks.
// - Switch the boolean value on the same element as the flick itself.

// SOLUTION:

function flickSwitch(arr) {
    let boolean = true;
    return arr.map(el => {
        if (el === 'flick') {
            boolean = !boolean;
        };
        return boolean;
    });
}
console.log(flickSwitch(["codewars", "flick", "code", "wars", "flick"]));