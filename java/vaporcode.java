public class Solution {
  public static String vaporcode(String s) {
    String[] arr = s.split("");
    String sol = "";
    
    
    for (int i = 0; i < arr.length; i++) {
      if (!arr[i].matches(" ")){
        sol += arr[i].toUpperCase()  + "  ";
      }
    }
    
    return sol.trim();
  }
}