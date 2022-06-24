// You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

// PREP

// passed two parameters. Each parameter is an array. The arrays must be joined together. The arrays will be sorted into ascending order. 

// Return the joined array in the new order. 

function mergeArrays(arr1, arr2) {
    let newArr = []
    // check to see if the arrays are empty
    if(arr1.length === 0 && arr2.length === 0){
        return []
    }
    // if either array has elements, merge the two
  for(let i = 0; i<arr2.length; i++){
      arr1.push(arr2[i])
  }
  arr1.sort( (a,b) => a - b )
  
  //check for repeating elements. If not included, add to the new array
  for(let i = 0; i<arr1.length; i++){
    if(newArr.indexOf(arr1[i]) === -1){
        newArr.push(arr1[i])
    }
  }
  
  
  return newArr
}

// examples

console.log(mergeArrays([1,2,3,4], [5,6,7,8])) // [1,2,3,4,5,6,7,8]
console.log(mergeArrays([1,3,5,7,9], [10,8,6,4,2])) // [1,2,3,4,5,6,7,8,9,10]
console.log(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12])) // [1,2,3,4,5,7,9,10,11,12]