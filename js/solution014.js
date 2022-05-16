// You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

// PREP

// pass an array of strings. Could have numbers. No special characters

// returning the first value and three * in between each letter

function twoSort(s) {
 // sort the array
 let newS = s.sort()

 // return the first value and add *** 

 return newS[0].split('').join('***')
}

// examples

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"])) // b***i***t***c***o***i***n
console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"])) // 'a***r***e'