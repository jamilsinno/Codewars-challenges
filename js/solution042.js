//Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// PREP

// passed three integers. Check to see if the three parameters passed can add up to a triangle. There will be no strings, special characters or arrays passed - only numbers.

// return true or false based on whether you can create a triangle with the arguments.

function isTriangle(a,b,c){
    // to check if a triangle is valid, a sum of any of the two sides should be greater than the third side
   return a + b <= c || b + c <= a || a + c <= b ? false : true
}

// example

console.log(isTriangle(1,2,2)) //true
console.log(isTriangle(7,2,2)) //false