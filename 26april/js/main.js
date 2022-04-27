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
  // fourth index[3] === row 4 which is [13,15,17,19] => [(4*3 + 1 + 2*0), (4*3 + 1 +2*1), (4*3 + 1 +2*2), (4*3 + 1 +2*3)]

  // n is row number
  let sum = 0
  
  if(n === 1){
    return 1
  }else{
    for(let i =0; i<n;i++){
      sum += n*(n-1) + 1 + 2*i
    }
    return sum
  }
}


//--------------------------------------------------------------------

// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:(Input --> Output)

// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square

// sample tests

// describe("findNextSquare", function() {
//   it("should return the next square for perfect squares", function() {
//     Test.assertEquals(findNextSquare(121), 144, "Wrong output for 121");
//     Test.assertEquals(findNextSquare(625), 676, "Wrong output for 625");
//     Test.assertEquals(findNextSquare(319225), 320356, "Wrong output for 319225");
//     Test.assertEquals(findNextSquare(15241383936), 15241630849, "Wrong output for 15241383936");
//   });
  
//   it("should return -1 for numbers which aren't perfect squares", function() {
//     Test.assertEquals(findNextSquare(155), -1, "Wrong output for 155");
//     Test.assertEquals(findNextSquare(342786627), -1, "Wrong output for 342786627");
//   });
// });

// solution

function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  if(sq % Math.sqrt(sq) !== 0 ){
    return -1
  }else{
    // add one to sq and recheck the condition return when satisfied
    sq++
    while(sq % Math.sqrt(sq) !== 0){
      sq++
    }
    return sq
  }
}


//--------------------------------------------------------------------

// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

// sample tests

// describe("findNextSquare", function() {
//   it("should return the next square for perfect squares", function() {
//     Test.assertEquals(findNextSquare(121), 144, "Wrong output for 121");
//     Test.assertEquals(findNextSquare(625), 676, "Wrong output for 625");
//     Test.assertEquals(findNextSquare(319225), 320356, "Wrong output for 319225");
//     Test.assertEquals(findNextSquare(15241383936), 15241630849, "Wrong output for 15241383936");
//   });
  
//   it("should return -1 for numbers which aren't perfect squares", function() {
//     Test.assertEquals(findNextSquare(155), -1, "Wrong output for 155");
//     Test.assertEquals(findNextSquare(342786627), -1, "Wrong output for 342786627");
//   });
// });

// solution
function opposite(number) {
  //your code here
  return number*(-1);
}

//--------------------------------------------------------------------

//Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'

// sample tests

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(greet('Daniel', 'Daniel'), 'Hello boss')
// Test.assertEquals(greet('Greg', 'Daniel'), 'Hello guest')
//   });
// });

// solution

function greet (name, owner) {
  // Add code here
  return name === owner ? `Hello boss` : `Hello guest`
}

//--------------------------------------------------------------------