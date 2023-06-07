public class HappyYear {
    static public int nextHappyYear(int year) {
      ++year;
      while(String.valueOf(year).chars().distinct().count() != 4){
        ++year;
      }
        return year;
    }
}