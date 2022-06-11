// We want an array, but not just any old array, an array with contents!

// Write a function that produces an array with the numbers 0 to N-1 in it.

// PREP

// passed a number. Must fill the array with numbers up until N-1. No special characters will be passed and no strings. 

// return the array with the numbers inserted

const arr = (n) => {
    // check to see if the value passed is a number
    if(typeof n !== 'number'){
        return []
    }

    // create an empty array and push the values into it
    let array = []
    for(let i = 0; i<n; i++){
        array.push(i)
    }
    return array
}

// examples

console.log(arr(4)) // [1,2,3]
console.log(arr(5)) // [1,2,3,4]
console.log(arr('a')) // NaN
console.log(arr('$')) // NaN
