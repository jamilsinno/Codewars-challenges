public class Kata {
    public static boolean compare(String s1, String s2) {
      int sumA = 0;
      int sumB = 0;
      
      if (s1 == null || s1.matches("")) {
        sumA = 0;
      } else {
        s1 = s1.toUpperCase();
          for (int i = 0; i < s1.length(); i++) {
              char c = s1.charAt(i);
              if ((c < 'A' || c > 'Z')) {
                  sumA = 0;
                  break;
              }
              sumA += c;
          }
      }
      
      if (s2 == null || s2.matches("")) {
        sumB = 0;
      } else {
          s2 = s2.toUpperCase();
          for (int i = 0; i < s2.length(); i++) {
              char c = s2.charAt(i);
              if ((c < 'A' || c > 'Z')) {
                  sumB = 0;
                  break;
              }
              sumB += c;
          }
      }
        
      if (sumA == sumB) {
        return true;
      }
      
      return false;
    }
  }
  