// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// PREP

// We will be passed two parameters. The first parameter is a number and the second a string. The string could be a sentence or a word. n will be a type number

// Return the string with no spaces repeated the number argument number of times. Keep the original format of the string. Uppercase, numbers and special characters can be passed.

const repeatString = (n, string) => {
    // create a variable to store your answer in
    let ans = ""
    // use a for loop to add the string to itself n times
    for(let i = 1; i<=n; i++){
        ans+= string
    }
    return ans
}

// examples

console.log(repeatString(3, "I")) // "III"
console.log(repeatString(5, "Hello")) // "HelloHelloHelloHelloHello"
console.log(repeatString(3, "123")) // "123123123"

