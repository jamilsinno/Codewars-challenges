function remove (string) {
    //coding and coding....
    return string.split('').filter( el => el !== '!').join('')+ '!'
  }