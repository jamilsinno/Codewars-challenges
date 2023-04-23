public class Kata {

    public static int[] Solve(String word) {
      //enjoy coding
      int[] ans = new int[4];
      
      for (int i = 0; i < word.length(); i++){
        if (Character.isUpperCase(word.charAt(i))){
          ans[0]++;
        } else if (Character.isLowerCase(word.charAt(i))){
          ans[1]++;
        } else if (Character.isDigit(word.charAt(i))){
          ans[2]++;
        } else {
          ans[3]++;
        }
      }
      return ans;
      
    }
}