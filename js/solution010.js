// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained

//PREP

// parameters will always be passed in order. 
// numbers are between 1 and 10
// number can be repeated

// return the max value in a type number

function expressionMatter(a, b, c) {
    // make the different variations and place in an array
    // (a + b) * c
    // a + (b * c)
    // a * b * c
    // (a * b) + c
    // a + b + c
    // a * (b + c)

    const arr = [(a + b) * c,
        a + (b * c),
        a * b * c,
        (a * b) + c,
        a + b + c,
        a * (b + c)]

    return Math.max(...arr)
    
  }

// examples

console.log(expressionMatter(2, 1, 2)) // 6
console.log(expressionMatter(2, 1, 1)) // 4
console.log(expressionMatter(1, 1, 1)) // 3
console.log(expressionMatter(1, 2, 3)) // 9
console.log(expressionMatter(1, 3, 1)) // 5 
console.log(expressionMatter(2, 2, 2)) // 8