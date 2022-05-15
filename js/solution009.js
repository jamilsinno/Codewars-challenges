// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

//PREP

// number, no letters or special characters

// return is a type number indicating which century it is in

function century(year) {
    // divide the year by 100 and round up
    return Math.ceil(year/100)
  }

// exmaples

console.log(century(1705)) // 18 
console.log(century(1900)) // 19
console.log(century(1601)) // 17
console.log(century(2000)) // 20