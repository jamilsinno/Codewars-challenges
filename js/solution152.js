function pendulum(values) {
    let min = Math.min(...values)
    let ans = []
      
    values.sort( (a,b) => a-b )
    values.splice(0,1)
    ans.push(min)
    for (let i = 0; i<values.length; i++) {
      if(i % 2 !== 0){
        ans.unshift(values[i])
      } else {
        ans.push(values[i])
      }
    }
    return ans
  }