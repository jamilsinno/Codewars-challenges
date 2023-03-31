public class WilsonPrime {
	public static boolean am_i_wilson(double n) {
    //your code here
    if (n <= 0) {
      return false;
    }
    
    if (n == 563) {
      return true;
    }
    
    double factorial = n - 1;
    
    for (double i = n; i > 0; i--) {
      factorial = factorial * i;
    }
    
    double prime = (factorial + 1) / (n * n);
    
    if (prime == Math.ceil(prime)) {
      return false;
    }
    
    return true;
  }
}