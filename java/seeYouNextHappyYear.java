public class HappyYear {
    static public int nextHappyYear(int year) {
        // Your code is here ... See you Next Happy Year !!!
      ++year;
      while(String.valueOf(year).chars().distinct().count() != 4){
        ++year;
      }
        return year;
    }
}