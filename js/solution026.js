// Build a function that returns an array of integers from n to 1 where n>0.

// parameter passed will be an integer. Not a string, not a special character. Will not be an array.

// return an array counting down from n to 1

const reverseSeq = n => {
    // create an empty array
    let newArr = []

    // count down from n to 1
    for(let i = n; i>0; i--){
        // add elements to the new array
        newArr.push(i)
    }
    // return your new array
    return newArr;
  };


// examples

console.log(reverseSeq(5)) // [5, 4, 3, 2, 1]