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

// Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

// setAlarm(true, true) -> false
// setAlarm(false, true) -> false
// setAlarm(false, false) -> false
// setAlarm(true, false) -> true

// sample tests

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Test Suite",()=>{
//   it("Fixed tests",()=>{
//     assert.strictEqual(setAlarm(true, true),  false,"Should be false.");
//     assert.strictEqual(setAlarm(false,true),  false, "Should be false.");
//     assert.strictEqual(setAlarm(true, false), true,"Should be true.");
//   });
// });

// solution

function setAlarm(employed, vacation){
  return employed === true && vacation === false
}

// --------------------------------------------------------------------------

// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

// sample tests

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe('Fixed tests', () => {
//   it('Tests', () => {
//     assert.strictEqual(litres(2), 1, 'should return 1 litre');
//     assert.strictEqual(litres(1.4), 0, 'should return 0 litres');
//     assert.strictEqual(litres(12.3), 6, 'should return 6 litres');
//     assert.strictEqual(litres(0.82), 0, 'should return 0 litres');
//     assert.strictEqual(litres(11.8), 5, 'should return 5 litres');
//     assert.strictEqual(litres(1787), 893, 'should return 893 litres');
//     assert.strictEqual(litres(0), 0, 'should return 0 litres');
//   });
// });

// solution

function litres(time) {
  return Math.floor(time/2);
}

// --------------------------------------------------------------------------

// This Kata is intended as a small challenge for my students

// All Star Code Challenge #18

// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// Notes:

// The first argument can be an empty string
// The second string argument will always be of length 1

// sample tests

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(strCount('Hello', 'o'), 1);
// Test.assertEquals(strCount('Hello', 'l'), 2);
// Test.assertEquals(strCount('', 'z'), 0);
//   });
// });

// solution

function strCount(str, letter){  
  //code here
  let count = 0
  let arr = str.split('')
  
  for(let i =0; i<arr.length; i++){
    if(arr[i] === letter){
      count++
    }
  }
  return count
}

// --------------------------------------------------------------------------

// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// sample tests

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Tests", () => {
//   it("should pass sample tests", () => {
//     assert.deepEqual(count("aba"), { a: 2, b: 1 }); 
//     assert.deepEqual(count(""), {});    
//   });
// });

// solution

function count (string) {  
  // The function code should be here
  const obj = string.split('').reduce( (obj, item) => {
    if(!obj[item]){
      obj[item] = 0
    }
    obj[item]++
    return obj
  }, {}  )
  console.log(obj)
  return obj
}