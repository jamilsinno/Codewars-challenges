// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

// PREP

// Passed an argument holding an array. The argument will contain numbers. The numbers will be repeating. They numbers will be unordered. The array will not contain any special characters or letters

// Return a string with only unieque elements from the original argument 

function minValue(values){
    // filter out the non-repeating values and place them into the new array. Sort and join the new array
    return +Array.from(new Set(values)).sort().join('')
}

// examples

console.log(minValue([1, 3, 1])) // 13
console.log(minValue([4, 7, 5, 7])) // 457
console.log(minValue([4, 8, 1, 4])) // 148
console.log(minValue([5, 7, 9, 5, 7])) // 579