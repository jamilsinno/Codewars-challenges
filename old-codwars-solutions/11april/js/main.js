// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

// sample tests

// const { assert } = require("chai")

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(removeUrlAnchor('www.codewars.com#about'), 'www.codewars.com')
//     assert.strictEqual(removeUrlAnchor('www.codewars.com/katas/?page=1#about'), 'www.codewars.com/katas/?page=1')
//     assert.strictEqual(removeUrlAnchor('www.codewars.com/katas/'), 'www.codewars.com/katas/')
//     })
//   })

// solution - solution doesn't work

// function removeUrlAnchor(url){
//   // TODO: complete
  
//   url.split("")

//   for(let i = url.indexOf('#'); i<url.length; i++){
//     url.splice(i, 1)
//   }

//   url.join("")
//   return url
// }

// working solution
// function removeUrlAnchor(url){
//   return url.split('#')[0];
// }