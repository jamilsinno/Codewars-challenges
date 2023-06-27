function automorphic(n){
  //your code here
  let square = Math.pow(n, 2)
  while (Math.floor(n) > 0) {
    if (square % 10 !== n % 10) {
      return "Not!!"
    }
    square = Math.floor(square / 10)
    n = Math.floor(n / 10)
  }
  return "Automorphic"
}