// DESCRIPTION:
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// SOLUTION:

const countSheeps = (sheep) => {
    let count = 0;
    sheep.forEach(el => el === true? count+=1 : false);
    return count;
}

console.log(countSheeps([true,true,true,false,true,true,true,true,true,false,true,false,true,false,false,true,true,true,true,true,false,false,true,true]));