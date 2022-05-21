// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise :)

// PREP

// We will be passed a number of bullets and a number of dragons. Function will have two parameters. Parameters will not type string or an array no special characters.

// If he survives, return true otherwise return false.

function willHeSurvive(bullets, dragons){
    // if statement checking if dragons <= 2*bullets
    return bullets >= 2*dragons
}

// examples

console.log(willHeSurvive(1,3)) // false
console.log(willHeSurvive(7,3)) // true