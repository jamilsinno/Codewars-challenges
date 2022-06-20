// Since we cannot define keywords in Javascript (well, at least I don't know how to do it), your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions evaluate to true, false otherwise.

// Passed two parameters. The parameters are strings indicating true or false.

// Return true if true is present, otherwise false.

function xor(a, b) {
    // ternary operator to check if a value is true.
    return  !(a === true && b === true) && (a === true || b === true)
  }

// examples

console.log(xor(true, false)) // true
console.log(xor(false, false)) // false
