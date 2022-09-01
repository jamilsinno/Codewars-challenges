// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).

// PREP

// passed an array. Array contains strings. Keep the array the same

// Return a string of the longest consecutive elements in your original array.

function longestConsec(strarr, k) {
    // your code
  if (strarr.length === 0 || k > strarr.length || k <= 0) {
    return ""
  }
  let tempStr = ''
  let longestStr = ''
  console.log(strarr.length)
  console.log(k)
  for (let i = 0 ; i <= strarr.length - k; i++) {
    tempStr = ''
    for (let j = i; j < i+k; j++ ) {
      tempStr += strarr[j]
    }
    if (tempStr.length > longestStr.length) {
      longestStr = ''
      longestStr = tempStr
    }
  }
  
  return longestStr
}

