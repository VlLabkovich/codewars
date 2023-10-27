// DESCRIPTION:
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
// Note: input will never be an empty string.

// SOLUTION:

function fakeBin(x){
    return [...x].map(el => el < 5? el = 0 : el = 1).join('')
   }
   
   console.log(fakeBin('45385593107843568'))