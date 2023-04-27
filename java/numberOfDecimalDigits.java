import java.math.BigDecimal;
import java.math.RoundingMode;

public class DecTools {
  public static int Digits(long n) {
    int count = 0;
    BigDecimal num = new BigDecimal(n);
    
    if (num.equals(BigDecimal.ZERO)) return 1;
    
    while (num.compareTo(BigDecimal.ZERO) > 0){
      if (num.remainder(BigDecimal.TEN).compareTo(BigDecimal.ZERO) >= 0) {
        count++;
      }
      num = num.divide(BigDecimal.TEN, 0, RoundingMode.FLOOR); 
    }
    return count;
  }
}
