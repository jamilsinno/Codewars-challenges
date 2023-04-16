public class Solution
{
    public static String specialNumber(int number)
    {
        int[] numArr = new int[String.valueOf(number).length()];
        int index = 0;
      
        while (number > 0) {
          int digit = number % 10;
          
          if (digit > 5) {
            return "NOT!!";
          }
          
          numArr[index++] = digit;
          number /= 10;
        }
        
        return "Special!!";
    }
}