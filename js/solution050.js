// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// PREP

// passed a string with alternating cases 

// return the index of every uppercase letter

const capitals = function (word) {
	// Create an empty array to hold the index
    let arr = []

    // Iterate through the string and find the index of uppercase letters
    for(let i = 0; i<word.split('').length; i++){
        if(word[i] === word[i].toUpperCase()){
            arr.push(i)
        }
    }
    return arr
};

//examples

console.log(capitals('CodEWaRs')) // [0,3,4,6]