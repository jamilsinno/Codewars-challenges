// Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).

// Write a function that given a floor in the american system returns the floor in the european system.

// With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.

// Basements (negatives) stay the same as the universal level.

// PREP

// we are getting passed a value representing an american building floor. Convert to european. Always be a value, never a string or an array. No special characters.

// return a value representing the floor level in Europe.

function getRealFloor(n) {
    //run a conditional to check the floor number, if greater than or equal to 13 subtract two, else subtract 1. Must be greater than 0
    
    if(n>= 13 && n>0){
        return n-2
    }else if(n>0){
        return n-1
    }else{
        return n
    }
}

// examples

console.log(getRealFloor(1)) // 0
console.log(getRealFloor(5)) // 4
console.log(getRealFloor(15)) // 13

