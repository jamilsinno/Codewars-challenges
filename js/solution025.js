//Write a function that checks if a given string (case insensitive) is a palindrome.

// PREP

// We will be passed a string containing no numbers and no special characters. The string will have capitals.

// return a boolean indicating whether the string passed was a palindrome or not

const isPalindrome = (string) => {
    return string.toLowerCase().split('').join('') === string.toLowerCase().split('').reverse().join('')
}


// examples

console.log(isPalindrome('a')) // true
console.log(isPalindrome('aba')) // true
console.log(isPalindrome('Cdsv')) // false