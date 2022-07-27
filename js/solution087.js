// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

// PREP

// getting passed two integers. The integers will be type number. Do not have to take into account for arrays, strings or empty parameters. Do have to take into account 0s

// Return a number by diving the larger of the two arguments by the smaller one

function remainder(n, m){
    // Divide the larger argument by the smaller argument and return the remainder
    if (n<0 && m === 0|| m<0 && n === 0){
        return 0
    } else if (n === 0 || m === 0){
        return NaN
    } else{
        return n > m ? n % m : m % n
    }
}

// examples

console.log(remainder(17,5)) // 2
console.log(remainder(13, 72)) // 7
console.log(remainder(0,5)) // 0