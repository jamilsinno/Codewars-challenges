public class Solution
{
    public static String balancedNum(long number)
    {
        int countR = 0;
        int countL = 0;
        int counter = 0;
      
        String num = Long.toString(number);
      
        int[] numArr = new int[num.length()];
        double length = num.length() % 2 == 0 ? (num.length() / 2) - 1 : Math.floor(num.length() / 2);
          
        for (int i = 0; i < num.length(); i++) {
          numArr[i] = Character.getNumericValue(num.charAt(i));
        }
      
        while (counter < length) {
          countR += numArr[counter];
          countL += numArr[num.length() - 1 - counter];      
          counter++;
        }
      
        if (countR != countL) {
          return "Not Balanced";
        }
      
        return "Balanced";
    }
}