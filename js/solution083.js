function replace(s){
    //coding and coding....
    let vowel = 'aeiou'.split('')
    return s.split('').map( el => vowel.includes(el.toLowerCase()) ? '!' : el).join('')
  }