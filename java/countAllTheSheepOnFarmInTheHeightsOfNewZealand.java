import java.util.Arrays;

public class Kata {
  public static int lostSheep(int[] fnc, int[] snc, int sheepTotal) {
    
    int sum = Arrays.stream(fnc).sum() + Arrays.stream(snc).sum();
    
    return sheepTotal - sum;
  }
}