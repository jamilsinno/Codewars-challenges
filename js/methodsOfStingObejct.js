function firstToLast(str,c){
    //coding here..
    return str.indexOf(c) === -1 ? -1 : str.lastIndexOf(c) - str.indexOf(c)
  }