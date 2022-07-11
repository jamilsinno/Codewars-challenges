// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// PREP

// Passed 3 arguments. The three arguments are in numbers representing hours, minutes and seconds.

// Return the time in milliseconds

function time(h,m,s){
    //convert the time to seconds
    const hS = h *3600
    const mS = m * 60

    // return the seconds as milliseconds
    return (hS + mS + s)*1000
}

// examples

console.log(time(0,1,1)) //61000
console.log(time(1,1,1)) //3661000
console.log(time(0,0,0)) //0
console.log(time(1,0,1)) //3601000
console.log(time(1,0,0)) //3600000