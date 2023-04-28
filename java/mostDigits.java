public class MostDigits {
  public static int findLongest(int[] numbers) {
    int max = 0;
    int maxLength = String.valueOf(numbers[0]).length();
    
    for (int i = 0; i < numbers.length; i++) {
      if ( String.valueOf(Math.abs(numbers[i])).length() > String.valueOf(Math.abs(numbers[max])).length() ) {
        max = i;
      }
    }
    return numbers[max];
  }
}