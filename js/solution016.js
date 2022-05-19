// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// PREP

// all inputs will be strings. Strings passed will represent a number. Blank strings can be passed.

// Return a value from the string passed

const stringToNumber = function(str){
    // convert the string to a number
    return +str;
  }

// examples

console.log(stringToNumber("1234")) // 1234
console.log(stringToNumber("605")) // 605
console.log(stringToNumber("1405")) // 1405
console.log(stringToNumber("-7")) // -7