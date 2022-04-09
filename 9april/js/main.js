// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

// Square all numbers k (0 <= k <= n) between 0 and n.

// Count the numbers of digits d used in the writing of all the k**2.

// Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.

// Examples:
// n = 10, d = 1 
// the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

// nb_dig(25, 1) returns 11 since
// the k*k that contain the digit 1 are:
// 1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
// So there are 11 digits 1 for the squares of numbers between 0 and 25.
// Note that 121 has twice the digit 1.

// sample tests

// const assert = require('chai').assert;
// describe("nbDig", () => {
//   it("Basic tests", () => { 
//     assert.strictEqual(nbDig( 5750, 0),  4700, "n = 5750, d = 0");
//     assert.strictEqual(nbDig(11011, 2),  9481, "n = 11011, d = 2");
//     assert.strictEqual(nbDig(12224, 8),  7733, "n = 12224, d = 8");
//     assert.strictEqual(nbDig(11549, 1), 11905, "n = 11549, d = 1");
//   });
// });

// solution 

function nbDig(n, d) {
  // your code
  let arr = []
  // Make array and square elements
  for(let i = 0; i <= n; i++){
    arr.push(i**2)
  }
  console.log(arr)

  // go through array and check for the index d and add to count
  
  let count = 0

  for(let j = 0; j<arr.length; j++){
    if(arr[j].toString().includes(d)){
      count += 1
    }
  } 
  return count 
}