// Complete the function which converts a binary number (given as a string) to a decimal number.

// PREP

// passed a binary number. The binary is in a string format. Must change it to its decimal equivalent

// return the decimal equivalent of the binary.

function binToDec(bin){
    // use the XOR operator to convert to number
    return parseInt(bin, 2)
}

// examples

console.log(binToDec("1")) //1
console.log(binToDec("0")) //0
console.log(binToDec("1001001")) //73