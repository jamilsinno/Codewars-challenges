function well(x){
    let count = 0
    for (let i = 0; i < x.length; i++) {
      if (x[i] === 'good'){
        count++
      }
    }
    return count === 0 ? 'Fail!' :
      count < 3 ? 'Publish!' :
      'I smell a series!'
  }