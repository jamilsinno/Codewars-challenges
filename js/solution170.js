function isVow(a){
    for (let i = 0; i<a.length; i++) {
      if (a[i] === 'a'.charCodeAt(0)){
        a[i] = 'a'
      } else if (a[i] === 'e'.charCodeAt(0)){
        a[i] = 'e'
      } else if (a[i] === 'i'.charCodeAt(0)){
        a[i] = 'i'
      } else if (a[i] === 'o'.charCodeAt(0)){
        a[i] = 'o'
      } else if (a[i] === 'u'.charCodeAt(0)){
        a[i] = 'u'
      } 
    }
    return a
  }