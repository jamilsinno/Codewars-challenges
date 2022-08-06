
// Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.

// Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"

// "..." are to be replaced by the number, followed and proceeded by a single space. Mind that you need to account for both "year" and "years", depending on the result.


// PREP

// Passed two parameters. Both parameters are integers representing years. The task is to determine how old the person is. First argument is year born, second is the current year

// return a string indicating whether the person age, if they've been born yet or if they're going to be born this year.

function calculateAge(birth, current){
    // use a ternary operator to determine and return the string based on the age.
    return birth < current && current - birth === 1 ? `You are ${current - birth} year old.`:
        birth > current && birth - current === 1 ? `You will be born in ${birth - current} year.`:
        birth < current ? `You are ${current - birth} years old.`:
        birth > current ? `You will be born in ${birth - current} years.`:
        `You will be born this very year!`
}

// examples

console.log(calculateAge(2012, 2016)) // You are 4 years old
console.log(calculateAge(2015, 2016)) // You are 1 year old
console.log(calculateAge(1989, 2016)) // You are 27 years old
console.log(calculateAge(2000, 1999)) // You will be born in 1 year
console.log(calculateAge(2000, 1990)) // You will be born in 10 years
console.log(calculateAge(2000, 2000)) // You will be born in 10 years