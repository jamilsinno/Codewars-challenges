function sumOfMinimums(arr) {
    // find the min in each array and reduce to find the answer
  
    let count = 0
    
    for(let i = 0; i<arr.length; i++){
      count += Math.min(...arr[i])
    }
    return count
  }