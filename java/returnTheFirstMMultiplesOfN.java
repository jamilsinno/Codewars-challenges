public class Kata {
    public static int[] multiples(int m, int n) {
      // Code here!
      int[] ans = new int[m];
      
      for (int i = 0; i < m; i++){
        ans[i] = (i+1) * n;
      }
      
      return ans;
    }
  }