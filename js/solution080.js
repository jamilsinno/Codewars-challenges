// Given an integer as input, can you round it to the next (meaning, "higher") multiple of 5?

// passed an integer. no strings, special characters or arrays to worry about.

// return the number rounded to the nearest 5.

function round(n){
    return Math.ceil(n/5)*5
}

//examples
console.log(round(2)) //5
console.log(round(0)) //0
console.log(round(-1)) //0
console.log(round(-10)) //-10