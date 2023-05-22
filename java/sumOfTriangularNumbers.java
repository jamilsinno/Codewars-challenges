
public class Kata {
    public static int sumTriangularNumbers(int n) {
      int sum = 0;
  
      for (int i = 1; i <= n; ++i) {
        sum += (i * (i + 1)) / 2;
      }
  
      return sum;
    }
  }