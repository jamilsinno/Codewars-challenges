// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// PREP

// passed a string. Can contain any form of characters. Must remove the first and the last characters. String will be at least 3 characters

// Return the string with the removed characters.

function removeChar(str){
    // split the string and remove the first and last index and join it.
    return str.split('').splice(1,str.length-2).join('')
   
   };

// example

console.log(removeChar('eloquent')) // loquen
console.log(removeChar('country')) // ountr
console.log(removeChar('person')) // erso
console.log(removeChar('place')) // lac
console.log(removeChar('ooopsss')) // oopss