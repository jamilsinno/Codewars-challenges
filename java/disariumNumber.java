public class Solution
{
    public static String disariumNumber(int number)
    {
        String strNum = Integer.toString(number);
        int length = strNum.length();
        int i = 0;
        int sum = 0;
        int n = number;
      
        while (n > 0){
          sum += Math.pow(n % 10, length - i);
          n /= 10;
          i++;
        }
      
        if (sum == number) {
          return "Disarium !!";
        }
      
        return "Not !!";
    }
}