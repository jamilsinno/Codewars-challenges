// You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

// PREP

// passed an array. The array contains positive integers and a second parameter that has the number N. Find the power if N is in the array. 

// return the index of the power otherwise -1

// function index(array, n){
//     //Check to see if array length is less than n
//     if(array.length < n){
//         return -1
//     }else{
//         //find the power
//         return array[n] ** n
//     }
//   }

  // refractor
  
  function index(array, n){
      return array.length>n ? array[n] ** n : NaN
    }

// example

console.log(index([1, 2, 3, 4],2)) // 9
console.log(index([1, 3, 10, 100],3)) // 1000000
console.log(index([1, 2],3)) // -1

