function sumMul(n,m){
    //your idea here
      let ans = 0
      for (let i = 0; i < m; i++) {
        if( i % n === 0){
          ans += i
        }
      }
      
      if(!ans){return "INVALID"}
      return ans
    }