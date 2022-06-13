// Now you have to write a function that takes an argument and returns the square of it.

// Prep

// I have to write out a function. The function will take in a number. It doesn't need to be set up for more than that.

// Return the square of the number

function square(n){
    // check to see if the parameter passed is a number
    if(typeof n !== 'number'){
        return NaN
    }else{ // if it is a number, square it
        return n * n
    }
}

// examples

console.log(square(2)) //4
console.log(square('a')) //NaN
console.log(square(-2)) //4