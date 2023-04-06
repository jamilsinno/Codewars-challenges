import java.util.Arrays;

public class Solution
{
    public static int maxTriSum (int[] numbers)
    {
        int arr[] = Arrays.stream(numbers).distinct().sorted().toArray();
      
        int length = arr.length;
      
        return arr[length - 1] + arr[length - 2] + arr[length - 3]; // Do your magic!
    }
}