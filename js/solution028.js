// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

// The four operators are "add", "subtract", "divide", "multiply".

// PREP

// passed three parameters, two numbers and a string. Depending on the string, we need to run a specific line of code (conditional). The two numbers are always positive, can be 0. String will have no capital letters, no punctuation, no special characters

// return the solution based on the string passed.

function arithmetic(a, b, operator){
    //your code here!
    switch(operator){
        case 'add':
            return a+b
            break
        case 'subtract':
            return a-b
            break
        case 'divide':
            return a/b
            break
        case 'multiply':
            return a*b
            break
        default:
            console.log('try again')
            break
    }
  }


// examples

console.log(arithmetic(1, 2, "add")) // 3
console.log(arithmetic(1, 2, "subtract")) // -1
console.log(arithmetic(1, 2, "divide")) // 0.5
console.log(arithmetic(1, 2, "multiply")) // 2