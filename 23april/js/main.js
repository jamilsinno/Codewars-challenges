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

// my soltion -> missing couple of steps does not work

// function isPangram(string){
//   //create variables and split
//   let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
//   let arr = string.split('').sort().filter( (x,i) => x === " " || x[i] === x[i+1] )

//   // compare the alphabet string with the array go to next when match
  
//   for(let i = 0; i< alphabet.length; i++){
//     if( alphabet[i] !== arr[i]){
//       return false
//     }
//   }
//   return true
// }

//working solution 

function isPangram(string){
  //create variables and split
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  
  let arr = string.toLowerCase().split('')
  .sort()
  .filter( x => alphabet.includes(x))
  .filter( function(x, n, s) {
  return s.indexOf(x) == n
} )
  
  console.log(arr)
  // compare the alphabet string with the array go to next when match
  
  for(let i = 0; i< alphabet.length; i++){
    if( alphabet[i] !== arr[i]){
      return false
    }
  }
  return true
}

//--------------------------------------------------------------------

// Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list.

// Examples (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5
// Notes
// You may consider that there will not be any empty arrays/vectors.

// sample questions

// describe("Test", function(){
//   it("Examples", function(){
//     Test.assertEquals(min([-52, 56, 30, 29, -54, 0, -110]), -110);
//     Test.assertEquals(min([42, 54, 65, 87, 0]), 0);
//     Test.assertEquals(max([4,6,2,1,9,63,-134,566]), 566);
//     Test.assertEquals(max([5]), 5);
//   });
// });

// solution

var min = function(list){
    
  return Math.min(...list);
}

var max = function(list){
  
  return Math.max(...list);
}