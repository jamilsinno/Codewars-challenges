// Given an array of integers, return a new array with each value doubled.

// PREP

// passed an array. The array contains numbers. No strings or special characters. No arrays within the array.

// return a new array that has each value doubled.

function maps(x){
    return x.map(x => 2*x)
}

// example

console.log(maps([1,2,3])) // [2,4,6]