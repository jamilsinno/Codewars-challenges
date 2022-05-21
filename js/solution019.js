// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

// PREP

// We are passed two parameters. Parameters are type number. Parameters will not be a string. Will not be an array. Parameters will not be special characters.

// return a value indicating the new position. 

function move (position, roll) {
    // add position and roll and return
    return position + 2 * roll
  }

// examples

console.log(move(0,2)) // 4
console.log(move(4,6)) // 16
console.log(move(3,3)) // 9
console.log(move(2,4)) // 10