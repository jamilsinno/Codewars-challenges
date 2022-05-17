// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

// Example: (Input1, Input2 -->Output)

// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"

// PREP

// passed two strings. The strings can be empty. They can't be special characters. The strings represent a value. The parameter can be a negative value

// returning a value as a string. The value has a type string. Returning not logging. 


function sumStr(a,b) {
  //convert the numbers from string to type number, then sum, the convert the answer to string
  return String(+a + +b)
}

// examples

console.log(sumStr("4","5")) // "9"
console.log(sumStr("34","5")) // "39"
console.log(sumStr("","")) // 0
console.log(sumStr("2","")) // 2 
console.log(sumStr("-5","3"))// "-2"