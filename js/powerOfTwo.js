function isPowerOfTwo(n){
  //.. should return true or false ..
  if (n === 0) return false
  while (n > 2) {
    if (n % 2 !== 0) return false
    n /= 2
  }
  return true;
}