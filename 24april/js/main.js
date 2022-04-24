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
