// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial

// sample tests

// describe("Basic tests",() =>{
//   Test.assertEquals(factorial(0), 1);
//   Test.assertEquals(factorial(1), 1);
//   Test.assertEquals(factorial(4), 24);
//   Test.assertEquals(factorial(7), 5040);
//   Test.assertEquals(factorial(17), 355687428096000);
//   })

// solution - my solution works

function factorial(n){
  //your code here
  let product = 1
  for(let i = 1; i<=n; i++){
    if(n === 0 || n === 1){
      product = 1
    }else{
      product *= i
    }
  }
  return product
}