import java.math.RoundingMode;
import java.text.DecimalFormat;

public class Numbers
{
  public static double twoDecimalPlaces(double number)
  {
    //Write your code here
    DecimalFormat decimalFormat = new DecimalFormat("#.00");
    decimalFormat.setRoundingMode(RoundingMode.DOWN);
    String num = decimalFormat.format(number);
    double ans = Double.parseDouble(num);
    return ans;
  }
}