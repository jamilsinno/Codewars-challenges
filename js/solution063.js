// Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.

// Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.

// PREP

// Passed a string with numbers, special characters and letters. No arrays are going to be passed.

// Return the string where you remove all the numbers and special characters in tact and in order.

function stringClean(s){
    //create two variables to cross reference letters and special characters
    let letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let specChar = `~#$%^&!@*():;"'.,? `.split('')

    // Split the argument, filter out characters included in either variable, join it and return
    return s.split('').filter( el => letters.includes(el.toLowerCase()) || specChar.includes(el.toLowerCase())).join('')
}

// examples

console.log(stringClean("")) // ""
console.log(stringClean("123456789")) // ""
console.log(stringClean("E3at m2e2!!")) // "Eat me!!"