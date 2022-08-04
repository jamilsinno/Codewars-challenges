// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

//PREP

// passed a string. The string will not be in an array. The string can and will contain elements which are not letters. Ignore all elements that aren't letters. Adjust for the letters whether they are capitalized or not

// Return the position of each letter in the form of a string. Ignore any elements which are not letters. 

function alphabetPosition(text) {
    // take the string and split each element
    const newText = text.split('')
    //create a variable to store the solution
    let ans = []
    //go through the array, make all values lowercase and change all characters using ascii values
    newText.forEach( el => {
        const ascii = el.toLowerCase().charCodeAt()
        // add the position but in string form
        if(ascii >= 97 && ascii <= 122){
            String(ans.push(ascii - 96))
        }
    })
    // return the new array holding your solution
    return ans.join(' ')
}

// examples

console.log(alphabetPosition("The sunset sets at twelve o' clock.")) // "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
console.log(alphabetPosition("The narwhal bacons at midnight.")) // "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"
