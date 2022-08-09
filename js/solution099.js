function remove (string) {  
    let newStr = string.split('')
    
    for (let i = newStr.length - 1; i>0; i--) {
      if (newStr[i] === '!') {
        newStr.pop()
      } else {
        return newStr.join('')
      }
    }
  }