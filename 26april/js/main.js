//Given the triangle of consecutive odd numbers:

// 1
// 3     5
// 7     9    11
// 13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

// sample tests

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(rowSumOddNumbers(1), 1);
//     assert.strictEqual(rowSumOddNumbers(42), 74088);
//   });
// });

// solution

function rowSumOddNumbers(n) {
	// TODO
  // first index[0] === row 1 which is [1] => [1*0 +1]
  // second index[1] === row 2 which is [3,5] => [2* 1 + 1, 2* 1 + 1 +2]
  // third index[2] === row 3 which is [7,9,11] => [3*2+1, 3*2+1 +2, 3*2+1 + 4]
  // fourth index[3] === row 4 which is [13,15,17,19] => [4*3 + 1, 4*3 + 1 +2, 4*3 + 1 +4, 4*3 + 1 +6]
}

//--------------------------------------------------------------------

