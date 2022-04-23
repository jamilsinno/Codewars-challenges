// Simple, remove the spaces from the string, then return the resultant string.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// sample tests

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests",() =>{
//   it("Fixed Tests", () => {
//     assert.strictEqual(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'), '8j8mBliB8gimjB8B8jlB');
//     assert.strictEqual(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'), '88Bifk8hB8BB8BBBB888chl8BhBfd'); 
//     assert.strictEqual(noSpace('8aaaaa dddd r     '), '8aaaaaddddr'); 
//   });
// });

// solution

function noSpace(x){
  return x.split('').filter( x => x !== " " ).join('')
}

//--------------------------------------------------------------------

// Given a non-empty array of integers, return the result of multiplying the values together in order. 

// Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// sample tests

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests",() =>{
//   it("Testing for fixed tests", () => {  
//     assert.strictEqual(grow([1, 2, 3]), 6);
//     assert.strictEqual(grow([4, 1, 1, 1, 4]), 16); 
//     assert.strictEqual(grow([2, 2, 2, 2, 2, 2]), 64); 
//   });
// })

// solution

function grow(x){
  return x.reduce( (pv, cv) => pv * cv, 1)
}

//--------------------------------------------------------------------

// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// sample tests

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Tests", () => {
//   it("test1", () => {
//     var string = "The quick brown fox jumps over the lazy dog."
//     assert.strictEqual(isPangram(string), true)
//   })
//   it("test2", () => {
//     var string = "This is not a pangram."
//     assert.strictEqual(isPangram(string), false)
//   });
// });

function isPangram(string){
  //...
}