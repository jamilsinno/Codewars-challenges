// Implement a function which multiplies two numbers.

// sample tests

// const { assert } = require("chai")

// const chai = require('chai');
// const assert = chai.assert;

// describe("Tests", () => {
//   it("test", () => {
//     assert.strictEqual(multiply(2, 3), 6);
//   });
// });

// solution

// Write here your multiply-function
let multiply = (a, b) => {
  return a*b
}

// --------------------------------------------------------------------------

// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

// sample tests

// const chai = require('chai');
// const assert = chai.assert;

// describe("Example Tests", function() {
//   it("betterThanAverage([2, 3], 5) should return True", function() {
//     assert.strictEqual(betterThanAverage([2, 3], 5), true);
//   });
  
//   it("betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75) should return True", function() {
//     assert.strictEqual(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75), true);
//   });
  
//   it("betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9) should return False", function() {
//     assert.strictEqual(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9), false);
//   });
  
//   it("betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50) should return False", function() {
//     assert.strictEqual(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50), false);
//   });
  
//   it("betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21) should return False", function() {
//     assert.strictEqual(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21), false);
//   });
// });

// solution

function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  let classAverage = classPoints.reduce( (cv, pv) => cv + pv, 0)/classPoints.length
  
  return yourPoints > classAverage ? true : false
                                     
}

// --------------------------------------------------------------------------

// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// sample tests

// describe("longest",function() {
//   it("Basic tests",function() {
//       Test.assertEquals(longest("aretheyhere", "yestheyarehere"), "aehrsty")
//       Test.assertEquals(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
//       Test.assertEquals(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")
//   })})

// solution

function longest(s1, s2) {
  // your code

  let arr1 = s1.split('').sort() 
  let arr2 = s2.split('').sort()
  
  let longestString = []
    
  for(let i = 0; i<arr1.length; i++){
    if(arr1[i] !== arr1[i+1]){
      longestString.push(arr1[i])
    }
  }
  
   for(let i = 0; i<arr2.length; i++){
    if(longestString.indexOf(arr2[i]) === -1){
      longestString.push(arr2[i])
    }
  }
  
  return longestString.sort().join('')
}

// --------------------------------------------------------------------------

// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples:

// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!

// sample tests

// describe('rock paper scissors', function() {
//   const getMsg = (n) => `Player ${n} won!`;

//   it('player 1 win', function() {
//     Test.assertEquals(rps('rock', 'scissors'), getMsg(1));
//     Test.assertEquals(rps('scissors', 'paper'), getMsg(1));
//     Test.assertEquals(rps('paper', 'rock'), getMsg(1));
//   });

//   it('player 2 win', function() {
//     Test.assertEquals(rps('scissors', 'rock'), getMsg(2));
//     Test.assertEquals(rps('paper', 'scissors'), getMsg(2));
//     Test.assertEquals(rps('rock', 'paper'), getMsg(2));
//   });

// solution

const rps = (p1, p2) => {
  if( p1 === 'rock' && p2 === 'scissors' || p1 === 'paper' && p2 === 'rock' || p1 === 'scissors' && p2 === 'paper'){
    return `Player 1 won!`
  }else if(p1 === p2){
    return `Draw!`
  }else{
    return `Player 2 won!`
  }
};

// --------------------------------------------------------------------------

// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

// sample tests

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe('Fixed tests', () => {
//   it('Edge tests', () => {
//     assert.strictEqual(oddOrEven([0]), 'even')
//     assert.strictEqual(oddOrEven([1]), 'odd')
//     assert.strictEqual(oddOrEven([]), 'even')
//   });
  
//   it('Even tests', () => {
//     assert.strictEqual(oddOrEven([0, 1, 5]), 'even')
//     assert.strictEqual(oddOrEven([0, 1, 3]), 'even')
//     assert.strictEqual(oddOrEven([1023, 1, 2]), 'even')
//   });
  
//   it('Negative Even tests', () => {
//     assert.strictEqual(oddOrEven([0, -1, -5]), 'even')
//     assert.strictEqual(oddOrEven([0, -1, -3]), 'even')
//     assert.strictEqual(oddOrEven([-1023, 1, -2]), 'even')
//   });
  
//   it('Odd tests', () => {
//     assert.strictEqual(oddOrEven([0, 1, 2]), 'odd')
//     assert.strictEqual(oddOrEven([0, 1, 4]), 'odd')
//     assert.strictEqual(oddOrEven([1023, 1, 3]), 'odd')
//   });
  
//   it('Negative Odd tests', () => {
//     assert.strictEqual(oddOrEven([0, -1, 2]), 'odd')
//     assert.strictEqual(oddOrEven([0, 1, -4]), 'odd')
//     assert.strictEqual(oddOrEven([-1023, -1, 3]), 'odd')
//   });
// });

// solution

function oddOrEven(array) {
  //enter code here
 
 return array.reduce( (cv, pv) => cv + pv, 0 ) % 2 === 0 ? 'even' : 'odd'
}

// --------------------------------------------------------------------------

// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples:

// number([]) // => []
// number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]

// sample tests

// describe("Tests", () => {
//   it("test", () => {
// Test.assertSimilar(number([]), [], 'Empty array should return empty array');
// Test.assertSimilar(number(["a", "b", "c"]), ["1: a", "2: b", "3: c"], 'Return the correct line numbers');                
//   });
// });

// solution

var number = (array) => {
  //your awesome code here
  if(array.length === 0){
    return []
  }
  
  let newArr = array.map( (x,i) => `${i+1}: ${x}` )
  return newArr
}

// --------------------------------------------------------------------------

// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

// sample tests

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(lovefunc(1,4), true)
//     assert.strictEqual(lovefunc(2,2), false)
//     assert.strictEqual(lovefunc(0,1), true)
//     assert.strictEqual(lovefunc(0,0), false)
//   });
// });

// solution

function lovefunc(flower1, flower2){
  // moment of truth
  return (flower1 % 2 === 0 && flower2 % 2 === 1) || (flower2 % 2 === 0 && flower1 % 2 === 1)
}