// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// PREP

// Getting passed a string or an array. The string/array will contain a series of letters and numbers. Could contain unique characters. The numbers can be negative. Elements of the array will be numbers

// Return a sequence of characters which repeat and return just a single element. Keep the order. Keep the same case. Return the answer as an array. Can return the answer in a new array.

const uniqueInOrder = (arg) => {
    // determine if the argument is a string and split it. 
    if(typeof arg === 'string'){
        arg = arg.split('')
    }
    
    let ans = []
    //iterate through the array and take the first unique element
    for(let i = 0; i<arg.length; i++){
        // case of unique elements and exists only once in arg
        if(i !== 0 && arg[i] !== arg[i+1] && arg[i] !== arg[i-1]){
            ans.push(arg[i])
        }else if (i !== 0 && arg[i] === arg[i+1] && arg[i] !== arg[i-1]){ // case of first element in a repeating sequence
            ans.push(arg[i])
        }else if(i === 0){// always push the first element
            ans.push(arg[i])
        }
    }
    // return the solution
    return ans
}

// examples

console.log(uniqueInOrder('AAAABBBCCDAABBB')) // ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder('ABBCcAD')) // ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1,2,2,3,3])) // [1,2,3]