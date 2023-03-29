public class Kata {
  public static String remove(String s, int n){
    int count = 0;
    while (count < n) {
      s = s.replaceFirst("!", "");
      count++;
    }
    return s;
  }
}