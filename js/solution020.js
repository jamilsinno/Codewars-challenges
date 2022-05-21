// Task
// Add the isUpperCase method to String to see whether the string is ALL CAPS. For example:
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

// prep

// passed a string. String won't contain any numbers. No arrays will be passed. Can have special characters.

// returning a boolean

String.prototype.isUpperCase = function() {
    return this.toString() === this.toUpperCase();
  }

// examples

