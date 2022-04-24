// Write a function which converts the input string to uppercase.

// sample tests

// describe("Basic Tests", function(){
//   it("should pass the basic tests", function(){
//     Test.assertEquals(makeUpperCase("hello"), "HELLO");
//   });
// });

// solution

function makeUpperCase(str) {
  // Code here
  return str.toUpperCase()
}

//--------------------------------------------------------------------

// Your task is to find the first element of an array that is not consecutive.

// By not consecutive we mean not exactly 1 larger than the previous element of the array.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

// If the whole array is consecutive then return null.

// The array will always have at least 2 elements and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

// If you like this Kata, maybe try this one next: https://www.codewars.com/kata/represent-array-of-numbers-as-ranges

// sample tests

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Fixed tests", () => {
//   it('a simple example', function() {
//     const first = firstNonConsecutive([1,2,3,4,6,7,8])
//     assert.strictEqual(first, 6)
//   })
// })

// solution

function firstNonConsecutive (arr) {
  //find the first element
  //compare it with the next element
  for(let i = 0; i<arr.length - 1; i++){
    // if not consecutive break, otherwise keep going
    if(arr[i] !== arr[i+1] - 1){
      return arr[i+1] 
    }
  }
  return null
}


//--------------------------------------------------------------------

// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

// sample tests

// describe("Sample tests", function(){
//   it("Testing for dad's age: 36 and son's age: 7", function(){
//     Test.assertEquals(twiceAsOld(36,7) , 22);
//   });  
//   it("Testing for dad's age: 55 and son's age: 30", function(){
//     Test.assertEquals(twiceAsOld(55,30) , 5);
//   });
//   it("Testing for dad's age: 42 and son's age: 21", function(){
//     Test.assertEquals(twiceAsOld(42,21) , 0);
//   });
//   it("Testing for dad's age: 22 and son's age: 1", function(){
//     Test.assertEquals(twiceAsOld(22,1) , 20);
//   });
//   it("Testing for dad's age: 29 and son's age: 0", function(){
//     Test.assertEquals(twiceAsOld(29,0) , 29);
//   });
// });

// solution

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}


//--------------------------------------------------------------------

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// sample tests

// function doTest(a, n) {
//   console.log("A = ", a);
//   console.log("n = ", n);
//   Test.assertEquals(findOdd(a), n);
// }
// describe('Example tests', function() {
//   doTest([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5);
//   doTest([1,1,2,-2,5,2,4,4,-1,-2,5], -1);
//   doTest([20,1,1,2,2,3,3,5,5,4,20,4,5], 5);
//   doTest([10], 10);
//   doTest([1,1,1,1,1,1,10,1,1,1,1], 10);
//   doTest([5,4,3,2,1,5,4,3,2,10,10], 1);
// });

// solution

function findOdd(A) {
  //happy coding!
  // create obj[val] and count each repeating element
  const findOdd = A.reduce( function(obj, item){
    if(!obj[item]){
      obj[item] = 0
    }
    obj[item]++
    return obj
  }, {})
  console.log(findOdd)
  
  // divide by 2 to see which is odd
  for (const key in findOdd){
    if(findOdd[key] %2 !== 0){
      return Number(key)
    }
  }
}


//--------------------------------------------------------------------