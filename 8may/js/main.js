// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true (1 in Prolog, NASM and COBOL) if it is possible and false (0 in Prolog, NASM and COBOL) if not. The input values are always positive.

// sample tests

// const assert = require("chai").assert;

// describe("zeroFill", function() {
//   it("Sample Tests", function() {
//     assert.equal(zeroFuel(50, 25, 2), true);
//     assert.equal(zeroFuel(100, 50, 1), false);
//   });
// });


// solution

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // TODO
  // run a check to see if your mpg * fuelLeft >= distanceToPump
  return mpg*fuelLeft >= distanceToPump ? true : false
};

// --------------------------------------------------------------------------

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

// sample tests

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Invert array values",() => {
//   it("Basic Tests", () => {
//     assert.deepEqual(invert([1,2,3,4,5]), [-1,-2,-3,-4,-5]);
//     assert.deepEqual(invert([1,-2,3,-4,5]), [-1,2,-3,4,-5]);
//     assert.deepEqual(invert([]), []);
//     assert.deepEqual(invert([0]), [-0]);
//   });
// });

// solution

function invert(array) {
  return array.map( x => -x);
}

// --------------------------------------------------------------------------

// This function should test if the factor is a factor of base.

// Return true if it is a factor or false if it is not.

// About factors
// Factors are numbers you can multiply together to get another number.

// 2 and 3 are factors of 6 because: 2 * 3 = 6

// You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
// You can use the mod operator (%) in most languages to check for a remainder
// For example 2 is not a factor of 7 because: 7 % 2 = 1

// Note: base is a non-negative number, factor is a positive number.

// sample tests

// describe('check for factor', function () {
//   it('should return true', function () {
//     Test.assertEquals(checkForFactor(10,2), true)
//     Test.assertEquals(checkForFactor(63,7), true)
//     Test.assertEquals(checkForFactor(2450,5), true)
//     Test.assertEquals(checkForFactor(24612,3), true)
//   })
//   it('should return false', function () {
//     Test.assertEquals(checkForFactor(9,2), false)
//     Test.assertEquals(checkForFactor(653,7), false)
//     Test.assertEquals(checkForFactor(2453,5), false)
//     Test.assertEquals(checkForFactor(24617,3), false)
//   })
// })

// solution

function checkForFactor (base, factor) {
  // code here
  return base % factor === 0
}

// --------------------------------------------------------------------------