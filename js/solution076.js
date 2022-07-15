// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

// PREP

// Passed an array. The array will contain numbers. You need to check and see if the number is a multiple of its index. Don't have to worry about any strings or special characters. You will have to take into account negative numbers.

// Return an array in the same order of the original with the numbers that were a multiple of its index.

function multipleOfIndex(array) {
    // use a filter method to check if the number is divisible by its index and return the answer.
    return array.filter( (x, i) => Math.abs(x) % (i) === 0 )
  }

// examples

console.log(multipleOfIndex([22, -6, 32, 82, 9, 25])) // [-6, 32, 25]
console.log(multipleOfIndex([68, -1, 1, -7, 10, 10])) // [-1, 10]
console.log(multipleOfIndex([-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68])) // [-85, 72, 0, 68]