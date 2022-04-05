// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.
// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:
// gimme([2, 3, 1]) => 0

// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):
// gimme([5, 10, 14]) => 1

// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

// sample tests

// const strictEqual = require('chai').assert.strictEqual;

// function doTest (triplet, expected) {
// 	const actual = gimme(triplet);
// 	strictEqual(actual, expected, `for [${triplet}], expected ${expected} but got ${actual}`);
// }

// describe("Basic Test", function () {
// 	it("Tests for integers", function () {
// 		doTest([2, 3, 1], 0);
// 		doTest([5, 10, 14], 1);
// 	});
// 	it("Tests for floats", function () {
// 		doTest([2.1, 3.2, 1.4], 0);
// 		doTest([5.9, 10.4, 14.2], 1);
// 	});
// 	it("Tests for negative numbers", function () {
// 		doTest([-2, -3, -1], 0);
// 		doTest([-5, -10, -14], 1);
// 	});
// 	it("Tests for mixed numbers", function () {
// 		doTest([-2, -3.2, 1], 0);
// 		doTest([-5.2, -10.6, 14], 0);
// 	});
// });

// solution - my solution (working)

function gimme (triplet) {
  if( (triplet[0] < triplet[1] && triplet[1] < triplet[2]) || (triplet[2] < triplet[1] && triplet[1] < triplet[0]) ){
    return 1
  }else if( (triplet[1] < triplet[0] && triplet[0] < triplet[2]) || (triplet[2] < triplet[0] && triplet[0] < triplet[1]) ){
    return 0
  }else{
    return 2
  }
}

// solution best practice

// function gimme(a) {
//   return a.indexOf(a.concat().sort(function(a, b) { return a - b })[1])
// }