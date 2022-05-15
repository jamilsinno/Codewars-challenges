// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

// PREP

// an array is passed through
// if array is all negative, return 0
// if array is empty return, return 0

// return the max value of the sequential subarray 

const maxSequence = function(arr){
    // check if the array is empty and return 0
    if(arr === []){
        return 0
    }

    // check if all positive
    const isAllPositive = (x) => x >= 0

    if(arr.every(isAllPositive)){
        return arr.reduce( (cv, pv) => cv + pv, 0)
    }

    let maxArr = []
    
    // loop through the array starting at the 0 index.
    for(let i = 0; i < arr.length; i++){
        // start at the next index and reduce that subarray and compare to maxArr.
        for(let j = i+1; j<arr.length; j++){
            if(arr.slice(i, j + 1 ).reduce( (cv, pv) => cv + pv, 0) > maxArr.reduce((cv, pv) => cv + pv, 0) && arr.slice(i, j + 1 ).reduce( (cv, pv) => cv + pv, 0) > Math.max(...arr)){
                //
                maxArr = arr.slice(i, j +1 )
            }
        }
    }
    if(Math.max(...arr) > maxArr){
        return Math.max(...arr)
    }
    return maxArr.reduce((cv, pv) => cv + pv, 0)
}

// examples

console.log(maxSequence([])) // 0
console.log(maxSequence([1,2,3,4])) // 10
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])) // [4, -1, 2, 1] --> 6
console.log(maxSequence([ 32, -17, -5, -7, -32, 5, 33, -48, 44, -18 ])) // 44