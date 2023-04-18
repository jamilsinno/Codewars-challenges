import java.util.List;

public class Rotations {
    
    public static boolean containAllRots(String strng, List<String> arr) {
      // your code
      int length = strng.length();
      int i = 0;
      
      while (i < length) {
        if (!arr.contains(strng)){
          return false;
        }
        strng = strng.substring(i, length) + strng.substring(0, i);
        i++;
      }
      
      return true;
    }
}