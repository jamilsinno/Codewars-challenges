public class ReverseLonger {
	public static String shorterReverseLonger(String a, String b) {
    String reversed;
		if (a.length() < b.length()) {
      return a + reverseString(b) + a;
    }
    return b + reverseString(a) + b;
	}
  
  private static String reverseString(String input) {
        StringBuilder builder = new StringBuilder(input);
        return builder.reverse().toString();
  }
}
