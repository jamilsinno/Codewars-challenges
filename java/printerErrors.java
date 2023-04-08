public class Printer {
    
    public static String printerError(String s) {
        // your code
      long ans = s.chars().filter( c -> c > 'm' ).count();
      
      return ans + "/" + s.length();
    }
}