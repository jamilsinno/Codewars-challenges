// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

// PREP

// Passed two parameters. Both parameters are numbers. Health can drop to below 0 but can't be reported as less than 0.

// Return the amount of health remaining. If health is less than 0, return 0.

function combat(health, damage) {
    // Use a ternary operator to determine if health is less than 0 else return the new health
    return health - damage < 0 ? 0 : health - damage
  }

// examples

console.log(combat(100, 5)) //95
console.log(combat(92, 8)) //84
console.log(combat(20, 30)) //0