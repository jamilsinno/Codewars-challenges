// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

// Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).

// More details about factorial can be found here

//PREP

// passed a number, must figure out what the factorial is. No strings will be passed. No special characters. No need for conversions. 

// Integers passed in will be non-negative 

// if n > 12 a throw RangeError

// 0! is 1

// return the value of the factorial in the type number

function factorial(n){
    console.log(n)
      //set a placeholder for the product. Since it's a product set to 1 instead of 0
      let product = 1
      // create the case for 0
      if(n === 0){
          return 1
      }else if(n > 0 && n < 13){// multiply all other cases using a loop. Do not count down to 0
          for(let i = n; i >= 1; i--){
              product *= i
          }
          return product
      }else{ // create the case for negative numbers
          throw RangeError
      }
  }

// examples

console.log(factorial(5)) //120
console.log(factorial(0)) //1
console.log(factorial(1)) //1
console.log(factorial(2)) //2
console.log(factorial(3)) //6

