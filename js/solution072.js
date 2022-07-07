// Define a function that removes duplicates from an array of numbers and returns it as a result.

// PREP

// Passed an array with duplicating elements.

// Return an array with every duplicated element removed.

function removeDuplicates(arr){
    let newArr = Array.from(new Set(arr))
    return newArr
}

// examples

console.log(removeDuplicates([1])) //[1]
console.log(removeDuplicates([1,2])) //[1,2]
console.log(removeDuplicates([1,1,3])) //[1,3]