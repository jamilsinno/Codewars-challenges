// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// PREP

// will be given a string. Must conver the string to a number, then determine if the number is below 5 and replace it with a 0 otherwise 1. String passed won't have special characters or arrays.

// Return a fake binary in the form of a string

function fakeBin(x){
    //take the argument split it then run a conditional on it, put it in a new array and join  then return the answer
    return x.split('').map( x => +x < 5 ? 0 : 1).join('')
}

// examples

console.log(fakeBin('45385593107843568')) // '01011110001100111'
console.log(fakeBin('509321967506747')) //'101000111101101'
console.log(fakeBin('366058562030849490134388085')) //'011011110000101010000011011'