// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.

// sample tests

// describe("One's and Zero's", () => {

//   it("Example tests", () => {
//       Test.assertEquals(binaryArrayToNumber([0,0,0,1]), 1);
//       Test.assertEquals(binaryArrayToNumber([0,0,1,0]), 2);
//       Test.assertEquals(binaryArrayToNumber([1,1,1,1]), 15);
//       Test.assertEquals(binaryArrayToNumber([0,1,1,0]), 6);
//   });

// });

// solution - did not know how to begin solution. Looked at answers. Best practice was to use parseInt()

const binaryArrayToNumber = arr => {
  // your code
  //find the length of the array
  //assign first index value to array length and count down
  //reduce the value
  return parseInt(arr.join(''), 2)
};

// another solution is to reduce it

// const binaryArrayToNumber = arr => {
//   return arr.reduce((total, cur) => (total = total * 2 + cur), 0);
// }