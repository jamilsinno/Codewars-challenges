public class Arrays {

  public static int findSmallest( final int[] numbers, final String toReturn ) {
    //TODO: Add solution here
    int value = numbers[0];
    int index = 0;
    
    for (int i = 1; i < numbers.length; i++){
      if (numbers[i] < value){
        value = numbers[i];
        index = i;
      }
    }
    return toReturn == "index" ? index : value;
	}
}