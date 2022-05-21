// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// PREP

// a number is being passed. Value type number. Cannot be a special character. Not an array or an object. Non negative number and greater than 0

// Return the sum in type number



function summation(num){
    // initialize a variable to hold the sum
    let sum = 0

    //use a loop to add values to the sum variable
    for(let i = 0; i<=num; i++){
        sum += i
    }
    return sum
}

// examples

console.log(summation(2)) //3
console.log(summation(8)) //36
