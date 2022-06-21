// Write a function which calculates the average of the numbers in a given list.

// Prep

// passed an array with numbers. The array will contain at least 3 numbers. No strings or special characters to look out for. Array can be empty.

// return the average of the numbers

function find_average(array) {
    // use the reduce method and then divide the answer by the length of the array
    if(array.length < 1){
        return 0
    }else{

        return array.reduce( (cv, pv) => cv + pv, 0) / array.length
    }
  }

// examples

console.log(find_average([1,1,1])) // 1
console.log(find_average([1,2,3])) // 2
console.log(find_average([1,2,3,4])) // 2.5