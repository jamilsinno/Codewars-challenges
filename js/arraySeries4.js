function nthSmallest(arr, pos){
  //your code here
  arr.sort((a,b) => a - b)
  return arr[pos - 1];
}