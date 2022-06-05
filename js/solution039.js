// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// PREP

// Passed two integers. no strings or arrays. The parameters indicate start and end points. No special characters

// return an array with all elements between the two passed integers.

function between(a, b) {
    // create an empty array to hold the values
    let arr = []
    // write a for loop using a as the start point and b as the end, and push i into the array variable
    for(let i = a; i <= b; i++){
        arr.push(i)
    }
    //return the result
    return arr
  }

//examples

console.log(between(1, 4)) // [1,2,3,4]
console.log(between(-2, 2)) // [-2,-1,0,1,2]