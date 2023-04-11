package kata;

public class Solution{
    public static String capitalize(String s, int[] ind){
      char[] chars = s.toCharArray();
      for(int i = 0; i < ind.length; i++){
        if (ind[i] < chars.length){
          chars[ind[i]] = Character.toUpperCase(chars[ind[i]]);
        }
      }
      return new String(chars);
    }
}