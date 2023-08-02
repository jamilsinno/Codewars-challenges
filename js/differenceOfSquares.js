function differenceOfSquares(n){
    let squareSum = 0;
    let sumSquare = 0;
    let i = 1;
    
    while (i <= n){
      squareSum += i;
      sumSquare += Math.pow(i, 2);
      i++;
    }
    return Math.pow(squareSum, 2) - sumSquare;
  }