// Use variables to find the sum of the goals Messi scored in 3 competitions

// PREP 

// passed 3 parameters. Parameters indicate what league Messi scored goals. Parameters passed will be strictly numbers. No arrays.

// Return the total number of goals in a season. Type number

function totalGoals(laLiga, champions, copa){
    // check to see if any numbers passed are less than 0 and set to 0 else return the sum
    return laLiga < 0 ? champions + copa:
    champions < 0 ? laLiga + copa:
    copa < 0 ? laLiga + champions:
    laLiga + champions + copa
}

console.log(totalGoals(10,11,12)) // 33
console.log(totalGoals(12,11,12)) // 34
console.log(totalGoals(0,0,0)) // 0
console.log(totalGoals(-1,0,0)) // 0