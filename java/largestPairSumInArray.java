import java.util.Arrays;

public class Solution{
    public static int largestPairSum(int[] numbers){
        // your code here
      int len = numbers.length;
      Arrays.sort(numbers);
        return numbers[len-1] + numbers[len-2];
    }
}