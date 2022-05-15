// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

// PREP

// an array of numbers - no strings and no special characters
// the array will always contain an odd number of elements

// returning the element in the type of a number

function stray(numbers) {
    // count each element in the array
    let obj = numbers.reduce( (obj, item) => {
        if(!obj[item]){
            obj[item] = 0
        }
        obj[item]++
        return obj
    }, {})

    // return the item that appears once
    for(let x in obj){
        if(obj[x] === 1){
            return +x
        }
    }
}

// exmaples

console.log(stray([17, 17,17,2,17,17,17])) // 2
console.log(stray([1, 3, 3, 3, 3])) // 1
