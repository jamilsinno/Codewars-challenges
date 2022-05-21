// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// PREP

// passed an array. array elements can be numbers or strings or special characters. 

// return a new array with every second element from the original array removed

function removeElements(arr){
    // In a loop use a conditional to check if the index is divisible by 2 and splice it from the array
    // let newArr = []
    // for(let i = 0; i<arr.length; i++){
    //     if(i % 2 === 0){
    //         newArr.push(arr[i])
    //     }
    // }
    // return newArr

    // use filter to return elements

    return arr.filter( (x,i) => i % 2 === 0 )
}

// examples

console.log(removeElements([1,2,3,4,5,6,7,8])) // [1,3,5,7]
console.log(removeElements(['a', 'b', 'c', 'd'])) // ['a', 'c']