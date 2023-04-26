public class Movie {
    
    public static int movie(int card, int ticket, double perc) {
        // your code
      int count = 0;
      double sysA = ticket;
      double sysB = card;
      double check;
      
      System.out.println("Before A " + sysA);
      System.out.println("Before B " + sysB);
      
      do {
        sysB += ticket * Math.pow(perc, ++count);
        check = Math.ceil(sysB);
      } while (sysA * count <= check);
      
      return count;
    }
}