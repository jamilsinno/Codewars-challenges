function getNumberFromString(s) {
    const numbers = "0123456789".split('')
  //   let ans = ""
    const string = s.split('')
    
  //   for(let i = 0; i<string.length; i++){
  //     if (numbers.includes(string[i])){
  //       ans += string[i]
  //     }
  //   }
    
  //   console.log(string.filter( x => numbers.includes(x)))
    
  //   return +ans;
      return Number(string.filter( x => numbers.includes(x)).join(''))
  }