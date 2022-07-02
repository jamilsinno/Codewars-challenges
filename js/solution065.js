// We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

// PREP

// Passed an arugment that is a number as a number. Based on that number we will determine that status of whether or not the number requires plural grammar. 

// Return true if the number requires plural grammer or false if the program doesn't.

function plural(num){
    // determine if the number is 1 and return true otherwise false
    return num === 1 ? false : true
}

// examples

console.log(plural(0)) // True
console.log(plural(0.5)) // True
console.log(plural(1)) // false
console.log(plural(100)) // True
console.log(plural(Infinity)) // True