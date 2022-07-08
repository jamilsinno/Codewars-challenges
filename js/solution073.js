// This is the first step to understanding FizzBuzz.

// Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.

// Your expected output is an array of positive integers from 1 to n (inclusive).

// Your job is to write an algorithm that gets you from the input to the output.

// PREP

// passed a number. No strings, no special characters

// Return an array with all numbers from 1 to n in order separated by commas.

function preFizz(n) {
    let arr = []
    if(typeof n !== 'number'){
        return NaN
    }else{
        for(let i = 1; i<=n; i++){
            arr.push(i)
        }
    }
    return arr
}

//examples
console.log(preFizz(1)) // [1]
console.log(preFizz(10)) // [1,2,3,4,5,6,7,8,9,10]
console.log(preFizz('a')) // NaN