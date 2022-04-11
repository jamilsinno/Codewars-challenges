// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

// sample tests

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(smallEnough([66, 101], 200), true);
//     assert.strictEqual(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100), false);
//     assert.strictEqual(smallEnough([101, 45, 75, 105, 99, 107], 107), true);
//     assert.strictEqual(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120), true);
//   })
// })

// solution - solution works

function smallEnough(a, limit){
  let arr = a.map( x => x > limit ? false : true)
  if(arr.includes(false)){
    return false
  }else{
    return true
  }
}

// solution with spread operator

// function smallEnough(a, limit){
//   return Math.max(...a) <= limit
// }