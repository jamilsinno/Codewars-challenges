import java.util.*;

public class Kata {
  public static boolean isAnagram(String test, String original) {
    // your code goes here
    if (test.length() != original.length()) {
      return false;
    }
    
    char testArray[] = test.toCharArray();
    char originalArray[] = original.toCharArray();
    
    for (int i = 0; i < testArray.length; i++){
      testArray[i] = Character.toLowerCase(testArray[i]);
      originalArray[i] = Character.toLowerCase(originalArray[i]);
    }
    
    Arrays.sort(testArray); 
    Arrays.sort(originalArray);
    
    for (int i = 0; i < testArray.length; i++){
      if (testArray[i] != originalArray[i]){
        return false;
      }
    }
    
    
    return true;
  }
}