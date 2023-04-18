import java.util.List;

public class Rotations {
    
    public static boolean containAllRots(String strng, List<String> arr) {
      // your code
      int length = strng.length();
      int i = 0;
      
      if (length == 0) {
        return true;
      }
      
      if (arr.size() == 0) {
        return false;
      }
      
      while (i < length) {
        String check = strng.substring(i, length) + strng.substring(0, i);
        if (!arr.contains(check)){
          return false;
        }
        i++;
      }
      
      return true;
    }
}