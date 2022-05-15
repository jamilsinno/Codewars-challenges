// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

// PREP

// passed will be string, floats included, negatives included
// return will be true or false

function pin(num){
    // check to see if there are decimals or negative numbers
    const numbers = '0123456789'.split('') 
    const arr = num.split('')

   // make sure everything in the pin is a number by checking against numbers and ensuring 0-9
    for(let i = 0; i<num.length; i++){
        if(numbers.indexOf(arr[i]) === -1){
            return false
        }
    }

    // check the length of the pin and make sure it's 4 or 6 characters
    if(arr.length === 4 || arr.length ===6){
        return true
    }
    return false
}

//examples

console.log(pin('1234')) // true
console.log(pin('1.23')) // false
console.log(pin('-1234')) // false
console.log(pin('123456')) //true
console.log(pin('a23456')) //false
console.log(pin('23456')) //false
