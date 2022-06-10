// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// PREP

// The parameter given is an age between 0-9 type string. There is no need to check for strings, special characters or arrays. Single digit will be passed

// return the number in type number

function getAge(inputString){
    // return the girl's correct age as an integer
    return inputString[0]
    }

// examples

console.log(getAge('4'), typeof getAge()) // 4