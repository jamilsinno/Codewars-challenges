// Your task is to make function, which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

// If begin value is greater than the end, function should returns 0

// PREP

// passed three arugments. Each argument will represent a number. The first number is the beginning, the second is the end. We  will increment using our third number

// return the final value of the sum.

const sequenceSum = (begin, end, step) => {
    // create a variable to hold the sum
    let sum = 0
    // use a loop with i starting at begin, until and increment using step
    for(let i = begin; i<=end; i+=step){
        sum+=i
    }
    return sum
  };

// examples

console.log(sequenceSum(2,6,2)) //12
console.log(sequenceSum(1,5,1)) // 15
console.log(sequenceSum(1,5,3)) // 5