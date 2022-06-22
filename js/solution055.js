// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

// PREP

// Passed an array and a value. Array can contain many things, just need to ensure that the value is included in the array.

// Return true or false based on whether the value is in the given array.

function check(a, x) {
    // use includes method to determine if the value x is in array a
    return a.includes(x)
  }

// examples

console.log(check([1,2,3], 3)) // true
console.log(check([1,2,3], 4)) // false