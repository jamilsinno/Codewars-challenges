reverse = function(array) {
  // TODO: program me!
    let ans = []
    // return array.reverse()
    for (let i = 0; i < array.length; i++) {
        ans.unshift(array[i])
    }
    return ans
}

console.log(reverse([1,2,3]), [3,2,1])