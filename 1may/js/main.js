// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// should return "found the needle at position 5" (in COBOL "found the needle at position 6")

// sample tests

// describe("Tests", () => {
//   it("test", () => {
// var haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
// var haystack_2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'];
// var haystack_3 = [1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54];

// Test.assertNotEquals(findNeedle(haystack_1), undefined, "Your function didn't return anything");
// Test.assertEquals(findNeedle(haystack_1), 'found the needle at position 3')
// Test.assertEquals(findNeedle(haystack_2), 'found the needle at position 5') 
// Test.assertEquals(findNeedle(haystack_3), 'found the needle at position 30')
//   });
// });

// solution

function findNeedle(haystack) {
  // your code here
  if(haystack.indexOf('needle') == -1){
    return `Your function didn't return anything`
  }else{
    return `found the needle at position ${haystack.indexOf('needle')}`
  }
}

//--------------------------------------------------------------------

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

// sample test

// describe("GetMiddle", function() {
//   it("Tests", function() {
//     Test.assertEquals(getMiddle("test"),"es");
//     Test.assertEquals(getMiddle("testing"),"t");
//     Test.assertEquals(getMiddle("middle"),"dd");
//     Test.assertEquals(getMiddle("A"),"A");
//   });
// });

// solution

function getMiddle(s){
  //Code goes here!
  if(s.length % 2 !==0){
    return s[Math.floor(s.length/2)]
  }else{
    return s[s.length/2 - 1] + s[s.length/2]
  }
}

//--------------------------------------------------------------------

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// sample test

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(squareSum([1,2]), 5)
// Test.assertEquals(squareSum([0, 3, 4, 5]), 50)
// Test.assertEquals(squareSum([]), 0)
// });
// });

// solution

function squareSum(numbers){
  return numbers.map( x => x*x).reduce( (cv, pv) => cv + pv, 0)
}

//--------------------------------------------------------------------

// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// Based on: http://oj.leetcode.com/problems/two-sum/

// twoSum [1, 2, 3] 4 === (0, 2)

// sample test

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Sample Tests", function() {
//   it("should pass sample tests", function() {
    
//     function numericalCompare(a, b) {
//       return a - b;
//     }    
    
//     assert.deepEqual(twoSum([1,2,3], 4).sort(numericalCompare), [0,2]);
//     assert.deepEqual(twoSum([1234,5678,9012], 14690).sort(numericalCompare), [1,2]);
//     assert.deepEqual(twoSum([2,2,3], 4).sort(numericalCompare), [0,1]);
//   });
// });

// solution

function twoSum(numbers, target) {
  // ...

  for(let i = 0; i<numbers.length - 1; i++){
    for(let j = i+1; j< numbers.length; j++){
      if(numbers[i] + numbers[j] === target){
        return [i,j]
      }
    }
  }
}

//--------------------------------------------------------------------

// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

// sample test

// const {assert} = require('chai');

// describe("order", () => {
//   it("should work corectly", () => {
//     assert.strictEqual(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est")
//     assert.strictEqual(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople")
//     assert.strictEqual(order(""), "", "empty input should return empty string" )
//   });
// });

// solution

function order(words){
  // ...
  if(words === ""){
    return ""
  }
  let newWords = words.split(' ')
  let arr = []
  
  for(let i = 1; i<10; i++){
    for(let j = 0; j<newWords.length; j++){
      if(newWords[j].includes(i)){
        arr.push(newWords[j])
      }
    }
  }
  return arr.join(' ')
}

//--------------------------------------------------------------------

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// sample test

// const {assert} = require('chai');

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Tests", () => {
//   it("test", () => {
//     assert.strictEqual(removeExclamationMarks("Hello World!"), "Hello World");
//   });
// });

// solution

function removeExclamationMarks(s) {
  return s.split('').filter( x => x !== '!').join('');
}

//--------------------------------------------------------------------

// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point
// Notes:

// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

// sample test

// describe("Basic tests", function(){
//   it("Testing for points(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3'])", function(){
//     Test.assertEquals(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]) , 30);
//   });  
//   it("Testing for points(['1:1','2:2','3:3','4:4','2:2','3:3','4:4','3:3','4:4','4:4'])", function(){
//     Test.assertEquals(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]) , 10);
//   });
//   it("Testing for points(['0:1','0:2','0:3','0:4','1:2','1:3','1:4','2:3','2:4','3:4'])", function(){
//     Test.assertEquals(points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]) , 0);
//   });
//   it("Testing for points(['1:0','2:0','3:0','4:0','2:1','1:3','1:4','2:3','2:4','3:4'])", function(){
//     Test.assertEquals(points(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]) , 15);
//   });
//   it("Testing for points(['1:0','2:0','3:0','4:4','2:2','3:3','1:4','2:3','2:4','3:4'])", function(){
//     Test.assertEquals(points(["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"]) , 12);
//   });
// });

// solution

function points(games) {
  // your code here
  // for loop to go through initial array
  // in each element split at the :
  // compare the two numbers
  let points = 0
  
  for(let i = 0; i<games.length; i++){
    if(games[i][0] > games[i][2]){
      points += 3
    } else if(games[i][0] === games[i][2]){
      points += 1
    }else{
      points += 0
    }
  }
  return points
}

//--------------------------------------------------------------------

// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.
// What We're Testing
// We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
// Advanced users may find this extremely easy and can easily write this in one line.

// sample test

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(sum([]), 0);
// Test.assertEquals(sum([1, 5.2, 4, 0, -1]), 9.2);
//   });
// });

// solution

// Sum Numbers
function sum (numbers) {
  //"use strict";
  
  let counter = 0

  for(let i = 0; i< numbers.length; i++){
    counter += numbers[i]
  }
  return counter
};

//--------------------------------------------------------------------

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

// sample test

// const { assert } = require("chai")

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(descendingOrder(0), 0)
//     assert.strictEqual(descendingOrder(1), 1)
//     assert.strictEqual(descendingOrder(111), 111)
//     assert.strictEqual(descendingOrder(15), 51)
//     assert.strictEqual(descendingOrder(1021), 2110)
//     assert.strictEqual(descendingOrder(123456789), 987654321)
//     })
//   })

// solution


function descendingOrder(n){
  //...
  return +String(n).split('').sort( (a, b) => Number(b) - Number(a)).join('')
}

//--------------------------------------------------------------------

// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// If you liked this kata, check out part 2!!

// sample test

// const { assert } = require("chai")

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(expandedForm(12), '10 + 2');
// Test.assertEquals(expandedForm(42), '40 + 2');
// Test.assertEquals(expandedForm(70304), '70000 + 300 + 4');
//   });
// });

// solution

function expandedForm(num) {
  // Your code here
  // make the number into a string, split, then reverse
  // for loop and num[i] * 10^i
  
  let revNum = String(num).split('')
  
  let solution = []

  for(let i = 0; i<revNum.length; i++){      
      solution.push(revNum[i] * 10**(revNum.length - i-1))
  }
  
  let ans = solution.filter( x => x !== 0)
  return ans.join(' + ')
}
