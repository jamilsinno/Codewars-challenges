// Given a string str, reverse it and omit all non-alphabetic characters.

// PREP

// passed a parameter with type string. The paramerter will contain letters, numbers and special characters. Filter out the numbers and characters. Keep the order the same, but reversed.

// return the reversed string without any numbers or special characters

function reverseLetter(str) {
    // Set up a reference for alphabet
    let alpha = 'abcdefghijklmnopqrstuvwxyz'.split('')
    
    // run a check on str to filter out values in both str and alpha
    let newStr = str.split('').filter( el => alpha.includes(el) )

    // reverse the string, join and return 
    return newStr.reverse().join('')
  }


// examples

console.log(reverseLetter('krishan')) // 'nahsirk'
console.log(reverseLetter('ultr53o?n')) // nortlu
console.log(reverseLetter("ab23c")) // cba
console.log(reverseLetter('krish21an')) // nahsirk