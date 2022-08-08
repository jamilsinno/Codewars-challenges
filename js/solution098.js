// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// PREP

// passed a number n. the argument will be type integer. Don't need to take into account an array or any special characters or strings.

// Return an array with elements from 2^0 to 2^n

function powersOfTwo(n){
    // create a variable to hold your elements
    let ans = []

    //use a loop to go through and push your elements into the loop
    for (let i = 0; i <= n; i++) {
        ans.push(2**i)
    }

    return ans
}

// examples

console.log(powersOfTwo(0)) // [1]
console.log(powersOfTwo(2)) // [1, 2, 4]
console.log(powersOfTwo(1)) // [1, 2]