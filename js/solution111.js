function getCount(str) {
    let vowel = 'aeiou'.split('')
    const newStr = str.split('')
    let count = 0
    
    for (let i = 0; i<newStr.length; i++) {
      if (vowel.includes(newStr[i])) {
        count++
      }
    }
    return count;
  }