import java.util.Arrays;

public class Kata {
  public static String vowel2Index(String s) {
    char[] vowels = {'a', 'e', 'i', 'o', 'u'};
    StringBuilder result = new StringBuilder();

    for (int i = 0; i < s.length(); i++) {
      if (Arrays.binarySearch(vowels, s.charAt(i)) >= 0) {
        result.append(i+1);
      } else {
        result.append(s.charAt(i));
      }
    }
    
    return result.toString();
  }
}