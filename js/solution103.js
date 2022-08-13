function vowelIndices(word){
    //your code here
    let vowel = 'aeiouy'.split('')
    let ans = []
    for (let i = 0; i<word.length; i++) {
      if (vowel.includes(word[i].toLowerCase())) {
        ans.push(i+1)
      }
    }
    return ans
  }