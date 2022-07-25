// Write a function that returns a string in which firstname is swapped with last name.

// PREP

// passed a name. The name will be type string. There can be special characters and numbers. The string will be separated using a space

// Return the string, with its original characters, in reversed order.

function reverseName(name){
    // split the function where the space is, reverse the array and join it with a space
    return name.split(' ').reverse().join(' ')
}

// examples

console.log(reverseName('john McClane')) // McClane john