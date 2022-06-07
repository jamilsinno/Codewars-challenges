// Make a function that receive age, and return what they drink.

// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.

// PREP

// we will be receiving a number and depending on the number, translate that to an age and determine what drink this person gets. Age categories are <= 14, <= 18, <=21 & >21

// return a string with what the person will drink

function peopleWithAgeDrink(old) {
    return old <0 ? 'inset valid age':
    old <= 14 ? 'drink toddy' :
    old <= 18 ? 'drink coke' :
    old <= 21 ? 'drink beer':
    'drink whisky'
  }

// example

console.log(peopleWithAgeDrink(10)) // toddy
console.log(peopleWithAgeDrink(15)) // coke
console.log(peopleWithAgeDrink(21)) // beer
console.log(peopleWithAgeDrink(22)) // whiskey