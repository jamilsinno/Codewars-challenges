function squareOrSquareRoot(array) {
    return array.map( x => Math.sqrt(x) === Math.floor(Math.sqrt(x))? Math.sqrt(x) : x**2)  
  }