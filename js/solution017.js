// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.

// PREP

// The parameter passed will be a number. No strings are passed. No special characters. No arrays or objects being passed either.

// Return true if the number is even else return false

function testEven(n) {
    //use the mod operand to determine if there is remainder and return true
    return n % 2 === 0
}

// examples

console.log(testEven(0)) // true
console.log(testEven(0.5)) // false
console.log(testEven(1)) // false
console.log(testEven(2)) // true
console.log(testEven(-4)) // true