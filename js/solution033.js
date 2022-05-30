// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

// PREP

// I will be passed a string of varying characters. If the string is upper case, make it lower case and vice versa

// Return the changed string

String.prototype.toAlternatingCase = function () {
    // split the string and run a map loop on every element using a ternary operator and return
    return this.toString().split('').map( (x) => x === x.toLowerCase() ? x.toUpperCase() : x.toLowerCase()).join('')
  }


// examples

// hello world -> HELLO WORLD
// HELLO WoRLd -> hello wOrlD