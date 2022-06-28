// Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

// PREP

// passed an integer in type number. No special characters. No strings. No arrays. 

// Return the number in binary

function toBinary(n){
    return +(n >>> 0).toString(2)
}


// examples

console.log(toBinary(1)) // 1
console.log(toBinary(2)) // 10
console.log(toBinary(3)) // 11
console.log(toBinary(5)) // 101