import java.util.HashMap;
import java.util.Map;

public class Kata {
    public static String swap(String st){
      String inputString = new String(st);
      Map<Character, Character> charMap = new HashMap<>();
      
      charMap.put('a', 'A');
      charMap.put('e', 'E');
      charMap.put('i', 'I');
      charMap.put('o', 'O');
      charMap.put('u', 'U');
     // Your code here
      
      for (Map.Entry<Character, Character> entry : charmap.entryset()) {
          inputString = inputString.replace(entry.getKey(), entry.getValue());
      }
     
     return inputString;
    }
}