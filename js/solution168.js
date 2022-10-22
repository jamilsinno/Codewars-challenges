function sumCubes(n){
    // ...
    let ans = 0
    
    for (let i = 1; i <= n; i++) {
      ans += i**3
    }
    
    return ans
  }