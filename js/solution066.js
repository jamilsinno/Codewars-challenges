// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

// PREP

// Where are passed two arguments. The first argument is an array. The array will have elements. The second argument is a number with type number. The array passed can be empty. The number can be bigger than the total number of indices in the array.

// Return an array of the elements in the same order up to the index matching the second argument. 

function take(arr, n){
    // check to see if the arr argument is empty
    if(arr.length === 0){
        return []
    }else if(n>arr.length){ // check to see if the number is larger than the index
        return arr
    }

    //Create a new variable to hold the elements we want to print
    let newArr = []

    // use a loop to count up to n and add the elements from the arr to the variable newArr
    for(let i = 0; i<=n-1; i++){
        newArr.push(arr[i])
    }

    //return the answer
    return newArr
}

console.log(take([1,2,3], 1)) // [1,2]
console.log(take([0, 1, 2, 3, 5, 8, 13], 2)) // [0,1,2]
