// DESCRIPTION:
// Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:
// - When positives and positives interact, they remain positive.
// - When negatives and negatives interact, they remain negative.
// - But when negatives and positives interact, they become neutral, and are shown as the number 0.
// Notes:
// The two strings will be the same length.
// Examples:
// ("--++--", "++--++") ➞ "000000"
// ("-+-+-+", "-+-+-+") ➞ "-+-+-+"
// ("-++-", "-+-+") ➞ "-+00"

// SOLUTION:

function neutralise(s1, s2) {
    return s1.split('').reduce((acc, cur, index)=> acc+=cur === s2[index] ? cur : 0,'');
}

console.log(neutralise("++--++", "--++--"));