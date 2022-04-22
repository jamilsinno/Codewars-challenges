// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// sample tests

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
//     assert.strictEqual(reverseWords('apple'), 'elppa');
//     assert.strictEqual(reverseWords('a b c d'), 'a b c d');
//     assert.strictEqual(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');
//   });
// });

// solution

// function reverseWords(str) {
//   // Go for it
//   return str.split('').reverse().join('').split(' ').reverse().join(' ')
// }

//--------------------------------------------------------------------

// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

// sample tests

// describe("addBinary(1,2)", function() {
//   var results1 = addBinary(1,2);
//   it("Should return something that isn't falsy", function() {
//     Test.expect(results1, "Something is wrong, no results!");
//   });
//   it("Should return \"11\"", function() {
//     Test.assertEquals(results1, "11");
//   });
// });

// solution

// function addBinary(a,b) {
//   return (a+b >>> 0).toString(2)
// }

//--------------------------------------------------------------------

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// sample tests

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic Tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(simpleMultiplication(2),16,'Should return double given argument..')
//     assert.strictEqual(simpleMultiplication(1),9,'Should return double given argument..')
//     assert.strictEqual(simpleMultiplication(8),64,'Should return given argument times eight...')
//     assert.strictEqual(simpleMultiplication(4),32,'Should return given argument times eight...')
//     assert.strictEqual(simpleMultiplication(5),45,'Should return given argument times nine...')
//   });
// });

// solution

// function simpleMultiplication(number) {
//   // your code........
// return number % 2 === 0 ? number * 8 : number * 9
// }

//--------------------------------------------------------------------

// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

// sample tests

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Fixed tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(countSheep(0), "");
//     assert.strictEqual(countSheep(1), "1 sheep...");
//     assert.strictEqual(countSheep(2), "1 sheep...2 sheep...");
//     assert.strictEqual(countSheep(3), "1 sheep...2 sheep...3 sheep...");
//   });
// });

// solution

// var countSheep = function (num){
//   //your code here
//   let print = ""
//   if(num === 0 || num === null){
//     return ""
//   }
//   for(let i = 1; i<=num; i++){
//     print += `${i} sheep...`
//   }
//   return print 
// }

//--------------------------------------------------------------------

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// sample tests

// const { assert } = require("chai")

// describe("Basic tests", () => {
//   it("Testing for basic tests", () => {
//     assert.strictEqual(boolToWord(true), 'Yes')
//     assert.strictEqual(boolToWord(false), 'No')
//     });
//   });

// solution

// function boolToWord( bool ){
//   //...
//   return bool ? 'Yes' : 'No'
// }