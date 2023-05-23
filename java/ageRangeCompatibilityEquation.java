public class Kata{
  public static String datingRange(int age) {
    //return min-max
    double min;
    double max;
    if (age > 14) {
      min = age / 2 + 7;
      max = (age - 7) * 2;
    } else {
      min = age - 0.1 * age;
      max = age + 0.1 * age;
    }
        
    return (int) min + "-" + (int) max;
  }
}