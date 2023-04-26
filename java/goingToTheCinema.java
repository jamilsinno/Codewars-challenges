public class Movie {
    
    public static int movie(int card, int ticket, double perc) {
        // your code
      int count = 0;
      double sysA = ticket;
      double sysB = card;
      double check;
      
      do {
        sysB += ticket * Math.pow(perc, ++count);
      } while (sysA * count <= Math.ceil(sysB));
      
      return count;
    }
}