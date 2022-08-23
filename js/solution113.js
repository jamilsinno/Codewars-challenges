// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

function array(arr){
    //Good luck
    if (arr.length<1) {
        return ''
    }
      return arr.split(',').slice(1,-1).join(',')
}

// examples

console.log(array('')) // ''
console.log(array('1,2,3')) //'2'
console.log(array('1,2,3,4')) // '2,3'
console.log(array('1,2,3,4,5')) // '2,3,4'