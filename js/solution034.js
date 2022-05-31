// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// PREP

// passed an array of integers. If the array is empty, or no array is passed, return an empty array. 

// return answer should contain the total number of positive elements appearing in the array and a sum of all the negative elements in the array.

function countPositivesSumNegatives(input) {
    // if the array is empty, return an empty array
    console.log(input)
    if( !input || input.length === 0){
        return []
    }

    let count = 0
    let sum = 0

    for(let i = 0; i<input.length; i++){
        if(input[i]>0){
            count++
        }else{
            sum += input[i]
        }
    }

    return [count, sum]
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])) // [10, -65]
console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14])) // [8, -50]