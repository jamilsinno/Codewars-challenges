public class Calculator
{
  public static Double calculate(final double numberOne, final String operation, final double numberTwo)
  {
    Double Result = null;
    // Show me the code!
    if (operation.equals("+")) {
      Result = numberOne + numberTwo;
    } else if (operation.equals("-")) {
      Result = numberOne - numberTwo;
    } else if (operation.equals("*")) {
      Result = numberOne * numberTwo;
      if (Result == -0.0) {
        Result = 0.0;
      }
    } else if (operation.equals("/")) {
      if (numberTwo == 0) {
        return Result;
      }
      Result = numberOne / numberTwo;
    }
    
    return Result;
  }
}