function partlist(arr) {
    // your code
//   console.log(arr)
  let container = []
  let ans = []
  counter = arr.length - 1
  while (counter>0) {
    container.push(arr[0])
    arr.shift()
//     console.log(container, 123)
//     console.log(arr, 321)
    ans.push([ container.join(' '), arr.join(' ')])
    // console.log(ans, 1234)
    counter--
  }
  return ans
}