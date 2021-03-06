// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

// sample tests

// const { assert } = require("chai")

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(sumDigits(10), 1);
//     assert.strictEqual(sumDigits(99), 18);
//     assert.strictEqual(sumDigits(-32), 5);
//     })
//   })

// solution - my solution does not work

function sumDigits(number){
  return Math.abs(number).toString().split('').reduce( (pV, cV) => pV +cV, 0)
}

// working solution
function sumDigits(number){
  return Math.abs(number).toString().split('').reduce( (pV, cV) => Number(pV) + Number(cV), 0)
}