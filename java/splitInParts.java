public class InParts {
    public static String splitInParts(String s, int partLength) {
        // your code
      int count = 0;
      int i = 0;
      String ans = "";
      
      while (i < s.length()){
        if (count == partLength){
          ans += " ";
          count = 0;
        }
        ans += s.charAt(i);
        count++;
        i++;
      }
      
      return ans;
    }
}