// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// PREP

// passed two arguments. No string, special characters or arrays in the arguments, just numbers.

// return an area if a square, and a perimeter if not. 

const areaOrPerimeter = function(l , w) {
    // run a ternary operator to check if w = l and return area otherwise perimeter.
    return l === w ? l * w : (+l + +w)*2

  };

// examples

console.log(areaOrPerimeter(4,4)) // 16
console.log(areaOrPerimeter(6,10)) // 32